from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import viewsets, serializers, status
from .models import Essay, TouristSpot, Restaurant, Comment
from .serializers import EssaySerializer, TouristSpotSerializer, RestaurantSerializer, CommentSerializer
from rest_framework.filters import SearchFilter 
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
import os, csv
# from rest_framework.views import APIView


authentication_classes = [TokenAuthentication, SessionAuthentication]
permission_classes = [IsAuthenticated]

HttpResponse.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");

class PostViewSet(viewsets.ModelViewSet):
    queryset = Essay.objects.all()
    serializer_class = EssaySerializer
    filter_backends = [SearchFilter]
    search_fields = '__all__'
    
    def perform_create(self, serializer):
        serializer.save(author = self.request.user)

    def get_queryset(self):
        qs = super().get_queryset()

        if self.request.user.is_authenticated:
            qs = qs.filter(author =  self.request.user)
        else:
            qs = qs.none()
        return qs

class CommentViewSet(viewsets.ModelViewSet):
     queryset = Comment.objects.all()
     serializer_class = CommentSerializer
     filter_backends = [SearchFilter]
     search_fields = '__all__'

     def list(self, request):
         queryset = Comment.objects.all()
         serializer =CommentSerializer(queryset, many=True)
         return Response(serializer.data)

     def index(request):
         str = ''
         for query in queryset:
             str += "<p>No. {}번  name. {}<br>".format(query.post,
            query.text)
             str += qeury.body+"</p>"
         return HttpResponse(str)

     def get(self,request,pk, format=None): #댓글 보여줌
        comment = self.get_object(pk)
        serializer =CommentSerializer(comment)
        return Response(serializer.data)

     def post(self,request,pk): #댓글 입력
        comment = self.get_object(pk)
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
              serializer.save()
              return Response(serializer.data, status=status.HTTP_201_CREATED)
          #문제없이 잘 됐으면, 직렬화한 데이터와 객체 생성하는 http요청으로 응답해준다.
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
         #유효성 검사시 문제가 있다면, bad_request를 응답으로 보낸다.
     def get_queryset(self):
        qs = super().get_queryset()

        if self.request.user.is_authenticated:
            qs = qs.filter(author =  self.request.user)
        else:
            qs = qs.none()
        return qs

# 파일 읽기, 저장하기
def touristSpotSave():
    path = os.getcwd()+"\mystorage\data"
    datafile = os.listdir(path)
    # csv_data = pandas.read_csv(path + "\\" + datafile[1]) 
    csv_data = path + "\\" + datafile[1]
    with open(csv_data,"r",encoding="UTF-8") as touristSpot:
        reader = csv.DictReader(touristSpot)
        for row in reader:
            t = TouristSpot(title=row['title'],location=row['location'],image=row['image'],call=row['call'],access=row['access'],parking=row['parking'],height=row['height'],lift=row['lift'],toilet=row['toilet'],customRoom=row['customRoom'],seat=row['seat'],ticket=row['ticket'],blindConve=row['blindConve'],deafConve=row['deafConve'],guidance=row['guidance'],wheelchair=row['wheelchair'],longitude=row['longitude'],latitude=row['latitude'])
            t.save()

    
    
def restaurantSave():
    path = os.getcwd()+"\mystorage\data"
    datafile = os.listdir(path)
    # csv_data = pandas.read_csv(path +
    #  "\\" + datafile[0])
    csv_data = path + "\\" + datafile[0]
    with open(csv_data,"r",encoding="UTF-8") as restaurant:
        reader = csv.DictReader(restaurant)
        for row in reader:
            r = Restaurant(title=row['title'],location=row['location'],call=row['call'],access=row['access'],parking=row['parking'],height=row['height'],lift=row['lift'],toilet=row['toilet'],customRoom=row['customRoom'],seat=row['seat'],ticket=row['ticket'],blindConve=row['blindConve'],deafConve=row['deafConve'],guidance=row['guidance'],wheelchair=row['wheelchair'],longitude=row['longitude'],latitude=row['latitude'])
            r.save()
    

class TouristSpotViewSet(viewsets.ModelViewSet):
    queryset = TouristSpot.objects.all()
    serializer_class = TouristSpotSerializer

    def perform_create(self, serializer):
        serializer.save(title = self.request.user)

    def get_queryset(self):
        qs = super().get_queryset()

        if self.request.user.is_authenticated:
            qs = qs.filter(title =  self.request.user)
        else:
            qs = qs.none()
        return qs    
    
    def list(self, request):
         queryset = TouristSpot.objects.all()
         serializer = TouristSpotSerializer(queryset, many=True)
         return Response(serializer.data)


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    # def perform_create(self, serializer):
    #     serializer.save(author = self.request.user)

    def get_queryset(self):
        qs = super().get_queryset()

        if self.request.user.is_authenticated:
            qs = qs.filter(title =  self.request.user)
        else:
            qs = qs.none()
        return qs            

    def list(self, request):
         queryset = Restaurant.objects.all()
         serializer = RestaurantSerializer(queryset, many=True)
         return Response(serializer.data)