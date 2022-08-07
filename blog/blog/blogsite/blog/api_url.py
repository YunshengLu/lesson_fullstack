from django.urls import path
from blog import api#,payapi

urlpatterns = [
    #文章管理
        #文章数据获取 查看
        path('article-data/',api.articleData),
        #文章发布
        path('add-article/',api.add_article),
        #文章列表
        path('article-list/',api.articleList),
        #文章删除
        path('delete-article/',api.deleteArticle),
    #用户管理
        #登录
        path('blog-login/',api.blog_login),
        #注册
        path('blog-register/',api.blog_register),
        #自动登录
        path('auto-login/',api.blog_autoLogin),
        #登出
        path('blog-logout/',api.blog_logout),
        #鉴权
        path('blog-checkperm/',api.blog_checkPerm),
        #用户列表
        path('blog-userlist/',api.blog_userlist),
    #用户组
        path('blog-group/',api.blog_group),
    #栏目管理
        path('blog-lanmu/',api.blog_lanmu),
    #文章用户互动
        path('pinglun/',api.blogPinglun),
        path('user-article-info/',api.userArticleInfo),
        path('article-like/',api.articleLike),
        path('article-favor/',api.articleFavor),
        # path('get-alipay-url/',payapi.getAlipayUrl),
        # path('pay_result/',payapi.payResult)
]