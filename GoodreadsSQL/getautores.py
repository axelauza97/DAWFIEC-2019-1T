import csv
import os
#from api.models import Autor
path="C:\\...."
os.chdir(path)
autoresG=[]
cont=0
with open('historico.csv',encoding="utf8") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        autores=str(row['autores']).split("-")
        for autor in autores:
            if not autor in autoresG:
                autoresG.append(autor)
                print(cont)
                cont=cont+1
                #a=Autor(nombres=autor.split(" ")[0],apellidos=autor.split(" ")[1])
                #a.save()
