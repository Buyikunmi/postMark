
##  <img src="https://img.shields.io/badge/GET-177e23?style=flat" alt="GET" style="height: 30px;"/> Get details of a sub account
This returns the details of an account created. The `balance` field returned here is `id` of the balance which can be used to fetch the actual balance of the account.
```
{{url}}/v1/accounts/625560ba0b4f4a0013275df5?accountId={{accountId}}
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
  {% tab title="success" %}
```bash
curl --location --request GET '{{url}}/v1/accounts/626030e84a83cf001320444b?accountId=626030e84a83cf001320444b&populate=users' \
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
  {% tab title="success" %}
```json
{
  "status": "success",
  "data": {
    "users": [
      {
        "twoFactor": false,
        "accounts": [
          "626030e84a83cf001320444b"
        ],
        "addressBooks": [
          "626030e84a83cf0013204448"
        ],
        "authentications": [
          "626030e94a83cf001320444f"
        ],
        "kycVerificationStatus": "not_verified",
        "isBlocked": false,
        "roles": [
          "626030e94a83cf0013204455",
          "623b45b9463b7a0013d29738"
        ],
        "tags": [],
        "_id": "626030e84a83cf0013204446",
        "firstName": "VeendHQ",
        "lastName": "Inc",
        "businessName": "VeendHQ Inc",
        "referralCode": "YmQbb3xyh3",
        "createdAt": "2022-04-20T16:12:24.745Z",
        "model": "Users",
        "__v": 5,
        "updatedAt": "2022-04-20T16:12:31.046Z",
        "clientId": "15"
      }
    ],
    "autoRetry": true,
    "balanceThreshold": 0,
    "tags": [],
    "_id": "626030e84a83cf001320444b",
    "name": "test@email.com",
    "currency": "NGN",
    "createdAt": "2022-04-20T16:12:24.942Z",
    "__v": 0,
    "balance": 20,
    "savingsId": "15",
    "updatedAt": "2022-04-20T16:12:30.954Z"
  }
}
```
  {% endtab %}
{% endtabs %}


---
