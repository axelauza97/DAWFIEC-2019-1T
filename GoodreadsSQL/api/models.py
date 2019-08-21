from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.conf import settings

# Create your models here.
class Usuario(AbstractUser):
    cedula = models.CharField(max_length=10, primary_key=True, unique=True)

    def __str__(self):
        return self.first_name + " " + self.last_name

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


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