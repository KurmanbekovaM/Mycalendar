

from rest_framework import serializers
from .models import Event, EventParticipant

# class EventSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Event
#         fields = ['title', 'start_time', 'end_time', 'location', 'creator', 'participants']



class EventSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')

    class Meta:
        model = Event
        fields = ['id', 'title', 'start_time', 'end_time', 'location', 'creator', 'participants']

    def create(self, validated_data):
        validated_data['creator'] = self.context['request'].user
        return super().create(validated_data)


class EventParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventParticipant
        fields = '__all__'

# from rest_framework import serializers
# from .models import Event, EventParticipant

# from django.contrib.auth.models import User

# class EventSerializer(serializers.ModelSerializer):
#     creator = serializers.ReadOnlyField(source='creator.username')
#     participants = serializers.ListField(
#         child=serializers.EmailField(), write_only=True
#     )  # Для получения email-ов участников при создании.

#     class Meta:
#         model = Event
#         fields = ['id', 'title', 'start_time', 'end_time', 'location', 'creator', 'participants']

#     def create(self, validated_data):
#         # Удаляем участников из данных и обрабатываем их отдельно
#         participants_emails = validated_data.pop('participants', [])
#         validated_data['creator'] = self.context['request'].user

#         # Создаем событие
#         event = Event.objects.create(**validated_data)

#         # Добавляем участников по email
#         users = User.objects.filter(email__in=participants_emails)
#         for user in users:
#             EventParticipant.objects.create(event=event, user=user, status='invited')

#         return event

#     def to_representation(self, instance):
#         representation = super().to_representation(instance)
#         # Добавляем список email-ов участников в выходные данные
#         representation['participants'] = list(instance.participants.values_list('email', flat=True))
#         return representation



# class EventParticipantSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = EventParticipant
#         fields = '__all__'