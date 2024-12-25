
from .views_auth import RegisterUser, LoginUser
from rest_framework_simplejwt import views as jwt_views
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet,  ProfileView, EventParticipantViewSet
#AvailabilityViewSet,

# Создаем роутер и регистрируем viewsets
router = DefaultRouter()
router.register(r'events', EventViewSet, basename='event')
#router.register(r'availabilities', AvailabilityViewSet)
router.register(r'eventparticipants', EventParticipantViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    # path('api/', include(router.urls)),  # Включаем все маршруты для viewsets

    # Маршруты для регистрации и логина
    path('register/', RegisterUser.as_view(), name='api_register'),  # Регистрация
    path('login/', LoginUser.as_view(), name='login'),  # Логин

    # JWT токены
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    # Профиль пользователя
    #path('api/profile/', UserProfileView.as_view(), name='user_profile'),
    path('profile/', ProfileView.as_view(), name='user_profile'),
    path('events/', EventViewSet.as_view({'get': 'list', 'post': 'create'})),
]