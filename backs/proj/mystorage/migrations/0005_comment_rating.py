# Generated by Django 2.2.3 on 2019-11-15 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mystorage', '0004_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='rating',
            field=models.IntegerField(default=0),
        ),
    ]
