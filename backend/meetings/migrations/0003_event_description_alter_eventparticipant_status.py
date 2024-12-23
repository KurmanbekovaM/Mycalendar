# Generated by Django 5.1.4 on 2024-12-22 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meetings', '0002_remove_event_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='eventparticipant',
            name='status',
            field=models.CharField(choices=[('invited', 'Invited'), ('accepted', 'Accepted'), ('declined', 'Declined')], default='invited', max_length=50),
        ),
    ]
