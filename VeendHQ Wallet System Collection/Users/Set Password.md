
##  <img src="https://img.shields.io/badge/POST-fbe07c?style=flat" alt="POST" style="height: 30px;"/> Set Password
Set the password of a user. This is the last step for reseting a password or team invitation.
```
{{url}}/v1/setPassword
```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|
|x-tag|MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=|

### Body (**raw**)

```json
{ "identifier": "5a5bc3409f4ed64a95dacaa2", "resetToken": "SkYHQrKEG", "password": "command123" }
```

## Sample Request

{% tabs %}
  {% tab title="Set Password" %}
```bash
curl --location --request POST 'localhost:8080/setPassword' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--data '{
    "identifier": "5a5bc3409f4ed64a95dacaa2",
    "resetToken": "rkfEmYuKNz",
    "password": "command123"
}'
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="Set Password" %}
```json
{
  "status": "success"
}
```
  {% endtab %}
{% endtabs %}


---
