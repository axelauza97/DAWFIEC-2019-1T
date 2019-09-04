# Create your views here.
from rest_framework import generics
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'isAdmin': user.is_superuser
            ,
            'cod': user.cod_usuario
        })


#USUARIO
#--------------------------------------------------------------
class CreateUsuario(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Usuario.objects.filter(is_superuser=False)
    serializer_class = UsuarioSerializer

class GetUsuario(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    queryset = Usuario.objects.filter(is_superuser=False)
    serializer_class = UsuarioSerializer

class UsuarioList(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Usuario.objects.filter(is_superuser=False)
    serializer_class = UsuarioSerializer

class DeleteUsuario(generics.DestroyAPIView):
    permission_classes = (AllowAny,)
    queryset = Usuario.objects.filter(is_superuser=False)
    serializer_class = UsuarioSerializer

class UpdateUsuario(generics.UpdateAPIView):
    permission_classes = (AllowAny,)
    queryset = Usuario.objects.filter(is_superuser=False)
    serializer_class = UsuarioSerializer
#--------------------------------------------------------------

#CLIENTE
#--------------------------------------------------------------
class ClienteList(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class GetCliente(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class CreateCliente(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class UpdateCliente(generics.UpdateAPIView):
    permission_classes = (AllowAny,)
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer   

class DeleteCliente(generics.DestroyAPIView):
    permission_classes = (AllowAny,)
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
#--------------------------------------------------------------

#AUDITOR
#--------------------------------------------------------------
class AuditorList (generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Auditor.objects.all()
    serializer_class = AuditorSerializer


class CreateAuditor(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Auditor.objects.all()
    serializer_class = AuditorSerializer

class GetAuditor(generics.RetrieveAPIView):   
    permission_classes = (AllowAny,)
    queryset = Auditor.objects.all()
    serializer_class = AuditorSerializer

class UpdateAuditor(generics.UpdateAPIView):   
    permission_classes = (AllowAny,)
    queryset = Auditor.objects.all()
    serializer_class = AuditorSerializer 

class DeleteAuditor(generics.DestroyAPIView):
    permission_classes = (AllowAny,)
    queryset = Auditor.objects.all()
    serializer_class = AuditorSerializer
#--------------------------------------------------------------

#PROFORMA
#--------------------------------------------------------------
class ProformaList (generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Proforma.objects.all()
    serializer_class = ProformaSerializer

class CreateProforma (generics.CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Proforma.objects.all()
    serializer_class = ProformaSerializer

class GetProforma (generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    queryset = Proforma.objects.all()
    serializer_class = ProformaSerializer

class UpdateProforma (generics.UpdateAPIView):
    #permission_classes = (AllowAny,)
    queryset = Proforma.objects.all()
    serializer_class = ProformaSerializer

class DeleteProforma (generics.DestroyAPIView):
    #permission_classes = (AllowAny,)
    queryset = Proforma.objects.all()
    serializer_class = ProformaSerializer           
#--------------------------------------------------------------

#CERTIFICADO
#--------------------------------------------------------------
class CertificadoList (generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Certificado.objects.all()
    serializer_class = CertificadoSerializer 

class GetCertificado (generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    queryset = Certificado.objects.all()
    serializer_class = CertificadoSerializer 

class CreateCertificado (generics.CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Certificado.objects.all()
    serializer_class = CertificadoSerializer 

class UpdateCertificado (generics.UpdateAPIView):
    permission_classes = (AllowAny,)
    queryset = Certificado.objects.all()
    serializer_class = CertificadoSerializer 

class DeleteCertificado (generics.DestroyAPIView):
    permission_classes = (AllowAny,)
    queryset = Certificado.objects.all()
    serializer_class = CertificadoSerializer 
#--------------------------------------------------------------

#CORREO
#--------------------------------------------------------------
class SendEmail(APIView):
    permission_classes =(AllowAny,)
    def post(self, request,format='json'):
        if(request.method=='POST'):
            name = request.data['name']
            mail = request.data['mail']
            telefono = request.data['telefono']
            mensaje= request.data['mensaje']
            send_mail('Contactenos',"Bienvenido a nuestra página Bureau Veritas.",settings.EMAIL_HOST_USER, [mail], fail_silently=False)
            return Response(request.data)
#--------------------------------------------------------------


#APIVIEW
#--------------------------------------------------------------
class CantidadCP(APIView):
    permission_classes =(AllowAny,)
    def get(self,request,format= 'none'):
        cantidad = Cliente.objects.count()
        proforma = Proforma.objects.count()
        return Response({'Clientes':cantidad,'Proforma':proforma})
#--------------------------------------------------------------

# Tipo AUDITOR
#--------------------------------------------------------------
class GetTipoAuditor(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Tipo_Auditor.objects.all()
    serializer_class = Tipo_AuditorSerializer
#--------------------------------------------------------------

#Norma
#--------------------------------------------------------------
class GetNorma(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Norma.objects.all()
    serializer_class = NormaSerializer
#--------------------------------------------------------------

#Tipo Certificado
#--------------------------------------------------------------
class GetTipoCertificado(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Tipo_Certificado.objects.all()
    serializer_class = Tipo_CertificadoSerializer
#--------------------------------------------------------------

#Estado Certificado
class GetEstadoCertificado(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Estado_Certificado.objects.all()
    serializer_class = Estado_CertificadoSerializer
   
class GraficosApi(APIView):

    permission_classes =(AllowAny,)


    def get(self, request, format=None):

        datos= Certificado.objects.count()
        datos2 = Proforma.objects.count()
        return Response({"certificados":datos,"proformas":datos2})
    
class GraficosApiTwo(APIView):

    permission_classes =(AllowAny,)


    def get(self, request, format=None):

        datos= Certificado.objects.values('cod_usuario').annotate(dcount=Count('cod_usuario'))
        return Response(datos)
    
