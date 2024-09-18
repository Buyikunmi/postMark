
##  <img src="https://img.shields.io/badge/POST-fbe07c?style=flat" alt="POST" style="height: 30px;"/> Send Money
Send money to an account number
```
{{url}}/v2/products/{{productID}}/purchase?accountId=5a981078f4442500195c7205
```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|
|x-tag|MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvbHVmZW1pQHltYWlsLmNvbSIsInVzZXIiOnsiX2lkIjoiNWE5ODEwNzhmNDQ0MjUwMDE5NWM3MjAxIiwibW9kZWwiOiJVc2VycyIsIl9fdiI6NSwidXBkYXRlIjp0cnVlLCJ1cGRhdGVkQXQiOiIyMDE4LTAzLTAxVDE0OjM4OjQ4LjY5MloiLCJ0YWdzIjpbIkJrZy1LZXFTdWYiLCJub3RfdmVyaWZpZWQiXSwiY3JlYXRlZEF0IjoiMjAxOC0wMy0wMVQxNDozODo0OC42ODdaIiwicm9sZXMiOlsiNWE5ODEwNzhmNDQ0MjUwMDE5NWM3MjA3IiwiNWE3NjVhZTAxNTIxYzEwMDIzOWFjYjMyIl0sImlzQmxvY2tlZCI6ZmFsc2UsImt5Y1ZlcmlmaWNhdGlvblN0YXR1cyI6Im5vdF92ZXJpZmllZCIsImF1dGhlbnRpY2F0aW9ucyI6WyI1YTk4MTA3OGY0NDQyNTAwMTk1YzcyMDYiXSwiYWRkcmVzc0Jvb2tzIjpbIjVhOTgxMDc4ZjQ0NDI1MDAxOTVjNzIwMyJdLCJhY2NvdW50cyI6WyI1YTk4MTA3OGY0NDQyNTAwMTk1YzcyMDUiXSwicmVmZXJyYWxDb2RlIjoiQmtnLUtlcVN1ZiJ9LCJhY2NvdW50Ijp7Il9pZCI6IjVhOTgxMDc4ZjQ0NDI1MDAxOTVjNzIwNSIsIm5hbWUiOiJpb2x1ZmVtaUB5bWFpbC5jb20iLCJfX3YiOjAsImJhbGFuY2UiOjEwLCJ0YWdzIjpbXSwiY3JlYXRlZEF0IjoiMjAxOC0wMy0wMVQxNDozODo0OC43NDFaIiwidXNlcnMiOlsiNWE5ODEwNzhmNDQ0MjUwMDE5NWM3MjAxIl19LCJpYXQiOjE1MTk5NDUwNDEsImV4cCI6MTUxOTk0ODY0MSwiYXVkIjoibXlnaXJvLmNvIiwiaXNzIjoiZW5zZW1ibGVsYWIuY29tLm5nIiwic3ViIjoiNWE5ODEwNzhmNDQ0MjUwMDE5NWM3MjAxIn0.cKl2Oy2DgotEsGg5iDKLxbsTJpRNv8Z-kujC9NY2iJs|

### Query Parameters

|Param|Value|
|---|---|
|accountId|5a981078f4442500195c7205|

### Body (**raw**)

```json
{
    "purchaseReference": "uniq_ref_123456",
    "amount": 400,
    "bankcode": "044",
    "accountNumber": "0690000005",
    "currency": "NGN",
    "senderName": "Your Name",
    "narration": "Description of the transaction"
}
```

## Sample Request

{% tabs %}
  {% tab title="Send Money" %}
