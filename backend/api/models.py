import django.utils.timezone

from django.db import models


# Create your models here.
class api(models.Model):
    fName = models.CharField(max_length=300,null=False,blank=True, default='First name not given')
    mName = models.CharField(max_length=300, null=False, blank=True, default='Middle name not given')
    lName = models.CharField(max_length=300, null=False, blank=True, default='Last name not given')
    SSN = models.DecimalField(max_digits= 4, decimal_places=0, null=True, default=0000)
    phoneInfo = models.DecimalField(max_digits=10, decimal_places=0, null=True, blank=True)
    emailInfo = models.EmailField(max_length=100, null=False, blank=True, default='No email provided')
    address = models.CharField(max_length=300, null=True, blank=True)
    address2 = models.CharField(max_length=300, null=True, blank=True)
    city = models.CharField(max_length=300, null=True, blank=True)
    zip = models.DecimalField(max_digits=5, decimal_places=0, null=True, blank=True)
    time = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return self.emailInfo
