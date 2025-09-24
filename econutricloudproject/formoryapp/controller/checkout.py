from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib import messages
from django.conf import settings
from django.contrib.auth.decorators import login_required
from formoryapp.models import *
from django.contrib.auth.models import User
import random
import razorpay

def index(request):
    rawcart = Cart.objects.filter(user=request.user)
    for item in rawcart:
        if item.product_qty > item.product.quantity:
            Cart.objects.filter(id=item.id).delete()

    cartitems = Cart.objects.filter(user=request.user)
    total_price = 0
    for item in cartitems:
        total_price += item.product.selling_price * item.product_qty

    userprofile = Profile.objects.filter(user=request.user).first()

    context = {'cartitems': cartitems, 'total_price': total_price, 'userprofile': userprofile}
    return render(request, 'checkout.html', context)


@login_required(login_url='loginpage')

def placeorder(request):
    if request.method == "POST":
        currentuser = User.objects.filter(id=request.user.id).first()
        if not currentuser.first_name:
            currentuser.first_name = request.POST.get('fname')
            currentuser.last_name = request.POST.get('lname')
            currentuser.save()

        if not Profile.objects.filter(user=request.user.id).first():
            userprofile = Profile()
            userprofile.user = request.user
            userprofile.phone = request.POST.get('phone')
            userprofile.address = request.POST.get('address')
            userprofile.city = request.POST.get('city')
            userprofile.state = request.POST.get('state')
            userprofile.country = request.POST.get('country')
            userprofile.pincode = request.POST.get('pincode')
            userprofile.save()

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

        cart = Cart.objects.filter(user=request.user)
        cart_total_price = 0
        for item in cart:
            cart_total_price += item.product.selling_price * item.product_qty
        neworder.total_price = cart_total_price

        trackno = 'username' + str(random.randint(1111111, 9999999))
        while Order.objects.filter(tracking_no=trackno).exists():
            trackno = 'username' + str(random.randint(1111111, 9999999))
        neworder.tracking_no = trackno
        neworder.save()

        neworderitems = Cart.objects.filter(user=request.user)
        for item in neworderitems:
            OrderItem.objects.create(
                order=neworder,
                product=item.product,
                price=item.product.selling_price,
                quantity=item.product_qty
            )
            # Reduce product stock
            orderproduct = Product.objects.filter(id=item.product_id).first()
            orderproduct.quantity -= item.product_qty
            orderproduct.save()

        # Clear cart
        Cart.objects.filter(user=request.user).delete()

        payMode = request.POST.get('payment_mode')
        if payMode == "Paid by Razorpay":
            # 🔑 Signature Verification Added
            razorpay_order_id = request.POST.get('order_id')
            razorpay_payment_id = request.POST.get('payment_id')
            razorpay_signature = request.POST.get('signature')

            client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))
            try:
                client.utility.verify_payment_signature({
                    'razorpay_order_id': razorpay_order_id,
                    'razorpay_payment_id': razorpay_payment_id,
                    'razorpay_signature': razorpay_signature
                })
            except:
                return JsonResponse({'status': "Payment verification failed"}, status=400)

            return JsonResponse({'status': "Your Order Has Been Placed Successfully"})
        else:
            messages.success(request, "Your Order Has Been Placed Successfully")
            return redirect('myorders')

    return redirect('formoryhome')



@login_required(login_url='loginpage')
def razorpaycheck(request):
    cart = Cart.objects.filter(user=request.user)
    total_price = 0
    for item in cart:
        total_price += item.product.selling_price * item.product_qty

    return JsonResponse({'total_price': total_price})


def proceed_to_pay(request):
    if request.user.is_authenticated:
        cart = Cart.objects.filter(user=request.user)
        total_price = sum(item.product.selling_price * item.product_qty for item in cart)

        # Razorpay client (use whichever set of keys is defined in settings)
        client = razorpay.Client(auth=(
            getattr(settings, "RAZORPAY_KEY_ID", settings.RAZORPAY_API_KEY),
            getattr(settings, "RAZORPAY_KEY_SECRET", settings.RAZORPAY_API_SECRET)
        ))

        # Create Razorpay order
        payment = client.order.create({
            "amount": int(total_price * 100),  # Razorpay requires amount in paise
            "currency": "INR",
            "payment_capture": "1"
        })

        # Return full payment response (id, amount, currency, etc.)
        return JsonResponse({
            "id": payment.get("id"),
            "amount": payment.get("amount"),
            "currency": payment.get("currency"),
            "status": payment.get("status", "created")
        })

    return JsonResponse({"error": "User not authenticated"}, status=403)
