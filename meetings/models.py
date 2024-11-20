from django.db import models
from django.contrib.auth.models import User

class Availability(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="availabilities")
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    def __str__(self):
        return f"{self.user.username} is available from {self.start_time} to {self.end_time}"

class Event(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="created_events")
    title = models.CharField(max_length=200)
    description = models.TextField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    location = models.CharField(max_length=200, null=True, blank=True)
    participants = models.ManyToManyField(User, related_name="events", through="EventParticipant")

    def __str__(self):
        return self.title

class EventParticipant(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(max_length=50, choices=[("invited", "Invited"), ("accepted", "Accepted"), ("declined", "Declined")])

    def __str__(self):
        return f"{self.user.username} - {self.event.title}"
