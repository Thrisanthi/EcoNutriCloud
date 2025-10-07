from django.shortcuts import get_object_or_404, render, redirect
from django.http import JsonResponse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
from django.db.models import Avg
from .models import Offer
from .models import *
from nutricapp.models import *
from .forms import ReviewForm



# ===================== HOME & CATEGORY =====================

def formoryhome(request):
    trendingproducts = Product.objects.filter(trending=1)
    context = {'trendingproducts': trendingproducts}
    return render(request, "index.html", context)


def category(request):
    category = Category.objects.filter(status=True)
    context = {'category': category}
    return render(request, 'category.html', context)


def categoryview(request, slug):
    if Category.objects.filter(slug=slug, status=True):
        products = Product.objects.filter(category__slug=slug)
        category = Category.objects.filter(slug=slug).first()

        # Add average rating for each product
        for product in products:
            avg = product.reviews.aggregate(Avg('rating'))['rating__avg']
            product.avg_rating = round(avg, 1) if avg else 0

        context = {'products': products, 'category': category}
        return render(request, "productsindex.html", context)
    else:
        messages.warning(request, 'No such category found')
        return redirect('category')


# ===================== PRODUCT & REVIEWS =====================

def productview(request, cate_slug, prod_slug):
    if not Category.objects.filter(slug=cate_slug, status=True).exists():
        messages.error(request, "No such category found")
        return redirect('category')

    product = Product.objects.filter(slug=prod_slug, status=True).first()
    if not product:
        messages.error(request, "No such product found")
        return redirect('category')

    # Handle review submission
    if request.method == "POST":
        if request.user.is_authenticated:
            form = ReviewForm(request.POST)
            if form.is_valid():
                review = form.save(commit=False)
                review.product = product
                review.user = request.user
                review.save()

                # AJAX response for live updates
                if request.headers.get("x-requested-with") == "XMLHttpRequest":
                    star_counts = {i: product.reviews.filter(rating=i).count() for i in range(1, 6)}
                    total_reviews = product.reviews.count()
                    avg_rating = product.reviews.aggregate(avg=Avg("rating"))["avg"] or 0
                    avg_rating = round(avg_rating, 1)
                    star_percent = {i: (star_counts[i] / total_reviews * 100 if total_reviews > 0 else 0)
                                    for i in range(1, 6)}

                    return JsonResponse({
                        "success": True,
                        "avg_rating": avg_rating,
                        "star_counts": star_counts,
                        "star_percent": star_percent,
                        "total_reviews": total_reviews,
                    })

                messages.success(request, "Review submitted successfully!")
                return redirect('productview', cate_slug=cate_slug, prod_slug=prod_slug)
        else:
            if request.headers.get("x-requested-with") == "XMLHttpRequest":
                return JsonResponse({"success": False, "error": "Login required"})
            messages.error(request, "You must be logged in to submit a review.")
            return redirect('login')
    else:
        form = ReviewForm()

    # Fetch reviews and stats
    reviews = product.reviews.all().order_by('-created_at')
    avg_rating = product.reviews.aggregate(avg=Avg('rating'))['avg'] or 0
    avg_rating = round(avg_rating, 1)
    star_counts = {i: product.reviews.filter(rating=i).count() for i in range(1, 6)}
    total_reviews = product.reviews.count()
    star_percent = {i: (star_counts[i] / total_reviews * 100 if total_reviews > 0 else 0)
                    for i in range(1, 6)}

    context = {
        'products': product,
        'reviews': reviews,
        'avg_rating': avg_rating,
        'form': form,
        'star_counts': star_counts,
        'star_percent': star_percent,
    }
    return render(request, "productsview.html", context)


