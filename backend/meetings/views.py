from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Q
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


# class EventViewSet(viewsets.ModelViewSet):
#     serializer_class = EventSerializer

#     def get_queryset(self):
#         user = self.request.user
#         return Event.objects.filter(
#             Q(creator=user) | Q(participants=user)
#         )


class EventViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializer

    def get_queryset(self):
        user = self.request.user
        return Event.objects.filter(
            Q(creator=user) | Q(participants=user)
        ).distinct()

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)



class EventParticipantViewSet(viewsets.ModelViewSet):
    queryset = EventParticipant.objects.all()
    serializer_class = EventParticipantSerializer




# class AvailabilityViewSet(viewsets.ModelViewSet):
#     queryset = Availability.objects.all()
#     serializer_class = AvailabilitySerializer