
##  <img src="https://img.shields.io/badge/POST-fbe07c?style=flat" alt="POST" style="height: 30px;"/> Verify Sign Up
Verifies the users email or phone number after sign up
```
{{url}}/v1/verify
```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|
|x-tag|MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=|

### Body (**raw**)

```json
{ "email": "foo@taa.com", "validationCode": "394860" }
```

## Sample Request

{% tabs %}
  {% tab title="Verify Sign Up" %}
```bash
curl --location --request POST 'localhost:8080/verify' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--data '{
    "email": "foo@taa.com",
    "validationCode": "394860"
}'
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="Verify Sign Up" %}
```json
{
  "status": "success",
  "data": {
    "_id": "5a5bc3409f4ed64a95daca9f",
    "model": "Addressbooks",
    "type": "email",
    "value": "foo@taa.com",
    "user": "5a5bc3409f4ed64a95daca9e",
    "__v": 0,
    "update": true,
    "updatedAt": "2018-01-14T22:21:04.009Z",
    "tags": [
      "5a5bc3409f4ed64a95daca9e",
      "foo@taa.com",
      "email"
    ],
    "createdAt": "2018-01-14T20:53:20.284Z",
    "validationCode": 137699,
    "validated": true
  }
}
```
  {% endtab %}
{% endtabs %}


---
