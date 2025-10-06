from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.conf import settings
from formoryapp.models import Cart, Order, OrderItem, Profile, Product
import random
import razorpay


@login_required
def checkout(request):
    cartitems = Cart.objects.filter(user=request.user)
    total_price = sum(item.product.selling_price * item.product_qty for item in cartitems)
    userprofile = Profile.objects.filter(user=request.user).first()
    
    context = {
        'cartitems': cartitems,
        'total_price': total_price,
        'userprofile': userprofile,
        'razorpay_key': settings.RAZORPAY_KEY_ID,
    }
    return render(request, 'checkout.html', context)


@login_required
def placeorder(request):
    if request.method == "POST":
        print("👉 placeorder CALLED")   # DEBUG
        print("POST DATA:", request.POST)  # DEBUG

        currentuser = request.user
        if not currentuser.first_name:
            currentuser.first_name = request.POST.get('fname')
            currentuser.last_name = request.POST.get('lname')
            currentuser.save()

        profile = Profile.objects.filter(user=request.user).first()
        if not profile:
            profile = Profile(user=request.user)
        profile.phone = request.POST.get('phone')
        profile.address = request.POST.get('address')
        profile.city = request.POST.get('city')
        profile.state = request.POST.get('state')
        profile.country = request.POST.get('country')
        profile.pincode = request.POST.get('pincode')
        profile.save()

        neworder = Order()
        neworder.user = request.user
        neworder.fname = request.POST.get('fname')
        neworder.lname = request.POST.get('lname')
        neworder.email = request.POST.get('email')
        neworder.phone = request.POST.get('phone')
        neworder.address = request.POST.get('address')
        neworder.city = request.POST.get('city')
        neworder.state = request.POST.get('state')
        neworder.country = request.POST.get('country')
        neworder.pincode = request.POST.get('pincode')
        neworder.payment_mode = request.POST.get('payment_mode')
        neworder.payment_id = request.POST.get('payment_id')
        neworder.razorpay_order_id = request.POST.get('order_id')
        neworder.razorpay_signature = request.POST.get('signature')

        cart = Cart.objects.filter(user=request.user)
        total_price = sum(item.product.selling_price * item.product_qty for item in cart)
        neworder.total_price = total_price

        trackno = 'ECO' + str(random.randint(1111111,9999999))
        while Order.objects.filter(tracking_no=trackno).exists():
            trackno = 'ECO' + str(random.randint(1111111,9999999))
        neworder.tracking_no = trackno
        neworder.save()

        for item in cart:
            OrderItem.objects.create(
                order=neworder,
                product=item.product,
                price=item.product.selling_price,
                quantity=item.product_qty
            )
            prod = Product.objects.get(id=item.product.id)
            prod.quantity -= item.product_qty
            prod.save()

        cart.delete()

        messages.success(request, "Your Order Has Been Placed Successfully!")
        return redirect('myorders')

    return redirect('checkout')


@login_required
def proceed_to_pay(request):
    cart = Cart.objects.filter(user=request.user)
    total_price = sum(item.product.selling_price * item.product_qty for item in cart)

    if total_price <= 0:
        return JsonResponse({"error": "Cart is empty"}, status=400)

    client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))
    payment = client.order.create({
        "amount": int(total_price * 100),
        "currency": "INR",
        "payment_capture": "1"
    })

    return JsonResponse({
        "id": payment['id'],
        "amount": payment['amount'],
        "currency": payment['currency']
    })