from django.shortcuts import render,redirect
from django.http import JsonResponse
from django.contrib import messages
from .models import *
from nutricapp.models import *



# Create your views here.
def formoryhome(request):
    trendingproducts = Product.objects.filter(trending=1)
    context = {'trendingproducts':trendingproducts}
    return render(request,"index.html",context)


def kitchenhome(request):
    return render(request, "kitchenindex.html")


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
            products = Product.objects.filter(slug=prod_slug,status=True).first()
            context = {'products':products}
        else:
            messages.error(request,"No such category found")
            return redirect('category')
    else:
        messages.error(request,"No such category found")
        return redirect('category')
    return render(request,"productsview.html",context)

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