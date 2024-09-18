
##  <img src="https://img.shields.io/badge/POST-fbe07c?style=flat" alt="POST" style="height: 30px;"/> Update webhook URL
```
{{url}}/v1/accounts/5e6e8e843f64700011b597e0/updatehook?accountId=5e6e8e843f64700011b597e0
```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|
|x-tag|MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=|
|Authorization|Bearer qunV2/TFpCQDVhzW7Z2lo9HaAR8jkY2QN457FDQ4eCE=|

### Query Parameters

|Param|Value|
|---|---|
|accountId|5e6e8e843f64700011b597e0|

### Body (**raw**)

```json
{ 
  "webhook": "https://postman-echo.com/post"
}
```

## Sample Request

{% tabs %}
  {% tab title="Update webhook url of a sub account" %}
```bash
curl --location --request POST '{{url}}/v1/accounts/5e6e8e843f64700011b597e0/updatehook?accountId=5e6e8e843f64700011b597e0' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer qunV2/TFpCQDVhzW7Z2lo9HaAR8jkY2QN457FDQ4eCE=' \
--data '{
    "webhook": "https://postman-echo.com/post"
}'
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="Update webhook url of a sub account" %}
```json
{
  "status": "success",
  "data": {
    "webhook": "https://postman-echo.com/post"
  }
}
```
  {% endtab %}
{% endtabs %}


---
