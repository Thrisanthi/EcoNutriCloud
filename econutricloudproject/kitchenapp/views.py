from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import Product, Category
from .cart import Cart

# kitchenapp/views.py
from django.shortcuts import render
from .models import Product, Category

def kitchenhome(request):
    categories = Category.objects.filter(status=True)   # only active categories
    products = Product.objects.filter(status=True)      # only active products
    
    context = {
        'category': categories,
        'productview': products,   # this matches your template loop
    }
    return render(request, "kitchen.html", context)

def menu(request):
    category_slug = request.GET.get("category", "all")
    sort = request.GET.get("sort", "popular")
    search = request.GET.get("search", "")

    products = Product.objects.filter(status=True)
    categories = Category.objects.filter(status=True)

    if category_slug != "all":
        products = products.filter(category__slug=category_slug)

    if search:
        products = products.filter(name__icontains=search)

    if sort == "price-asc":
        products = products.order_by("price")
    elif sort == "price-desc":
        products = products.order_by("-price")

    cart = Cart(request)

    return render(request, "kitchen.html", {
        "products": products,
        "categories": categories,
        "cart": cart,
    })

def category(request):
    category = Category.objects.filter(status=True)
    context = {'category':category}
    return render(request,'category.html',context)

def categoryview(request,slug):
    if(Category.objects.filter(slug=slug,status=True)):
        products = Product.objects.filter(category__slug=slug)
        category = Category.objects.filter(slug=slug).first()
        context = {'products':products,'category':category}
        return render(request,"productsindex.html",context)
    else:
        messages.warning(request,'No such category found')
        return redirect('category')

def productview(request,cate_slug,prod_slug):
    if(Category.objects.filter(slug=cate_slug,status=True)):
        if(Product.objects.filter(slug=prod_slug,status=True)):
            products = Product.objects.filter(slug=prod_slug,status=True).first
            context = {'products':products}
        else:
            messages.error(request,"No such category found")
            return redirect('category')
    else:
        messages.error(request,"No such category found")
        return redirect('category')
    return render(request,"productsview.html",context)

def add_to_cart(request, pk):
    product = get_object_or_404(Product, pk=pk)
    cart = Cart(request)
    cart.add(product)
    return redirect("menu")

def remove_from_cart(request, pk):
    product = get_object_or_404(Product, pk=pk)
    cart = Cart(request)
    cart.remove(product)
    return redirect("menu")

def clear_cart(request):
    Cart(request).clear()
    return redirect("menu")

# def checkout(request):
#     cart = Cart(request)
#     cart.clear()
#     return render(request, "checkout.html")
