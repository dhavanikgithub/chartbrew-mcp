# Update a Variable Binding

Update an existing variable binding associated with a data request.

## Table of Contents

* [Endpoint](#endpoint)
* [Try It](#try-it)
* [Authorization](#authorization)
  * [Bearer Authentication](#bearer-authentication)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
  * [Schema](#schema)
* [Example Request](#example-request)
  * [cURL](#curl)
* [Example Response](#example-response)
* [Response Fields](#response-fields)
* [HTTP Methods Supported by Data Requests](#http-methods-supported-by-data-requests)
* [Related Resources](#related-resources)

## Endpoint

```
PUT /team/{team_id}/datasets/{dataset_id}/dataRequests/{id}/variableBindings/{variable_id}
```

## Try It

Update a variable binding.

## Authorization

### Bearer Authentication

Header:

```
Authorization: Bearer <token>
```

The request requires a valid authentication token.

## Path Parameters

| Parameter     | Type    | Required | Description                 |
| ------------- | ------- | -------- | --------------------------- |
| `team_id`     | integer | Yes      | Team identifier             |
| `dataset_id`  | integer | Yes      | Dataset identifier          |
| `id`          | integer | Yes      | Data request identifier     |
| `variable_id` | integer | Yes      | Variable binding identifier |

## Request Body

Content-Type:

```
application/json
```

### Schema

| Field           | Type               | Description                                                                                  |
| --------------- | ------------------ | -------------------------------------------------------------------------------------------- |
| `id`            | integer            | Variable binding ID                                                                          |
| `entity_type`   | enum string        | Entity type. Available values: `Project`, `Connection`, `Dataset`, `DataRequest`, `Template` |
| `entity_id`     | string             | Entity identifier                                                                            |
| `name`          | string             | Variable name                                                                                |
| `type`          | string             | Variable type                                                                                |
| `default_value` | string             | Default variable value                                                                       |
| `required`      | boolean            | Whether the variable is required                                                             |
| `createdAt`     | string (date-time) | Creation timestamp                                                                           |
| `updatedAt`     | string (date-time) | Last update timestamp                                                                        |

## Example Request

### cURL

```bash
curl --request PUT \
  --url https://api.chartbrew.com/team/{team_id}/datasets/{dataset_id}/dataRequests/{id}/variableBindings/{variable_id} \
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

## Example Response

Status:

```
200 OK
```

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

## Response Fields

| Field              | Type     | Description                       |
| ------------------ | -------- | --------------------------------- |
| `id`               | integer  | Data request ID                   |
| `dataset_id`       | integer  | Reference to Dataset model        |
| `connection_id`    | integer  | Reference to Connection model     |
| `route`            | string   | API endpoint path                 |
| `headers`          | object[] | Request headers                   |
| `body`             | string   | Request body in JSON format       |
| `useGlobalHeaders` | boolean  | Whether global headers are used   |
| `query`            | string   | Query parameters                  |
| `pagination`       | boolean  | Enables pagination                |
| `items`            | string   | Path to items array in response   |
| `itemsLimit`       | integer  | Maximum number of items returned  |
| `offset`           | string   | Pagination offset field name      |
| `paginationField`  | string   | Field used for pagination         |
| `template`         | string   | Request formatting template       |
| `conditions`       | object[] | Request conditions                |
| `configuration`    | object   | Connection-specific configuration |
| `variables`        | object   | Request variables                 |
| `Connection`       | object   | Connection details                |
| `VariableBindings` | object[] | Associated variable bindings      |

## HTTP Methods Supported by Data Requests

The response `method` field can contain:

* `GET`
* `POST`
* `PUT`
* `DELETE`
* `PATCH`

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Data Request](./create-a-data-request.md)
* [Create a Variable Binding](./create-a-variable-binding.md)
* [Get Dataset Data Requests](./get-dataset-data-requests.md)
* [Run a Data Request](./run-a-data-request.md)
* [Update a Data Request](./update-a-data-request.md)
* [Update a Variable Binding](./update-a-variable-binding.md)
* [What is a Data Request](./what-is-a-data-request.md)
