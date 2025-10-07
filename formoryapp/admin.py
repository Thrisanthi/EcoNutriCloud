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

# ===== Offer Admin =====
@admin.register(Offer)
class OffersAdmin(admin.ModelAdmin):
    list_display = ('product', 'offer_type', 'discount_percentage', 'start_time', 'end_time', 'active')
    list_filter = ('offer_type', 'active')
    search_fields = ('product__name',)
    ordering = ('-start_time',)
    fieldsets = (
        ("Offer Details", {
            'fields': ('product', 'offer_type', 'discount_percentage')
        }),
        ("Validity Period", {
            'fields': ('start_time', 'end_time')
        }),
        ("Status", {
            'fields': ('active',)
        }),
    )

# ===== Inline Offer inside Product (optional, for convenience) =====
class OfferInline(admin.TabularInline):
    model = Offer
    extra = 1

# ===== Product Admin =====

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'selling_price', 'trending', 'status')
    list_filter = ('category', 'trending', 'status')
    search_fields = ('name', 'category__name', 'tag')
    inlines = [OfferInline]