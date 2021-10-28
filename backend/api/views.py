from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .serializers import *
from .models import Contact, DataMethod
from rest_framework import viewsets

# Create your views here.
class ApiViews(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ApiSerializers


class DataViews(viewsets.ModelViewSet):
    queryset = DataMethod.objects.all()
    serializer_class = DataMethodSerializers

