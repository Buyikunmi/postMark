
##  <img src="https://img.shields.io/badge/PATCH-7711A7?style=flat" alt="PATCH" style="height: 30px;"/> Deactivate payment link
```
{{url}}/v1/paymentlinks/639c90ecd62c230013cafb50/deactivate?accountId={{accountId}}
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
  {% tab title="err: not exist" %}
```bash
curl --location --request PATCH '{{url}}/v1/paymentlinks/639c90ecd62c230013cafb59/activate?accountId={{accountId}}&populate=product' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
```
  {% endtab %}
  {% tab title="success" %}
```bash
curl --location --request PATCH '{{url}}/v1/paymentlinks/639c90ecd62c230013cafb50/deactivate?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="err: not exist" %}
```json
{
  "status": "error",
  "message": "Unable to activate payment link"
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
    "name": "Gucci bag 2",
    "description": "An original gucci bag that's affordable",
    "account": "62bffdf5270d0600135de473",
    "image": "https://res.cloudinary.com/jimrid/image/upload/v1637149484/avatar_dlxd4x.png",
    "product": {
      "amount": 3800,
      "fee": 0,
      "additionalFee": 0,
      "convinienceFee": 0,
      "convinienceFeeType": "percentage",
      "feeType": "percentage",
      "customerBearsFee": false,
      "cashback": 0,
      "cashbackType": "percentage",
      "referralCommission": 0,
      "referralCommissionType": "percentage",
      "enabled": false,
      "hasValidation": false,
      "canRefund": false,
      "hasVariations": false,
      "hasSubVariations": false,
      "featured": false,
      "isSync": false,
      "type": "oneTime",
      "recurringInterval": "none",
      "recurringIntervalCount": 1,
      "status": "default",
      "recurringCount": 0,
      "disableRetry": false,
      "runCount": 0,
      "category": "default",
      "tags": [
        "percentage",
        "percentage",
        "percentage",
        "percentage",
        "oneTime",
        "none",
        "default",
        "default",
        "Nii65kC5_1",
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
        "NGN",
        "2022-12-16T15:38:20.824Z"
      ],
      "_id": "639c90ecd62c230013cafb4f",
      "code": "Nii65kC5_1",
      "name": "Gucci bag 2",
      "description": "An original gucci bag that's affordable",
      "account": "62bffdf5270d0600135de473",
      "currency": "NGN",
      "details": {
        "type": "payment link",
        "image": "https://res.cloudinary.com/jimrid/image/upload/v1637149484/avatar_dlxd4x.png"
      },
      "dueDate": "2022-12-16T15:38:20.824Z",
      "createdAt": "2022-12-16T15:38:20.824Z",
      "model": "Products",
      "__v": 0,
      "updatedAt": "2022-12-16T15:38:20.835Z"
    },
    "slug": "V---pLFfAk",
    "createdAt": "2022-12-16T15:38:20.825Z",
    "model": "Paymentlinks",
    "__v": 0,
    "updatedAt": "2022-12-16T15:38:20.868Z"
  }
}
```
  {% endtab %}
{% endtabs %}


---
