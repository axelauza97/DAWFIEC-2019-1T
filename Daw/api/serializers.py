from tkinter.tix import _dummyExFileSelectBox

from .models import *


from rest_framework import serializers


class UsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):

        usuario = Usuario.objects.create(
            cod_usuario= validated_data['cod_usuario'],
            username=validated_data['username'],
            email = validated_data['email'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            
          
          
        )
        usuario.set_password(validated_data['password'])
        usuario.save()

        return usuario

    class Meta:
        fields = (
            'cod_usuario',
            'username',
           
            'email',
            'first_name',
            'last_name',
            'password',
          
            'is_active',
         
        )
        model = Usuario

class ClienteSerializer(serializers.ModelSerializer):
    #cod_usuario= serializers.StringRelatedField()
    tipo = serializers.ReadOnlyField(source = 'cod_usuario .cod_cliente')
    class Meta:
        model = Cliente
        #fields = ('cod_cliente','ruc','nombre_cliente','representante','correo','telefono','direccion','cod_usuario')
        fields = "__all__"


#class UsuarioSerializer(serializers.HyperlinkedModelSerializer):
#    class Meta:
#        model = Usuario
#        fields =('cod_usuario','nick_name','nombre_usuario','apellido_usuario','contraseña','rol_us','correo','estado_us')

class CertificadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificado
        fields = '__all__'
        depth = 1


class AuditorSerializer(serializers.ModelSerializer):
    #tipo = serializers.CharField(source="tipo_auditor.tipo_auditor", read_only=True)
    tipo = serializers.ReadOnlyField(source = 'tipo_auditor.cod_auditor')
    class Meta:
        model = Auditor
        #fields = ('cod_auditor','cedula_auditor','nombres_auditor','apellidos_auditor','telefono','correo','tipo','direccion')
        fields = "__all__"

class NormaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Norma
        fields = "__all__"

class ProformaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Proforma
        #fields = ('cod_proforma','cod_cliente','cod_norma','costo','fecha_proforma','estado_proforma','cod_usuario')
        fields = "__all__"


'''
class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Factura
        fields = ('cod_factura','cod_certificado','cod_usuario','fecha_factura','valor_factura','estado_factura')



class Estado_ProformaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estado_Proforma
        fields = ('cod_es_pro','estado_pro','descripcion')

class Estado_CertificadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estado_Certificado
        fields = ('cod_es_cer','estado_cer','descripcion')


class Estado_FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estado_Factura
        fields = ('cod_es_fac','estado_fac','descripcion')

class Tipo_CertificadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Certificado
        fields = ('cod_tipo_cer','tipo_certificado','descripcion')


'''
class Tipo_AuditorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Auditor
        fields = "__all__"

class Tipo_CertificadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Certificado
        fields = "__all__"

class Estado_CertificadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estado_Certificado
        fields = "__all__"