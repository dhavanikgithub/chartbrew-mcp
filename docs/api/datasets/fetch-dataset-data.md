# Fetch Dataset Data

Runs all data requests associated with a dataset and returns the resulting data.

## Table of Contents

* [Endpoint](#endpoint)
* [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Query Parameters](#query-parameters)
* [Request Example](#request-example)
  * [cURL](#curl)
* [Response](#response)
  * [Success Response (200)](#success-response-200)
* [Response Schema](#response-schema)
  * [Root Object](#root-object)
  * [Options Object](#options-object)
  * [Join Settings](#join-settings)
  * [Join Object](#join-object)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http
GET /team/{team_id}/datasets/{dataset_id}/request
```

## Authorization

Requires Bearer token authentication.

| Header        | Type   | Required | Description                                                |
| ------------- | ------ | -------- | ---------------------------------------------------------- |
| Authorization | string | Yes      | Bearer authentication token in the format `Bearer <token>` |

## Path Parameters

| Parameter  | Type   | Required | Description       |
| ---------- | ------ | -------- | ----------------- |
| team_id    | string | Yes      | ID of the team    |
| dataset_id | string | Yes      | ID of the dataset |

## Query Parameters

| Parameter | Type    | Required | Description                              |
| --------- | ------- | -------- | ---------------------------------------- |
| noSource  | boolean | No       | Skip running the data source             |
| getCache  | boolean | No       | Return cached data if available          |
| filters   | object  | No       | Filter parameters applied to the request |

## Request Example

### cURL

```bash
curl --request GET \
  --url https://api.chartbrew.com/team/{team_id}/datasets/{dataset_id}/request \
  --header 'Authorization: Bearer <token>'
```

## Response

### Success Response (200)

Returns the dataset configuration along with the data retrieved from its data requests.

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
  "data": [
    {}
  ]
}
```

## Response Schema

### Root Object

| Field   | Type     | Description                        |
| ------- | -------- | ---------------------------------- |
| options | object   | Dataset configuration and metadata |
| data    | object[] | Dataset query results              |

### Options Object

| Field          | Type      | Description                                    |
| -------------- | --------- | ---------------------------------------------- |
| id             | integer   | Dataset ID                                     |
| team_id        | integer   | Team ID                                        |
| project_ids    | integer[] | Associated project IDs                         |
| chart_id       | integer   | Related chart ID                               |
| connection_id  | integer   | Data source connection ID                      |
| draft          | boolean   | Indicates whether the dataset is in draft mode |
| name           | string    | Canonical dataset name                         |
| query          | string    | Dataset query                                  |
| xAxis          | string    | Legacy X-axis binding                          |
| xAxisOperation | string    | Legacy X-axis operation                        |
| yAxis          | string    | Legacy Y-axis binding                          |
| yAxisOperation | string    | Legacy Y-axis operation                        |
| dateField      | string    | Legacy date field binding                      |
| dateFormat     | string    | Legacy date format                             |
| legend         | string    | Legacy dataset display name                    |
| fieldsSchema   | object    | Dataset field schema                           |
| excludedFields | string[]  | Excluded fields                                |
| configuration  | object    | Dataset configuration                          |
| joinSettings   | object    | Dataset join configuration                     |

### Join Settings

| Field | Type     | Description              |
| ----- | -------- | ------------------------ |
| joins | object[] | Dataset join definitions |

### Join Object

| Field      | Type    | Description                   |
| ---------- | ------- | ----------------------------- |
| dr_id      | integer | Data request ID               |
| join_id    | integer | Joined dataset ID             |
| dr_field   | string  | Source field used for joining |
| join_field | string  | Target field used for joining |

## Notes

* This endpoint executes all data requests associated with the dataset.
* Use `getCache=true` to retrieve cached results when available.
* Use `noSource=true` to avoid executing the underlying data source.
* Filters can be passed through the `filters` query parameter to customize the returned data.
* The `data` array contains the actual records returned by the dataset's configured data requests.

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Dataset](./create-a-dataset.md)
* [Delete a Dataset](./delete-a-dataset.md)
* [Fetch Dataset Data](./fetch-dataset-data.md)
* [Get a Dataset](./get-a-dataset.md)
* [List Datasets](./list-datasets.md)
* [Quick Create](./quick-create.md)
* [Update a Dataset](./update-a-dataset.md)
* [What is a Dataset](./what-is-a-dataset.md)
