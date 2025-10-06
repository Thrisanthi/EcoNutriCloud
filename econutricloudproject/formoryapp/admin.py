from django.contrib import admin
from .models import  *
# Register your models here.
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Wishlist)
admin.site.register(Order)  
admin.site.register(OrderItem)
admin.site.register(Profile)

from django.contrib import admin
from .models import Delivery, DeliveryPartner

@admin.register(DeliveryPartner)
class DeliveryPartnerAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "phone", "status", "created_at")
    list_filter = ("status",)
    search_fields = ("name", "phone")

@admin.register(Delivery)
class DeliveryAdmin(admin.ModelAdmin):
    list_display = ("id", "order", "partner", "status", "assigned_at", "delivered_at")
    list_filter = ("status",)
    search_fields = ("order__id", "partner__name")

from django.contrib import admin
from .models import Offer

class OfferAdmin(admin.ModelAdmin):
    list_display = ('title', 'product', 'discount_percentage', 'valid_from', 'valid_to', 'active')
    list_filter = ('active', 'valid_from', 'valid_to')
    search_fields = ('title', 'product__name')
    readonly_fields = ('discounted_price_display',)

    def discounted_price_display(self, obj):
        return obj.discounted_price()
    discounted_price_display.short_description = 'Discounted Price'

admin.site.register(Offer, OfferAdmin)

