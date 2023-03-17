from django.shortcuts import render
from django.http import HttpResponse
import requests

# Create your views here.
def index(request):
    return render(request, 'ourapp/index.html')

def simulation(request):
    return render(request, 'ourapp/simulation.html')

def contact(request):
    return render(request, 'ourapp/contact.html')
