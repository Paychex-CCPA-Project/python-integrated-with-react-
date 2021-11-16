from django.contrib import admin
from .models import *

# Register your models here.


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ( "Full_Name", "emailInfo",)
    search_fields = ("lName","fName" )

    def Full_Name(self,obj):
        return "{} {} {}".format(obj.fName, obj.mName, obj.lName)

@admin.register (DataMethod)
class DataMethods(admin.ModelAdmin):
    list_display = ("id", )
    fieldsets = (
        ('Data Methods', {
                'fields':('dataPurge','dataReport','dataRetrival', 'radio1','radio2')
        }),
        ('Extra Info', {
            'fields':('actionType', 'extraInfo')
        }),

    )