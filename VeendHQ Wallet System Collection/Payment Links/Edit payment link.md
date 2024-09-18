
##  <img src="https://img.shields.io/badge/PATCH-7711A7?style=flat" alt="PATCH" style="height: 30px;"/> Edit payment link
```
{{url}}/v1/paymentlinks/639c90ecd62c230013cafb50?accountId={{accountId}}
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

### Body (**raw**)

```json
{
    "name": "Gucci bag 3"
}
```

## Sample Request

{% tabs %}
  {% tab title="err: no data passed" %}
```bash
curl --location --request PATCH '{{url}}/v1/paymentlinks/639c90ecd62c230013cafb50?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
```
  {% endtab %}
  {% tab title="success" %}
```bash
curl --location --request PATCH '{{url}}/v1/paymentlinks/639c90ecd62c230013cafb50?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "Gucci bag 3"
}'
```
  {% endtab %}
  {% tab title="err: no found" %}
```bash
curl --location --request PATCH '{{url}}/v1/paymentlinks/639c90ecd62c230013cafb59?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "Gucci bag 3"
}'
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="err: no data passed" %}
```json
{
  "status": "error",
  "message": "No update made yet"
}
```
  {% endtab %}
  {% tab title="success" %}
```json
{
  "status": "success",
  "data": {
    "isActive": false,
    "type": "oneTime",
    "additionalInfoToCollect": [
      "mobile_number",
      "home_address"
    ],
    "tags": [
      "oneTime",
      "Gucci",
      "bag",
      "2",
      "An",
      "original",
      "gucci",
      "bag",
      "that's",
      "affordable",
      "62bffdf5270d0600135de473",
      "https://res.cloudinary.com/jimrid/image/upload/v1637149484/avatar_dlxd4x.png",
      "639c90ecd62c230013cafb4f",
      "V---pLFfAk"
    ],
    "_id": "639c90ecd62c230013cafb50",
    "name": "Gucci bag 3",
    "description": "An original gucci bag that's affordable",
    "account": "62bffdf5270d0600135de473",
    "image": "https://res.cloudinary.com/jimrid/image/upload/v1637149484/avatar_dlxd4x.png",
    "product": "639c90ecd62c230013cafb4f",
    "slug": "V---pLFfAk",
    "createdAt": "2022-12-16T15:38:20.825Z",
    "model": "Paymentlinks",
    "__v": 0,
    "updatedAt": "2022-12-16T15:38:20.868Z"
  }
}
```
  {% endtab %}
  {% tab title="err: no found" %}
```json
{
  "status": "error",
  "message": "not found"
}
```
  {% endtab %}
{% endtabs %}


---
