
##  <img src="https://img.shields.io/badge/POST-fbe07c?style=flat" alt="POST" style="height: 30px;"/> Login User With 2FA Token
```
{{url}}/v1/login
```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|
|x-tag|MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW5zZW1ibGVsYWIuY29tLm5nIiwidXNlciI6eyJfaWQiOiI1YWY1ZmE2Y2ZhODg3Y2I2NjIyY2IyMjQiLCJtb2RlbCI6IlVzZXJzIiwiX192Ijo1LCJ0YWdzIjpbXSwiY3JlYXRlZEF0IjoiMjAxOC0wNS0xMVQyMDoxNzo0OC44OTBaIiwicm9sZXMiOlsiNWFmNWZhNmRmYTg4N2NiNjYyMmNiMjJhIiwiNWFmNWZhNWFmYTg4N2NiNjYyMmNiMjE2Il0sImlzQmxvY2tlZCI6ZmFsc2UsImt5Y1ZlcmlmaWNhdGlvblN0YXR1cyI6Im5vdF92ZXJpZmllZCIsImF1dGhlbnRpY2F0aW9ucyI6WyI1YWY1ZmE2Y2ZhODg3Y2I2NjIyY2IyMjgiXSwiYWRkcmVzc0Jvb2tzIjpbIjVhZjVmYTZjZmE4ODdjYjY2MjJjYjIyNSJdLCJhY2NvdW50cyI6WyI1YWY1ZmE2Y2ZhODg3Y2I2NjIyY2IyMjciXSwicmVmZXJyYWxDb2RlIjoiSEpyX3FfN0F6In0sImFjY291bnQiOnsiX2lkIjoiNWFmNWZhNmNmYTg4N2NiNjYyMmNiMjI3IiwibmFtZSI6InVzZXJAZW5zZW1ibGVsYWIuY29tLm5nIiwiX192IjowLCJ0YWdzIjpbXSwiY3JlYXRlZEF0IjoiMjAxOC0wNS0xMVQyMDoxNzo0OC45MTFaIiwidXNlcnMiOlsiNWFmNWZhNmNmYTg4N2NiNjYyMmNiMjI0Il19LCJpYXQiOjE1MjYwNzAwOTgsImV4cCI6MTUyNjA3MzY5OCwiYXVkIjoibXlnaXJvLmNvIiwiaXNzIjoiZW5zZW1ibGVsYWIuY29tLm5nIiwic3ViIjoiNWFmNWZhNmNmYTg4N2NiNjYyMmNiMjI0In0.ml2qNkfHqpLeInKy-7g-Np4KPPKnJDPncKb03fnNmSc|

### Body (**raw**)

```json
{ "email": "femi@foo.taa", "password": "password123", "token":"039997" }
```

## Sample Request

{% tabs %}
  {% tab title="Register User" %}
```bash
curl --location --request POST 'localhost:8080/register' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--data '{
    "email": "foo@hhhn.com",
    "password": "command"
}'
```
  {% endtab %}
  {% tab title="Login Require 2FA Token" %}
```bash
curl --location --request POST '{{url}}/v1/login' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW5zZW1ibGVsYWIuY29tLm5nIiwidXNlciI6eyJfaWQiOiI1YWY1ZmE2Y2ZhODg3Y2I2NjIyY2IyMjQiLCJtb2RlbCI6IlVzZXJzIiwiX192Ijo1LCJ0YWdzIjpbXSwiY3JlYXRlZEF0IjoiMjAxOC0wNS0xMVQyMDoxNzo0OC44OTBaIiwicm9sZXMiOlsiNWFmNWZhNmRmYTg4N2NiNjYyMmNiMjJhIiwiNWFmNWZhNWFmYTg4N2NiNjYyMmNiMjE2Il0sImlzQmxvY2tlZCI6ZmFsc2UsImt5Y1ZlcmlmaWNhdGlvblN0YXR1cyI6Im5vdF92ZXJpZmllZCIsImF1dGhlbnRpY2F0aW9ucyI6WyI1YWY1ZmE2Y2ZhODg3Y2I2NjIyY2IyMjgiXSwiYWRkcmVzc0Jvb2tzIjpbIjVhZjVmYTZjZmE4ODdjYjY2MjJjYjIyNSJdLCJhY2NvdW50cyI6WyI1YWY1ZmE2Y2ZhODg3Y2I2NjIyY2IyMjciXSwicmVmZXJyYWxDb2RlIjoiSEpyX3FfN0F6In0sImFjY291bnQiOnsiX2lkIjoiNWFmNWZhNmNmYTg4N2NiNjYyMmNiMjI3IiwibmFtZSI6InVzZXJAZW5zZW1ibGVsYWIuY29tLm5nIiwiX192IjowLCJ0YWdzIjpbXSwiY3JlYXRlZEF0IjoiMjAxOC0wNS0xMVQyMDoxNzo0OC45MTFaIiwidXNlcnMiOlsiNWFmNWZhNmNmYTg4N2NiNjYyMmNiMjI0Il19LCJpYXQiOjE1MjYwNzAwOTgsImV4cCI6MTUyNjA3MzY5OCwiYXVkIjoibXlnaXJvLmNvIiwiaXNzIjoiZW5zZW1ibGVsYWIuY29tLm5nIiwic3ViIjoiNWFmNWZhNmNmYTg4N2NiNjYyMmNiMjI0In0.ml2qNkfHqpLeInKy-7g-Np4KPPKnJDPncKb03fnNmSc' \
--data '{
    "email": "femi@foo.taa",
    "password": "password123"
}'
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="Register User" %}
```json
{
  "status": "success",
  "data": {
    "__v": 3,
    "model": "Users",
    "_id": "5a5c7d8a848a7f57fcb436bb",
    "tags": [],
    "createdAt": "2018-01-15T10:08:10.907Z",
    "roles": [],
    "isBlocked": false,
    "kycVerificationStatus": "not_verified",
    "authentications": [
      "5a5c7d8a848a7f57fcb436bf"
    ],
    "addressBooks": [
      "5a5c7d8a848a7f57fcb436bc"
    ],
    "accounts": [
      "5a5c7d8a848a7f57fcb436bd"
    ],
    "referralCode": "r17c6gq4f"
  }
}
```
  {% endtab %}
  {% tab title="Login Require 2FA Token" %}
```json
{
  "status": "error",
  "message": {
    "is2FA": true
  }
}
```
  {% endtab %}
{% endtabs %}


---
