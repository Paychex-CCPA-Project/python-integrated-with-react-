from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import Contact, DataMethod
from rest_framework import viewsets


class DataViews(viewsets.ModelViewSet):
    queryset = DataMethod.objects.all()
    serializer_class = DataMethodSerializers



# Create your views here.
class ApiViews(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ApiSerializers







