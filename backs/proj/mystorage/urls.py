from rest_framework.routers import DefaultRouter
from django.urls import path, include
from . import views

router = DefaultRouter()

router.register('essay', views.PostViewSet)
router.register('comment',views.CommentViewSet)
router.register('touristspot',views.TouristSpotViewSet, basename='touristspot')
router.register('restaurant',views.RestaurantViewSet, basename='restaurant')
# router.register('Album', views.ImageViewSet)
# router.register('Files', views.FileViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('mystorage/', include(router.urls))
]