fileOLD=open("historico.txt","r", encoding="utf8")
fileNEW=open("historico.csv","a", encoding="utf8")

for x in fileOLD:
    sentence=x.replace("|",",")
    print(sentence)
    fileNEW.write(sentence)
fileOLD.close()
fileNEW.close()