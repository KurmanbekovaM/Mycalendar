from django.urls import path, include
from rest_framework import viewsets
from rest_framework.routers import DefaultRouter

from .models import Event
from .serializers import EventSerializer
from .views import EventViewSet, AvailabilityViewSet

router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'availabilities', AvailabilityViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
from django.urls import path
from .views_auth import RegisterUser, LoginUser

urlpatterns = [
    path('register/', RegisterUser.as_view(), name='register'),
    path('login/', LoginUser.as_view(), name='login'),
]
from rest_framework.permissions import IsAuthenticated

router = DefaultRouter()
router.register(r'events', EventViewSet, basename="event")
router.register(r'availabilities', AvailabilityViewSet, basename="availability")

urlpatterns = [
    path('api/', include(router.urls)),
]

# В представлениях EventViewSet и AvailabilityViewSet можно добавить permission_classes:
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]  # Защищаем маршруты
