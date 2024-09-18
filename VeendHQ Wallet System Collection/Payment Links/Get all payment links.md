
##  <img src="https://img.shields.io/badge/GET-177e23?style=flat" alt="GET" style="height: 30px;"/> Get all payment links
```
{{url}}/v1/paymentlinks?accountId={{accountId}}&populate=product
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
|populate|product|

## Sample Request

{% tabs %}
  {% tab title="success" %}
```bash
curl --location --request GET '{{url}}/v1/paymentlinks?accountId={{accountId}}&populate=product' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
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
  "data": [
    {
      "isActive": false,
      "type": "oneTime",
      "additionalInfoToCollect": [],
      "tags": [
        "Test",
        "Link",
        "This",
        "is",
        "a",
        "test",
        "link",
        "62bffdf5270d0600135de473",
        "an_optional_url_friendly_name",
        "62bffdf5270d0600135de473",
        "62bffdf5270d0600135de473"
      ],
      "_id": "63698a38adf0c8001464371f",
      "name": "Test Link",
      "description": "This is a test link",
      "account": "62bffdf5270d0600135de473",
      "slug": "an_optional_url_friendly_name",
      "owner": "62bffdf5270d0600135de473",
      "createdBy": "62bffdf5270d0600135de473",
      "createdAt": "2022-11-07T22:44:08.595Z",
      "model": "Paymentlinks",
      "__v": 0,
      "updatedAt": "2022-11-07T22:44:08.610Z"
    },
    {
      "isActive": false,
      "type": "oneTime",
      "additionalInfoToCollect": [],
      "tags": [
        "Test",
        "Link1",
        "This",
        "is",
        "a",
        "test",
        "link1",
        "62bffdf5270d0600135de473",
        "slug1",
        "62bffdf5270d0600135de473",
        "62bffdf5270d0600135de473"
      ],
      "_id": "6392a1c64ba7490013d9259b",
      "name": "Test Link1",
      "description": "This is a test link1",
      "account": "62bffdf5270d0600135de473",
      "slug": "slug1",
      "owner": "62bffdf5270d0600135de473",
      "createdBy": "62bffdf5270d0600135de473",
      "createdAt": "2022-12-09T02:47:34.780Z",
      "model": "Paymentlinks",
      "__v": 0,
      "updatedAt": "2022-12-09T02:47:34.797Z"
    },
    {
      "isActive": false,
      "type": "oneTime",
      "additionalInfoToCollect": [],
      "tags": [],
      "_id": "63968cdc77f4c0001357cbd0",
      "account": "62bffdf5270d0600135de473",
      "purchase": "268",
      "name": "Golden Chance Lotto",
      "description": "NGN1500 - Golden Chance Lotto - uniq_ref_131223123455u7766",
      "slug": "SxteKEWaf",
      "createdAt": "2022-12-12T02:07:24.726Z",
      "model": "Paymentlinks",
      "__v": 0
    },
    {
      "isActive": false,
      "type": "oneTime",
      "additionalInfoToCollect": [],
      "tags": [
        "62bffdf5270d0600135de473",
        "269",
        "Golden",
        "Chance",
        "Lotto",
        "NGN1500",
        "-",
        "Golden",
        "Chance",
        "Lotto",
        "-",
        "uniq_ref_1312ww23123455u7766",
        "97vg9sZJ4"
      ],
      "_id": "6396911b77f4c0001357cc41",
      "account": "62bffdf5270d0600135de473",
      "purchase": "269",
      "name": "Golden Chance Lotto",
      "description": "NGN1500 - Golden Chance Lotto - uniq_ref_1312ww23123455u7766",
      "slug": "97vg9sZJ4",
      "createdAt": "2022-12-12T02:25:31.630Z",
      "model": "Paymentlinks",
      "__v": 0,
      "updatedAt": "2022-12-12T02:25:31.639Z"
    },
    {
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
        "tags": [],
        "_id": "639c8f77d62c230013cafb41",
        "code": "Lcc7keZkW2",
        "name": "Gucci bag 2",
        "description": "An original gucci bag that's affordable",
        "account": "62bffdf5270d0600135de473",
        "currency": "NGN",
        "details": {
          "type": "payment link"
        },
        "dueDate": "2022-12-16T15:32:07.913Z",
        "createdAt": "2022-12-16T15:32:07.913Z",
        "model": "Products",
        "__v": 0
      },
      "slug": "urbkVFD01E",
      "createdAt": "2022-12-16T15:32:07.914Z",
      "model": "Paymentlinks",
      "__v": 0
    },
    {
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
  ],
  "limit": 50,
  "total": 6,
  "lastId": "639c90ecd62c230013cafb50",
  "totalResult": 6,
  "isLastPage": true
}
```
  {% endtab %}
{% endtabs %}


---
