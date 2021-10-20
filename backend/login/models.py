from django.db import models

# Create your models here.


class Login(models.Model):
    userName = models.CharField(max_length=200, null=False, blank=True, default='First name not given')
    password = models.CharField(max_length=200, null=False, blank=True, default='First name not given')


    def __str__(self):
        return self.userName


