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

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.name = request.data.get("dataRequestId")
        instance.save()

        serializer = self.get_serializer(instance)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data)






