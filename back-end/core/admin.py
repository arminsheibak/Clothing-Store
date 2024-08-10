from django.contrib import admin
from .models import Product, Order, OrderItem, ShippingInfo

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'price', 'category']
    list_editable = ['category', 'price']
    list_per_page = 10

class OrderItemInline(admin.StackedInline):
    model = OrderItem
    extra = 0

class ShippingInfoInline(admin.StackedInline):
    model = ShippingInfo
    extra = 0

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ["id", "placed_at"]
    inlines = [OrderItemInline, ShippingInfoInline]