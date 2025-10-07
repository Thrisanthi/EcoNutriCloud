from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from formoryapp.models import Order, OrderItem,Delivery, DeliveryPartner
from django.contrib import messages
from django.utils import timezone
from django.http import JsonResponse
from django.contrib.auth.models import User


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


# List deliveries
@login_required(login_url='loginpage')
def delivery_list(request):
    deliveries = Delivery.objects.select_related("order", "partner").all()
    return render(request, "delivery_list.html", {"deliveries": deliveries})

# Assign a delivery partner to an order
@login_required(login_url='loginpage')
def assign_delivery(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    partners = DeliveryPartner.objects.filter(status="Available")

    if request.method == "POST":
        partner_id = request.POST.get("partner_id")
        partner = get_object_or_404(DeliveryPartner, id=partner_id)

        delivery, created = Delivery.objects.get_or_create(order=order)
        delivery.partner = partner
        delivery.status = "Assigned"
        delivery.assigned_at = timezone.now()
        delivery.save()

        partner.status = "Busy"
        partner.save()

        messages.success(request, f"Delivery partner {partner.name} assigned to Order {order.id}")
        return redirect("delivery_list")

    return render(request, "assign_delivery.html", {"order": order, "partners": partners})

# Update delivery status
@login_required(login_url='loginpage')
def update_delivery_status(request, delivery_id):
    delivery = get_object_or_404(Delivery, id=delivery_id)

    if request.method == "POST":
        status = request.POST.get("status")
        remarks = request.POST.get("remarks", "")

        delivery.status = status
        if status == "Delivered":
            delivery.delivered_at = timezone.now()
            delivery.partner.status = "Available"  # Free partner again
            delivery.partner.save()
        elif status == "Failed":
            delivery.partner.status = "Available"
            delivery.partner.save()

        delivery.remarks = remarks
        delivery.save()

        messages.success(request, f"Delivery {delivery.id} updated to {status}")
        return redirect("delivery_list")

    return render(request, "update_delivery.html", {"delivery": delivery})