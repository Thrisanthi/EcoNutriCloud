from django.urls import path
from . import views

urlpatterns = [
    path('', views.mainhome, name='mainhome'),
    path('nutrichome', views.nutrichome, name='nutrichome'),  # Homepage
    path('products/', views.products, name='products'),
    path('about/', views.about, name='about'),
    path('expert_qna/', views.expert_qna, name='expert_qna'),
    path('contact/', views.contact, name='contact'),
    path('organic/', views.organic, name='organic'),
    path('recipes/', views.recipes, name='recipes'),
    path('nutrition/', views.nutrition, name='nutrition'),
    path('contact/', views.maincontact, name='maincontact'),
    path('econutricloud/',views.econutricloud, name='econutricloud'),
    # path('login/', views.login_view, name='login'),

]
