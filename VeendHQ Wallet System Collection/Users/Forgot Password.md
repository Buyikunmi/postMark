
##  <img src="https://img.shields.io/badge/POST-fbe07c?style=flat" alt="POST" style="height: 30px;"/> Forgot Password
Starts the password reset process by sending a password reset link or sms
```
{{url}}/v1/forgotPassword
```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|
|x-tag|MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=|

### Body (**raw**)

```json
{ "email": "foo@taa.com" }
```

## Sample Request

{% tabs %}
  {% tab title="Forgot Password" %}
```bash
curl --location --request POST 'localhost:8080/forgotPassword' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--data '{
    "email": "foo@taa.com"
}'
```
  {% endtab %}
  {% tab title="Forgot Password with phone number" %}
```bash
curl --location --request POST '{{url}}/forgotPassword' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--data '{
    "phonenumber": "08110336710"
}'
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="Forgot Password" %}
```json
{
  "status": "success"
}
```
  {% endtab %}
  {% tab title="Forgot Password with phone number" %}
```json
{
  "status": "success"
}
```
  {% endtab %}
{% endtabs %}


---
