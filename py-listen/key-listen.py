from pynput import keyboard#首先导入模块
 # 导入requests包
import requests
 
url = "http://localhost:8989"


def key_press(key):#定义按键按下时触发的函数
    try:
        str = f"{key.char}-On"
        myParams = {"key": str} 
        res = requests.get(url=url, params=myParams)
    except AttributeError:
        pass
 
def key_release(key):
    try:
        str = f"{key.char}-Off"
        myParams = {"key": str }
        res = requests.get(url=url, params=myParams)
    except AttributeError:
        pass
 
with keyboard.Listener(on_press=key_press,on_release=key_release) as listener:
    listener.join()