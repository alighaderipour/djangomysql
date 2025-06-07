from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_employees),
    path('add/', views.add_employee),
]
