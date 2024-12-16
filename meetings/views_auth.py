# from django.contrib.auth.models import User
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework_simplejwt.tokens import RefreshToken
# from rest_framework.permissions import AllowAny

# class RegisterUser(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         username = request.data.get("username")
#         password = request.data.get("password")
#         email = request.data.get("email")

#         if not username or not password:
#             return Response({"error": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

#         user = User.objects.create_user(username=username, password=password, email=email)
#         return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)

# class LoginUser(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         from django.contrib.auth import authenticate

#         username = request.data.get("username")
#         password = request.data.get("password")

#         user = authenticate(username=username, password=password)
#         if user:
#             refresh = RefreshToken.for_user(user)
#             access_token = refresh.access_token
#             return Response({
#                 "refresh": str(refresh),
#                 "access": str(access_token),
#             })
#         return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User


class RegisterUser(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        # Если запрос GET, отправляем сообщение о том, что нужно использовать POST
        return Response({"message": "Use POST to register a new user."}, status=status.HTTP_200_OK)

    def post(self, request):
        # Обработка запроса POST для регистрации пользователя
        username = request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("email")

        if not username or not password:
            return Response({"error": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, password=password, email=email)
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)


class LoginUser(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        from django.contrib.auth import authenticate

        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            access_token = refresh.access_token
            return Response({
                "refresh": str(refresh),
                "access": str(access_token),
            })
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)