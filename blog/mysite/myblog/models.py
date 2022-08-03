from turtle import title
from django.db import models
from django.forms import ModelChoiceField

# Create your models here.
class SiteInfo(models.Model):
    title = models.CharField(null=True, blank=True, max_length=50)
    logo = models.ImageField(upload_to='logo/', null=True, blank=True)
    def __str__(self):
        return self.title

# 班级
class Classes(models.Model):
    text = models.CharField(max_length=50)
    def __str__(self):
        return self.text

# 用户
class UserInfo(models.Model):
    nickName = models.CharField(max_length=50)
    headImage = models.ImageField(upload_to='userinfo/', null=True, blank=True)
    belong = models.ForeignKey(Classes, on_delete=models.SET_NULL, related_name='userinfo_classes', null=True, blank=True)
    def __str__(self):
        return self.nickName