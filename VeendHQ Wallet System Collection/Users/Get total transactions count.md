
##  <img src="https://img.shields.io/badge/GET-177e23?style=flat" alt="GET" style="height: 30px;"/> Get total transactions count
```
{{url}}/users/{{userId}}/transactions?accountId={{accountId}}
```
### Headers

|Content-Type|Value|
|---|---|
|x-tag|ZTk4NmVjNmJiODMyNTc0OTBhZDU4ZDM1NjdhOGUyZTQwNDY5NWFlZWRjZTIwYzVkNTBiYWYwMzY4YTUxOGJlYS8vLy8vLzY1MTA=|
|Authorization|Bearer {{token}}|

### Query Parameters

|Param|Value|
|---|---|
|accountId|{{accountId}}|

## Sample Request

{% tabs %}
  {% tab title="success" %}
```bash
curl --location --request GET '{{url}}/users/{{userId}}/transactions?accountId={{accountId}}' \
--header 'x-tag: ZTk4NmVjNmJiODMyNTc0OTBhZDU4ZDM1NjdhOGUyZTQwNDY5NWFlZWRjZTIwYzVkNTBiYWYwMzY4YTUxOGJlYS8vLy8vLzY1MTA=' \
--header 'Authorization: Bearer {{token}}' \
```
  {% endtab %}
  {% tab title="yesir" %}
```bash
curl --location --request GET '{{url}}/users/6342d970d8e8b50015306aa9/transactions?accountId={{yesir}}' \
--header 'Authorization: Bearer {{token}}' \
```
  {% endtab %}
  {% tab title="new account" %}
```bash
curl --location --request GET '{{url}}/users/63c524c3f17eba0013ca39b6/transactions?accountId={{meth}}' \
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
    "totalWithdrawalsCount": 45,
    "totalDepositsCount": 25,
    "totalTransactions": 70
  }
}
```
  {% endtab %}
  {% tab title="yesir" %}
```json
{
  "status": "success",
  "data": {
    "totalWithdrawalsCount": 6,
    "totalDepositsCount": 3,
    "totalTransactions": 9
  }
}
```
  {% endtab %}
  {% tab title="new account" %}
```json
{
  "status": "success",
  "data": {
    "totalWithdrawalsCount": 0,
    "totalDepositsCount": 0,
    "totalTransactions": 0
  }
}
```
  {% endtab %}
{% endtabs %}


---
