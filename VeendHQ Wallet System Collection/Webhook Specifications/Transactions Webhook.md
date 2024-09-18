
##  <img src="https://img.shields.io/badge/POST-fbe07c?style=flat" alt="POST" style="height: 30px;"/> Transactions Webhook
> Note: notificationType can be credit or debit
```
https://your.webhookurl.com/path
```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|

### Body (**raw**)

```json
{
    "notificationType": "debit",
    "amount": -400,
    "description": "NGN400 - Money Transfer - uniq_re3f_123456321",
    "account": {
        "users": [
            {
                "accounts": [
                    "5d88e7c445f3b200115f91a4",
                    "5d8900685ca2c6001169ea6e",
                    "5d8900ccd4e23e0011b3483d"
                ],
                "addressBooks": [
                    "5d88e7c445f3b200115f91a2"
                ],
                "authentications": [
                    "5d88e7c445f3b200115f91a5"
                ],
                "kycVerificationStatus": "not_verified",
                "isBlocked": false,
                "roles": [
                    "5d88e7c445f3b200115f91a6",
                    "5a762ac2ac664600198601dc",
                    "5d8900685ca2c6001169ea6f",
                    "5d8900ccd4e23e0011b3483e"
                ],
                "tags": [
                    "not_verified",
                    "SkxnpDDUwB",
                    "12345678901",
                    "fghf,fhffh,",
                    "gjg",
                    "lagos",
                    "5d88e7c445f3b200115f91a4",
                    "15-nov-1988",
                    "femi",
                    "olanipekun",
                    "5d88e7c445f3b200115f91a4"
                ],
                "_id": "5d88e7c445f3b200115f91a1",
                "referralCode": "SkxnpDDUwB",
                "createdAt": "2019-09-23T15:41:56.234Z",
                "model": "Users",
                "__v": 9,
                "updatedAt": "2019-09-23T17:28:55.636Z",
                "BVN": "12345678901",
                "address": "fghf,fhffh, gjg",
                "addressState": "lagos",
                "createdBy": "5d88e7c445f3b200115f91a4",
                "dateOfBirth": "15-nov-1988",
                "firstName": "femi",
                "lastName": "olanipekun",
                "owner": "5d88e7c445f3b200115f91a4"
            }
        ],
        "tags": [],
        "_id": "5d8900ccd4e23e0011b3483d",
        "name": "Test Sub Account 2",
        "webhookURL": "http://request.lendlot.com/x41pajx4",
        "createdAt": "2019-09-23T17:28:44.459Z",
        "__v": 0,
        "balance": 143,
        "accountNumber": "7081430003",
        "bankCode": "090175",
        "bankName": "Highstreet MFB"
    },
    "purchase": 1519,
    "reference": "31100324156926040065413-"
}
```

## Sample Request

{% tabs %}
  {% tab title="Sample Credit Notification" %}
```bash
curl --location --request POST 'https://your.webhookurl.com/path' \
--header 'Content-Type: application/json' \
--data '{
    "notificationType": "credit",
    "amount": 1000000,
    "description": "Account funding for money transfer",
    "account": {
        "users": [
            {
                "accounts": [
                    "5d88e7c445f3b200115f91a4",
                    "5d8900685ca2c6001169ea6e",
                    "5d8900ccd4e23e0011b3483d"
                ],
                "addressBooks": [
                    "5d88e7c445f3b200115f91a2"
                ],
                "authentications": [
                    "5d88e7c445f3b200115f91a5"
                ],
                "kycVerificationStatus": "not_verified",
                "isBlocked": false,
                "roles": [
                    "5d88e7c445f3b200115f91a6",
                    "5a762ac2ac664600198601dc",
                    "5d8900685ca2c6001169ea6f",
                    "5d8900ccd4e23e0011b3483e"
                ],
                "tags": [
                    "not_verified",
                    "SkxnpDDUwB",
                    "12345678901",
                    "fghf,fhffh,",
                    "gjg",
                    "lagos",
                    "5d88e7c445f3b200115f91a4",
                    "15-nov-1988",
                    "femi",
                    "olanipekun",
                    "5d88e7c445f3b200115f91a4"
                ],
                "_id": "5d88e7c445f3b200115f91a1",
                "referralCode": "SkxnpDDUwB",
                "createdAt": "2019-09-23T15:41:56.234Z",
                "model": "Users",
                "__v": 9,
                "updatedAt": "2019-09-23T17:28:55.636Z",
                "BVN": "12345678901",
                "address": "fghf,fhffh, gjg",
                "addressState": "lagos",
                "createdBy": "5d88e7c445f3b200115f91a4",
                "dateOfBirth": "15-nov-1988",
                "firstName": "femi",
                "lastName": "olanipekun",
                "owner": "5d88e7c445f3b200115f91a4"
            }
        ],
        "tags": [],
        "_id": "5d8900ccd4e23e0011b3483d",
        "name": "Test Sub Account 2",
        "webhookURL": "http://request.lendlot.com/x41pajx4",
        "createdAt": "2019-09-23T17:28:44.459Z",
        "__v": 0,
        "balance": 143,
        "accountNumber": "7081430003",
        "bankCode": "090175",
        "bankName": "Highstreet MFB"
    },
    "reference": "31394596156926004966413+"
}'
```
  {% endtab %}
  {% tab title="Sample Debit Notification" %}
