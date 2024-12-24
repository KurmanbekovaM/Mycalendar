

# class AvailabilitySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Availability
#         fields = '__all__'




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