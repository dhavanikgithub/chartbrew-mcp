# Update a Data Request

Updates an existing data request in a dataset.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authentication](#authentication)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
* [Example Request](#example-request)
  * [cURL](#curl)
* [Example Response](#example-response)
* [Configuration Object](#configuration-object)
  * [Available Configuration Fields](#available-configuration-fields)
* [Header Object](#header-object)
* [Condition Object](#condition-object)
* [Variable Binding Object](#variable-binding-object)
* [Response](#response)
  * [Success Response](#success-response)
* [Related Resources](#related-resources)

## Endpoint

```http
PUT /team/{team_id}/datasets/{dataset_id}/dataRequests/{id}
```

## Description

Updates a data request configuration, including route settings, headers, request body, pagination options, variables, and connection-specific configuration.

## Authentication

**Authorization Header**

```http
Authorization: Bearer <token>
```

Bearer authentication is required for all requests.

---

## Path Parameters

| Parameter    | Type    | Required | Description             |
| ------------ | ------- | -------- | ----------------------- |
| `team_id`    | integer | Yes      | Team identifier         |
| `dataset_id` | integer | Yes      | Dataset identifier      |
| `id`         | integer | Yes      | Data request identifier |

---

## Request Body

Content-Type: `application/json`

| Field              | Type    | Description                                           |
| ------------------ | ------- | ----------------------------------------------------- |
| `id`               | integer | Data request ID                                       |
| `dataset_id`       | integer | Reference to Dataset model                            |
| `connection_id`    | integer | Reference to Connection model                         |
| `method`           | string  | HTTP method (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`) |
| `route`            | string  | API endpoint path                                     |
| `headers`          | array   | Request headers                                       |
| `body`             | string  | Request body in JSON string format                    |
| `useGlobalHeaders` | boolean | Use global headers (default: `true`)                  |
| `query`            | string  | Query string                                          |
| `pagination`       | boolean | Enable pagination (default: `false`)                  |
| `items`            | string  | Path to items array in response (default: `items`)    |
| `itemsLimit`       | integer | Maximum number of items to return                     |
| `offset`           | string  | Pagination offset field name (default: `offset`)      |
| `paginationField`  | string  | Field used for pagination                             |
| `template`         | string  | Template type for request formatting                  |
| `conditions`       | array   | Request conditions                                    |
| `configuration`    | object  | Connection-specific configuration                     |
| `variables`        | object  | Request variables                                     |
| `Connection`       | object  | Connection details                                    |
| `VariableBindings` | array   | Variable binding definitions                          |

---

## Example Request

### cURL

```bash
curl --request PUT \
  --url https://api.chartbrew.com/team/{team_id}/datasets/{dataset_id}/dataRequests/{id} \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "id": 123,
    "dataset_id": 123,
    "connection_id": 123,
    "method": "GET",
    "route": "/users",
    "headers": [
      {
        "key": "Authorization",
        "value": "Bearer api-key"
      }
    ],
    "body": "",
    "useGlobalHeaders": true,
    "query": "",
    "pagination": false,
    "items": "items",
    "itemsLimit": 0,
    "offset": "offset",
    "paginationField": "",
    "template": "",
    "conditions": [],
    "configuration": {},
    "variables": {}
}'
```

---

## Example Response

**Status:** `200 OK`

```json
{
  "id": 123,
  "dataset_id": 123,
  "connection_id": 123,
  "route": "/users",
  "headers": [
    {
      "key": "Authorization",
      "value": "Bearer api-key"
    }
  ],
  "body": "",
  "useGlobalHeaders": true,
  "query": "",
  "pagination": false,
  "items": "items",
  "itemsLimit": 0,
  "offset": "offset",
  "paginationField": "",
  "template": "",
  "conditions": [],
  "configuration": {},
  "variables": {},
  "Connection": {
    "id": 1,
    "name": "My API Connection",
    "type": "api",
    "subType": "rest",
    "host": "https://api.example.com"
  },
  "VariableBindings": []
}
```

---

## Configuration Object

The `configuration` object contains options specific to the connection type. Only include fields relevant to the selected connection.

### Available Configuration Fields

| Field                   | Type    |
| ----------------------- | ------- |
| `populateAttributes`    | boolean |
| `mainCollectionSample`  | string  |
| `subCollectionSample`   | string  |
| `selectedSubCollection` | string  |
| `limit`                 | integer |
| `orderBy`               | string  |
| `accountId`             | string  |
| `propertyId`            | string  |
| `metrics`               | string  |
| `dimensions`            | string  |
| `startDate`             | string  |
| `endDate`               | string  |
| `limitToLast`           | integer |
| `limitToFirst`          | integer |

---

## Header Object

```json
{
  "key": "Authorization",
  "value": "Bearer token"
}
```

---

## Condition Object

```json
{
  "field": "status",
  "value": "active"
}
```

---

## Variable Binding Object

```json
{
  "id": 123,
  "entity_id": "entity_id",
  "name": "variable_name",
  "type": "string",
  "default_value": "default",
  "required": true,
  "createdAt": "2023-11-07T05:31:56Z",
  "updatedAt": "2023-11-07T05:31:56Z"
}
```

---

## Response

Returns the updated data request object with all current configuration values.

### Success Response

| Status Code | Description                       |
| ----------- | --------------------------------- |
| `200`       | Data request updated successfully |

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
