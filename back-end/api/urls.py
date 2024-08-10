from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_nested.routers import NestedDefaultRouter
from . import views

router = DefaultRouter()
router.register('products', views.ProductViewSet, basename='product')
router.register('orders', views.OrderViewSet, basename='order')
router.register('shipping-infos', views.ShippingInfoViewSet, basename='shipping-info')

orders_router = NestedDefaultRouter(router, "orders", lookup="order")
orders_router.register("items", views.OrderItemsViewSet, basename="order-items")

urlpatterns = [
    path('', include(router.urls)),
    path('', include(orders_router.urls))
]