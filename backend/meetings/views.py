from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "username": request.user.username,
            "email": request.user.email,
        })

from rest_framework import viewsets
from .models import Event, EventParticipant
#from .serializers import EventSerializer, AvailabilitySerializer, EventParticipantSerializer
from .serializers import EventSerializer, EventParticipantSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

# class AvailabilityViewSet(viewsets.ModelViewSet):
#     queryset = Availability.objects.all()
#     serializer_class = AvailabilitySerializer

class EventParticipantViewSet(viewsets.ModelViewSet):
    queryset = EventParticipant.objects.all()
    serializer_class = EventParticipantSerializer

