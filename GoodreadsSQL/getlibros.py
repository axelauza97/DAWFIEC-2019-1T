import csv
import os
from api.models import Libro

path="C:\\...."
os.chdir(path)
librosG=[]
with open('historico.csv',encoding="utf8") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        libro=str(row['titulo'] + "|"+ row['isbn'])
        if not libro in librosG:
            librosG.append(libro)
            tmp = libro.split("|", 1)
            titulo = tmp[0]
            isbn = tmp[1]
            print(libro)
            a = Libro(tiutlo=titulo, isbn=isbn)
            a.save()
