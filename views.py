from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from get_tweepy import get_api, tweepy
import json


def index(request):
    return render(request, 'twitter_id_converter/index.html')


@csrf_exempt
def api_v1_convert_screen_names_to_ids(request):
    api = get_api('sakuramochi_pre')
    data = json.loads(request.body.decode("utf-8"))
    screen_names = data['screen_names']
    ids = []
    for screen_name in screen_names:
        try:
            user = api.get_user(screen_name=screen_name)
            ids.append(user.id_str)
        except tweepy.TweepError:
            ids.append('???')

    data = {'ids': ids}
    response = JsonResponse(data)
    response['Access-Control-Allow-Origin'] = '*'
    return response
