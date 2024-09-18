
##  <img src="https://img.shields.io/badge/POST-fbe07c?style=flat" alt="POST" style="height: 30px;"/> Create Sub-Account
```
{{url}}/v1/accounts/62bffdf5270d0600135de473/subaccount?accountId=62bffdf5270d0600135de473
```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|
|x-tag|MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplbW9oa3VubGUxOTk5QGdtYWlsLmNvbSIsInVzZXIiOnsidHdvRmFjdG9yIjpmYWxzZSwiYWNjb3VudHMiOlsiNjJiZmZkZjUyNzBkMDYwMDEzNWRlNDczIl0sImFkZHJlc3NCb29rcyI6WyI2MmJmZmRmNTI3MGQwNjAwMTM1ZGU0NzAiXSwiYXV0aGVudGljYXRpb25zIjpbIjYyYmZmZGY1MjcwZDA2MDAxMzVkZTQ3NyJdLCJreWNWZXJpZmljYXRpb25TdGF0dXMiOiJub3RfdmVyaWZpZWQiLCJpc0Jsb2NrZWQiOmZhbHNlLCJyb2xlcyI6WyI2MmJmZmRmNTI3MGQwNjAwMTM1ZGU0N2QiLCI2MjNiNDViOTQ2M2I3YTAwMTNkMjk3MzgiXSwidGFncyI6W10sIl9pZCI6IjYyYmZmZGY1MjcwZDA2MDAxMzVkZTQ2ZSIsImZpcnN0TmFtZSI6IlZlZW5kSFEiLCJsYXN0TmFtZSI6IkluYyIsImJ1c2luZXNzTmFtZSI6IlZlZW5kSFEgSW5jIiwicmVmZXJyYWxDb2RlIjoiSDVkZjg4Y1VleSIsImNyZWF0ZWRBdCI6IjIwMjItMDctMDJUMDg6MTI6MzcuMjg4WiIsIm1vZGVsIjoiVXNlcnMiLCJfX3YiOjUsImNsaWVudElkIjoiMzkiLCJ1cGRhdGVkQXQiOiIyMDIyLTA3LTAyVDA4OjEyOjM4LjUwOFoifSwiYWNjb3VudCI6eyJ1c2VycyI6WyI2MmJmZmRmNTI3MGQwNjAwMTM1ZGU0NmUiXSwiYXV0b1JldHJ5Ijp0cnVlLCJiYWxhbmNlVGhyZXNob2xkIjowLCJ0YWdzIjpbXSwiX2lkIjoiNjJiZmZkZjUyNzBkMDYwMDEzNWRlNDczIiwibmFtZSI6ImplbW9oa3VubGUxOTk5QGdtYWlsLmNvbSIsImN1cnJlbmN5IjoiTkdOIiwiY3JlYXRlZEF0IjoiMjAyMi0wNy0wMlQwODoxMjozNy40NDRaIiwiX192IjowLCJiYWxhbmNlIjoxMDYsInNhdmluZ3NJZCI6IjM5IiwidXBkYXRlZEF0IjoiMjAyMi0wNy0wMlQwODoxMjozOC40MjVaIn0sImlhdCI6MTY1Njc0OTYwNiwiZXhwIjoxNjU2NzUzMjA2LCJhdWQiOiJ2ZWVuZGhxLmNvbSIsImlzcyI6InZlZW5kaHEuY29tIiwic3ViIjoiNjJiZmZkZjUyNzBkMDYwMDEzNWRlNDZlIn0.PfPRtcWepkvZT029daIGRn-zousVu4DasTo-eH_X5EM|

### Query Parameters

|Param|Value|
|---|---|
|accountId|62bffdf5270d0600135de473|

### Body (**raw**)

```json
{ 
	"name": "Test Sub Account",
	"user": "62bffdf5270d0600135de46e", // your user ID returned during registration
	"webhookurl": "http://request.lendlot.com/x41pajx4",
    "currency": "NGN"
}
```

## Sample Request

{% tabs %}
  {% tab title="success" %}
