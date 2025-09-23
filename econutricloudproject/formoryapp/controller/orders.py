from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from formoryapp.models import Order, OrderItem

@login_required(login_url='loginpage')
def index(request):
    """
    Display all orders of the logged-in user in descending order.
    """
    orders = Order.objects.filter(user=request.user).order_by('-id')
    context = {'orders': orders}
    return render(request, 'orders.html', context)

@login_required(login_url='loginpage')
def view(request, t_no):
    """
    Display details of a single order based on tracking number for the logged-in user.
    """
    # Using get_object_or_404 ensures a proper 404 page if order does not exist
    order = get_object_or_404(Order, tracking_no=t_no, user=request.user)
    orderitems = OrderItem.objects.filter(order=order)
    
    context = {
        'order': order,
        'orderitems': orderitems
    }
    return render(request, 'orderview.html', context)
# from django.shortcuts import render, redirect
# from django.contrib import messages
# from django.contrib.auth.decorators import login_required
# from formoryapp.forms import CustomUserForm
# from formoryapp.models import *

# def index(request):
#     orders = Order.objects.filter(user=request.user).order_by('-id')
#     context = {'orders':orders}
#     return render(request,'orders.html',context)

# @login_required(login_url='loginpage')
# def view(request, t_no):
#     order = Order.objects.filter(tracking_no=t_no).filter(user=request.user).first()
#     orderitems = OrderItem.objects.filter(order=order)
#     context = {'order':order, 'orderitems':orderitems}
#     return render(request,'orderview.html',context)