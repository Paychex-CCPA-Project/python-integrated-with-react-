from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer
import drf_rw_serializers
from .models import *


class DataMethodSerializers(serializers.ModelSerializer):
    class Meta:
        model = DataMethod
        fields = '__all__'



class ApiSerializers(WritableNestedModelSerializer, serializers.ModelSerializer):
    dataMeothds = DataMethodSerializers(required=True)
    class Meta:
        model = Contact
        fields = '__all__'



    