```bash
curl --location --request POST 'https://your.webhookurl.com/path' \
--header 'Content-Type: application/json' \
--data '{
    "notificationType": "debit",
    "amount": -400,
    "description": "NGN400 - Money Transfer - uniq_re3f_123456321",
    "account": {
        "users": [
            {
                "accounts": [
                    "5d88e7c445f3b200115f91a4",
                    "5d8900685ca2c6001169ea6e",
                    "5d8900ccd4e23e0011b3483d"
                ],
                "addressBooks": [
                    "5d88e7c445f3b200115f91a2"
                ],
                "authentications": [
                    "5d88e7c445f3b200115f91a5"
                ],
                "kycVerificationStatus": "not_verified",
                "isBlocked": false,
                "roles": [
                    "5d88e7c445f3b200115f91a6",
                    "5a762ac2ac664600198601dc",
                    "5d8900685ca2c6001169ea6f",
                    "5d8900ccd4e23e0011b3483e"
                ],
                "tags": [
                    "not_verified",
                    "SkxnpDDUwB",
                    "12345678901",
                    "fghf,fhffh,",
                    "gjg",
                    "lagos",
                    "5d88e7c445f3b200115f91a4",
                    "15-nov-1988",
                    "femi",
                    "olanipekun",
                    "5d88e7c445f3b200115f91a4"
                ],
                "_id": "5d88e7c445f3b200115f91a1",
                "referralCode": "SkxnpDDUwB",
                "createdAt": "2019-09-23T15:41:56.234Z",
                "model": "Users",
                "__v": 9,
                "updatedAt": "2019-09-23T17:28:55.636Z",
                "BVN": "12345678901",
                "address": "fghf,fhffh, gjg",
                "addressState": "lagos",
                "createdBy": "5d88e7c445f3b200115f91a4",
                "dateOfBirth": "15-nov-1988",
                "firstName": "femi",
                "lastName": "olanipekun",
                "owner": "5d88e7c445f3b200115f91a4"
            }
        ],
        "tags": [],
        "_id": "5d8900ccd4e23e0011b3483d",
        "name": "Test Sub Account 2",
        "webhookURL": "http://request.lendlot.com/x41pajx4",
        "createdAt": "2019-09-23T17:28:44.459Z",
        "__v": 0,
        "balance": 143,
        "accountNumber": "7081430003",
        "bankCode": "090175",
        "bankName": "Highstreet MFB"
    },
    "purchase": 1519,
    "reference": "31100324156926040065413-"
}'
```
  {% endtab %}
  {% tab title="Sample Payment Link Notification" %}
