from rest_framework import serializers
from .models import *


class ApiSerializers(serializers.ModelSerializer):
    class Meta:
        model = api
        fields = '__all__'


class DataMethodSerializers(serializers.ModelSerializer):
    class Meta:
        model = DataMethod
        fields = '__all__'
