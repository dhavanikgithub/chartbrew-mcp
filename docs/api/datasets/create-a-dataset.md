# Create a Dataset

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
  * [Content Type](#content-type)
  * [Fields](#fields)
* [Example Request](#example-request)
* [Example Request Body](#example-request-body)
* [Response](#response)
  * [Status Code](#status-code)
  * [Example Response](#example-response)
* [Response Fields](#response-fields)
* [Join Settings Structure](#join-settings-structure)
  * [Join Fields](#join-fields)
* [Important Notes](#important-notes)
  * [Dataset Creation vs Data Retrieval](#dataset-creation-vs-data-retrieval)
  * [Naming](#naming)
  * [Legacy Dataset Bindings](#legacy-dataset-bindings)
* [Workflow](#workflow)
* [Related Resources](#related-resources)

## Endpoint

Creates a new reusable dataset.

**Method:** `POST`
**URL:** `/team/{team_id}/datasets`

---

## Description

Creates a dataset container that can later be used to fetch and visualize data.

After creating a dataset, you must create one or more Data Requests to retrieve data from connected data sources. Data requests are responsible for executing queries and importing data into the dataset.

---

## Authorization

| Header        | Value            |
| ------------- | ---------------- |
| Authorization | `Bearer <token>` |

---

## Path Parameters

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| `team_id` | string | Yes      | Team ID     |

---

## Request Body

### Content Type

```text
application/json
```

### Fields

| Field           | Type      | Required | Description                              |
| --------------- | --------- | -------- | ---------------------------------------- |
| `team_id`       | integer   | Yes      | Team ID                                  |
| `project_ids`   | integer[] | No       | Projects that can access the dataset     |
| `name`          | string    | No       | Canonical dataset name                   |
| `connection_id` | integer   | No       | Associated connection ID                 |
| `type`          | string    | No       | Dataset type                             |
| `query`         | string    | No       | Dataset query                            |
| `datasetColor`  | string    | No       | Dataset display color                    |
| `dateField`     | string    | No       | Date field used by the dataset           |
| `dateFormat`    | string    | No       | Date format                              |
| `legend`        | string    | No       | Legacy dataset name field. Prefer `name` |
| `configuration` | object    | No       | Dataset configuration settings           |

---

## Example Request

```bash
curl --request POST \
  --url https://api.chartbrew.com/team/{team_id}/datasets \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "team_id": 123,
    "project_ids": [123],
    "name": "Sales Dataset",
    "connection_id": 123,
    "type": "api",
    "query": "",
    "datasetColor": "#4F46E5",
    "dateField": "created_at",
    "dateFormat": "YYYY-MM-DD",
    "configuration": {}
  }'
```

---

## Example Request Body

```json
{
  "team_id": 123,
  "project_ids": [123],
  "name": "Sales Dataset",
  "connection_id": 123,
  "type": "api",
  "query": "",
  "datasetColor": "#4F46E5",
  "dateField": "created_at",
  "dateFormat": "YYYY-MM-DD",
  "legend": "Sales Dataset",
  "configuration": {}
}
```

---

## Response

### Status Code

```text
200 OK
```

### Example Response

```json
{
  "id": 123,
  "team_id": 123,
  "project_ids": [123],
  "chart_id": 123,
  "connection_id": 123,
  "draft": true,
  "name": "Sales Dataset",
  "query": "",
  "xAxis": "date",
  "xAxisOperation": "",
  "yAxis": "revenue",
  "yAxisOperation": "none",
  "dateField": "created_at",
  "dateFormat": "YYYY-MM-DD",
  "legend": "Sales Dataset",
  "fieldsSchema": {},
  "excludedFields": [],
  "configuration": {},
  "joinSettings": {
    "joins": [
      {
        "dr_id": 123,
        "join_id": 123,
        "dr_field": "id",
        "join_field": "user_id"
      }
    ]
  }
}
```

---

## Response Fields

| Field            | Type      | Description                   |
| ---------------- | --------- | ----------------------------- |
| `id`             | integer   | Dataset ID                    |
| `team_id`        | integer   | Team ID                       |
| `project_ids`    | integer[] | Project IDs                   |
| `chart_id`       | integer   | Chart ID                      |
| `connection_id`  | integer   | Connection ID                 |
| `draft`          | boolean   | Dataset draft status          |
| `name`           | string    | Canonical dataset name        |
| `query`          | string    | Dataset query                 |
| `xAxis`          | string    | Legacy dataset x-axis binding |
| `xAxisOperation` | string    | Legacy x-axis aggregation     |
| `yAxis`          | string    | Legacy dataset y-axis binding |
| `yAxisOperation` | string    | Legacy y-axis aggregation     |
| `dateField`      | string    | Legacy date field             |
| `dateFormat`     | string    | Legacy date format            |
| `legend`         | string    | Legacy dataset name           |
| `fieldsSchema`   | object    | Dataset schema definition     |
| `excludedFields` | string[]  | Excluded dataset fields       |
| `configuration`  | object    | Dataset configuration         |
| `joinSettings`   | object    | Dataset join configuration    |

---

## Join Settings Structure

```json
{
  "joinSettings": {
    "joins": [
      {
        "dr_id": 123,
        "join_id": 123,
        "dr_field": "id",
        "join_field": "user_id"
      }
    ]
  }
}
```

### Join Fields

| Field        | Type    | Description                    |
| ------------ | ------- | ------------------------------ |
| `dr_id`      | integer | Source data request identifier |
| `join_id`    | integer | Joined data request identifier |
| `dr_field`   | string  | Source field                   |
| `join_field` | string  | Joined field                   |

---

## Important Notes

### Dataset Creation vs Data Retrieval

Creating a dataset does **not** automatically fetch data.

To begin importing data into the dataset, create a Data Request using the **Create a Data Request** endpoint.

### Naming

Use `name` as the primary dataset name.

`legend` is retained only for backward compatibility and should not be used for new integrations.

### Legacy Dataset Bindings

The following fields are considered legacy dataset-level bindings:

* `xAxis`
* `xAxisOperation`
* `yAxis`
* `yAxisOperation`
* `dateField`
* `dateFormat`

New chart-specific bindings should be stored in chart configuration entities rather than on the dataset itself.

---

## Workflow

```text
Create Dataset
      │
      ▼
Create Data Request
      │
      ▼
Fetch Data
      │
      ▼
Create/Configure Charts
```

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
