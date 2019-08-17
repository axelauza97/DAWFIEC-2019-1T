# Create your views here.
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404


class CreateUser(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


class UsuarioList(generics.ListAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj


class AuditorList(generics.ListAPIView):
    
    queryset = Auditor.objects.all()
    serializer_class = AuditorSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj
class CertificadoList(generics.ListAPIView):
    
    queryset = Certificado.objects.all()
    serializer_class = CertificadoSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj

class NormaList(generics.ListAPIView):
 
    queryset = Norma.objects.all()
    serializer_class = NormaSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj
class ProformaList(generics.ListAPIView):
    
    queryset = Proforma.objects.all()
    serializer_class = ProformaSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj
class FacturaList(generics.ListAPIView):
  
    queryset = Factura.objects.all()
    serializer_class = FacturaSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj

class ClienteList(generics.ListAPIView):
    
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj

class Estado_ProformaList(generics.ListAPIView):
   
    queryset = Estado_Proforma.objects.all()
    serializer_class = Estado_ProformaSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj
class Estado_CertificadoList(generics.ListAPIView):
    
    queryset = Estado_Certificado.objects.all()
    serializer_class = Estado_CertificadoSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj

class Estado_FacturaList(generics.ListAPIView):
   
    queryset = Estado_Factura.objects.all()
    serializer_class = Estado_FacturaSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj
class Tipo_CertificadoList(generics.ListAPIView):
    
    queryset = Tipo_Certificado.objects.all()
    serializer_class = Tipo_CertificadoSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj

class Tipo_AuditorList(generics.ListAPIView):
    queryset = Tipo_Auditor.objects.all()
    serializer_class = Tipo_AuditorSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj