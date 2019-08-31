from .models import *


from rest_framework import serializers



class Representante_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Representante
        fields = (
            'cedula',
            'nombre',
            'apellido',
            'telefono',
            'direccion',
            'correo',
        )