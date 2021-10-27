from django.shortcuts import render
from .models import *
from rest_framework.response import Response
from .serializers import *

from rest_framework import viewsets

# Create your views here.
class ApiViews(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ApiSerializers


class DataViews(viewsets.ModelViewSet):
    queryset = DataMethod.objects.all()
    serializer_class = DataMethodSerializers

