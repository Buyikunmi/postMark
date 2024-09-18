
##  <img src="https://img.shields.io/badge/GET-177e23?style=flat" alt="GET" style="height: 30px;"/> View accounts under a user
```
{{url}}/v1/users/{{userId}}/accounts?accountId={{accountId}}
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
    "firstName": "femi",
    "lastName": "olanipekun",
    "BVN": "12345678901",
    "address": "fghf,fhffh, gjg",
    "addressState": "lagos",
    "businessName": "businessName",
    "rcNumber": "1234567"
}
```

## Sample Request

{% tabs %}
  {% tab title="View accounts under a user" %}
```bash
curl --location --request GET '{{url}}/v1/users/{{userId}}/accounts?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "firstName": "femi",
    "lastName": "olanipekun",
    "BVN": "12345678901",
    "address": "fghf,fhffh, gjg",
    "addressState": "lagos",
    "businessName": "businessName",
    "rcNumber": "1234567"
}'
```
  {% endtab %}
  {% tab title="mikq" %}
```bash
curl --location --request GET '{{url}}/v1/users/{{userId}}/accounts?accountId={{accountId}}' \
--header 'Content-Type: application/json' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Authorization: Bearer {{token}}' \
--data '{
    "firstName": "femi",
    "lastName": "olanipekun",
    "BVN": "12345678901",
    "address": "fghf,fhffh, gjg",
    "addressState": "lagos",
    "businessName": "businessName",
    "rcNumber": "1234567"
}'
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="View accounts under a user" %}
```json
{
  "status": "success",
  "data": {
    "accounts": [
      {
        "additionalInfo": {
          "country": "false",
          "phonenumber": "false",
          "address": "false",
          "paymentSplitType": "percentage",
          "amount": 0,
          "mainAccountShare": 0,
          "subAccountShare": 100
        },
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "654bdfb088afb2b0a9ae6306",
        "name": "Retail loop",
        "users": [
          "642b4c1b9db7d2001328b25e"
        ],
        "webhookURL": "http://request.lendlot.com/x41pajx4",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "excludeFromSweep": false,
        "tags": [],
        "accountNumbers": [],
        "createdAt": "2023-11-08T19:21:20.321Z",
        "__v": 0,
        "balance": 10663,
        "accountNumber": "7824909499",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10486",
        "updatedAt": "2023-11-08T19:21:20.772Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "country": "false",
          "phonenumber": "false",
          "address": "false",
          "paymentSplitType": "percentage",
          "amount": 0,
          "mainAccountShare": 0,
          "subAccountShare": 100
        },
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "654bdca188afb2b0a9ae6247",
        "name": "Retail loop",
        "users": [
          "642b4c1b9db7d2001328b25e"
        ],
        "webhookURL": "http://request.lendlot.com/x41pajx4",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "excludeFromSweep": false,
        "tags": [],
        "accountNumbers": [],
        "createdAt": "2023-11-08T19:08:17.780Z",
        "__v": 0,
        "balance": 10662,
        "accountNumber": "7824909498",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10485",
        "updatedAt": "2023-11-08T19:08:18.392Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "country": "false",
          "phonenumber": "false",
          "address": "false",
          "paymentSplitType": "percentage",
          "amount": 0,
          "mainAccountShare": 0,
          "subAccountShare": 100
        },
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "654936d1aaace7fdd8e92894",
        "name": "syncSub",
        "users": [
          "642b4c1b9db7d2001328b25e"
        ],
        "webhookURL": "https://eoum8iu4c6hekid.m.pipedream.net",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "excludeFromSweep": false,
        "tags": [],
        "createdAt": "2023-11-06T18:56:17.211Z",
        "__v": 0,
        "balance": 10657,
        "savingsId": "10480",
        "updatedAt": "2023-11-06T18:56:17.748Z",
        "accountNumber": "7824909493",
        "bankCode": "",
        "bankName": "wema",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "country": "false",
          "phonenumber": "false",
          "address": "false",
          "paymentSplitType": "percentage",
          "amount": 0,
          "mainAccountShare": 0,
          "subAccountShare": 100
        },
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "65434d4e295e661970fe5d5c",
        "name": "composed",
        "users": [
          "642b4c1b9db7d2001328b25e"
        ],
        "webhookURL": "https://eoum8iu4c6hekid.m.pipedream.net",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "excludeFromSweep": false,
        "isCollateralAccount": false,
        "collateralAmount": 0,
        "tags": [],
        "createdAt": "2023-11-02T07:18:38.252Z",
        "__v": 0,
        "balance": 10645,
        "accountNumber": "7824909481",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10468",
        "updatedAt": "2023-12-11T00:02:02.831Z",
        "interestPostingDate": "2023-12-11T00:02:02.831Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "country": "false",
          "phonenumber": "false",
          "address": "false",
          "paymentSplitType": "percentage",
          "amount": 0,
          "mainAccountShare": 0,
          "subAccountShare": 100
        },
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "65434b56295e661970fe5d1f",
        "name": "competent",
        "users": [
          "642b4c1b9db7d2001328b25e"
        ],
        "webhookURL": "http://request.lendlot.com/x41pajx4",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "excludeFromSweep": false,
        "isCollateralAccount": false,
        "collateralAmount": 0,
        "tags": [],
        "createdAt": "2023-11-02T07:10:14.856Z",
        "__v": 0,
        "balance": 10644,
        "accountNumber": "7824909480",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10467",
        "updatedAt": "2023-11-02T07:10:15.516Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "paymentSplitType": "percentage",
          "amount": 0,
          "mainAccountShare": 0,
          "subAccountShare": 100
        },
        "excludeFromSweep": false,
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "6508bf062ad2cc67c67c832c",
        "name": "Veend Black Shopper MAX",
        "users": [
          "642b4c1b9db7d2001328b25e"
        ],
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": true,
        "subscriptionId": "64193424c1f8cd00131e965f",
        "loanIds": [],
        "tags": [],
        "createdAt": "2023-09-18T21:20:06.022Z",
        "__v": 0,
        "balance": 10458,
        "accountNumber": "7824909294",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10281",
        "updatedAt": "2023-09-18T21:22:01.236Z",
        "interestPostingDate": "2023-09-18T21:22:01.236Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "email": "jem11@yopmail.com",
          "country": "false",
          "phonenumber": "99988888888",
          "address": "frroesoddw",
          "paymentSplitType": "percentage",
          "mainAccountShare": 20,
          "subAccountShare": 80,
          "amount": 0
        },
        "excludeFromSweep": false,
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "65031ef6b7d0ebb81e0d7bfc",
        "name": "Expo",
        "users": [
          "642b4c1b9db7d2001328b25e"
        ],
        "webhookURL": "false",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "tags": [],
        "createdAt": "2023-09-14T14:55:50.417Z",
        "__v": 0,
        "balance": 10442,
        "accountNumber": "7824909277",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10265",
        "updatedAt": "2023-11-21T22:51:50.442Z",
        "interestPostingDate": "2023-11-21T22:51:50.442Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "email": "jem11@yopmail.com",
          "country": "false",
          "phonenumber": "false",
          "address": "false",
          "paymentSplitType": "percentage",
          "mainAccountShare": 0,
          "subAccountShare": 100,
          "amount": 0
        },
        "excludeFromSweep": false,
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "65031e25b7d0ebb81e0d7b09",
        "name": "junkie",
        "users": [
          "642b4c1b9db7d2001328b25e"
        ],
        "webhookURL": "false",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "tags": [],
        "createdAt": "2023-09-14T14:52:21.706Z",
        "__v": 0,
        "balance": 10441,
        "accountNumber": "7824909276",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10264",
        "updatedAt": "2023-11-21T22:51:50.462Z",
        "interestPostingDate": "2023-11-21T22:51:50.462Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "country": "false",
          "phonenumber": "false",
          "address": "false",
          "paymentSplitType": "percentage",
          "amount": 0,
          "mainAccountShare": 0,
          "subAccountShare": 100
        },
        "excludeFromSweep": false,
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "64b7da50c79f1da24cf2e9cc",
        "name": "Prime disbursement",
        "users": [
          "642b4c1b9db7d2001328b25e"
        ],
        "webhookURL": "false",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "tags": [],
        "createdAt": "2023-07-19T12:42:56.667Z",
        "__v": 0,
        "balance": 10147,
        "savingsId": "10015",
        "updatedAt": "2023-11-21T22:51:50.432Z",
        "accountNumber": "7824909261",
        "bankCode": "",
        "bankName": "wema",
        "interestPostingDate": "2023-11-21T22:51:50.432Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "paymentSplitType": "percentage",
          "amount": 0,
          "mainAccountShare": 0,
          "subAccountShare": 100
        },
        "excludeFromSweep": false,
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "642b4c1b9db7d2001328b264",
        "users": [
          "642b4c1b9db7d2001328b25e"
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
        "name": "jem jem",
        "currency": "NGN",
        "createdAt": "2023-04-03T21:58:51.606Z",
        "__v": 0,
        "balance": 8054,
        "savingsId": "8021",
        "updatedAt": "2023-11-21T22:51:50.530Z",
        "accountNumber": "7824906963",
        "bankCode": "",
        "bankName": "wema",
        "interestPostingDate": "2023-11-21T22:51:50.530Z",
        "splitAccounts": []
      }
    ],
    "limit": 50,
    "lastId": null,
    "totalResult": 10,
    "isLastPage": true
  }
}
```
  {% endtab %}
  {% tab title="mikq" %}
```json
{
  "status": "success",
  "data": {
    "accounts": [
      {
        "additionalInfo": {
          "email": "sub@yopmail.com",
          "country": "false",
          "phonenumber": "09078030090",
          "address": "sub street"
        },
        "_id": "6570ad0ebc56e3ecc0ec2c8b",
        "name": "split acct",
        "users": [
          "64347085b137ca0016c93db6"
        ],
        "webhookURL": "false",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "excludeFromSweep": false,
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "tags": [],
        "createdAt": "2023-12-06T17:19:10.610Z",
        "splitAccounts": [],
        "__v": 0,
        "balance": 10760,
        "accountNumber": "7824909593",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10580",
        "updatedAt": "2023-12-06T17:19:11.053Z"
      },
      {
        "additionalInfo": {
          "otherAdditionalInfo": {
            "loanAmount": "2000000",
            "hasExpired": false
          },
          "paymentSplitType": "percentage",
          "amount": 0,
          "mainAccountShare": 0,
          "subAccountShare": 100
        },
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "655625de23251267c2e87fac",
        "name": "Collateral Account",
        "users": [
          "64347085b137ca0016c93db6"
        ],
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": true,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "excludeFromSweep": false,
        "isCollateralAccount": true,
        "collateralAmount": 2000000,
        "collateralStatus": "locked",
        "tags": [],
        "createdAt": "2023-11-16T14:23:26.700Z",
        "__v": 0,
        "balance": 10679,
        "accountNumber": "7824909514",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10501",
        "updatedAt": "2024-01-24T12:34:38.006Z",
        "interestPostingDate": "2024-01-24T12:34:38.006Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "country": "false",
          "phonenumber": "false",
          "address": "false",
          "paymentSplitType": "percentage",
          "amount": 0,
          "mainAccountShare": 0,
          "subAccountShare": 100
        },
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "654bb05d04a9dcb4caf8b54c",
        "name": "latest",
        "users": [
          "64347085b137ca0016c93db6"
        ],
        "webhookURL": "https://eoum8iu4c6hekid.m.pipedream.net",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "excludeFromSweep": false,
        "tags": [],
        "createdAt": "2023-11-08T15:59:25.956Z",
        "__v": 0,
        "balance": 10661,
        "accountNumber": "7824909497",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10484",
        "updatedAt": "2024-01-24T12:34:38.013Z",
        "interestPostingDate": "2024-01-24T12:34:38.013Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "email": "lumenluwiz@gmail.com",
          "country": "false",
          "phonenumber": "false",
          "address": "lagos",
          "paymentSplitType": "percentage",
          "mainAccountShare": 50,
          "subAccountShare": 50,
          "amount": 0
        },
        "excludeFromSweep": false,
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "650ebc5f600572ae859d4a2e",
        "name": "card",
        "users": [
          "64347085b137ca0016c93db6"
        ],
        "webhookURL": "false",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "tags": [],
        "createdAt": "2023-09-23T10:22:23.469Z",
        "__v": 0,
        "balance": 10491,
        "accountNumber": "7824909327",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10314",
        "updatedAt": "2024-01-24T12:34:37.954Z",
        "interestPostingDate": "2024-01-24T12:34:37.953Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "paymentSplitType": "percentage",
          "amount": 0,
          "mainAccountShare": 0,
          "subAccountShare": 100
        },
        "excludeFromSweep": false,
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "6508b6762ad2cc67c67c782c",
        "name": "Veend Black Shopper Regular",
        "users": [
          "64347085b137ca0016c93db6"
        ],
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": true,
        "subscriptionId": "641934cdc1f8cd00131e966b",
        "loanIds": [],
        "tags": [],
        "createdAt": "2023-09-18T20:43:34.253Z",
        "__v": 0,
        "balance": 10453,
        "accountNumber": "7824909289",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10276",
        "updatedAt": "2023-09-18T20:46:01.140Z",
        "interestPostingDate": "2023-09-18T20:46:01.140Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "email": "mikq@yopmail.com",
          "country": "false",
          "phonenumber": "00029867054",
          "address": "wema street",
          "paymentSplitType": "percentage",
          "mainAccountShare": 20,
          "subAccountShare": 80,
          "amount": 0
        },
        "excludeFromSweep": false,
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "64fa1734582045b269c037ae",
        "name": "gauge",
        "users": [
          "64347085b137ca0016c93db6"
        ],
        "webhookURL": "false",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "tags": [],
        "createdAt": "2023-09-07T18:32:20.317Z",
        "__v": 0,
        "balance": 10422,
        "accountNumber": "7824909254",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10245",
        "updatedAt": "2023-09-07T18:32:20.743Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "email": "mikq@yopmail.com",
          "country": "false",
          "phonenumber": "00029867054",
          "address": "wema street",
          "paymentSplitType": "percentage",
          "mainAccountShare": 0,
          "subAccountShare": 100,
          "amount": 0
        },
        "excludeFromSweep": false,
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "64f9cbab582045b269be79a9",
        "name": "Zamfara",
        "users": [
          "64347085b137ca0016c93db6"
        ],
        "webhookURL": "false",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "tags": [],
        "createdAt": "2023-09-07T13:10:03.485Z",
        "__v": 0,
        "balance": 10419,
        "savingsId": "10242",
        "updatedAt": "2024-01-24T12:34:37.969Z",
        "accountNumber": "7824909251",
        "bankCode": "",
        "bankName": "wema",
        "interestPostingDate": "2024-01-24T12:34:37.968Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "email": "exs@yopmail.com",
          "country": "false",
          "phonenumber": "false",
          "address": "wema lake",
          "paymentSplitType": "percentage",
          "mainAccountShare": 30,
          "subAccountShare": 70,
          "amount": 0
        },
        "excludeFromSweep": false,
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "64f8c7a28e2ed3cc1ce1991f",
        "name": "ExistingSub",
        "users": [
          "64347085b137ca0016c93db6"
        ],
        "webhookURL": "false",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "tags": [],
        "createdAt": "2023-09-06T18:40:34.088Z",
        "__v": 0,
        "balance": 10417,
        "accountNumber": "7824909201",
        "bankCode": "",
        "bankName": "wema",
        "savingsId": "10240",
        "updatedAt": "2024-01-24T12:34:37.952Z",
        "interestPostingDate": "2024-01-24T12:34:37.952Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "country": "false",
          "phonenumber": "false",
          "address": "false",
          "paymentSplitType": "percentage",
          "amount": 0,
          "mainAccountShare": 0,
          "subAccountShare": 100
        },
        "excludeFromSweep": false,
        "enableSplitPayment": false,
        "splitPaymentType": "percentage",
        "_id": "64b54544f9cef68470ebb67c",
        "name": "Prime disbursement",
        "users": [
          "64347085b137ca0016c93db6"
        ],
        "webhookURL": "false",
        "autoRetry": true,
        "balanceThreshold": 0,
        "currency": "NGN",
        "accountType": "active",
        "dailyLimit": 0,
        "monthlyLimit": 0,
        "singleTransactionLimit": 0,
        "isOnlending": false,
        "isSubscriptionPackage": false,
        "loanIds": [],
        "tags": [],
        "createdAt": "2023-07-17T13:42:28.068Z",
        "__v": 0,
        "balance": 10144,
        "savingsId": "10013",
        "updatedAt": "2024-01-24T12:34:38.042Z",
        "accountNumber": "7824909043",
        "bankCode": "",
        "bankName": "wema",
        "interestPostingDate": "2024-01-24T12:34:38.042Z",
        "splitAccounts": []
      },
      {
        "additionalInfo": {
          "paymentSplitType": "percentage",
          "amount": 0,
          "mainAccountShare": 0,
          "subAccountShare": 100
        },
        "excludeFromSweep": false,
        "_id": "64347085b137ca0016c93dbc",
        "users": [
          "64347085b137ca0016c93db6"
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
        "name": "mik kano",
        "currency": "NGN",
        "createdAt": "2023-04-10T20:24:37.698Z",
        "__v": 0,
        "balance": 8106,
        "savingsId": "8069",
        "updatedAt": "2024-01-24T12:34:38.575Z",
        "accountNumber": "7824907011",
        "bankCode": "",
        "bankName": "wema",
        "accessToken": "MTEyYzEzYmM1Y2I4MjU0MmZkOGZhMWJiNjUzNzMwYmE4ZjE2OWI1NWVhNDI5Njc2Y2E2NmU0NTVlMWZkOGI3Ny8vLy8vLzE2ODE4MTUxMzU3OTk=",
        "globalUserId": "643e765f5e688a00132d914e",
        "interestPostingDate": "2024-01-24T12:34:38.575Z",
        "createdBy": "64347085b137ca0016c93dbc",
        "enableSplitPayment": true,
        "owner": "64347085b137ca0016c93dbc",
        "splitAccounts": [
          {
            "accountId": "6570ad0ebc56e3ecc0ec2c8b",
            "splitValue": 10,
            "_id": "65817b4f7d09b3cb0b405052"
          }
        ],
        "splitPaymentType": "percentage"
      }
    ],
    "limit": 50,
    "lastId": "64347085b137ca0016c93dbc",
    "totalResult": 10,
    "isLastPage": true
  }
}
```
  {% endtab %}
{% endtabs %}


---
