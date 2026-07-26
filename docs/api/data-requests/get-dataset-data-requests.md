# Get Dataset Data Requests

Retrieve all Data Requests associated with a specific Dataset.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authorization](#authorization)
  * [Example](#example)
* [Path Parameters](#path-parameters)
* [Example Request](#example-request)
  * [cURL](#curl)
* [Success Response](#success-response)
  * [Status Code](#status-code)
  * [Response Body](#response-body)
* [Response Fields](#response-fields)
* [Configuration Object](#configuration-object)
  * [Common Configuration Fields](#common-configuration-fields)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http
GET /team/{team_id}/datasets/{dataset_id}/dataRequests
```

## Description

Returns a list of Data Requests configured for the specified Dataset. Each Data Request contains information about how data is fetched from a Connection, including request configuration, headers, pagination settings, variables, and connection metadata.

---

## Authorization

| Header        | Type   | Required | Description                                                |
| ------------- | ------ | -------- | ---------------------------------------------------------- |
| Authorization | string | Yes      | Bearer authentication token in the format `Bearer <token>` |

### Example

```http
Authorization: Bearer <token>
```

---

## Path Parameters

| Parameter    | Type    | Required | Description        |
| ------------ | ------- | -------- | ------------------ |
| `team_id`    | integer | Yes      | Team identifier    |
| `dataset_id` | integer | Yes      | Dataset identifier |

---

## Example Request

### cURL

```bash
curl --request GET \
  --url https://api.chartbrew.com/team/{team_id}/datasets/{dataset_id}/dataRequests \
  --header "Authorization: Bearer <token>"
```

---

## Success Response

### Status Code

```http
200 OK
```

### Response Body

```json
[
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
]
```

---

## Response Fields

Each item in the response array contains the following fields:

| Field              | Type          | Description                                                   |
| ------------------ | ------------- | ------------------------------------------------------------- |
| `id`               | integer       | Data Request identifier                                       |
| `dataset_id`       | integer       | Reference to Dataset model                                    |
| `connection_id`    | integer       | Reference to Connection model                                 |
| `method`           | string        | HTTP request method (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`) |
| `route`            | string        | API endpoint path                                             |
| `headers`          | array<object> | Request headers                                               |
| `body`             | string        | Request body in JSON string format                            |
| `useGlobalHeaders` | boolean       | Whether global headers are applied                            |
| `query`            | string        | Query string                                                  |
| `pagination`       | boolean       | Indicates whether pagination is enabled                       |
| `items`            | string        | Path to items array in the response                           |
| `itemsLimit`       | integer       | Maximum number of items returned                              |
| `offset`           | string        | Pagination offset field name                                  |
| `paginationField`  | string        | Field used for pagination                                     |
| `template`         | string        | Request template type                                         |
| `conditions`       | array<object> | Request conditions                                            |
| `configuration`    | object        | Connection-specific configuration                             |
| `variables`        | object        | Request variables                                             |
| `Connection`       | object        | Associated connection details                                 |
| `VariableBindings` | array<object> | Variable bindings associated with the request                 |

---

## Configuration Object

The `configuration` object contains settings that vary depending on the Connection type.

### Common Configuration Fields

| Field                   | Type    | Description                    |
| ----------------------- | ------- | ------------------------------ |
| `populateAttributes`    | boolean | Populate additional attributes |
| `mainCollectionSample`  | string  | Main collection sample         |
| `subCollectionSample`   | string  | Sub-collection sample          |
| `selectedSubCollection` | string  | Selected sub-collection        |
| `limit`                 | integer | Maximum number of results      |
| `orderBy`               | string  | Sort field                     |
| `accountId`             | string  | External account identifier    |
| `propertyId`            | string  | Property identifier            |
| `metrics`               | string  | Metrics selection              |
| `dimensions`            | string  | Dimensions selection           |
| `startDate`             | string  | Start date                     |
| `endDate`               | string  | End date                       |
| `limitToLast`           | integer | Return last N records          |
| `limitToFirst`          | integer | Return first N records         |

---

## Notes

* The response is an array of Data Request objects.
* A Dataset can contain multiple Data Requests.
* Configuration fields vary based on the underlying Connection type.
* Variable bindings are returned together with each Data Request when configured.

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
