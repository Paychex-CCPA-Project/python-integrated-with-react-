import django.utils.timezone
from django.db import models


# Create your models here.
# creates the first models that includes the initial subject fields
# these are the fields that are going to be in the database
# the second model that will contain what action should be taken on the data
class DataMethod(models.Model):
    dataPurge = models.BooleanField(default=False)
    dataReport = models.BooleanField(default=False)
    dataRetrival = models.BooleanField(default=False)
    radio1 = models.BooleanField(default=False)
    radio2 = models.BooleanField(default=False)

class Contact(models.Model):
    fName = models.CharField(max_length=300, null=True, blank=False, default='First name not given')
    mName = models.CharField(max_length=300, null=True, blank=False, default='Middle name not given')
    lName = models.CharField(max_length=300, null=True, blank=False, default='Last name not given')
    SSN = models.DecimalField(max_digits=4, decimal_places=0, null=True, default=0000)
    phoneInfo = models.DecimalField(max_digits=10, decimal_places=0, null=True, blank=False, default=0)
    emailInfo = models.EmailField(max_length=100, null=True, blank=False, default='No email provided')
    address = models.CharField(max_length=300, null=True, blank=False, default="no address")
    address2 = models.CharField(max_length=300, null=True, blank=True)
    city = models.CharField(max_length=300, null=True, blank=False, default="no city")
    zip = models.DecimalField(max_digits=5, decimal_places=0, null=True, blank=False, default=0.0)
    time = models.DateTimeField(auto_now_add=True, blank=False)
    dataMeothds = models.ForeignKey(DataMethod, on_delete=models.CASCADE, null=True)

    # returns a unique id to associate with the second model
    def __str__(self):
        template = '{0.lName} {0.fName} {0.emailInfo}'
        return template.format(self)