```bash
curl --location --request POST 'https://your.webhookurl.com/path' \
--header 'Content-Type: application/json' \
--data '{
    "notificationType": "paymentLink",
    "reference": "QNZqSeKaWD_cartier_1708080463068",
    "product": {
        "state": "fulfilled",
        "value": {
            "_id": "65ca50f0410477a4e5027e4a",
            "code": "j5mQqwcUKH",
            "name": "cartier",
            "description": "go get it babeee",
            "amount": 3000,
            "paidAmount": 0,
            "fee": 50,
            "additionalFee": 0,
            "convinienceFee": 0,
            "convinienceFeeType": "percentage",
            "feeType": "percentage",
            "customerBearsFee": false,
            "cashback": 0,
            "cashbackType": "percentage",
            "referralCommission": 10,
            "referralCommissionType": "percentage",
            "account": {
                "additionalInfo": {
                    "paymentSplitType": "percentage",
                    "amount": 0,
                    "mainAccountShare": 0,
                    "subAccountShare": 100
                },
                "excludeFromSweep": false,
                "enableSplitPayment": false,
                "splitPaymentType": "percentage",
                "isLoanReferralAccount": false,
                "loanReferralStatus": "active",
                "id": "644675fded7fdb0014a9ca9b",
                "users": [
                    "644675fded7fdb0014a9ca95"
                ],
                "autoRetry": true,
                "balanceThreshold": 0,
                "accountType": "active",
                "dailyLimit": 0,
                "monthlyLimit": 0,
                "singleTransactionLimit": 0,
                "isOnlending": false,
                "isSubscriptionPackage": false,
                "loanIds": [],
                "tags": [],
                "name": "Atteh joe",
                "currency": "NGN",
                "createdAt": "2023-04-24T12:28:45.451Z",
                "_v": 0,
                "balance": 8208,
                "savingsId": "8141",
                "updatedAt": "2024-02-16T10:05:56.373Z",
                "accountNumber": "7824907085",
                "bankCode": "",
                "bankName": "wema",
                "interestPostingDate": "2024-02-16T10:05:56.373Z",
                "splitAccounts": []
            },
            "enabled": true,
            "hasValidation": false,
            "canRefund": false,
            "hasVariations": false,
            "hasSubVariations": false,
            "featured": false,
            "currency": "NGN",
            "isSync": false,
            "details": {
                "type": "payment link",
                "image": ""
            },
            "type": "oneTime",
            "recurringInterval": "none",
            "recurringIntervalCount": 1,
            "status": "default",
            "recurringCount": 0,
            "disableRetry": false,
            "runCount": 0,
            "category": "default",
            "tags": [
                "j5mQqwcUKH",
                "cartier",
                "go",
                "get",
                "it",
                "babeee",
                "percentage",
                "percentage",
                "percentage",
                "percentage",
                "644675fded7fdb0014a9ca9b",
                "NGN",
                "oneTime",
                "none",
                "default",
                "default",
                "2024-02-12T17:10:08.036Z"
            ],
            "dueDate": "2024-02-12T17:10:08.036Z",
            "createdAt": "2024-02-12T17:10:08.036Z",
            "model": "Products",
            "__v": 0,
            "updatedAt": "2024-02-12T17:10:08.050Z"
        }
    },
    "purchase": {
        "state": "fulfilled",
        "value": {
            "frontendStatus": "pending",
            "veendFee": 0,
            "otherFees": 3000,
            "purchaseReference": "QNZqSeKaWD_cartier_1708080463068",
            "cost": 3000,
            "merchantFee": 0,
            "customerFee": 0,
            "cashback": 0,
            "referralCommission": 0,
            "totalCost": 3000,
            "description": "go get it babeee",
            "currency": "NGN",
            "status": "pending",
            "paid": true,
            "delivered": false,
            "settled": false,
            "canRefund": false,
            "product": "65ca50f0410477a4e5027e4a",
            "productsDetails": {
                "slug": "QNZqSeKaWD",
                "type": "payment link",
                "image": "",
                "bankCode": "035",
                "senderName": "John Mayer",
                "webhookUrl": "https://webhook.site/7b4823b9-95f9-4096-b031-e2fb11beb0a4",
                "accountNumber": "7824910125"
            },
            "ipAddress": null,
            "account": "65cf1bcb2dfafacedc122411",
            "deliveryLog": null,
            "settlementLog": null,
            "refundLog": null,
            "validationDetails": null,
            "batch": null,
            "payment": null,
            "feeCalculationData": null,
            "retryCount": 0,
            "owner": "65cf1bcb2dfafacedc122411",
            "createdBy": "65cf1bcb2dfafacedc122411",
            "client": null,
            "developer": null,
            "tags": null,
            "_id": 32584,
            "createdAt": "2024-02-16T10:47:43.000Z",
            "updatedAt": "2024-02-16T10:55:02.000Z"
        }
    }
}'
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="Sample Credit Notification" %}
```json
Error parsing JSON: Unexpected end of JSON input
```
  {% endtab %}
  {% tab title="Sample Debit Notification" %}
```json
Error parsing JSON: Unexpected end of JSON input
```
  {% endtab %}
  {% tab title="Sample Payment Link Notification" %}
```json
Error parsing JSON: Unexpected end of JSON input
```
  {% endtab %}
{% endtabs %}


---
