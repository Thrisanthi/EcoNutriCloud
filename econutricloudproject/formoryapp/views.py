from django.shortcuts import render,redirect
from django.contrib import messages
from .models import *

# Create your views here.
def formoryhome(request):
    return render(request,"index.html")

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

