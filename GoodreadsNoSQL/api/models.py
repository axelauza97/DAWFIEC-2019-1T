from django.db import models

# Create your models here.
class Historico(models.Model):
    titulo = models.CharField(max_length=255)
    autores = models.CharField(max_length=255)
    isbn = models.CharField(max_length=10)
    calificacion_promedio = models.DecimalField(max_digits=5, decimal_places=2)
