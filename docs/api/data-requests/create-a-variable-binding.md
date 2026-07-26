# Data Requests

## Table of Contents

* [Create a Variable Binding](#create-a-variable-binding)
  * [Endpoint](#endpoint)
* [cURL Example](#curl-example)
* [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
  * [Example Request](#example-request)
* [Response](#response)
  * [Example Response](#example-response)
* [Response Schema](#response-schema)
  * [Data Request Configuration](#data-request-configuration)
* [Related Resources](#related-resources)

## Create a Variable Binding

Create a variable binding for a data request.

### Endpoint

**POST** `/team/{team_id}/datasets/{dataset_id}/dataRequests/{id}/variableBindings`

Creates a new variable binding.

---

## cURL Example

```bash
curl --request POST \
  --url https://api.chartbrew.com/team/{team_id}/datasets/{dataset_id}/dataRequests/{id}/variableBindings \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '
{
  "id": 123,
  "entity_id": "<string>",
  "name": "<string>",
  "type": "<string>",
  "default_value": "<string>",
  "required": true,
  "createdAt": "2023-11-07T05:31:56Z",
  "updatedAt": "2023-11-07T05:31:56Z"
}
'
```


---

## Authorization

| Header        | Type   | Required | Description                                                 |
| ------------- | ------ | -------- | ----------------------------------------------------------- |
| Authorization | string | Yes      | Bearer authentication header in the format `Bearer <token>` |

---

## Path Parameters

| Parameter  | Type    | Required |
| ---------- | ------- | -------- |
| team_id    | integer | Yes      |
| dataset_id | integer | Yes      |
| id         | integer | Yes      |

---

## Request Body

**Content-Type:** `application/json`

| Field         | Type        | Description                                                                 |
| ------------- | ----------- | --------------------------------------------------------------------------- |
| id            | integer     | Variable binding ID                                                         |
| entity_type   | enum string | Entity type (`Project`, `Connection`, `Dataset`, `DataRequest`, `Template`) |
| entity_id     | string      | Entity identifier                                                           |
| name          | string      | Variable name                                                               |
| type          | string      | Variable type                                                               |
| default_value | string      | Default variable value                                                      |
| required      | boolean     | Whether the variable is required                                            |
| createdAt     | date-time   | Creation timestamp                                                          |
| updatedAt     | date-time   | Last update timestamp                                                       |

### Example Request

```json
{
  "id": 123,
  "entity_id": "<string>",
  "name": "<string>",
  "type": "<string>",
  "default_value": "<string>",
  "required": true,
  "createdAt": "2023-11-07T05:31:56Z",
  "updatedAt": "2023-11-07T05:31:56Z"
}
```

---

## Response

**Status:** `200 OK`

Variable binding created successfully.

## Example Response

```json
{
  "id": 123,
  "dataset_id": 123,
  "connection_id": 123,
  "route": "<string>",
  "headers": [
    {
      "key": "<string>",
      "value": "<string>"
    }
  ],
  "body": "<string>",
  "useGlobalHeaders": true,
  "query": "<string>",
  "pagination": false,
  "items": "items",
  "itemsLimit": 0,
  "offset": "offset",
  "paginationField": "<string>",
  "template": "<string>",
  "conditions": [
    {
      "field": "<string>",
      "value": "<string>"
    }
  ],
  "configuration": {
    "populateAttributes": true,
    "mainCollectionSample": "<string>",
    "subCollectionSample": "<string>",
    "selectedSubCollection": "<string>",
    "limit": 123,
    "orderBy": "<string>",
    "accountId": "<string>",
    "propertyId": "<string>",
    "metrics": "<string>",
    "dimensions": "<string>",
    "startDate": "<string>",
    "endDate": "<string>",
    "limitToLast": 123,
    "limitToFirst": 123
  },
  "variables": {},
  "Connection": {
    "id": 123,
    "name": "<string>",
    "type": "<string>",
    "subType": "<string>",
    "host": "<string>"
  },
  "VariableBindings": [
    {
      "id": 123,
      "entity_id": "<string>",
      "name": "<string>",
      "type": "<string>",
      "default_value": "<string>",
      "required": true,
      "createdAt": "2023-11-07T05:31:56Z",
      "updatedAt": "2023-11-07T05:31:56Z"
    }
  ]
}
```

---

## Response Schema

## Data Request Configuration

| Field            | Type     | Description                               |
| ---------------- | -------- | ----------------------------------------- |
| id               | integer  | Data request ID                           |
| dataset_id       | integer  | Reference to Dataset model                |
| connection_id    | integer  | Reference to Connection model             |
| route            | string   | API endpoint path                         |
| headers          | object[] | Request headers                           |
| body             | string   | Request body in JSON string format        |
| useGlobalHeaders | boolean  | Whether global headers are used           |
| query            | string   | Request query                             |
| pagination       | boolean  | Pagination enabled                        |
| items            | string   | Path to items array in response           |
| itemsLimit       | integer  | Maximum number of items to return         |
| offset           | string   | Pagination offset field name              |
| paginationField  | string   | Field used for pagination                 |
| template         | string   | Template type for request formatting      |
| conditions       | object[] | Request conditions                        |
| configuration    | object   | Connection-specific configuration options |
| variables        | object   | Request variables                         |
| Connection       | object   | Connection details                        |
| VariableBindings | object[] | Variable bindings list                    |

---

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Data Request](./create-a-data-request.md)
* [Create a Variable Binding](./create-a-variable-binding.md)
* [Get Dataset Data Requests](./get-dataset-data-requests.md)
* [Run a Data Request](./run-a-data-request.md)
* [Update a Data Request](./update-a-data-request.md)
* [Update a Variable Binding](./update-a-variable-binding.md)
* [What is a Data Request](./what-is-a-data-request.md)
