from django.urls import path
from api.views import GetRoom, RoomView, CreateRoomView

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
]