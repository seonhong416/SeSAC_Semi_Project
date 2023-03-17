from django.contrib import admin
from django.urls import path, include 
from ourapp import views

urlpatterns = [

    path("", views.index, name='index'),
    path("simulation/", views.simulation, name='simulation'),
    path("contact/", views.contact, name='contact'),
]
