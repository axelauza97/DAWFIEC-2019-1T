# Generated by Django 2.1.7 on 2019-08-16 01:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Auditor',
            fields=[
                ('cod_auditor', models.CharField(max_length=4, primary_key=True, serialize=False, unique=True)),
                ('cedula_auditor', models.CharField(max_length=10)),
                ('nombres_auditor', models.CharField(max_length=20)),
                ('apellidos_auditor', models.CharField(max_length=20)),
                ('telefono', models.CharField(max_length=10)),
                ('correo', models.EmailField(max_length=255)),
                ('direccion', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Certificado',
            fields=[
                ('cod_certificado', models.CharField(max_length=3, primary_key=True, serialize=False, unique=True)),
                ('fecha_inicio', models.DateField()),
                ('dias_certificacion', models.CharField(max_length=3)),
                ('fecha_fin', models.DateField()),
                ('costo', models.FloatField()),
                ('observaciones', models.CharField(max_length=50)),
                ('cod_Auditor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Auditor')),
            ],
        ),
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('cod_cliente', models.CharField(max_length=4, primary_key=True, serialize=False, unique=True)),
                ('ruc', models.CharField(max_length=10)),
                ('nombre_cliente', models.CharField(max_length=20)),
                ('representante', models.CharField(max_length=20)),
                ('correo', models.EmailField(max_length=255)),
                ('telefono', models.CharField(max_length=10)),
                ('direccion', models.CharField(max_length=50)),
                ('cod_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Estado_Certificado',
            fields=[
                ('cod_es_cer', models.CharField(max_length=1, primary_key=True, serialize=False, unique=True)),
                ('estado_cer', models.CharField(max_length=10)),
                ('descripcion', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Estado_Factura',
            fields=[
                ('cod_es_fac', models.CharField(max_length=1, primary_key=True, serialize=False, unique=True)),
                ('estado_fac', models.CharField(max_length=10)),
                ('descripcion', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Estado_Proforma',
            fields=[
                ('cod_es_pro', models.CharField(max_length=1, primary_key=True, serialize=False, unique=True)),
                ('estado_pro', models.CharField(max_length=10)),
                ('descripcion', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Factura',
            fields=[
                ('cod_factura', models.CharField(max_length=3, primary_key=True, serialize=False, unique=True)),
                ('fecha_factura', models.DateField()),
                ('valor_factura', models.FloatField()),
                ('cod_certificado', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Certificado')),
                ('cod_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('estado_factura', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Estado_Factura')),
            ],
        ),
        migrations.CreateModel(
            name='Norma',
            fields=[
                ('cod_norma', models.CharField(max_length=1, primary_key=True, serialize=False, unique=True)),
                ('nombre_norma', models.CharField(max_length=20)),
                ('descripcion', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Proforma',
            fields=[
                ('cod_proforma', models.CharField(max_length=3, primary_key=True, serialize=False, unique=True)),
                ('costo', models.FloatField()),
                ('fecha_proforma', models.DateField()),
                ('cod_cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Cliente')),
                ('cod_norma', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Norma')),
                ('cod_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('estado_proforma', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Estado_Proforma')),
            ],
        ),
        migrations.CreateModel(
            name='Tipo_Auditor',
            fields=[
                ('cod_auditor', models.CharField(max_length=1, primary_key=True, serialize=False, unique=True)),
                ('tipo_auditor', models.CharField(max_length=10)),
                ('descripcion', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Tipo_Certificado',
            fields=[
                ('cod_tipo_cer', models.CharField(max_length=3, primary_key=True, serialize=False, unique=True)),
                ('tipo_certificado', models.CharField(max_length=10)),
                ('descripcion', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='certificado',
            name='cod_cliente',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Cliente'),
        ),
        migrations.AddField(
            model_name='certificado',
            name='cod_norma',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Norma'),
        ),
        migrations.AddField(
            model_name='certificado',
            name='cod_usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='certificado',
            name='estado_certificado',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Estado_Certificado'),
        ),
        migrations.AddField(
            model_name='certificado',
            name='tipo_certificado',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Tipo_Certificado'),
        ),
        migrations.AddField(
            model_name='auditor',
            name='tipo_auditor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Tipo_Auditor'),
        ),
    ]
