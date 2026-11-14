from django.shortcuts import render

def index(request):
    # Эта функция отдает главный HTML-шаблон
    return render(request, 'invitation/index.html')