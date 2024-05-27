import pytesseract
from PIL import Image
import webbrowser
import pyautogui
import time
from openai import OpenAI
import os

#time.sleep(5)

screen_content = pyautogui.screenshot(region=(520,160,400,600))
screen_content.save("screenshot.png")
image_pil = Image.frombytes("RGB", screen_content.size, screen_content.tobytes())
webbrowser.open("https://www.google.com/search?q=" + pytesseract.image_to_string(Image.open("screenshot.png")))
#client = OpenAI(api_key="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")
#completion = client.chat.completions.create(
#    model="gpt-3.5-turbo",
#    messages = [
#        {"role": "system", "content": "You are playing a quiz game where you have to answer correctly and briefly."},
#        {"role": "user", "content": pytesseract.image_to_string(Image.open("screenshot.png"))}]
#)
#print(completion.choices[0].message.content)
#print(pytesseract.image_to_string(Image.open("screenshot.png")))
