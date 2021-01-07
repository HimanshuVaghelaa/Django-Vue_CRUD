from rest_framework import serializers
from REST_Apis.models import REST_Apis

class apisSerializer(serializers.ModelSerializer):

    class Meta:
        model = REST_Apis
        fields = ('id',
                'title',
                'description',
                'published')