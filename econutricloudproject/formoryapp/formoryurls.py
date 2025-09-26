from django.urls import path
from . import views
from nutricapp import views 

from formoryapp.controller import authview,cart,wishlist,checkout,orders
urlpatterns = [
    path("formoryhome",views.formoryhome,name = "formoryhome"),
    path("about",views.aboutus,name = "aboutus"),
    path("mainhomepageaboutus",views.mainhomepageaboutus,name = "mainhomepageaboutus"),
    path("impactpage",views.impactpage,name = "impactpage"),
    path("privacy",views.privacypolicy,name = "privacypolicy"),
    path("contactus",views.contactus,name = "contactus"),
    # path("kitchenhome",views.kitchenhome,name = "kitchenhome"),
    path('category/',views.category,name="category"),
    path('category/<str:slug>',views.categoryview,name="categoryview"),
    path('category/<str:cate_slug>/<str:prod_slug>',views.productview,name='productview'),
    path("submit-review/<int:product_id>/", views.submit_review, name="submit_review"),
    path("review/<int:pk>/edit/", views.edit_review, name="edit_review"),
    path("review/<int:pk>/delete/", views.delete_review, name="delete_review"),



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
    path('place-order',checkout.placeorder,name="place-order"),
    path('proceed-to-pay',checkout.razorpaycheck,name="proceed_to_pay"),
    path('my-orders',orders.index,name="myorders"),
    path('view-order/<str:t_no>',orders.view,name="orderview"),

    path("deliveries/", orders.delivery_list, name="delivery_list"),
    path("deliveries/assign/<int:order_id>/", orders.assign_delivery, name="assign_delivery"),
    path("deliveries/update/<int:delivery_id>/", orders.update_delivery_status, name="update_delivery_status"),
]



