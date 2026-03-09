from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
from home.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', calculator, name = 'calculator'),
]
