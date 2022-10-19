# management-referral-app

# RUN PROJECT

1. npm install
2. create and setup .env
3. npm start

# END-POINT API

http://localhost:2000/users/register (POST)
Body :{
"username":"Veronika Djuliana",
"password":"Password"
}

http://localhost:2000/users/login (POST)
Body:{
"username":"Veronika Djuliana",
"password":"Password"
}

http://localhost:2000/referral (POST) Create Refferal
Body:{
"referral_code":"GOODSDETP",
"type":"CLOTH",
"description":"GOOD CLOHT"
}
Authorization: can get jwt with login

http://localhost:2000/referral (GET) Get Refferal
param keyword: referralCode
Authorization: can get jwt with login

http://localhost:2000/referral/12 (DELETE) Delete Referral
Authorization: can get jwt with login

http://localhost:2000/referral/12 (PATCH) Edit Referral
Authorization: can get jwt with login
Body:{
"referral_code":"asd",
"type":"asd",
"description":"asd asd"
}

# ENV SETUP

ENV setup:
PORT=2000

MYSQL_USERNAME=root
MYSQL_PASSWORD=password
MYSQL_DB_NAME=referral-db

JWT_SECRET_KEY=SECRET_KEY
