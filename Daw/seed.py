import os 
os.environ.setdefault('DJANGO_SETTINGS_MODULE','Daw.settings')
import django
django.setup()

from django_seed import Seed
from api.models import Auditor,Tipo_Auditor
import random
import faker

fake = faker.Faker()
seeder = Seed.seeder()


tipos= Tipo_Auditor.objects.all()

numbers = [i for i in range(10,1010)]

seeder.add_entity(Auditor, 1000,{
    'cod_auditor': lambda x: numbers.pop(),
    'tipo_auditor':lambda x: random.choice(tipos)
})

inserted_pks = seeder.execute()
