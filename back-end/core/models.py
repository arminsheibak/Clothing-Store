from django.db import models


class Product(models.Model):
    CATEGORY_CHOICES = [
        ('BS', 'Best Sellers'),
        ('TR', 'Top Rated'),
        ('NA', 'New Arrivals')
    ]
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=2, choices=CATEGORY_CHOICES)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='images')
    description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title

class ShippingInfo(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    street_address = models.CharField(max_length=255)
    street_address_2 = models.CharField(max_length=255, null=True, blank=True)
    state = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    zip_code = models.CharField(max_length=20)
    email= models.EmailField()
    phone = models.CharField(max_length=20)

class Order(models.Model):
    shipping_info = models.OneToOneField(ShippingInfo, on_delete=models.CASCADE)
    placed_at = models.DateTimeField(auto_now_add=True)

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    count = models.PositiveIntegerField()
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')

