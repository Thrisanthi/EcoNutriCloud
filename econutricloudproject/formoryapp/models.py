from django.db import models
from django.contrib.auth.models import User
import datetime
import os

def get_file_path(request,filename):
    original_filename = filename
    nowTime = datetime.datetime.now().strftime('%Y%m%d%H:%M:%S')
    filename = "%s%s" %(nowTime,original_filename)
    return os.path.join('uploads/',filename)

class Category(models.Model):
    slug = models.CharField(max_length=150,null=False,blank=False)
    name = models.CharField(max_length=150,null=False,blank=False)
    image = models.ImageField(upload_to=get_file_path,null=True,blank=True)
    description = models.TextField(max_length=500,null=False,blank=False)
    status = models.BooleanField(default=False,help_text="0=default,1=Hidden")
    trending = models.BooleanField(default=False,help_text="0=default,1=Trending")
    meta_title = models.CharField(max_length=150,null=False,blank=True)
    meta_keywords = models.CharField(max_length=150,null=False,blank=True)
    meta_description = models.TextField(max_length=500,null=False,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    UNIT_CHOICES = [
        ('g', 'Grams'),
        ('kg', 'Kilograms'),
        ('ml', 'Millilitres'),
        ('l', 'Litres'),
        ('pcs', 'Pieces'),
    ]

    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    slug = models.CharField(max_length=150, null=False, blank=False)
    name = models.CharField(max_length=150, null=False, blank=False)
    product_image = models.ImageField(upload_to=get_file_path, null=True, blank=True)
    small_description = models.CharField(max_length=250, null=False, blank=False)
    
    # ✅ Updated quantity with separate unit field
    quantity = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    unit = models.CharField(max_length=10, choices=UNIT_CHOICES, default='g')
    description = models.TextField(max_length=500, null=False, blank=True)
    original_price = models.FloatField(null=False, blank=False)
    selling_price = models.FloatField(null=False, blank=False)
    status = models.BooleanField(default=False, help_text="0=default,1=Hidden")
    trending = models.BooleanField(default=False, help_text="0=default,1=Trending")
    tag = models.CharField(max_length=150, null=False, blank=True)
    meta_title = models.CharField(max_length=150, null=False, blank=True)
    meta_keywords = models.CharField(max_length=150, null=False, blank=True)
    meta_description = models.TextField(max_length=500, null=False, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.quantity} {self.unit}"
    
class Cart(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    product_qty = models.IntegerField(null=False,blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

class Wishlist(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE) 
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)  

 