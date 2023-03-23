from django.urls import path

from . import views
app_name = 'index'

urlpatterns = [
    path('', views.main, name='main'),
    path("simulation/", views.simulation, name="simulation"),
    path("contact/", views.contact, name="contact")
]