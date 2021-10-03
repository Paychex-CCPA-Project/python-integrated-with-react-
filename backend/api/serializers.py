from rest_framework import serializers
from .models import api


class ApiSerializers(serializers.ModelSerializer):
    class Meta:
        model = api
        fields = '__all__'
