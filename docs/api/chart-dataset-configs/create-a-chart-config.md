# Create a Chart Dataset Config

Creates a chart dataset configuration for a specific chart.

## Table of Contents

* [Endpoint](#endpoint)
* [Authentication](#authentication)
* [Request Example](#request-example)
* [Request Body](#request-body)
* [Conditions Object](#conditions-object)
* [Configuration Object](#configuration-object)
* [Path Parameters](#path-parameters)
* [Successful Response](#successful-response)
* [Response Fields](#response-fields)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http
POST /project/{project_id}/chart/{id}/chart-dataset-config
```

## Authentication

Requires Bearer token authentication.

```http
Authorization: Bearer <token>
Content-Type: application/json
```

## Request Example

```bash
curl --request POST \
  --url https://api.chartbrew.com/project/{project_id}/chart/{id}/chart-dataset-config \
  --header "Authorization: Bearer <token>" \
  --header "Content-Type: application/json" \
  --data '{
    "id": "3c90c3cc-0d44-4b50-8888-8dd25736052a",
    "chart_id": 123,
    "dataset_id": 123,
    "xAxis": "root[].field",
    "xAxisOperation": "none",
    "yAxis": "root[].value",
    "yAxisOperation": "sum",
    "dateField": "root[].createdAt",
    "dateFormat": "YYYY-MM-DD",
    "conditions": [],
    "formula": "",
    "datasetColor": "#000000",
    "fillColor": "#ffffff",
    "fill": false,
    "multiFill": false,
    "legend": "Dataset",
    "pointRadius": 5,
    "excludedFields": [],
    "sort": "",
    "columnsOrder": [],
    "order": 0,
    "maxRecords": 100,
    "goal": 0,
    "configuration": {
      "variables": []
    }
  }'
```

## Request Body

| Field            | Type    | Description                                                               |
| ---------------- | ------- | ------------------------------------------------------------------------- |
| `id`             | UUID    | Dataset config ID                                                         |
| `chart_id`       | Integer | Chart ID                                                                  |
| `dataset_id`     | Integer | Dataset ID                                                                |
| `xAxis`          | String  | Chart x-axis or dimension field using traversal syntax (`root[].field`)   |
| `xAxisOperation` | String  | Operation applied to x-axis                                               |
| `yAxis`          | String  | Chart y-axis metric field using traversal syntax (`root[].field`)         |
| `yAxisOperation` | String  | Operation applied to y-axis (`none`, `sum`, `avg`, `min`, `max`, `count`) |
| `dateField`      | String  | Date field used for filtering                                             |
| `dateFormat`     | String  | Date format used for filtering (example: `YYYY-MM-DD`)                    |
| `conditions`     | Array   | Additional dataset filtering conditions                                   |
| `formula`        | String  | Dataset calculation formula                                               |
| `datasetColor`   | String  | Dataset display color                                                     |
| `fillColor`      | String  | Fill color                                                                |
| `fill`           | Boolean | Enables chart fill                                                        |
| `multiFill`      | Boolean | Enables multiple fills                                                    |
| `legend`         | String  | Dataset legend label                                                      |
| `pointRadius`    | Integer | Chart point radius                                                        |
| `excludedFields` | Array   | Fields excluded from output                                               |
| `sort`           | String  | Sorting configuration                                                     |
| `columnsOrder`   | Array   | Column ordering configuration                                             |
| `order`          | Integer | Dataset display order                                                     |
| `maxRecords`     | Integer | Maximum records returned                                                  |
| `goal`           | Integer | Dataset goal value                                                        |
| `configuration`  | Object  | Additional dataset configuration                                          |

## Conditions Object

The `conditions` array supports additional filtering.

```json
[
  {
    "id": "condition-id",
    "field": "status",
    "value": "active",
    "displayValues": true
  }
]
```

| Field           | Type    | Description                        |
| --------------- | ------- | ---------------------------------- |
| `id`            | String  | Condition identifier               |
| `field`         | String  | Field to filter                    |
| `value`         | String  | Filter value                       |
| `displayValues` | Boolean | Whether values should be displayed |

## Configuration Object

Used for dataset variables.

```json
{
  "variables": [
    {
      "name": "variableName",
      "value": "variableValue"
    }
  ]
}
```

## Path Parameters

| Parameter    | Type   | Required | Description |
| ------------ | ------ | -------- | ----------- |
| `project_id` | String | Yes      | Project ID  |
| `id`         | String | Yes      | Chart ID    |

## Successful Response

Status:

```http
200 OK
```

Example:

```json
{
  "id": "3c90c3cc-0d44-4b50-8888-8dd25736052a",
  "chart_id": 123,
  "dataset_id": 123,
  "xAxis": "root[].field",
  "yAxis": "root[].value",
  "yAxisOperation": "sum",
  "fill": false,
  "multiFill": false,
  "order": 0,
  "configuration": {
    "variables": []
  }
}
```

## Response Fields

The response contains the same fields as the request body:

* Dataset configuration ID
* Chart and dataset references
* Axis configuration
* Date filtering configuration
* Conditions
* Styling options
* Sorting and ordering options
* Dataset limits
* Additional configuration variables

## Notes

* Axis fields support traversal syntax such as `root[].field`.
* `yAxisOperation` supports aggregation operations:

  * `none`
  * `sum`
  * `avg`
  * `min`
  * `max`
  * `count`
* `configuration.variables` can be used to provide dynamic values for dataset processing.

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Chart Dataset Config](./create-a-chart-config.md)
* [Delete a Chart Dataset Config](./delete-a-chart-config.md)
* [Update a Chart Dataset Config](./update-a-chart-config.md)
* [What is a Chart Dataset Config](./what-is-a-chart-dataset-config.md)
