from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from .models import *
from django.contrib import admin
from .serailizers import ApiSerializers
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
class LoginViews(viewsets.ModelViewSet):
    queryset = Login.objects.all()
    serializer_class = ApiSerializers
