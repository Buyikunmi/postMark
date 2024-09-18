
##  <img src="https://img.shields.io/badge/DELETE-ef6f6c?style=flat" alt="DELETE" style="height: 30px;"/> Delete payment link
```
{{url}}/v1/paymentlinks/639c8f77d62c230013cafb42?accountId={{accountId}}
```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|
|x-tag|MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=|
|Authorization|Bearer {{token}}|

### Query Parameters

|Param|Value|
|---|---|
|accountId|{{accountId}}|

## Sample Request

{% tabs %}
  {% tab title="err: payment link not existing" %}
```bash
curl --location --request DELETE '{{url}}/v1/paymentlinks/639c90ecd62c230013cafb59?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="err: payment link not existing" %}
```json
{
  "status": "error",
  "message": "not found"
}
```
  {% endtab %}
{% endtabs %}


---
