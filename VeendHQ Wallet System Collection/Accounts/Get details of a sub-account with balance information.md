
##  <img src="https://img.shields.io/badge/GET-177e23?style=flat" alt="GET" style="height: 30px;"/> Get details of a sub-account with balance information
This returns the details of an account created. The `balance` field returned here is `id` of the balance which can be used to fetch the actual balance of the account.
```
{{url}}/v1/accounts/65a696127b4740ca5e780efa/balance?accountId={{accountId}}
```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwidXNlciI6eyJ0d29GYWN0b3IiOmZhbHNlLCJhY2NvdW50cyI6WyI2MjYwMzBlODRhODNjZjAwMTMyMDQ0NGIiXSwiYWRkcmVzc0Jvb2tzIjpbIjYyNjAzMGU4NGE4M2NmMDAxMzIwNDQ0OCJdLCJhdXRoZW50aWNhdGlvbnMiOlsiNjI2MDMwZTk0YTgzY2YwMDEzMjA0NDRmIl0sImt5Y1ZlcmlmaWNhdGlvblN0YXR1cyI6Im5vdF92ZXJpZmllZCIsImlzQmxvY2tlZCI6ZmFsc2UsInJvbGVzIjpbIjYyNjAzMGU5NGE4M2NmMDAxMzIwNDQ1NSIsIjYyM2I0NWI5NDYzYjdhMDAxM2QyOTczOCJdLCJ0YWdzIjpbXSwiX2lkIjoiNjI2MDMwZTg0YTgzY2YwMDEzMjA0NDQ2IiwiZmlyc3ROYW1lIjoiVmVlbmRIUSIsImxhc3ROYW1lIjoiSW5jIiwiYnVzaW5lc3NOYW1lIjoiVmVlbmRIUSBJbmMiLCJyZWZlcnJhbENvZGUiOiJZbVFiYjN4eWgzIiwiY3JlYXRlZEF0IjoiMjAyMi0wNC0yMFQxNjoxMjoyNC43NDVaIiwibW9kZWwiOiJVc2VycyIsIl9fdiI6NSwidXBkYXRlZEF0IjoiMjAyMi0wNC0yMFQxNjoxMjozMS4wNDZaIiwiY2xpZW50SWQiOiIxNSJ9LCJhY2NvdW50Ijp7InVzZXJzIjpbIjYyNjAzMGU4NGE4M2NmMDAxMzIwNDQ0NiJdLCJhdXRvUmV0cnkiOnRydWUsImJhbGFuY2VUaHJlc2hvbGQiOjAsInRhZ3MiOltdLCJfaWQiOiI2MjYwMzBlODRhODNjZjAwMTMyMDQ0NGIiLCJuYW1lIjoidGVzdEBlbWFpbC5jb20iLCJjdXJyZW5jeSI6Ik5HTiIsImNyZWF0ZWRBdCI6IjIwMjItMDQtMjBUMTY6MTI6MjQuOTQyWiIsIl9fdiI6MCwiYmFsYW5jZSI6MjAsInNhdmluZ3NJZCI6IjE1IiwidXBkYXRlZEF0IjoiMjAyMi0wNC0yMFQxNjoxMjozMC45NTRaIn0sImlhdCI6MTY1MDU1MTgyNCwiZXhwIjoxNjUwNTU1NDI0LCJhdWQiOiJ2ZWVuZGhxLmNvbSIsImlzcyI6InZlZW5kaHEuY29tIiwic3ViIjoiNjI2MDMwZTg0YTgzY2YwMDEzMjA0NDQ2In0.siPpjKbjk4mFxl3RVlkCOSsYdnORK4Uqa1R1dxbQEfY|
|x-tag|MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=|
|Content-Type|application/json|

### Query Parameters

|Param|Value|
|---|---|
|accountId|{{accountId}}|

### Body (**raw**)

```json
{
  "amount": 1000,
  "description": "Account debit33 for money transfer"
}
```

### 🔑 Authentication bearer

|Param|Value|Type|
|---|---|---|
|token|{{token}}|string|

## Sample Request

{% tabs %}
  {% tab title="Get details of a sub-account with balance information" %}
