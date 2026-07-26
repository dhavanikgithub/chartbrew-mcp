# Create a Data Request

Create a new data request for a dataset.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
  * [Fields](#fields)
* [Example Request](#example-request)
  * [cURL](#curl)
  * [Request Body Example](#request-body-example)
* [Configuration Object](#configuration-object)
  * [Available Fields](#available-fields)
* [Success Response](#success-response)
  * [Status Code](#status-code)
  * [Response Body](#response-body)
* [Response Fields](#response-fields)
* [Related Resources](#related-resources)

## Endpoint

```http
POST /team/{team_id}/datasets/{dataset_id}/dataRequests
```

## Description

Creates a new Data Request associated with a specific Dataset. Data Requests define how Chartbrew fetches data from a Connection, including request configuration, headers, pagination settings, variables, and connection-specific options.

---

## Authorization

| Header        | Type   | Required | Description                                                |
| ------------- | ------ | -------- | ---------------------------------------------------------- |
| Authorization | string | Yes      | Bearer authentication token in the format `Bearer <token>` |

Example:

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

## Request Body

Content-Type: `application/json`

### Fields

| Field              | Type          | Required | Description                                                          |
| ------------------ | ------------- | -------- | -------------------------------------------------------------------- |
| `id`               | integer       | No       | Data request identifier                                              |
| `dataset_id`       | integer       | No       | Reference to Dataset model                                           |
| `connection_id`    | integer       | No       | Reference to Connection model                                        |
| `method`           | string        | No       | HTTP method. One of: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`         |
| `route`            | string        | No       | API endpoint path                                                    |
| `headers`          | array<object> | No       | Custom request headers                                               |
| `body`             | string        | No       | Request body in JSON string format                                   |
| `useGlobalHeaders` | boolean       | No       | Whether global connection headers should be applied. Default: `true` |
| `query`            | string        | No       | Request query string                                                 |
| `pagination`       | boolean       | No       | Enable pagination. Default: `false`                                  |
| `items`            | string        | No       | Path to items array in response. Default: `items`                    |
| `itemsLimit`       | integer       | No       | Maximum number of items returned. Default: `0`                       |
| `offset`           | string        | No       | Pagination offset field name. Default: `offset`                      |
| `paginationField`  | string        | No       | Field used for pagination                                            |
| `template`         | string        | No       | Request template type                                                |
| `conditions`       | array<object> | No       | Request conditions                                                   |
| `configuration`    | object        | No       | Connection-specific configuration options                            |
| `variables`        | object        | No       | Request variables                                                    |
| `Connection`       | object        | No       | Associated connection information                                    |
| `VariableBindings` | array<object> | No       | Variable bindings for the request                                    |

---

## Example Request

### cURL

```bash
curl --request POST \
  --url https://api.chartbrew.com/team/{team_id}/datasets/{dataset_id}/dataRequests \
  --header "Authorization: Bearer <token>" \
  --header "Content-Type: application/json" \
  --data '{
    "connection_id": 123,
    "route": "/users",
    "useGlobalHeaders": true,
    "pagination": false,
    "items": "items"
  }'
```

### Request Body Example

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

## Configuration Object

The `configuration` object contains connection-specific settings. Only include fields relevant to the selected connection type.

### Available Fields

| Field                   | Type    | Description                    |
| ----------------------- | ------- | ------------------------------ |
| `populateAttributes`    | boolean | Populate additional attributes |
| `mainCollectionSample`  | string  | Main collection sample         |
| `subCollectionSample`   | string  | Sub-collection sample          |
| `selectedSubCollection` | string  | Selected sub-collection        |
| `limit`                 | integer | Result limit                   |
| `orderBy`               | string  | Ordering field                 |
| `accountId`             | string  | Account identifier             |
| `propertyId`            | string  | Property identifier            |
| `metrics`               | string  | Metrics selection              |
| `dimensions`            | string  | Dimensions selection           |
| `startDate`             | string  | Start date                     |
| `endDate`               | string  | End date                       |
| `limitToLast`           | integer | Return last N records          |
| `limitToFirst`          | integer | Return first N records         |

---

## Success Response

### Status Code

```http
200 OK
```

### Response Body

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
  "configuration": {},
  "variables": {},
  "Connection": {},
  "VariableBindings": []
}
```

---

## Response Fields

The response returns the newly created Data Request object and mirrors the structure of the request body, including:

* Data Request metadata
* Connection information
* Request configuration
* Variables and bindings
* Pagination settings
* Headers and request body configuration

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
