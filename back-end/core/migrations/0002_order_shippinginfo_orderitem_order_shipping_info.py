# Generated by Django 5.0.8 on 2024-08-10 12:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('placed_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='ShippingInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('country', models.CharField(max_length=255)),
                ('street_address', models.CharField(max_length=255)),
                ('street_address_2', models.CharField(blank=True, max_length=255, null=True)),
                ('state', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=255)),
                ('zip_code', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.PositiveIntegerField()),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='core.order')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.product')),
            ],
        ),
        migrations.AddField(
            model_name='order',
            name='shipping_info',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='core.shippinginfo'),
        ),
    ]