```bash
curl --location --request POST 'https://sandbox.mygiro.co/v1/products/5a9297612032791140ff390f/purchase?accountId=5a762dd910af17001963f22a' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW5zZW1ibGVsYWIuY29tLm5nIiwidXNlciI6eyJfaWQiOiI1YTc2MmRkOTEwYWYxNzAwMTk2M2YyMjciLCJtb2RlbCI6IlVzZXJzIiwiX192Ijo1LCJ0YWdzIjpbXSwiY3JlYXRlZEF0IjoiMjAxOC0wMi0wM1QyMTo0NzowNS4wMzBaIiwicm9sZXMiOlsiNWE3NjJkZDkxMGFmMTcwMDE5NjNmMjJjIiwiNWE3NjJhYzJhYzY2NDYwMDE5ODYwMWRjIl0sImlzQmxvY2tlZCI6ZmFsc2UsImt5Y1ZlcmlmaWNhdGlvblN0YXR1cyI6Im5vdF92ZXJpZmllZCIsImF1dGhlbnRpY2F0aW9ucyI6WyI1YTc2MmRkOTEwYWYxNzAwMTk2M2YyMmIiXSwiYWRkcmVzc0Jvb2tzIjpbIjVhNzYyZGQ5MTBhZjE3MDAxOTYzZjIyOCJdLCJhY2NvdW50cyI6WyI1YTc2MmRkOTEwYWYxNzAwMTk2M2YyMmEiXSwicmVmZXJyYWxDb2RlIjoicmt4YjEwalg4RyJ9LCJhY2NvdW50Ijp7Il9pZCI6IjVhNzYyZGQ5MTBhZjE3MDAxOTYzZjIyYSIsIm5hbWUiOiJ1c2VyQGVuc2VtYmxlbGFiLmNvbS5uZyIsIl9fdiI6MCwiYmFsYW5jZSI6MywidGFncyI6W10sImNyZWF0ZWRBdCI6IjIwMTgtMDItMDNUMjE6NDc6MDUuMDg5WiIsInVzZXJzIjpbIjVhNzYyZGQ5MTBhZjE3MDAxOTYzZjIyNyJdfSwiaWF0IjoxNTE5OTE5MDQ5LCJleHAiOjE1MTk5MjI2NDksImF1ZCI6Im15Z2lyby5jbyIsImlzcyI6ImVuc2VtYmxlbGFiLmNvbS5uZyIsInN1YiI6IjVhNzYyZGQ5MTBhZjE3MDAxOTYzZjIyNyJ9.ErHud15ibOTRrMSeOFCto7mhre1WCYwqc7ca0vpoVgY' \
--data '{
    "purchaseReference": "uniq_ref_060991197",
    "amount": 400,
    "bankcode": "044",
    "accountNumber": "0690000005",
    "currency": "NGN",
    "senderName": "Your Name",
    "narration": "Description of the transaction"
}'
```
  {% endtab %}
  {% tab title="success: without query" %}