```bash
curl --location --request GET '{{url}}/v1/accounts/625560ba0b4f4a0013275df5/balance?accountId={{accountId}}' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwidXNlciI6eyJ0d29GYWN0b3IiOmZhbHNlLCJhY2NvdW50cyI6WyI2MjYwMzBlODRhODNjZjAwMTMyMDQ0NGIiXSwiYWRkcmVzc0Jvb2tzIjpbIjYyNjAzMGU4NGE4M2NmMDAxMzIwNDQ0OCJdLCJhdXRoZW50aWNhdGlvbnMiOlsiNjI2MDMwZTk0YTgzY2YwMDEzMjA0NDRmIl0sImt5Y1ZlcmlmaWNhdGlvblN0YXR1cyI6Im5vdF92ZXJpZmllZCIsImlzQmxvY2tlZCI6ZmFsc2UsInJvbGVzIjpbIjYyNjAzMGU5NGE4M2NmMDAxMzIwNDQ1NSIsIjYyM2I0NWI5NDYzYjdhMDAxM2QyOTczOCJdLCJ0YWdzIjpbXSwiX2lkIjoiNjI2MDMwZTg0YTgzY2YwMDEzMjA0NDQ2IiwiZmlyc3ROYW1lIjoiVmVlbmRIUSIsImxhc3ROYW1lIjoiSW5jIiwiYnVzaW5lc3NOYW1lIjoiVmVlbmRIUSBJbmMiLCJyZWZlcnJhbENvZGUiOiJZbVFiYjN4eWgzIiwiY3JlYXRlZEF0IjoiMjAyMi0wNC0yMFQxNjoxMjoyNC43NDVaIiwibW9kZWwiOiJVc2VycyIsIl9fdiI6NSwidXBkYXRlZEF0IjoiMjAyMi0wNC0yMFQxNjoxMjozMS4wNDZaIiwiY2xpZW50SWQiOiIxNSJ9LCJhY2NvdW50Ijp7InVzZXJzIjpbIjYyNjAzMGU4NGE4M2NmMDAxMzIwNDQ0NiJdLCJhdXRvUmV0cnkiOnRydWUsImJhbGFuY2VUaHJlc2hvbGQiOjAsInRhZ3MiOltdLCJfaWQiOiI2MjYwMzBlODRhODNjZjAwMTMyMDQ0NGIiLCJuYW1lIjoidGVzdEBlbWFpbC5jb20iLCJjdXJyZW5jeSI6Ik5HTiIsImNyZWF0ZWRBdCI6IjIwMjItMDQtMjBUMTY6MTI6MjQuOTQyWiIsIl9fdiI6MCwiYmFsYW5jZSI6MjAsInNhdmluZ3NJZCI6IjE1IiwidXBkYXRlZEF0IjoiMjAyMi0wNC0yMFQxNjoxMjozMC45NTRaIn0sImlhdCI6MTY1MDU1MTgyNCwiZXhwIjoxNjUwNTU1NDI0LCJhdWQiOiJ2ZWVuZGhxLmNvbSIsImlzcyI6InZlZW5kaHEuY29tIiwic3ViIjoiNjI2MDMwZTg0YTgzY2YwMDEzMjA0NDQ2In0.siPpjKbjk4mFxl3RVlkCOSsYdnORK4Uqa1R1dxbQEfY' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Content-Type: application/json' \
--data '{
    "amount": 1000,
    "description": "Account debit33 for money transfer"
}'
```
  {% endtab %}
  {% tab title="using mikq" %}
