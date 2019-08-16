from .views import *
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token 


urlpatterns =[
    path('usuario/',CreateUser.as_view(),name='Usuario'),
    path('rest-auth/', obtain_auth_token, name='api_token_auth'),
    path('cliente/',ClienteList.as_view(),name='cliente'),
   
    path('auditor/', AuditorList.as_view(),name='auditor'),
    path('factura/', FacturaList.as_view(),name='factura'),
    path('certificado/', CertificadoList.as_view(),name='certificado') ,
    path('proforma/',ProformaList.as_view(),name='proforma'),
    path('norma/',NormaList.as_view(),name='norma'),


 



]