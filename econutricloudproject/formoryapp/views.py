from django.shortcuts import get_object_or_404, render,redirect
from django.http import JsonResponse
from django.contrib import messages
from .models import *
from nutricapp.models import *



# Create your views here.
def formoryhome(request):
    trendingproducts = Product.objects.filter(trending=True)[:8]
    offers = Offer.objects.filter(active=True)
    context = {
        'trendingproducts': trendingproducts,
        'offers': offers,
    }
    return render(request, "index.html", context)


def category(request):
    category = Category.objects.filter(status=True)
    context = {'category':category}
    return render(request,'category.html',context)

# def categoryview(request,slug):
#     if(Category.objects.filter(slug=slug,status=True)):
#         products = Product.objects.filter(category__slug=slug)
#         category = Category.objects.filter(slug=slug).first()
#         context = {'products':products,'category':category}
#         return render(request,"productsindex.html",context)
#     else:
#         messages.warning(request,'No such category found')
#         return redirect('category')

# Import Avg for calculating average ratings
from django.db.models import Avg

# Updated categoryview to include average ratings
def categoryview(request, slug):
    if Category.objects.filter(slug=slug, status=True):
        products = Product.objects.filter(category__slug=slug)
        category = Category.objects.filter(slug=slug).first()

        # Add average rating to each product
        for product in products:
            avg = product.reviews.aggregate(Avg('rating'))['rating__avg']
            product.avg_rating = round(avg, 1) if avg else 0

        context = {'products': products, 'category': category}
        return render(request, "productsindex.html", context)
    else:
        messages.warning(request, 'No such category found')
        return redirect('category')

# def productview(request,cate_slug,prod_slug):
#     if(Category.objects.filter(slug=cate_slug,status=True)):
#         if(Product.objects.filter(slug=prod_slug,status=True)):
#             products = Product.objects.filter(slug=prod_slug,status=True).first()
#             context = {'products':products}
#         else:
#             messages.error(request,"No such category found")
#             return redirect('category')
#     else:
#         messages.error(request,"No such category found")
#         return redirect('category')
#     return render(request,"productsview.html",context)

# Updated productview to include review functionality
from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from django.db.models import Avg
from .models import Category, Product
from .forms import ReviewForm

def productview(request, cate_slug, prod_slug):
    # Check if category exists
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

                # AJAX request → return JSON
                if request.headers.get("x-requested-with") == "XMLHttpRequest":
                    star_counts = {i: product.reviews.filter(rating=i).count() for i in range(1, 6)}
                    total_reviews = product.reviews.count()
                    avg_rating = product.reviews.aggregate(avg=Avg("rating"))["avg"] or 0
                    avg_rating = round(avg_rating, 1)

                    # calculate star percentages
                    star_percent = {i: (star_counts[i] / total_reviews * 100 if total_reviews > 0 else 0) for i in range(1, 6)}

                    return JsonResponse({
                        "success": True,
                        "avg_rating": avg_rating,
                        "star_counts": star_counts,
                        "star_percent": star_percent,
                        "total_reviews": total_reviews,
                    })

                # Normal form POST → redirect
                messages.success(request, "Review submitted successfully!")
                return redirect('productview', cate_slug=cate_slug, prod_slug=prod_slug)
        else:
            if request.headers.get("x-requested-with") == "XMLHttpRequest":
                return JsonResponse({"success": False, "error": "Login required"})
            messages.error(request, "You must be logged in to submit a review.")
            return redirect('login')
    else:
        form = ReviewForm()

    # Fetch reviews and average rating
    reviews = product.reviews.all().order_by('-created_at')
    avg_rating = product.reviews.aggregate(avg=Avg('rating'))['avg'] or 0
    avg_rating = round(avg_rating, 1)

    # Star counts and percentages for initial load
    star_counts = {i: product.reviews.filter(rating=i).count() for i in range(1, 6)}
    total_reviews = product.reviews.count()
    star_percent = {i: (star_counts[i] / total_reviews * 100 if total_reviews > 0 else 0) for i in range(1, 6)}

    context = {
        'products': product,
        'reviews': reviews,
        'avg_rating': avg_rating,
        'form': form,
        'star_counts': star_counts,
        'star_percent': star_percent,
    }
    return render(request, "productsview.html", context)

from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import Review, Product

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Avg

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

def productlistAjax(request):
    products = Product.objects.filter(status=True).values_list('name',flat=True)
    productslist = list(products)
    return JsonResponse(productslist,safe=False)

def searchproduct(request):
    if request.method == 'POST':
        searcheditem = request.POST.get('productsearch')
        if searcheditem == "":
            return redirect(request.META.get('HTTP_REFERER'))
        else:
            product = Product.objects.filter(name__contains=searcheditem).first()
            if product:
                return redirect('category/'+product.category.slug+'/'+ product.slug)
            else:
                messages.info(request,"No products found")
                return redirect(request.META.get('HTTP_REFERER'))
    return redirect(request.META.get('HTTP_REFERER'))

def aboutus(request):
    return render(request,"aboutus.html")

def privacypolicy(request):
    return render(request,"privacy.html")

def contactus(request):
    return render(request,"contactus.html")

def mainhomepageaboutus(request):
    return render(request,"mainaboutus.html")

def impactpage(request):
    return render(request,"impact.html")