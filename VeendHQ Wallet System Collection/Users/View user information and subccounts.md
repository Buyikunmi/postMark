
##  <img src="https://img.shields.io/badge/GET-177e23?style=flat" alt="GET" style="height: 30px;"/> View user information and subccounts
```
{{url}}/v1/users/{{userId}}?accountId={{accountId}}
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


---
