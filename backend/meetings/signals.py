from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Event
from django.core.mail import send_mail


@receiver(post_save, sender=Event)
def send_event_notification(sender, instance, created, **kwargs):
    print(f"Sender: {sender}")
    print(f"Additional kwargs: {kwargs}")

    if created:
        participants_emails = [user.email for user in instance.participants.all()]
        send_mail(
            'New Event Created',
            f'An event "{instance.title}" has been created by {instance.creator.username}.',
            'from@example.com',
            participants_emails,
            fail_silently=False,
        )
