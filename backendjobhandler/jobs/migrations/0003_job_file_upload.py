# Generated by Django 3.1.6 on 2021-04-07 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0002_auto_20210326_1637'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='file_upload',
            field=models.FileField(blank=True, null=True, upload_to='fileuploads/'),
        ),
    ]
