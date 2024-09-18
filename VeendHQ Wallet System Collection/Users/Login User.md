
##  <img src="https://img.shields.io/badge/POST-fbe07c?style=flat" alt="POST" style="height: 30px;"/> Login User
Log in a user and returns a jwt token
```
{{url}}/v1/login
```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|
|x-tag|MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=|

### Body (**raw**)

```json
{ "email": "{{user email}}", "password": "{{ password}}" }
```

## Sample Request

{% tabs %}
  {% tab title="Login User" %}
```bash
curl --location --request POST 'mygiro.co:8080/v1/login' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--data '{
    "email": "user@ensemblelab.com.ng",
    "password": "command555/"
}'
```
  {% endtab %}
  {% tab title="Login Requires 2FA Token" %}
```bash
curl --location --request POST '{{url}}/v1/login' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--data '{
    "email": "femi@foo.taa",
    "password": "password123"
}'
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="Login User" %}
```json
{
  "status": "success",
  "data": {
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW5zZW1ibGVsYWIuY29tLm5nIiwidXNlciI6eyJfaWQiOiI1YTc2MmRkOTEwYWYxNzAwMTk2M2YyMjciLCJtb2RlbCI6IlVzZXJzIiwiX192Ijo1LCJ0YWdzIjpbXSwiY3JlYXRlZEF0IjoiMjAxOC0wMi0wM1QyMTo0NzowNS4wMzBaIiwicm9sZXMiOlsiNWE3NjJkZDkxMGFmMTcwMDE5NjNmMjJjIiwiNWE3NjJhYzJhYzY2NDYwMDE5ODYwMWRjIl0sImlzQmxvY2tlZCI6ZmFsc2UsImt5Y1ZlcmlmaWNhdGlvblN0YXR1cyI6Im5vdF92ZXJpZmllZCIsImF1dGhlbnRpY2F0aW9ucyI6WyI1YTc2MmRkOTEwYWYxNzAwMTk2M2YyMmIiXSwiYWRkcmVzc0Jvb2tzIjpbIjVhNzYyZGQ5MTBhZjE3MDAxOTYzZjIyOCJdLCJhY2NvdW50cyI6WyI1YTc2MmRkOTEwYWYxNzAwMTk2M2YyMmEiXSwicmVmZXJyYWxDb2RlIjoicmt4YjEwalg4RyJ9LCJhY2NvdW50Ijp7Il9pZCI6IjVhNzYyZGQ5MTBhZjE3MDAxOTYzZjIyYSIsIm5hbWUiOiJ1c2VyQGVuc2VtYmxlbGFiLmNvbS5uZyIsIl9fdiI6MCwiYmFsYW5jZSI6MywidGFncyI6W10sImNyZWF0ZWRBdCI6IjIwMTgtMDItMDNUMjE6NDc6MDUuMDg5WiIsInVzZXJzIjpbIjVhNzYyZGQ5MTBhZjE3MDAxOTYzZjIyNyJdfSwiaWF0IjoxNTE3OTk5MDMxLCJleHAiOjE1MTgwMDI2MzEsImF1ZCI6Im15Z2lyby5jbyIsImlzcyI6ImVuc2VtYmxlbGFiLmNvbS5uZyIsInN1YiI6IjVhNzYyZGQ5MTBhZjE3MDAxOTYzZjIyNyJ9.wO7ATbt03EFHgqWqb2MA14Ja8ZQFzKMQij5C-dXyyTY",
    "user": {
      "_id": "5a762dd910af17001963f227",
      "model": "Users",
      "__v": 5,
      "tags": [],
      "createdAt": "2018-02-03T21:47:05.030Z",
      "roles": [
        "5a762dd910af17001963f22c",
        "5a762ac2ac664600198601dc"
      ],
      "isBlocked": false,
      "kycVerificationStatus": "not_verified",
      "authentications": [
        "5a762dd910af17001963f22b"
      ],
      "addressBooks": [
        "5a762dd910af17001963f228"
      ],
      "accounts": [
        "5a762dd910af17001963f22a"
      ],
      "referralCode": "rkxb10jX8G"
    },
    "email": "user@ensemblelab.com.ng",
    "isVerified": false,
    "account": "5a762dd910af17001963f22a"
  }
}
```
  {% endtab %}
  {% tab title="Login Requires 2FA Token" %}
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
