from rest_framework.viewsets import GenericViewSet, ViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.response import Response
from rest_framework import status
from core.models import Product, ShippingInfo, Order, OrderItem
from .serializers import ProductSerializer


class ProductViewSet(ListModelMixin, RetrieveModelMixin, GenericViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class PlaceOrderViewSet(ViewSet):
    def create(self, request):
        try:
            shipping_info = self.request.data.get('shipping_info')
            order_items = self.request.data.get('order_items')
            shipping = ShippingInfo.objects.create(**shipping_info)
            order = Order.objects.create(shipping_info=shipping)
            for index in order_items:
                OrderItem.objects.create(order=order, product_id=order_items[index]['product']['id'], count=order_items[index]['count'])

            return Response({'success' : 'we successfully received your order'}, status=status.HTTP_201_CREATED)

        except:
            return Response({'error': 'request failed'}, status=status.HTTP_400_BAD_REQUEST)