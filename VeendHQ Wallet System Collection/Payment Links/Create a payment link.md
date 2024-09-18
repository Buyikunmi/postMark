
##  <img src="https://img.shields.io/badge/POST-fbe07c?style=flat" alt="POST" style="height: 30px;"/> Create a payment link
This endpoint enables users to create a payment link associated with a specific account. Upon creation, the payment link can be shared with customers to facilitate payments for products or services. A slug is returned in the response which is unique.

A payment link can be constructed using the format **`{{url}}/p/{{slug}}`**

**URL**: On sandbox, use `test.veendhq.com` while on production, use `pay.veendhq.com` E.g [https://pay.veendhq.com/p/JW1cCbfq](https://pay.veendhq.com/p/JW1cCbfqTN)

To create payment link:

- `name`, `description`, `currency` and `amount` are required fields
- `type` defaults to **oneTime** if not passed, currently supports only **oneTime** but the acceptable types are **oneTime** and **recurring**
- `amount` entered should be between **100** and **10 million** NGN
- `additionalInfoToCollect` is an optional field that should be an _array of comma-separated strings_
- `image` is optional and should be the url to the image
- `channels` defaults to **\[card, bank-transfer\]** if not passed. Acceptable channels currently are card and bank-transfer. If both are selected, it means users can pay using their card through the link using the provider we support and can pay using the account number generated for the transaction
- `webhookUrl` is optional, defines the url to receive the callback
- `reference` is optional and should be unique if passed, this is sent back as part of the data in the callback
```
{{url}}/v1/paymentlinks?accountId={{accountId}}
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
    "name": "Gucci bag 2",
    "description": "An original gucci bag that's affordable",
    "currency": "NGN",
    "amount": 500,
    "additionalInfoToCollect": [],
    "image": "https://res.cloudinary.com/jimrid/image/upload/v1637149484/avatar_dlxd4x.png",
    "otherAdditionalData": {
        "businessDetails": {
            "businessName": "ABC Limited"
        }
    },
    "channels": ["card"],
    "reference": "unique reference 123",
    "webhookUrl": "https://webhook.site/089f987e-8696-47e6-a387-6544401e576c"
}
```

## Sample Request

{% tabs %}
  {% tab title="success" %}
```bash
curl --location --request POST '{{url}}/v1/paymentlinks?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "Gucci bag 2",
    "description": "An original gucci bag that's affordable",
    "amount": "3800",
    "additionalInfoToCollect": [
        "mobile_number",
        "home_address"
    ]
}'
```
  {% endtab %}
  {% tab title="err: validation" %}
```bash
curl --location --request POST '{{url}}/v1/paymentlinks?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
```
  {% endtab %}
  {% tab title="err: invalid amount" %}
```bash
curl --location --request POST '{{url}}/v1/paymentlinks?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "Gucci bag 2",
    "description": "An original gucci bag that's affordable",
    "amount": "kkkk"
}'
```
  {% endtab %}
  {% tab title="err: amount between 100 and 10,000,000" %}
```bash
curl --location --request POST '{{url}}/v1/paymentlinks?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "Gucci bag 2",
    "description": "An original gucci bag that's affordable",
    "amount": "90"
}'
```
  {% endtab %}
  {% tab title="err: amount between 100 and 10,000,000" %}
```bash
curl --location --request POST '{{url}}/v1/paymentlinks?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "Gucci bag 2",
    "description": "An original gucci bag that's affordable",
    "amount": "1000000000000"
}'
```
  {% endtab %}
  {% tab title="err: additionalInfoToCollect should be an array" %}
```bash
curl --location --request POST '{{url}}/v1/paymentlinks?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "Gucci bag 2",
    "description": "An original gucci bag that's affordable",
    "amount": "3800",
    "additionalInfoToCollect": "jj"
}'
```
  {% endtab %}
  {% tab title="success: with image" %}
```bash
curl --location --request POST '{{url}}/v1/paymentlinks?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "Gucci bag 2",
    "description": "An original gucci bag that's affordable",
    "amount": "3800",
    "additionalInfoToCollect": [
        "mobile_number",
        "home_address"
    ],
    "image": "https://res.cloudinary.com/jimrid/image/upload/v1637149484/avatar_dlxd4x.png"
}'
```
  {% endtab %}
  {% tab title="err: invalid payment methods passed" %}
```bash
curl --location --request POST '{{url}}/v1/paymentlinks?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "Versace bag 1",
    "description": "An original versace bag that's affordable",
    "amount": "4200",
    "additionalInfoToCollect": [
        "mobile_number",
        "home_address"
    ],
    "image": "https://res.cloudinary.com/jimrid/image/upload/v1637149484/avatar_dlxd4x.png",
    "paymentMethods": [
        "-"
    ]
}'
```
  {% endtab %}
  {% tab title="err: when payment method is empty" %}
```bash
curl --location --request POST '{{url}}/v1/paymentlinks?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "name": "Versace bag 1",
    "description": "An original versace bag that's affordable",
    "amount": "4200",
    "additionalInfoToCollect": [
        "mobile_number",
        "home_address"
    ],
    "image": "https://res.cloudinary.com/jimrid/image/upload/v1637149484/avatar_dlxd4x.png",
    "paymentMethods": []
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
    "isActive": false,
    "type": "oneTime",
    "additionalInfoToCollect": [
      "mobile_number",
      "home_address"
    ],
    "tags": [],
    "_id": "639c8f77d62c230013cafb42",
    "name": "Gucci bag 2",
    "description": "An original gucci bag that's affordable",
    "account": "62bffdf5270d0600135de473",
    "product": "639c8f77d62c230013cafb41",
    "slug": "urbkVFD01E",
    "createdAt": "2022-12-16T15:32:07.914Z",
    "model": "Paymentlinks",
    "__v": 0
  }
}
```
  {% endtab %}
  {% tab title="err: validation" %}
```json
{
  "status": "error",
  "message": "Name, description and amount must be provided"
}
```
  {% endtab %}
  {% tab title="err: invalid amount" %}
```json
{
  "status": "error",
  "message": "Amount must be a valid number"
}
```
  {% endtab %}
  {% tab title="err: amount between 100 and 10,000,000" %}
```json
{
  "status": "error",
  "message": "Amount should be between 100 and 10 million"
}
```
  {% endtab %}
  {% tab title="err: amount between 100 and 10,000,000" %}
```json
{
  "status": "error",
  "message": "Amount should be between 100 and 10 million"
}
```
  {% endtab %}
  {% tab title="err: additionalInfoToCollect should be an array" %}
```json
{
  "status": "error",
  "message": "Expects an array of fields for additional information"
}
```
  {% endtab %}
  {% tab title="success: with image" %}
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
    "tags": [],
    "_id": "639c90ecd62c230013cafb50",
    "name": "Gucci bag 2",
    "description": "An original gucci bag that's affordable",
    "account": "62bffdf5270d0600135de473",
    "image": "https://res.cloudinary.com/jimrid/image/upload/v1637149484/avatar_dlxd4x.png",
    "product": "639c90ecd62c230013cafb4f",
    "slug": "V---pLFfAk",
    "createdAt": "2022-12-16T15:38:20.825Z",
    "model": "Paymentlinks",
    "__v": 0
  }
}
```
  {% endtab %}
  {% tab title="err: invalid payment methods passed" %}
```json
{
  "status": "error",
  "message": "Payment methods must be one of bank-transfer, card or both"
}
```
  {% endtab %}
  {% tab title="err: when payment method is empty" %}
```json
{
  "status": "error",
  "message": "Payment methods should be selected"
}
```
  {% endtab %}
{% endtabs %}


---
