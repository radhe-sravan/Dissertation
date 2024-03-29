import requests
from django.shortcuts import render


def index(request):
    return render(request, "static.html")

def dynamicData(request):
    endpoint = 'https://restcountries.com/v3.1/all?fields=name,flags'
    response = requests.get(endpoint)
    data = response.json()
    return render(request, "dynamic.html", {'data': data})