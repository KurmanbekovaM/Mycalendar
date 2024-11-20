from django.shortcuts import render
from rest_framework import viewsets
from .models import Event, Availability
from .serializers import EventSerializer, AvailabilitySerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class AvailabilityViewSet(viewsets.ModelViewSet):
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer
