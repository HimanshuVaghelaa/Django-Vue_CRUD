from django.conf.urls import url 
from REST_Apis import views 
 
urlpatterns = [ 
    url(r'^api/REST_Apis$', views.tutorial_list),
    url(r'^api/REST_Apis/(?P<pk>[0-9]+)$', views.tutorial_detail),
    url(r'^api/REST_Apis/published$', views.tutorial_list_published)
]