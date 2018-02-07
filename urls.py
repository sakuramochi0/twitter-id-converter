from django.conf.urls import url, include

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^api/v1/convert_screen_names_to_ids$',
        views.api_v1_convert_screen_names_to_ids),
]
