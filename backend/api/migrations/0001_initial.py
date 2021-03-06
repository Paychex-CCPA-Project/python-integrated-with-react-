# Generated by Django 3.1.3 on 2021-11-02 00:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DataMethod',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dataPurge', models.BooleanField(default=False)),
                ('dataReport', models.BooleanField(default=False)),
                ('dataRetrival', models.BooleanField(default=False)),
                ('radio1', models.BooleanField(default=False)),
                ('radio2', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fName', models.CharField(blank=True, default='First name not given', max_length=300, null=True)),
                ('mName', models.CharField(blank=True, default='Middle name not given', max_length=300, null=True)),
                ('lName', models.CharField(blank=True, default='Last name not given', max_length=300, null=True)),
                ('SSN', models.DecimalField(decimal_places=0, default=0, max_digits=4, null=True)),
                ('phoneInfo', models.DecimalField(blank=True, decimal_places=0, default=0, max_digits=10, null=True)),
                ('emailInfo', models.EmailField(blank=True, default='No email provided', max_length=100, null=True)),
                ('address', models.CharField(blank=True, default='no address', max_length=300, null=True)),
                ('address2', models.CharField(blank=True, max_length=300, null=True)),
                ('city', models.CharField(blank=True, default='no city', max_length=300, null=True)),
                ('zip', models.DecimalField(blank=True, decimal_places=0, default=0.0, max_digits=5, null=True)),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('dataMeothds', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.datamethod')),
            ],
        ),
    ]
