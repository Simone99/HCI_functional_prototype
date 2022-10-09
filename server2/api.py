from flask import Flask
from flask_cors import CORS
from flask import request
import requests
from bs4 import BeautifulSoup
from selenium.webdriver.chrome.service import Service
from selenium import webdriver
from selenium.webdriver.common.by import By

app = Flask(__name__)
CORS(app)

@app.post("/api/getItems")
def webScraping():
    URL = request.get_json()['url']
    service = Service(executable_path="./chromedriver")
    driver = webdriver.Chrome(service=service)
    driver.get(URL)
    body = driver.find_element(By.TAG_NAME, "body").get_attribute("innerHTML")
    driver.quit()
    soup = BeautifulSoup(body, "html.parser")
    items = soup.find_all("div", class_="mb1 ph1 pa0-xl bb b--near-white w-25")
    return_list = []
    for item in items:
        image = item.find("img")['src']
        name = item.find("span", class_="normal dark-gray mb0 mt1 lh-title f6 f5-l").string
        price = item.find("div", class_="mr1 mr2-xl lh-copy b black f5 f4-l").string.strip().replace("$", "")
        return_list.append({
            "image": image,
            "name": name,
            "price": float(price)
        })
    return return_list
