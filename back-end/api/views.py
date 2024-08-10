from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, CreateModelMixin
from core.models import Product, ShippingInfo, Order, OrderItem
from .serializers import ProductSerializer, ShippingInfoSerializer, OrderSerializer, OrderItemSerializer


class ProductViewSet(ListModelMixin, RetrieveModelMixin, GenericViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ShippingInfoViewSet(CreateModelMixin, GenericViewSet):
    queryset = ShippingInfo.objects.all()
    serializer_class = ShippingInfoSerializer

class OrderItemsViewSet (CreateModelMixin, GenericViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


class OrderViewSet (CreateModelMixin, GenericViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer