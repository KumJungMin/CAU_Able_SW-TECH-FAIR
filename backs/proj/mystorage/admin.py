from django.contrib import admin
from .models import Essay, TouristSpot, Restaurant, Comment

# Register your models here.
admin.site.register(TouristSpot)
admin.site.register(Restaurant)
admin.site.register(Comment)
admin.site.register(Essay)