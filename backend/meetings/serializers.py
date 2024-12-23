from rest_framework import serializers
from .models import Event, EventParticipant

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['title', 'start_time', 'end_time', 'location', 'creator', 'participants']

# class AvailabilitySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Availability
#         fields = '__all__'

class EventParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventParticipant
        fields = '__all__'