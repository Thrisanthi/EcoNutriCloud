from django.contrib.auth.forms import UserCreationForm
from .models import User, Review
from django import forms
 
class CustomUserForm(UserCreationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control my-2','placeholder':'Enter Username'}))
    email = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control my-2','placeholder':'Enter Email'}))
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control my-2','placeholder':'Enter Password'}))
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control my-2','placeholder':'Confirmpassword'}))
    class Meta:
        model = User
        fields = ['username','email','password1','password2']

# Review Form
from django import forms
from .models import Review

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['rating', 'comment']
        widgets = {
            'rating': forms.Select(choices=[(1,1),(2,2),(3,3),(4,4),(5,5)], attrs={'class':'form-select'}),
            'comment': forms.Textarea(attrs={'rows':3, 'placeholder':'Write your review'}),
        }