@csrf_exempt
def submit_review(request, product_id):
    if request.method == "POST" and request.user.is_authenticated:
        try:
            product = Product.objects.get(id=product_id, status=True)
        except Product.DoesNotExist:
            return JsonResponse({"success": False, "error": "Product not found."})

        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.product = product
            review.user = request.user
            review.save()

            star_counts = {i: product.reviews.filter(rating=i).count() for i in range(1, 6)}
            avg_rating = product.reviews.aggregate(avg=Avg("rating"))["avg"] or 0

            return JsonResponse({
                "success": True,
                "avg_rating": round(avg_rating, 1),
                "star_counts": star_counts,
                "total_reviews": product.reviews.count()
            })
        return JsonResponse({"success": False, "errors": form.errors})
    return JsonResponse({"success": False, "error": "Invalid request"})


@login_required
def edit_review(request, pk):
    review = get_object_or_404(Review, pk=pk, user=request.user)

    if request.method == "POST":
        form = ReviewForm(request.POST, instance=review)
        if form.is_valid():
            form.save()
            messages.success(request, "Review updated successfully!")
            return redirect("productview",
                            cate_slug=review.product.category.slug,
                            prod_slug=review.product.slug)
    else:
        form = ReviewForm(instance=review)

    return render(request, "edit_review.html", {"form": form, "review": review})


@login_required
def delete_review(request, pk):
    review = get_object_or_404(Review, pk=pk, user=request.user)

    if request.method == "POST":
        product = review.product
        review.delete()
        messages.success(request, "Review deleted successfully!")
        return redirect("productview",
                        cate_slug=product.category.slug,
                        prod_slug=product.slug)

    return render(request, "delete_review.html", {"review": review})


# ===================== SEARCH & STATIC PAGES =====================

def productlistAjax(request):
    products = Product.objects.filter(status=True).values_list('name', flat=True)
    return JsonResponse(list(products), safe=False)


def searchproduct(request):
    if request.method == 'POST':
        searcheditem = request.POST.get('productsearch')
        if searcheditem == "":
            return redirect(request.META.get('HTTP_REFERER'))
        product = Product.objects.filter(name__icontains=searcheditem).first()
        if product:
            return redirect('category/' + product.category.slug + '/' + product.slug)
        else:
            messages.info(request, "No products found")
    return redirect(request.META.get('HTTP_REFERER'))


def aboutus(request):
    return render(request, "aboutus.html")


def privacypolicy(request):
    return render(request, "privacy.html")


def contactus(request):
    return render(request, "contactus.html")


def mainhomepageaboutus(request):
    return render(request, "mainaboutus.html")


def impactpage(request):
    return render(request, "impact.html")


# ===================== OFFERS =====================

def offers(request):
    """Displays the main offers page with live data (Deals + Combos)."""
    now = timezone.now()

    deals_of_week = Offer.objects.filter(
        offer_type='deal_of_the_week',
        start_time__lte=now,
        end_time__gte=now,
        active=True
    )

    combo_offers = Offer.objects.filter(
        offer_type='combo_offer',
        discount_percentage__in=[10, 20],
        start_time__lte=now,
        end_time__gte=now,
        active=True
    )

    context = {
        'deals_of_week': deals_of_week,
        'combo_offers': combo_offers,
        'offer_types': [
            {"type": "deal_of_the_week", "label": "Deal of the Week"},
            {"type": "combo_offer", "label": "Combo Offer"},
        ],
    }
    return render(request, 'offers.html', context)


def offers_detail(request, offer_type):
    # Get current UTC time (since your offer times are stored in UTC)
    now = timezone.now()

    print("=== DEBUG: Offers Detail View ===")
    print("Offer Type requested:", offer_type)
    print("Current UTC time:", now)

    # 🧩 Step 1: Deactivate expired offers automatically
    Offer.objects.filter(end_time__lt=now, active=True).update(active=False)

    # 🧩 Step 2: Get only active and currently valid offers
    offers = Offer.objects.filter(
        offer_type=offer_type,
        active=True,
        end_time__gte=now
    ).select_related('product')

    print("Offers found:", offers.count())
    for o in offers:
        print(o.product.name, o.start_time, o.end_time)
    print("=================================")

    # 🧩 Step 3: Render the template
    return render(request, "offers_detail.html", {
        "offers": offers,
        "offer_type": offer_type,
    })