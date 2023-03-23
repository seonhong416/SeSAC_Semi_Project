from django.shortcuts import render, get_object_or_404, redirect

# Create your views here.
def main(request):
    return render(request, 'index/main.html')

def simulation(request):
    return render(request, 'index/simulation.html')

def contact(request):
    return render(request, 'index/contact.html')

