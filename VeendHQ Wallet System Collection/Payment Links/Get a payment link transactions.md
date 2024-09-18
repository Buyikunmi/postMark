
##  <img src="https://img.shields.io/badge/GET-177e23?style=flat" alt="GET" style="height: 30px;"/> Get a payment link transactions
The channel can either be `card` or `transfer` (default is `card`).
```
{{url}}/v1/paymentlinks/639c90ecd62c230013cafb50/transactions?accountId={{accountId}}&channel=card
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
|channel|card|

## Sample Request

{% tabs %}
  {% tab title="success: no transactions" %}
```bash
curl --location --request GET '{{url}}/v1/paymentlinks/639c90ecd62c230013cafb50/transactions?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "Gucci bag 3"
}'
```
  {% endtab %}
  {% tab title="err: link not found" %}
```bash
curl --location --request GET '{{url}}/v1/paymentlinks/639c90ecd62c230013cafb59/transactions?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "Gucci bag 3"
}'
```
  {% endtab %}
  {% tab title="success" %}
```bash
curl --location --request GET '{{url}}/v1/paymentlinks/643bb6445b528700138f5406/transactions?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="success: no transactions" %}
```json
{
  "status": "success",
  "data": []
}
```
  {% endtab %}
  {% tab title="err: link not found" %}
```json
{
  "status": "error",
  "message": "not found"
}
```
  {% endtab %}
  {% tab title="success" %}
```json
{
  "status": "success",
  "data": [
    {
      "status": "completed",
      "paymentReference": "GIyfLze7ReyW1681647951419ROAD-+",
      "description": "Urgent 2k for the weekend test/GIyfLze7ReyW1681647951419RO",
      "amount": 150,
      "previousBalance": null,
      "newBalance": null,
      "previousUserBalance": 440227,
      "newUserBalance": 440377,
      "account": "623b51c765a5ef0013d4350e",
      "purchase": null,
      "paymentProcessor": "VeendHQ",
      "paymentProcessorReference": "2673-deposit",
      "currency": "NGN",
      "isPassive": 0,
      "passiveAccount": null,
      "owner": "623b51c765a5ef0013d4350e",
      "createdBy": "623b51c765a5ef0013d4350e",
      "client": null,
      "developer": null,
      "tags": null,
      "_id": 1475,
      "createdAt": "2023-04-16T12:27:06.000Z",
      "updatedAt": "2023-04-16T12:27:06.000Z",
      "narration": "CARD Transaction ",
      "paymentType": "card",
      "datePaid": "2023-04-16T12:26:54.000Z",
      "customerPhone": null,
      "customerName": "Anonymous customer"
    }
  ]
}
```
  {% endtab %}
{% endtabs %}


---
