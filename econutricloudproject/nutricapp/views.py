from django.shortcuts import render
from formoryapp.views import *

# Create your views here.

def nutrichome(request):
    return render(request, "nutric/home.html")
def products(request):
    return render(request, 'nutric/product.html')

def about(request):
    return render(request, 'nutric/about.html')

def expert_qna(request):
    return render(request, 'nutric/expert_qna.html')

def contact(request):
    return render(request, 'nutric/contact.html')
def mainhome(request):
    return render(request, "nutric/mainhome.html")
def organic(request):
    return render(request, 'nutric/organic.html')

def recipes(request):
    return render(request, 'nutric/recipes.html')

def nutrition(request):
    return render(request, 'nutric/nutrition.html')

def maincontact(request):
    return render(request, 'nutric/contact.html')

def econutricloud(request):
    return render(request, 'nutric/econutriccloud.html')
# def login_view(request):
#     return render(request, 'login.html')

