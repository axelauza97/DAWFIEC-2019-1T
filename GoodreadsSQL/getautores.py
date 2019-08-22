import csv
import os
from api.models import Autor

path="C:\\...."
os.chdir(path)
autoresG=[]
with open('historico.csv',encoding="utf8") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        autores=str(row['autores']).split("-")
        for autor in autores:
            if not autor in autoresG:
                autoresG.append(autor)
                tmp=autor.split(" ",1)
                nombre=tmp[0]
                if len(tmp)>1:
                    apellido=tmp[1]
                else:
                    apellido=""
                print(nombre)
                print(apellido)
                a=Autor(nombres=nombre,apellidos=apellido)
                a.save()
