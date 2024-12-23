from rest_framework import viewsets
from .models import Event, Availability
from .serializers import EventSerializer, AvailabilitySerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
#
# class EventViewSet(viewsets.ModelViewSet):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer
#
# class AvailabilityViewSet(viewsets.ModelViewSet):
#     queryset = Availability.objects.all()
#     serializer_class = AvailabilitySerializer
#
class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "username": request.user.username,
            "email": request.user.email,
        })

from rest_framework import viewsets
from .models import Event, Availability, EventParticipant
from .serializers import EventSerializer, AvailabilitySerializer, EventParticipantSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class AvailabilityViewSet(viewsets.ModelViewSet):
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer

class EventParticipantViewSet(viewsets.ModelViewSet):
    queryset = EventParticipant.objects.all()
    serializer_class = EventParticipantSerializer


