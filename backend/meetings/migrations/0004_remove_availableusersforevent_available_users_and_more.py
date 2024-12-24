# Generated by Django 5.1.3 on 2024-12-23 10:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('meetings', '0003_alter_availability_options_alter_event_options_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='availableusersforevent',
            name='available_users',
        ),
        migrations.RemoveField(
            model_name='availableusersforevent',
            name='event',
        ),
        migrations.AlterModelOptions(
            name='event',
            options={},
        ),
        migrations.AlterModelOptions(
            name='eventparticipant',
            options={},
        ),
        migrations.DeleteModel(
            name='Availability',
        ),
        migrations.DeleteModel(
            name='AvailableUsersForEvent',
        ),
    ]