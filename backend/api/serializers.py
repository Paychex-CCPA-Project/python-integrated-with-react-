from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer
from .models import *


class ApiSerializers(serializers.ModelSerializer):
    class Meta:
        model = api
        fields = '__all__'


class DataMethodSerializers(WritableNestedModelSerializer,serializers.ModelSerializer):
    request = ApiSerializers()
    class Meta:
        model = DataMethod
        fields = '__all__'
