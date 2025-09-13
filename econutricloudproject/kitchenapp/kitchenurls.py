from django.urls import path
from kitchenapp import views

urlpatterns = [
    path('kitchenhome', views.kitchenhome, name="kitchenhome"),
    path("menu/", views.menu, name="menu"),
    path('category/',views.category,name="category"),
    path('category/<str:slug>',views.categoryview,name="categoryview"),
    path('category/<str:cate_slug>/<str:prod_slug>',views.productview,name='productview'),
    path("add/<int:pk>/", views.add_to_cart, name="add_to_cart"),
    path("remove/<int:pk>/", views.remove_from_cart, name="remove_from_cart"),
    path("clear/", views.clear_cart, name="clear_cart"),
    path("checkout/", views.checkout, name="checkout"),
]