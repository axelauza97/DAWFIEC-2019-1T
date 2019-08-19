# Create your views here.
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail
from django.conf import settings

class CreateUser(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


class UsuarioList(generics.ListAPIView):
    queryset = Usuario.objects.filter(is_superuser=False)
    serializer_class = UsuarioSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        return obj
    def post(self, request, format=None):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
    def delete(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(
            queryset,
            pk=self.kwargs['pk'],
        )
        obj.delete()
        return  Response(status=status.HTTP_204_NO_CONTENT)
    def put(self, request, format=None):
        serializer = AuditorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def post(self, request, format=None):
        serializer = AuditorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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
    
    def post(self, request, format=None):
        serializer = CertificadoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
    def post(self, request, format=None):
        serializer = NormaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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
    def post(self, request, format=None):
        serializer = ProformaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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

    def post(self, request, format=None):
        serializer = FacturaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
    def post(self, request, format=None):
        serializer = ClienteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
    def post(self, request, format=None):
        serializer = ProformaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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
    def post(self, request, format=None):
        serializer = Estado_CertificadoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
    def post(self, request, format=None):
        serializer = Estado_FacturaList(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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
    def post(self, request, format=None):
        serializer = Tipo_CertificadoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
    def post(self, request, format=None):
        serializer = Tipo_AuditorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CreateAuditor(generics.CreateAPIView):
    #permission_classes = (AllowAny,)
    queryset = Auditor.objects.all()
    serializer_class = AuditorSerializer


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