```bash
curl --location --request GET '{{url}}/v1/accounts/{{userId}}/balance?accountId={{accountId}}' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwidXNlciI6eyJ0d29GYWN0b3IiOmZhbHNlLCJhY2NvdW50cyI6WyI2MjYwMzBlODRhODNjZjAwMTMyMDQ0NGIiXSwiYWRkcmVzc0Jvb2tzIjpbIjYyNjAzMGU4NGE4M2NmMDAxMzIwNDQ0OCJdLCJhdXRoZW50aWNhdGlvbnMiOlsiNjI2MDMwZTk0YTgzY2YwMDEzMjA0NDRmIl0sImt5Y1ZlcmlmaWNhdGlvblN0YXR1cyI6Im5vdF92ZXJpZmllZCIsImlzQmxvY2tlZCI6ZmFsc2UsInJvbGVzIjpbIjYyNjAzMGU5NGE4M2NmMDAxMzIwNDQ1NSIsIjYyM2I0NWI5NDYzYjdhMDAxM2QyOTczOCJdLCJ0YWdzIjpbXSwiX2lkIjoiNjI2MDMwZTg0YTgzY2YwMDEzMjA0NDQ2IiwiZmlyc3ROYW1lIjoiVmVlbmRIUSIsImxhc3ROYW1lIjoiSW5jIiwiYnVzaW5lc3NOYW1lIjoiVmVlbmRIUSBJbmMiLCJyZWZlcnJhbENvZGUiOiJZbVFiYjN4eWgzIiwiY3JlYXRlZEF0IjoiMjAyMi0wNC0yMFQxNjoxMjoyNC43NDVaIiwibW9kZWwiOiJVc2VycyIsIl9fdiI6NSwidXBkYXRlZEF0IjoiMjAyMi0wNC0yMFQxNjoxMjozMS4wNDZaIiwiY2xpZW50SWQiOiIxNSJ9LCJhY2NvdW50Ijp7InVzZXJzIjpbIjYyNjAzMGU4NGE4M2NmMDAxMzIwNDQ0NiJdLCJhdXRvUmV0cnkiOnRydWUsImJhbGFuY2VUaHJlc2hvbGQiOjAsInRhZ3MiOltdLCJfaWQiOiI2MjYwMzBlODRhODNjZjAwMTMyMDQ0NGIiLCJuYW1lIjoidGVzdEBlbWFpbC5jb20iLCJjdXJyZW5jeSI6Ik5HTiIsImNyZWF0ZWRBdCI6IjIwMjItMDQtMjBUMTY6MTI6MjQuOTQyWiIsIl9fdiI6MCwiYmFsYW5jZSI6MjAsInNhdmluZ3NJZCI6IjE1IiwidXBkYXRlZEF0IjoiMjAyMi0wNC0yMFQxNjoxMjozMC45NTRaIn0sImlhdCI6MTY1MDU1MTgyNCwiZXhwIjoxNjUwNTU1NDI0LCJhdWQiOiJ2ZWVuZGhxLmNvbSIsImlzcyI6InZlZW5kaHEuY29tIiwic3ViIjoiNjI2MDMwZTg0YTgzY2YwMDEzMjA0NDQ2In0.siPpjKbjk4mFxl3RVlkCOSsYdnORK4Uqa1R1dxbQEfY' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Content-Type: application/json' \
--data '{
    "amount": 1000,
    "description": "Account debit33 for money transfer"
}'
```
  {% endtab %}
  {% tab title="mikq" %}
```bash
curl --location --request GET '{{url}}/v1/accounts/{{userId}}/balance?accountId={{accountId}}' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwidXNlciI6eyJ0d29GYWN0b3IiOmZhbHNlLCJhY2NvdW50cyI6WyI2MjYwMzBlODRhODNjZjAwMTMyMDQ0NGIiXSwiYWRkcmVzc0Jvb2tzIjpbIjYyNjAzMGU4NGE4M2NmMDAxMzIwNDQ0OCJdLCJhdXRoZW50aWNhdGlvbnMiOlsiNjI2MDMwZTk0YTgzY2YwMDEzMjA0NDRmIl0sImt5Y1ZlcmlmaWNhdGlvblN0YXR1cyI6Im5vdF92ZXJpZmllZCIsImlzQmxvY2tlZCI6ZmFsc2UsInJvbGVzIjpbIjYyNjAzMGU5NGE4M2NmMDAxMzIwNDQ1NSIsIjYyM2I0NWI5NDYzYjdhMDAxM2QyOTczOCJdLCJ0YWdzIjpbXSwiX2lkIjoiNjI2MDMwZTg0YTgzY2YwMDEzMjA0NDQ2IiwiZmlyc3ROYW1lIjoiVmVlbmRIUSIsImxhc3ROYW1lIjoiSW5jIiwiYnVzaW5lc3NOYW1lIjoiVmVlbmRIUSBJbmMiLCJyZWZlcnJhbENvZGUiOiJZbVFiYjN4eWgzIiwiY3JlYXRlZEF0IjoiMjAyMi0wNC0yMFQxNjoxMjoyNC43NDVaIiwibW9kZWwiOiJVc2VycyIsIl9fdiI6NSwidXBkYXRlZEF0IjoiMjAyMi0wNC0yMFQxNjoxMjozMS4wNDZaIiwiY2xpZW50SWQiOiIxNSJ9LCJhY2NvdW50Ijp7InVzZXJzIjpbIjYyNjAzMGU4NGE4M2NmMDAxMzIwNDQ0NiJdLCJhdXRvUmV0cnkiOnRydWUsImJhbGFuY2VUaHJlc2hvbGQiOjAsInRhZ3MiOltdLCJfaWQiOiI2MjYwMzBlODRhODNjZjAwMTMyMDQ0NGIiLCJuYW1lIjoidGVzdEBlbWFpbC5jb20iLCJjdXJyZW5jeSI6Ik5HTiIsImNyZWF0ZWRBdCI6IjIwMjItMDQtMjBUMTY6MTI6MjQuOTQyWiIsIl9fdiI6MCwiYmFsYW5jZSI6MjAsInNhdmluZ3NJZCI6IjE1IiwidXBkYXRlZEF0IjoiMjAyMi0wNC0yMFQxNjoxMjozMC45NTRaIn0sImlhdCI6MTY1MDU1MTgyNCwiZXhwIjoxNjUwNTU1NDI0LCJhdWQiOiJ2ZWVuZGhxLmNvbSIsImlzcyI6InZlZW5kaHEuY29tIiwic3ViIjoiNjI2MDMwZTg0YTgzY2YwMDEzMjA0NDQ2In0.siPpjKbjk4mFxl3RVlkCOSsYdnORK4Uqa1R1dxbQEfY' \
--header 'x-tag: MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=' \
--header 'Content-Type: application/json' \
--data '{
    "amount": 1000,
    "description": "Account debit33 for money transfer"
}'
```
  {% endtab %}
{% endtabs %}