```bash
curl --location --request POST '{{url}}/v2/products/{{productID}}/purchase?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvbHVmZW1pQHltYWlsLmNvbSIsInVzZXIiOnsiX2lkIjoiNWE5ODEwNzhmNDQ0MjUwMDE5NWM3MjAxIiwibW9kZWwiOiJVc2VycyIsIl9fdiI6NSwidXBkYXRlIjp0cnVlLCJ1cGRhdGVkQXQiOiIyMDE4LTAzLTAxVDE0OjM4OjQ4LjY5MloiLCJ0YWdzIjpbIkJrZy1LZXFTdWYiLCJub3RfdmVyaWZpZWQiXSwiY3JlYXRlZEF0IjoiMjAxOC0wMy0wMVQxNDozODo0OC42ODdaIiwicm9sZXMiOlsiNWE5ODEwNzhmNDQ0MjUwMDE5NWM3MjA3IiwiNWE3NjVhZTAxNTIxYzEwMDIzOWFjYjMyIl0sImlzQmxvY2tlZCI6ZmFsc2UsImt5Y1ZlcmlmaWNhdGlvblN0YXR1cyI6Im5vdF92ZXJpZmllZCIsImF1dGhlbnRpY2F0aW9ucyI6WyI1YTk4MTA3OGY0NDQyNTAwMTk1YzcyMDYiXSwiYWRkcmVzc0Jvb2tzIjpbIjVhOTgxMDc4ZjQ0NDI1MDAxOTVjNzIwMyJdLCJhY2NvdW50cyI6WyI1YTk4MTA3OGY0NDQyNTAwMTk1YzcyMDUiXSwicmVmZXJyYWxDb2RlIjoiQmtnLUtlcVN1ZiJ9LCJhY2NvdW50Ijp7Il9pZCI6IjVhOTgxMDc4ZjQ0NDI1MDAxOTVjNzIwNSIsIm5hbWUiOiJpb2x1ZmVtaUB5bWFpbC5jb20iLCJfX3YiOjAsImJhbGFuY2UiOjEwLCJ0YWdzIjpbXSwiY3JlYXRlZEF0IjoiMjAxOC0wMy0wMVQxNDozODo0OC43NDFaIiwidXNlcnMiOlsiNWE5ODEwNzhmNDQ0MjUwMDE5NWM3MjAxIl19LCJpYXQiOjE1MTk5NDUwNDEsImV4cCI6MTUxOTk0ODY0MSwiYXVkIjoibXlnaXJvLmNvIiwiaXNzIjoiZW5zZW1ibGVsYWIuY29tLm5nIiwic3ViIjoiNWE5ODEwNzhmNDQ0MjUwMDE5NWM3MjAxIn0.cKl2Oy2DgotEsGg5iDKLxbsTJpRNv8Z-kujC9NY2iJs' \
--data '{
    "purchaseReference": "8474747483837484737823833733",
    "amount": 400,
    "bankcode": "044",
    "accountNumber": "0690000005",
    "currency": "NGN",
    "senderName": "Your Name",
    "narration": "Description of the transaction"
}'
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="Send Money" %}
```json
{
  "status": "success",
  "data": {
    "purchaseReference": "uniq_ref_060991197",
    "cost": 400,
    "customerFee": 0,
    "cashback": 10,
    "totalCost": 400,
    "description": "NGN400 - Money Transfer - uniq_ref_060991197",
    "currency": "NGN",
    "status": "completed",
    "paid": true,
    "delivered": true,
    "settled": true,
    "canRefund": false,
    "product": "5a9297612032791140ff390f",
    "productsDetails": {
      "owner": "5a762dd910af17001963f22a",
      "amount": 400,
      "bankcode": "044",
      "currency": "NGN",
      "createdBy": "5a762dd910af17001963f22a",
      "narration": "Description of the transaction",
      "senderName": "Your Name",
      "accountNumber": "0690000005",
      "purchaseReference": "uniq_ref_060991197"
    },
    "ipAddress": "197.211.60.41",
    "account": "5a762dd910af17001963f22a",
    "deliveryLog": {
      "id": 77585,
      "r1": null,
      "r2": null,
      "ipr": null,
      "ref": "383",
      "iprc": null,
      "meta": "{\"narration\":\"Description of the transaction\",\"sender\":\"Your Name\",\"balance\":49885242}",
      "amount": 400,
      "refund": false,
      "status": "completed",
      "reversed": false,
      "createdAt": "2018-03-01T16:22:34.000Z",
      "updatedAt": "2018-03-01T16:22:38.000Z",
      "beneficiary": {
        "bankCode": "044",
        "accountNumber": "0690000005"
      },
      "system_type": "wallet-disburse",
      "walletCharged": true,
      "disburseOrderId": null,
      "flutterReference": "TTMW000077585",
      "linkingReference": "04400920021",
      "paymentReference": 383,
      "flutterResponseCode": "00",
      "flutterResponseMessage": "Successful"
    },
    "settlementLog": {},
    "refundLog": null,
    "validationDetails": null,
    "owner": "5a762dd910af17001963f22a",
    "createdBy": "5a762dd910af17001963f22a",
    "client": null,
    "developer": null,
    "tags": "uniq_ref_060991197, NGN, NGN400, -, Money, Transfer, -, uniq_ref_060991197, 5a9297612032791140ff390f, 197.211.60.41, 5a762dd910af17001963f22a, 5a762dd910af17001963f22a, 5a762dd910af17001963f22a, pending",
    "_id": 76,
    "createdAt": "2018-03-01T16:22:31.000Z",
    "updatedAt": "2018-03-01T16:22:39.000Z"
  },
  "query": true
}
```
  {% endtab %}
  {% tab title="success: without query" %}
```json
{
  "status": "success",
  "data": {
    "purchaseReference": "8474747483837484737823833733",
    "cost": 400,
    "customerFee": 8,
    "cashback": 50,
    "totalCost": 408,
    "description": "NGN400 - Money Transfer - 8474747483837484737823833733",
    "currency": "NGN",
    "status": "accepted",
    "paid": true,
    "delivered": false,
    "settled": false,
    "canRefund": false,
    "product": "63b6953d1fd341ee430cbd93",
    "productsDetails": {
      "owner": "6404b6821116c4001362c555",
      "amount": 400,
      "bankcode": "044",
      "currency": "NGN",
      "createdBy": "6404b6821116c4001362c555",
      "narration": "Description of the transaction",
      "senderName": "Your Name",
      "accountNumber": "0690000005",
      "purchaseReference": "8474747483837484737823833733"
    },
    "ipAddress": "::ffff:192.168.32.94",
    "account": "6404b6821116c4001362c555",
    "deliveryLog": null,
    "settlementLog": null,
    "refundLog": null,
    "validationDetails": null,
    "batch": null,
    "payment": 2057,
    "retryCount": 0,
    "owner": "6404b6821116c4001362c555",
    "createdBy": "6404b6821116c4001362c555",
    "client": null,
    "developer": null,
    "tags": null,
    "_id": 1657,
    "createdAt": "2023-07-03T12:43:14.000Z",
    "updatedAt": "2023-07-03T12:43:15.000Z"
  }
}
```
  {% endtab %}
{% endtabs %}


---
