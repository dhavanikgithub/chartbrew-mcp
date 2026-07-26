# Get a Dataset

Retrieve a specific dataset by its ID.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Request Example](#request-example)
  * [cURL](#curl)
* [Response](#response)
  * [Success Response (200)](#success-response-200)
* [Response Fields](#response-fields)
* [Join Settings](#join-settings)
  * [Join Structure](#join-structure)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http
GET /team/{team_id}/datasets/{dataset_id}
```

## Description

Returns the details of a single dataset associated with a team. A dataset defines how data is queried, transformed, and prepared for visualization in Chartbrew charts.

## Authorization

This endpoint requires Bearer Token authentication.

| Header        | Type   | Required | Description                                    |
| ------------- | ------ | -------- | ---------------------------------------------- |
| Authorization | string | Yes      | Bearer authentication token (`Bearer <token>`) |

## Path Parameters

| Parameter  | Type   | Required | Description       |
| ---------- | ------ | -------- | ----------------- |
| team_id    | string | Yes      | ID of the team    |
| dataset_id | string | Yes      | ID of the dataset |

## Request Example

### cURL

```bash
curl --request GET \
  --url https://api.chartbrew.com/team/{team_id}/datasets/{dataset_id} \
  --header 'Authorization: Bearer <token>'
```

## Response

### Success Response (200)

Returns a dataset object.

```json
{
  "id": 123,
  "team_id": 123,
  "project_ids": [123],
  "chart_id": 123,
  "connection_id": 123,
  "draft": true,
  "name": "Sales Dataset",
  "query": "SELECT * FROM sales",
  "xAxis": "date",
  "xAxisOperation": "groupBy",
  "yAxis": "revenue",
  "yAxisOperation": "none",
  "dateField": "created_at",
  "dateFormat": "YYYY-MM-DD",
  "legend": "Sales",
  "fieldsSchema": {},
  "excludedFields": [],
  "configuration": {},
  "joinSettings": {
    "joins": [
      {
        "dr_id": 123,
        "join_id": 123,
        "dr_field": "customer_id",
        "join_field": "id"
      }
    ]
  }
}
```

## Response Fields

| Field          | Type      | Description                                                                        |
| -------------- | --------- | ---------------------------------------------------------------------------------- |
| id             | integer   | Dataset ID                                                                         |
| team_id        | integer   | Team ID                                                                            |
| project_ids    | integer[] | Associated project IDs                                                             |
| chart_id       | integer   | Associated chart ID                                                                |
| connection_id  | integer   | Connection used by the dataset                                                     |
| draft          | boolean   | Indicates whether the dataset is in draft mode                                     |
| name           | string    | Canonical dataset name. Preferred over `legend` when identifying reusable datasets |
| query          | string    | Dataset query definition                                                           |
| xAxis          | string    | Legacy dataset-level X-axis binding                                                |
| xAxisOperation | string    | Legacy X-axis operation                                                            |
| yAxis          | string    | Legacy dataset-level Y-axis binding                                                |
| yAxisOperation | string    | Legacy Y-axis operation. Default: `none`                                           |
| dateField      | string    | Legacy date field binding                                                          |
| dateFormat     | string    | Legacy date format binding                                                         |
| legend         | string    | Legacy dataset naming field                                                        |
| fieldsSchema   | object    | Schema describing available dataset fields                                         |
| excludedFields | string[]  | Fields excluded from dataset processing                                            |
| configuration  | object    | Dataset-specific configuration                                                     |
| joinSettings   | object    | Dataset join configuration                                                         |

## Join Settings

Datasets can define joins between multiple data requests.

### Join Structure

```json
{
  "joinSettings": {
    "joins": [
      {
        "dr_id": 123,
        "join_id": 123,
        "dr_field": "customer_id",
        "join_field": "id"
      }
    ]
  }
}
```

| Field      | Type    | Description                                     |
| ---------- | ------- | ----------------------------------------------- |
| dr_id      | integer | Source DataRequest ID                           |
| join_id    | integer | Joined DataRequest ID                           |
| dr_field   | string  | Field from the source request used for the join |
| join_field | string  | Field from the joined request used for the join |

## Notes

* Datasets are responsible for formatting data returned by DataRequests.
* Charts consume dataset output to generate visualizations.
* Use the `name` field as the primary identifier for reusable datasets.
* Fields such as `xAxis`, `yAxis`, `dateField`, and related operation fields are maintained primarily for legacy compatibility.
* Complex datasets may use `joinSettings` to combine data from multiple sources before visualization.

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
