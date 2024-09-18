
##  <img src="https://img.shields.io/badge/POST-fbe07c?style=flat" alt="POST" style="height: 30px;"/> Transfer between accounts
```
{{url}}/v1/accounts/{{from}}/transfer/{{to}}?accountId={{accountId}}
```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer YZroCzmX/ELPJrOjNnN920PJM1PYiF5ooobw3WyCz6o=|
|x-tag|MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=|
|Content-Type|application/json|

### Query Parameters

|Param|Value|
|---|---|
|accountId|{{accountId}}|

### Body (**raw**)

```json
{
  "amount": 326000,
  "description": "Account funding for Airtime Payment"
}
```

## Sample Request

{% tabs %}
  {% tab title="Transfer between accounts" %}
```bash
curl --location --request POST 'https://sandbox.mygiro.co/v1/accounts/5a765ae9ade1460023feb2e0/transfer/5a79f228b2223f0023f59afa?accountId=5a765ae9ade1460023feb2e0' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZtQGVuc2VtYmxlbGFiLmNvbS5uZyIsInVzZXIiOnsiX2lkIjoiNWE3NjVhZTlhZGUxNDYwMDIzZmViMmRkIiwibW9kZWwiOiJVc2VycyIsIl9fdiI6NSwidXBkYXRlIjp0cnVlLCJ1cGRhdGVkQXQiOiIyMDE4LTAyLTA0VDAwOjU5OjIxLjE4MFoiLCJ0YWdzIjpbInJrZWJlb0FRTEciLCJub3RfdmVyaWZpZWQiXSwiY3JlYXRlZEF0IjoiMjAxOC0wMi0wNFQwMDo1OToyMS4xNDZaIiwicm9sZXMiOlsiNWE3NjVhZTlhZGUxNDYwMDIzZmViMmUyIiwiNWE3NjVhZTAxNTIxYzEwMDIzOWFjYjMyIiwiNWE3NjVhZTAxNTIxYzEwMDIzOWFjYjM1Il0sImlzQmxvY2tlZCI6ZmFsc2UsImt5Y1ZlcmlmaWNhdGlvblN0YXR1cyI6Im5vdF92ZXJpZmllZCIsImF1dGhlbnRpY2F0aW9ucyI6WyI1YTc2NWFlOWFkZTE0NjAwMjNmZWIyZTEiXSwiYWRkcmVzc0Jvb2tzIjpbIjVhNzY1YWU5YWRlMTQ2MDAyM2ZlYjJkZSJdLCJhY2NvdW50cyI6WyI1YTc2NWFlOWFkZTE0NjAwMjNmZWIyZTAiXSwicmVmZXJyYWxDb2RlIjoicmtlYmVvQVFMRyJ9LCJhY2NvdW50Ijp7Il9pZCI6IjVhNzY1YWU5YWRlMTQ2MDAyM2ZlYjJlMCIsIm5hbWUiOiJmbUBlbnNlbWJsZWxhYi5jb20ubmciLCJfX3YiOjAsImJhbGFuY2UiOjEsInRhZ3MiOltdLCJjcmVhdGVkQXQiOiIyMDE4LTAyLTA0VDAwOjU5OjIxLjIwOVoiLCJ1c2VycyI6WyI1YTc2NWFlOWFkZTE0NjAwMjNmZWIyZGQiXX0sImlhdCI6MTUyNTg3MjI0OCwiZXhwIjoxNTI1ODc1ODQ4LCJhdWQiOiJteWdpcm8uY28iLCJpc3MiOiJlbnNlbWJsZWxhYi5jb20ubmciLCJzdWIiOiI1YTc2NWFlOWFkZTE0NjAwMjNmZWIyZGQifQ.k3jelM6hwJdjSBj9bTXpkRXDV8yd2IXp9jH5rhGfGAI' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Content-Type: application/json' \
--data '{
    "amount": 326000,
    "description": "Account funding for Airtime Payment"
}'
```
  {% endtab %}
  {% tab title="anna to jamal" %}
```bash
curl --location --request POST '{{url}}/v1/accounts/{{anna}}/transfer/63a5c34a5aacc30013fb007c?accountId={{anna}}' \
--header 'Authorization: Bearer {{token}}' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Content-Type: application/json' \
--data '{
    "amount": 2000,
    "description": "testing"
}'
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="Transfer between accounts" %}
```json
{
  "status": "success",
  "data": {
    "status": "completed",
    "amount": 326000,
    "paymentReference": "31885182152587292618013"
  }
}
```
  {% endtab %}
  {% tab title="anna to jamal" %}
```json
{
  "status": "success",
  "data": {
    "purchaseReference": "NGN_INTERNAL_DEPOSIT_1671809944834",
    "cost": 2000,
    "merchantFee": 0,
    "customerFee": 0,
    "cashback": 0,
    "referralCommission": 0,
    "totalCost": 2000,
    "description": "NGN2000 - NGN Internal - Deposit - jamal - NGN_INTERNAL_DEPOSIT_1671809944834",
    "currency": "NGN",
    "status": "accepted",
    "paid": true,
    "delivered": false,
    "settled": false,
    "canRefund": false,
    "product": "63a5c34b5aacc30013fb0082",
    "productsDetails": {
      "owner": "635424d2876fc90013914eef",
      "amount": "2000",
      "currency": "NGN",
      "description": "testing",
      "purchaseReference": "NGN_INTERNAL_DEPOSIT_1671809944834"
    },
    "ipAddress": "::ffff:192.168.32.55",
    "account": "635424d2876fc90013914eef",
    "deliveryLog": null,
    "settlementLog": null,
    "refundLog": null,
    "validationDetails": null,
    "batch": null,
    "payment": 374,
    "retryCount": 0,
    "owner": "635424d2876fc90013914eef",
    "createdBy": "635424d2876fc90013914eef",
    "client": null,
    "developer": null,
    "tags": null,
    "_id": 312,
    "createdAt": "2022-12-23T15:39:04.000Z",
    "updatedAt": "2022-12-23T15:39:05.000Z"
  }
}
```
  {% endtab %}
{% endtabs %}


---
