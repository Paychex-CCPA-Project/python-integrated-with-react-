from rest_framework import serializers
from .models import Login


class ApiSerializers(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = '__all__'
