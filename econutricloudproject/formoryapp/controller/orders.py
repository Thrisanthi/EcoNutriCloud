from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from formoryapp.forms import CustomUserForm
from formoryapp.models import *

def index(request):
    orders = Order.objects.filter(user=request.user).order_by('-id')
    context = {'orders':orders}
    return render(request,'orders.html',context)

@login_required(login_url='loginpage')
def view(request, t_no):
    order = Order.objects.filter(tracking_no=t_no).filter(user=request.user).first()
    orderitems = OrderItem.objects.filter(order=order)
    context = {'order':order, 'orderitems':orderitems}
    return render(request,'orderview.html',context)