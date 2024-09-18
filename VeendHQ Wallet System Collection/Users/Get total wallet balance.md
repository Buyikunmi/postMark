
##  <img src="https://img.shields.io/badge/GET-177e23?style=flat" alt="GET" style="height: 30px;"/> Get total wallet balance
```
{{url}}/users/{{userId}}/allBalance?accountId={{accountId}}
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
curl --location --request GET '{{url}}/users/{{userId}}/allBalance?accountId={{accountId}}' \
--header 'x-tag: ZTk4NmVjNmJiODMyNTc0OTBhZDU4ZDM1NjdhOGUyZTQwNDY5NWFlZWRjZTIwYzVkNTBiYWYwMzY4YTUxOGJlYS8vLy8vLzY1MTA=' \
--header 'Authorization: Bearer {{token}}' \
```
  {% endtab %}
  {% tab title="yesir" %}
```bash
curl --location --request GET '{{url}}/users/6342d970d8e8b50015306aa9/allBalance?accountId={{yesir}}' \
--header 'x-tag: ZTk4NmVjNmJiODMyNTc0OTBhZDU4ZDM1NjdhOGUyZTQwNDY5NWFlZWRjZTIwYzVkNTBiYWYwMzY4YTUxOGJlYS8vLy8vLzY1MTA=' \
--header 'Authorization: Bearer {{token}}' \
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
    "amount": 17042.25
  }
}
```
  {% endtab %}
  {% tab title="yesir" %}
```json
{
  "status": "success",
  "data": {
    "amount": -7250
  }
}
```
  {% endtab %}
{% endtabs %}


---
