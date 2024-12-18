# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import EventViewSet, AvailabilityViewSet
from .views_auth import RegisterUser, LoginUser
from rest_framework_simplejwt import views as jwt_views
# from .views import EventListView, ProfileView
# # Создаем маршрутизатор для API
# router = DefaultRouter()
# router.register(r'events', EventViewSet, basename="event")
# router.register(r'availabilities', AvailabilityViewSet, basename="availability")

# # Определяем URL-адреса
# urlpatterns = [
#     # API маршруты
#     path('api/', include(router.urls)),  # API для events и availabilities

#     # Маршруты для регистрации и логина
#     path('register/', RegisterUser.as_view(), name='api_register'), # Регистрация
#     path('login/', LoginUser.as_view(), name='login'),  # Логин
#     # JWT токены
#     path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),



#     # path('api/profile/', UserProfileView.as_view(), name='user_profile'),
#     # urls.py в Django
#     path('api/profile/', ProfileView.as_view(), name='profile'), 
#     path('api/events/', EventListView.as_view(), name='events'), 
#     # другие маршруты
# ]
# mycalendar/backend/meetings/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, AvailabilityViewSet, ProfileView

# Создайте роутер и зарегистрируйте ваши viewsets
router = DefaultRouter()
router.register(r'events', EventViewSet)  # Регистрация EventViewSet
router.register(r'availabilities', AvailabilityViewSet)  # Регистрация AvailabilityViewSet

urlpatterns = [
    # API маршруты
    path('api/', include(router.urls)),  # Включаем все маршруты для viewsets

    # Маршруты для регистрации и логина
    path('register/', RegisterUser.as_view(), name='api_register'),  # Регистрация
    path('login/', LoginUser.as_view(), name='login'),  # Логин

    # JWT токены
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    # Профиль пользователя
    # path('api/profile/', UserProfileView.as_view(), name='user_profile'),
    path('profile/', ProfileView.as_view(), name='user_profile'),
    
]