```bash
curl --location --request POST '{{url}}/v1/accounts/62bffdf5270d0600135de473/subaccount?accountId=62bffdf5270d0600135de473' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplbW9oa3VubGUxOTk5QGdtYWlsLmNvbSIsInVzZXIiOnsidHdvRmFjdG9yIjpmYWxzZSwiYWNjb3VudHMiOlsiNjJiZmZkZjUyNzBkMDYwMDEzNWRlNDczIl0sImFkZHJlc3NCb29rcyI6WyI2MmJmZmRmNTI3MGQwNjAwMTM1ZGU0NzAiXSwiYXV0aGVudGljYXRpb25zIjpbIjYyYmZmZGY1MjcwZDA2MDAxMzVkZTQ3NyJdLCJreWNWZXJpZmljYXRpb25TdGF0dXMiOiJub3RfdmVyaWZpZWQiLCJpc0Jsb2NrZWQiOmZhbHNlLCJyb2xlcyI6WyI2MmJmZmRmNTI3MGQwNjAwMTM1ZGU0N2QiLCI2MjNiNDViOTQ2M2I3YTAwMTNkMjk3MzgiXSwidGFncyI6W10sIl9pZCI6IjYyYmZmZGY1MjcwZDA2MDAxMzVkZTQ2ZSIsImZpcnN0TmFtZSI6IlZlZW5kSFEiLCJsYXN0TmFtZSI6IkluYyIsImJ1c2luZXNzTmFtZSI6IlZlZW5kSFEgSW5jIiwicmVmZXJyYWxDb2RlIjoiSDVkZjg4Y1VleSIsImNyZWF0ZWRBdCI6IjIwMjItMDctMDJUMDg6MTI6MzcuMjg4WiIsIm1vZGVsIjoiVXNlcnMiLCJfX3YiOjUsImNsaWVudElkIjoiMzkiLCJ1cGRhdGVkQXQiOiIyMDIyLTA3LTAyVDA4OjEyOjM4LjUwOFoifSwiYWNjb3VudCI6eyJ1c2VycyI6WyI2MmJmZmRmNTI3MGQwNjAwMTM1ZGU0NmUiXSwiYXV0b1JldHJ5Ijp0cnVlLCJiYWxhbmNlVGhyZXNob2xkIjowLCJ0YWdzIjpbXSwiX2lkIjoiNjJiZmZkZjUyNzBkMDYwMDEzNWRlNDczIiwibmFtZSI6ImplbW9oa3VubGUxOTk5QGdtYWlsLmNvbSIsImN1cnJlbmN5IjoiTkdOIiwiY3JlYXRlZEF0IjoiMjAyMi0wNy0wMlQwODoxMjozNy40NDRaIiwiX192IjowLCJiYWxhbmNlIjoxMDYsInNhdmluZ3NJZCI6IjM5IiwidXBkYXRlZEF0IjoiMjAyMi0wNy0wMlQwODoxMjozOC40MjVaIn0sImlhdCI6MTY1Njc0OTYwNiwiZXhwIjoxNjU2NzUzMjA2LCJhdWQiOiJ2ZWVuZGhxLmNvbSIsImlzcyI6InZlZW5kaHEuY29tIiwic3ViIjoiNjJiZmZkZjUyNzBkMDYwMDEzNWRlNDZlIn0.PfPRtcWepkvZT029daIGRn-zousVu4DasTo-eH_X5EM' \
--data '{
    "name": "Test Sub Account",
    "user": "62bffdf5270d0600135de46e",
    "webhookurl": "http://request.lendlot.com/x41pajx4",
    "currency": "NGN"
}'
```
  {% endtab %}
  {% tab title="jamal for yesir" %}
```bash
curl --location --request POST '{{url}}/v1/accounts/{{yesir}}/subaccount?accountId={{yesir}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "jamal",
    "user": "6342d970d8e8b50015306aa9",
    "webhookurl": "https://eoqyr90lznnx93w.m.pipedream.net",
    "currency": "NGN"
}'
```
  {% endtab %}
  {% tab title="lekan for yesir" %}
```bash
curl --location --request POST '{{url}}/v1/accounts/{{yesir}}/subaccount?accountId={{yesir}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "lekan",
    "user": "6342d970d8e8b50015306aa9",
    "webhookurl": "https://eoqyr90lznnx93w.m.pipedream.net",
    "currency": "NGN"
}'
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="success" %}
```json
{
  "status": "success",
  "data": {
    "users": [
      "62bffdf5270d0600135de46e"
    ],
    "autoRetry": true,
    "balanceThreshold": 0,
    "tags": [],
    "_id": "62c00017270d0600135de57b",
    "name": "Test Sub Account",
    "webhookURL": "http://request.lendlot.com/x41pajx4",
    "currency": "NGN",
    "createdAt": "2022-07-02T08:21:43.721Z",
    "__v": 0
  }
}
```
  {% endtab %}
  {% tab title="jamal for yesir" %}
```json
{
  "status": "success",
  "data": {
    "users": [
      "6342d970d8e8b50015306aa9"
    ],
    "autoRetry": true,
    "balanceThreshold": 0,
    "accountType": "active",
    "dailyLimit": 0,
    "monthlyLimit": 0,
    "singleTransactionLimit": 0,
    "tags": [],
    "_id": "63a5c34a5aacc30013fb007c",
    "name": "jamal",
    "webhookURL": "https://eoqyr90lznnx93w.m.pipedream.net",
    "currency": "NGN",
    "createdAt": "2022-12-23T15:03:38.873Z",
    "__v": 0
  }
}
```
  {% endtab %}
  {% tab title="lekan for yesir" %}
```json
{
  "status": "success",
  "data": {
    "users": [
      "6342d970d8e8b50015306aa9"
    ],
    "autoRetry": true,
    "balanceThreshold": 0,
    "accountType": "active",
    "dailyLimit": 0,
    "monthlyLimit": 0,
    "singleTransactionLimit": 0,
    "tags": [],
    "_id": "63a5cc3d5aacc30013fb0175",
    "name": "lekan",
    "webhookURL": "https://eoqyr90lznnx93w.m.pipedream.net",
    "currency": "NGN",
    "createdAt": "2022-12-23T15:41:49.843Z",
    "__v": 0
  }
}
```
  {% endtab %}
{% endtabs %}


---