## Sample Response

{% tabs %}
  {% tab title="Get details of a sub-account with balance information" %}
```json
{
  "status": "success",
  "data": {
    "additionalInfo": {
      "paymentSplitType": "percentage",
      "amount": 0,
      "mainAccountShare": 0,
      "subAccountShare": 100
    },
    "isOnlending": false,
    "isSubscriptionPackage": false,
    "loanIds": [],
    "excludeFromSweep": false,
    "enableSplitPayment": false,
    "splitPaymentType": "percentage",
    "_id": 9,
    "users": [
      "625560ba0b4f4a0013275df0"
    ],
    "autoRetry": true,
    "balanceThreshold": 0,
    "tags": null,
    "name": "09069890516",
    "currency": "NGN",
    "createdAt": "2022-04-12T11:21:30.000Z",
    "__v": 0,
    "balance": 0,
    "savingsId": "4296",
    "updatedAt": "2022-04-12T11:21:30.000Z",
    "accountNumber": "7824902740",
    "accountType": "active",
    "bankCode": "",
    "bankName": "wema",
    "dailyLimit": 0,
    "monthlyLimit": 0,
    "singleTransactionLimit": 0,
    "interestPostingDate": "2023-04-07T06:25:09.980Z",
    "splitAccounts": [],
    "account": "625560ba0b4f4a0013275df5",
    "blocked": 0,
    "owner": "625560ba0b4f4a0013275df5",
    "createdBy": "625560ba0b4f4a0013275df5",
    "client": null,
    "developer": null
  }
}
```
  {% endtab %}
  {% tab title="using mikq" %}
```json
{
  "status": "success",
  "data": {
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
    "_id": 10422,
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
    "tags": null,
    "createdAt": "2023-09-07T18:32:20.000Z",
    "__v": 0,
    "balance": 0,
    "accountNumber": "7824909254",
    "bankCode": "",
    "bankName": "wema",
    "savingsId": "10245",
    "updatedAt": "2023-09-07T18:32:20.000Z",
    "splitAccounts": [],
    "account": "64fa1734582045b269c037ae",
    "blocked": 0,
    "owner": "64fa1734582045b269c037ae",
    "createdBy": "64fa1734582045b269c037ae",
    "client": null,
    "developer": null
  }
}
```
  {% endtab %}
  {% tab title="mikq" %}
```json
{
  "status": "success",
  "data": {
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
    "_id": 10422,
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
    "tags": null,
    "createdAt": "2023-09-07T18:32:20.000Z",
    "__v": 0,
    "balance": 0,
    "accountNumber": "7824909254",
    "bankCode": "",
    "bankName": "wema",
    "savingsId": "10245",
    "updatedAt": "2023-09-07T18:32:20.000Z",
    "splitAccounts": [],
    "account": "64fa1734582045b269c037ae",
    "blocked": 0,
    "owner": "64fa1734582045b269c037ae",
    "createdBy": "64fa1734582045b269c037ae",
    "client": null,
    "developer": null
  }
}
```
  {% endtab %}
{% endtabs %}


---
