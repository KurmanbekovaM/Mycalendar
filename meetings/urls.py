from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, AvailabilityViewSet
from .views_auth import RegisterUser, LoginUser

# Создаем маршрутизатор для API
router = DefaultRouter()
router.register(r'events', EventViewSet, basename="event")
router.register(r'availabilities', AvailabilityViewSet, basename="availability")

# Определяем URL-адреса
urlpatterns = [
    # API маршруты
    path('api/', include(router.urls)),  # API для events и availabilities

    # Маршруты для регистрации и логина
    path('api/register/', RegisterUser.as_view(), name='api_register'), # Регистрация
    path('api/login/', LoginUser.as_view(), name='login'),  # Логин

    # Маршрут для отправки тестового email
    # path('send-email/', send_test_email, name='send_test_email'),
]
