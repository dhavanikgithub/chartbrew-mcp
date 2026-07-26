# Quick Create

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
  * [Root Fields](#root-fields)
* [Metric Operations](#metric-operations)
* [Join Settings](#join-settings)
  * [Structure](#structure)
  * [Join Fields](#join-fields)
* [Data Request Object](#data-request-object)
  * [Basic Configuration](#basic-configuration)
  * [Conditions](#conditions)
  * [Configuration Object](#configuration-object)
  * [Transform Configuration](#transform-configuration)
  * [Variable Bindings](#variable-bindings)
* [Example Request](#example-request)
* [Example Response](#example-response)
* [Response Fields](#response-fields)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

Creates a reusable dataset and all associated data requests in a single API call.

**Method:** `POST`
**URL:** `/team/{team_id}/datasets/quick-create`

---

## Description

This endpoint creates a reusable dataset together with its data requests.

Use `name` as the canonical dataset name.

Legacy binding fields such as:

* `dimension`
* `metric`
* `metricOperation`
* `dateField`
* `dateFormat`
* `conditions`
* `legend`

are still supported for backward compatibility. New chart-specific bindings should be configured through `chartDatasetConfigs[]` in the chart quick-create workflow rather than at the dataset level.

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

### Root Fields

| Field              | Type      | Required | Description                                                           |
| ------------------ | --------- | -------- | --------------------------------------------------------------------- |
| `team_id`          | integer   | Yes      | Team ID                                                               |
| `project_ids`      | integer[] | No       | Project IDs that can access the dataset                               |
| `draft`            | boolean   | No       | Whether the dataset is hidden from dashboard viewers. Default: `true` |
| `name`             | string    | No       | Canonical dataset name                                                |
| `dimension`        | string    | No       | Legacy dataset x-axis fallback                                        |
| `metric`           | string    | No       | Legacy dataset y-axis fallback                                        |
| `metricOperation`  | string    | No       | Legacy aggregation operation                                          |
| `dateField`        | string    | No       | Legacy date field                                                     |
| `dateFormat`       | string    | No       | Legacy date format                                                    |
| `legend`           | string    | No       | Legacy dataset name field                                             |
| `conditions`       | object[]  | No       | Legacy dataset-level filters                                          |
| `fieldsSchema`     | object    | No       | Dataset schema definition                                             |
| `joinSettings`     | object    | No       | Dataset joins configuration                                           |
| `dataRequests`     | object[]  | No       | Data requests to create                                               |
| `main_dr_index`    | integer   | No       | Main data request index. Default: `0`                                 |
| `variableBindings` | object[]  | No       | Dataset variable bindings                                             |

---

## Metric Operations

Supported values for `metricOperation`:

| Value          |
| -------------- |
| `none`         |
| `count`        |
| `count_unique` |
| `sum`          |
| `avg`          |
| `min`          |
| `max`          |

---

## Join Settings

### Structure

```json
{
  "joinSettings": {
    "joins": [
      {
        "dr_id": 0,
        "join_id": 1,
        "dr_field": "id",
        "join_field": "user_id",
        "alias": "users"
      }
    ]
  }
}
```

### Join Fields

| Field        | Type    | Description               |
| ------------ | ------- | ------------------------- |
| `dr_id`      | integer | Source data request index |
| `join_id`    | integer | Target data request index |
| `dr_field`   | string  | Source field              |
| `join_field` | string  | Target field              |
| `alias`      | string  | Join alias                |

---

## Data Request Object

Each item in `dataRequests[]` supports the following fields.

### Basic Configuration

| Field              | Type     |
| ------------------ | -------- |
| `connection_id`    | integer  |
| `route`            | string   |
| `headers`          | object[] |
| `body`             | string   |
| `useGlobalHeaders` | boolean  |
| `query`            | string   |
| `pagination`       | boolean  |
| `itemsLimit`       | integer  |
| `offset`           | string   |
| `paginationField`  | string   |
| `template`         | string   |

---

### Conditions

```json
{
  "conditions": [
    {
      "field": "status",
      "operator": "=",
      "value": "active"
    }
  ]
}
```

| Field      | Type   |
| ---------- | ------ |
| `field`    | string |
| `operator` | string |
| `value`    | string |

---

### Configuration Object

```json
{
  "configuration": {
    "populateAttributes": true,
    "mainCollectionSample": "users",
    "subCollectionSample": "orders",
    "selectedSubCollection": "orders",
    "limit": 100,
    "orderBy": "created_at",
    "accountId": "123",
    "propertyId": "456",
    "metrics": "sessions",
    "dimensions": "date",
    "startDate": "2024-01-01",
    "endDate": "2024-12-31",
    "limitToLast": 30,
    "limitToFirst": 100
  }
}
```

---

### Transform Configuration

```json
{
  "transform": {
    "enabled": true,
    "type": "group",
    "configuration": {}
  }
}
```

| Field           | Type    |
| --------------- | ------- |
| `enabled`       | boolean |
| `type`          | string  |
| `configuration` | object  |

---

### Variable Bindings

```json
{
  "variableBindings": [
    {
      "name": "country",
      "default_value": "US",
      "required": false
    }
  ]
}
```

| Field           | Type    |
| --------------- | ------- |
| `name`          | string  |
| `default_value` | string  |
| `required`      | boolean |

---

## Example Request

```bash
curl --request POST \
  --url https://api.chartbrew.com/team/{team_id}/datasets/quick-create \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "team_id": 123,
    "project_ids": [123],
    "draft": true,
    "name": "Sales Dataset",
    "dataRequests": [
      {
        "connection_id": 123,
        "route": "/sales"
      }
    ]
  }'
```

---

## Example Response

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
  "yAxisOperation": "sum",
  "dateField": "created_at",
  "dateFormat": "YYYY-MM-DD",
  "legend": "Sales Dataset",
  "fieldsSchema": {},
  "excludedFields": [],
  "configuration": {},
  "joinSettings": {
    "joins": [
      {
        "dr_id": 0,
        "join_id": 1,
        "dr_field": "id",
        "join_field": "user_id"
      }
    ]
  }
}
```

---

## Response Fields

| Field            | Type      | Description                  |
| ---------------- | --------- | ---------------------------- |
| `id`             | integer   | Dataset ID                   |
| `team_id`        | integer   | Team ID                      |
| `project_ids`    | integer[] | Project IDs                  |
| `chart_id`       | integer   | Chart ID                     |
| `connection_id`  | integer   | Connection ID                |
| `draft`          | boolean   | Draft status                 |
| `name`           | string    | Canonical dataset name       |
| `query`          | string    | Dataset query                |
| `xAxis`          | string    | Legacy x-axis binding        |
| `xAxisOperation` | string    | Legacy x-axis operation      |
| `yAxis`          | string    | Legacy y-axis binding        |
| `yAxisOperation` | string    | Legacy aggregation operation |
| `dateField`      | string    | Legacy date field            |
| `dateFormat`     | string    | Legacy date format           |
| `legend`         | string    | Legacy dataset name          |
| `fieldsSchema`   | object    | Dataset schema               |
| `excludedFields` | string[]  | Excluded fields              |
| `configuration`  | object    | Dataset configuration        |
| `joinSettings`   | object    | Join configuration           |

---

## Notes

1. Use `name` instead of `legend` for dataset naming.
2. New chart bindings should be configured using `chartDatasetConfigs[]`.
3. `main_dr_index` identifies the primary data request.
4. Join definitions can reference data requests using zero-based indices before creation.
5. `fieldsSchema` is typically populated automatically when the dataset is used by charts.

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
