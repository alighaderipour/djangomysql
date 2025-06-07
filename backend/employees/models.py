from django.db import models

class Employee(models.Model):
    emp_id = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=20)
    lastName = models.CharField(max_length=30)

    class Meta:
        db_table = 'employees'  # 👈 This tells Django to use your existing table
