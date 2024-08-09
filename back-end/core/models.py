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