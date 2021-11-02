from django.contrib import admin
from .models import *

# Register your models here.


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("id","lName","fName", "emailInfo")
    search_fields = ("lName__startswith",)

@admin.register(DataMethod)
class DataMethodAdmin(admin.ModelAdmin):
    list_filter = ("dataPurge", "dataReport", "dataRetrival")

