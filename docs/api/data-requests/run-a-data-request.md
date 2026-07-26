# Data Requests

## Table of Contents

* [Run a Data Request](#run-a-data-request)
  * [Endpoint](#endpoint)
* [cURL Example](#curl-example)
* [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
  * [Example](#example)
* [Response](#response)
  * [Example Response](#example-response)
* [Response Schema](#response-schema)
  * [options](#options)
  * [dataRequest](#datarequest)
* [Related Resources](#related-resources)

## Run a Data Request

Run a data request.

### Endpoint

**POST** `/team/{team_id}/datasets/{dataset_id}/dataRequests/{id}/request`

Runs a single data request.

---

## cURL Example

```bash
curl --request POST \
  --url https://api.chartbrew.com/team/{team_id}/datasets/{dataset_id}/dataRequests/{id}/request \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '
{
  "noSource": true,
  "getCache": true,
  "filters": {}
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

| Field    | Type    |
| -------- | ------- |
| noSource | boolean |
| getCache | boolean |
| filters  | object  |

### Example

```json
{
  "noSource": true,
  "getCache": true,
  "filters": {}
}
```

---

## Response

**Status:** `200 OK`

Returns the data request results.

## Example Response

```json
{
  "options": {
    "id": 123,
    "team_id": 123,
    "project_ids": [123],
    "chart_id": 123,
    "connection_id": 123,
    "draft": true,
    "name": "<string>",
    "query": "<string>",
    "xAxis": "<string>",
    "xAxisOperation": "<string>",
    "yAxis": "<string>",
    "yAxisOperation": "none",
    "dateField": "<string>",
    "dateFormat": "<string>",
    "legend": "<string>",
    "fieldsSchema": {},
    "excludedFields": [
      "<string>"
    ],
    "configuration": {},
    "joinSettings": {
      "joins": [
        {
          "dr_id": 123,
          "join_id": 123,
          "dr_field": "<string>",
          "join_field": "<string>"
        }
      ]
    }
  },
  "dataRequest": {
    "responseData": {
      "data": [
        {}
      ],
      "configuration": {}
    }
  }
}
```

## Response Schema

### options

Object containing the data request configuration.

### dataRequest

Object containing the data request execution result.

#### responseData

| Field         | Type   |
| ------------- | ------ |
| data          | array  |
| configuration | object |

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
