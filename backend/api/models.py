import django.utils.timezone
from django.db import models


# Create your models here.
# creates the first models that includes the initial subject fields
# these are the fields that are going to be in the database
class api(models.Model):
    fName = models.CharField(max_length=300, null=False, blank=False, default='First name not given')
    mName = models.CharField(max_length=300, null=False, blank=False, default='Middle name not given')
    lName = models.CharField(max_length=300, null=False, blank=False, default='Last name not given')
    SSN = models.DecimalField(max_digits=4, decimal_places=0, null=False, default=0000)
    phoneInfo = models.DecimalField(max_digits=10, decimal_places=0, null=False, blank=False, default=0)
    emailInfo = models.EmailField(max_length=100, null=False, blank=False, default='No email provided')
    address = models.CharField(max_length=300, null=False, blank=False, default="no address")
    address2 = models.CharField(max_length=300, null=True, blank=True)
    city = models.CharField(max_length=300, null=False, blank=False, default="no city")
    zip = models.DecimalField(max_digits=5, decimal_places=0, null=False, blank=False, default="no zip")
    time = models.DateTimeField(auto_now_add=True, blank=False)


    # returns a unique id to associate with the second model
    def __int__(self):
        return self.phoneInfo


# the second model that will contain what action should be taken on the data
class DataMethod(models.Model):
    request = models.ForeignKey(api, related_name='contact', on_delete=models.CASCADE, null=False)
    dataPurge = models.BooleanField(default=False)
    dataReport = models.BooleanField(default=False)
    dataRetrival = models.BooleanField(default=False)
    radio1 = models.BooleanField(default=False)
    radio2 = models.BooleanField(default=False)

    def __bool__(self):
        return self.radio1



