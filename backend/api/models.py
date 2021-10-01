from django.db import models


# Create your models here.
class api(models.Model):
    fName = models.CharField(max_length=100)
    mName = models.CharField(max_length=100)
    lName = models.CharField(max_length=100)
    dateOfBirth = models.DateTimeField(auto_now=False)
    zip = models.DecimalField(max_digits=4,decimal_places=1.0,blank=True,null=True)




