from django.urls import path
from . import views
from nutricapp import views 

from formoryapp.controller import authview,cart,wishlist,checkout,orders
urlpatterns = [
    path("formoryhome",views.formoryhome,name = "formoryhome"),
    path("kitchenhome",views.kitchenhome,name = "kitchenhome"),
    path('category/',views.category,name="category"),
    path('category/<str:slug>',views.categoryview,name="categoryview"),
    path('category/<str:cate_slug>/<str:prod_slug>',views.productview,name='productview'),

    path('product-list',views.productlistAjax),
    path('searchproduct',views.searchproduct,name='searchproduct'),

    path('register/',authview.register,name='register'),
    path('login/',authview.loginpage,name="loginpage"),
    path('logout/',authview.logoutpage,name="logout"),

    path('add-to-cart',cart.addtocart,name='addtocart'),
    path('cart',cart.viewcart,name="cart"),
    path('update-cart',cart.updatecart,name="update-cart"),
    path('delete-cart-item',cart.deletecartitem,name="deletecartitem"),

    path('wishlist',wishlist.index,name='wishlist'),
    path('add-to-wishlist',wishlist.addtowishlist,name="addtowishlist"),
    path('delete-wishlist-item',wishlist.deletewishlistitem,name="deletewishlistitem"),

    path('checkout',checkout.index,name="checkout"),
    path('place-order',checkout.placeorder,name="placeorder"),
    path('proceed-to-pay',checkout.razorpaycheck,name="proceedtopay"),
    path('my-orders',orders.index,name="myorders"),
    path('view-order/<str:t_no>',orders.view,name="orderview"),
]

