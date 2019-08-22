import csv
import os
from api.models import *
path="C:\\...."
os.chdir(path)
autoresG=[]
with open('historico.csv',encoding="utf8") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        libro = str(row['titulo'] + "|" + row['isbn'])
        autores = str(row['autores']).split("-")
        tmpl = libro.split("|", 1)
        titulo = tmpl[0]
        isbn = tmpl[1]
        print("libro")
        print(libro)
        l = Libro(titulo=titulo, isbn=isbn)
        l.save()
        print("autores")
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
            l.autores.add(a)

