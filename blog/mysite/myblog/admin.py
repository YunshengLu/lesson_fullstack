from django.contrib import admin
from myblog.models import SiteInfo,Classes,UserInfo

# Register your models here.
admin.site.register(SiteInfo)
admin.site.register(Classes)
admin.site.register(UserInfo)
