from django.shortcuts import render
from myblog.models import SiteInfo, Classes, UserInfo

# Create your views here.
def index(request):
    # 在这里写入业务逻辑
    # 在这里读取数据库
    print('开始读取数据')
    # 站点基本信息
    siteinfo = SiteInfo.objects.all()[1]
    # 菜单分类
    classes = Classes.objects.all()
    # 全部用户
    userlist = UserInfo.objects.all()
    print(siteinfo)
    data = {
        "siteinfo": siteinfo,
        "classes": classes,
        "userlist": userlist
    }
    return render(request, 'index.html', data)