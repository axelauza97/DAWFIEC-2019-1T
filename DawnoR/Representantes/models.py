from django.db import models

# Create your models here.


class Representante(models.Model):
    cedula = models.CharField(max_length=12)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    telefono = models.CharField(max_length=30)
    direccion = models.CharField(max_length=200)
    correo = models.CharField(max_length=30)

