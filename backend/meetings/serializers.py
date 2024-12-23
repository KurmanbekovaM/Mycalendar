# from rest_framework import serializers
# from .models import Event, Availability
#
# class EventSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Event
#         fields = ['title', 'description', 'date', 'location']
#
# class AvailabilitySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Availability
#         fields = '__all__'
# # from rest_framework import serializers
# # from .models import *
# #
# # class AppointmentSerializer(serializers.ModelSerializer):
# #     title = serializers.CharField(source='name')
# #     start = serializers.DateField(source='start_date')
# #     end = serializers.DateField(source='end_date')
# #     classNames = serializers.CharField(source='status')
# #
# #     class Meta:
# #         model = Appointments
# #         fields = ('id','start','classNames', 'end','title')



from rest_framework import serializers
from .models import Event, Availability, EventParticipant

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['title', 'start_time', 'end_time', 'location', 'creator', 'participants']

class AvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Availability
        fields = '__all__'

class EventParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventParticipant
        fields = '__all__'
