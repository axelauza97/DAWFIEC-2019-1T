from django.db import models

# Create your models here.
class Usuario(models.Model):
    cedula = models.CharField(max_length=9, primary_key=True, unique=True)
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=25)
    correo = models.CharField(max_length=25)
    fecha_nacimiento = models.CharField(max_length=25)

class Autor(models.Model):
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=25)

class Libro(models.Model):
    titulo = models.CharField(max_length=50)
    autores = models.ForeignKey(Autor,null=False,blank =False, on_delete=models.CASCADE)
    isbn = models.CharField(max_length=25)

class UsuarioLibro(models.Model):
    usuario = models.ForeignKey(Usuario,null=False,blank =False, on_delete=models.CASCADE)
    libro = models.ForeignKey(Libro, null=False, blank=False, on_delete=models.CASCADE)
    calificacion=models.DecimalField(max_digits=10, decimal_places=5)