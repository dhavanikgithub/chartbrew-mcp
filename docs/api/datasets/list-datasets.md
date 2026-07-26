# List Datasets

Retrieve all datasets associated with a team.

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
  * [Join Settings Structure](#join-settings-structure)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http
GET /team/{team_id}/datasets
```

## Description

Returns an array of datasets belonging to the specified team. Datasets define how data is transformed and structured before being visualized in charts.

## Authorization

This endpoint requires Bearer Token authentication.

| Header        | Type   | Required | Description                                    |
| ------------- | ------ | -------- | ---------------------------------------------- |
| Authorization | string | Yes      | Bearer authentication token (`Bearer <token>`) |

## Path Parameters

| Parameter | Type   | Required | Description    |
| --------- | ------ | -------- | -------------- |
| team_id   | string | Yes      | ID of the team |

## Request Example

### cURL

```bash
curl --request GET \
  --url https://api.chartbrew.com/team/{team_id}/datasets \
  --header 'Authorization: Bearer <token>'
```

## Response

### Success Response (200)

Returns an array of dataset objects.

```json
[
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
]
```

## Response Fields

| Field          | Type      | Description                                                                       |
| -------------- | --------- | --------------------------------------------------------------------------------- |
| id             | integer   | Dataset ID                                                                        |
| team_id        | integer   | Team ID                                                                           |
| project_ids    | integer[] | Associated project IDs                                                            |
| chart_id       | integer   | Associated chart ID                                                               |
| connection_id  | integer   | Connection ID used by the dataset                                                 |
| draft          | boolean   | Indicates whether the dataset is in draft mode                                    |
| name           | string    | Canonical dataset name. Preferred over `legend` for identifying reusable datasets |
| query          | string    | Dataset query definition                                                          |
| xAxis          | string    | Legacy dataset-level X-axis binding                                               |
| xAxisOperation | string    | Legacy X-axis operation                                                           |
| yAxis          | string    | Legacy dataset-level Y-axis binding                                               |
| yAxisOperation | string    | Legacy Y-axis operation. Default: `none`                                          |
| dateField      | string    | Legacy date field binding                                                         |
| dateFormat     | string    | Legacy date format binding                                                        |
| legend         | string    | Legacy dataset name field                                                         |
| fieldsSchema   | object    | Schema describing available fields                                                |
| excludedFields | string[]  | Fields excluded from processing                                                   |
| configuration  | object    | Dataset-specific configuration                                                    |
| joinSettings   | object    | Dataset join configuration                                                        |

### Join Settings Structure

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

| Field      | Type    | Description               |
| ---------- | ------- | ------------------------- |
| dr_id      | integer | Source DataRequest ID     |
| join_id    | integer | Joined DataRequest ID     |
| dr_field   | string  | Source field used in join |
| join_field | string  | Target field used in join |

## Notes

* Datasets are responsible for formatting data returned by DataRequests.
* Dataset output is consumed by charts to generate visualizations.
* The `name` field should be used when referencing datasets in new integrations.
* Several axis-related fields are maintained for legacy compatibility and may be superseded by newer chart configuration models.

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
