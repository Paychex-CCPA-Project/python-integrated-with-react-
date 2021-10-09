from django.shortcuts import render
from .models import api
from .serializers import ApiSerializers
from rest_framework import viewsets


# Create your views here.

class ApiViews(viewsets.ModelViewSet):
    queryset = api.objects.all()
    serializer_class = ApiSerializers
