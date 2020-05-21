from django.db import models
from django.conf import settings
from django.utils import timezone

class Essay(models.Model):
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, default=1, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    body = models.TextField()

class TouristSpot(models.Model):
    title = models.CharField(max_length=30)
    location = models.CharField(max_length=100)
    image = models.CharField(max_length=200)
    call = models.CharField(max_length=15)
    access = models.CharField(max_length=3)
    parking = models.CharField(max_length=3)
    height = models.CharField(max_length=3)
    lift = models.CharField(max_length=3)
    toilet = models.CharField(max_length=3)
    height = models.CharField(max_length=3)
    lift = models.CharField(max_length=3)
    toilet = models.CharField(max_length=3)
    customRoom = models.CharField(max_length=3)
    seat = models.CharField(max_length=3)
    ticket = models.CharField(max_length=3)
    blindConve = models.CharField(max_length=3)
    deafConve = models.CharField(max_length=3)
    guidance = models.CharField(max_length=3)
    wheelchair = models.CharField(max_length=3)
    longitude = models.CharField(max_length=100)
    latitude = models.CharField(max_length=100)

class Restaurant(models.Model):
    title = models.CharField(max_length=30)
    location = models.CharField(max_length=100)
    call = models.CharField(max_length=15)
    access = models.CharField(max_length=3)
    parking = models.CharField(max_length=3)
    height = models.CharField(max_length=3)
    lift = models.CharField(max_length=3)
    toilet = models.CharField(max_length=3)
    height = models.CharField(max_length=3)
    lift = models.CharField(max_length=3)
    toilet = models.CharField(max_length=3)
    customRoom = models.CharField(max_length=3)
    seat = models.CharField(max_length=3)
    ticket = models.CharField(max_length=3)
    blindConve = models.CharField(max_length=3)
    deafConve = models.CharField(max_length=3)
    guidance = models.CharField(max_length=3)
    wheelchair = models.CharField(max_length=3)
    longitude = models.CharField(max_length=100)
    latitude = models.CharField(max_length=100)

class Comment(models.Model):
    post = models.ForeignKey(TouristSpot, on_delete=models.CASCADE)
    author = models.CharField(max_length= 10)
    rating = models.IntegerField(default=0)
    text = models.CharField(max_length=100)
    created_date = models.DateTimeField(default=timezone.now)