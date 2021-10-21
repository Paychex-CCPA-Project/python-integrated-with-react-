from django.shortcuts import render
from .models import *
from rest_framework.response import Response
from .serializers import *

from rest_framework import viewsets

# Create your views here.
class ApiViews(viewsets.ModelViewSet):
    personal = api.objects.all()
    serializer_class = ApiSerializers
    queryset = personal

class DataViews(viewsets.ModelViewSet):
    data = DataMethod.objects.all()
    serializer_class = DataMethodSerializers
    queryset = data

