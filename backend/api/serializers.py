from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer
from .models import *


class DataMethodSerializers(serializers.ModelSerializer):
    class Meta:
        model = DataMethod
        fields = '__all__'

class ApiSerializers(WritableNestedModelSerializer,serializers.ModelSerializer):
    dataMethods = DataMethodSerializers()
    class Meta:
        model = Contact
        fields = '__all__'



