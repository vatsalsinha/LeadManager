from rest_framework import routers 
from .api import LeadViewSet

router = routers.DefaultRouter()

router.register('api/leads', LeadViewSet, 'leads') # url endpoint

urlpatterns = router.urls