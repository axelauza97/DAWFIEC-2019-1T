from .views import *
from django.urls import path

urlpatterns =[
path('representante/', Representante_List.as_view(),name='representante'),


]