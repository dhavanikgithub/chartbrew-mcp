# Update a Chart Dataset Config

Updates an existing chart dataset configuration.

## Table of Contents

* [Endpoint](#endpoint)
* [Authentication](#authentication)
* [Request](#request)
  * [cURL](#curl)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
* [Conditions Object](#conditions-object)
* [Configuration Object](#configuration-object)
* [Example Request Body](#example-request-body)
* [Response](#response)
  * [Response Example](#response-example)
* [Related Resources](#related-resources)

## Endpoint

```http
PUT /project/{project_id}/chart/{id}/chart-dataset-config/{cdc_id}
```

## Authentication

Requires Bearer token authentication.

```http
Authorization: Bearer <token>
Content-Type: application/json
```

## Request

### cURL

```bash
curl --request PUT \
  --url https://api.chartbrew.com/project/{project_id}/chart/{id}/chart-dataset-config/{cdc_id} \
  --header "Authorization: Bearer <token>" \
  --header "Content-Type: application/json" \
  --data '{}'
```

## Path Parameters

| Parameter    | Type   | Required | Description                           |
| ------------ | ------ | -------- | ------------------------------------- |
| `project_id` | string | Yes      | ID of the project                     |
| `id`         | string | Yes      | ID of the chart                       |
| `cdc_id`     | string | Yes      | ID of the chart dataset configuration |

## Request Body

Content-Type: `application/json`

| Field            | Type     | Description                                                          |
| ---------------- | -------- | -------------------------------------------------------------------- |
| `id`             | UUID     | Chart dataset configuration ID                                       |
| `chart_id`       | integer  | Chart ID                                                             |
| `dataset_id`     | integer  | Dataset ID                                                           |
| `xAxis`          | string   | Chart x-axis/dimension field using traversal syntax (`root[].field`) |
| `xAxisOperation` | string   | Chart-specific x-axis operation                                      |
| `yAxis`          | string   | Chart y-axis/metric field using traversal syntax (`root[].field`)    |
| `yAxisOperation` | string   | Operation for y-axis (`none`, `sum`, `avg`, `min`, `max`, `count`)   |
| `dateField`      | string   | Date field used for filtering                                        |
| `dateFormat`     | string   | Date format used for filtering (example: `YYYY-MM-DD`)               |
| `conditions`     | array    | Additional dataset filtering conditions                              |
| `formula`        | string   | Formula expression                                                   |
| `datasetColor`   | string   | Dataset display color                                                |
| `fillColor`      | string   | Fill color                                                           |
| `fill`           | boolean  | Enable chart fill                                                    |
| `multiFill`      | boolean  | Enable multiple fills                                                |
| `legend`         | string   | Legend label                                                         |
| `pointRadius`    | integer  | Chart point radius                                                   |
| `excludedFields` | string[] | Fields excluded from visualization                                   |
| `sort`           | string   | Sorting configuration                                                |
| `columnsOrder`   | string[] | Column ordering                                                      |
| `order`          | integer  | Dataset ordering                                                     |
| `maxRecords`     | integer  | Maximum records to display                                           |
| `goal`           | integer  | Goal value                                                           |
| `configuration`  | object   | Additional dataset configuration                                     |

## Conditions Object

```json
{
  "id": "string",
  "field": "string",
  "value": "string",
  "displayValues": true
}
```

## Configuration Object

Used to provide values for dataset variables.

```json
{
  "variables": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

## Example Request Body

```json
{
  "id": "3c90c3cc-0d44-4b50-8888-8dd25736052a",
  "chart_id": 123,
  "dataset_id": 123,
  "xAxis": "root[].field",
  "xAxisOperation": "string",
  "yAxis": "root[].value",
  "yAxisOperation": "sum",
  "dateField": "createdAt",
  "dateFormat": "YYYY-MM-DD",
  "conditions": [
    {
      "id": "condition-id",
      "field": "status",
      "value": "active",
      "displayValues": true
    }
  ],
  "formula": "string",
  "datasetColor": "#000000",
  "fillColor": "#ffffff",
  "fill": false,
  "multiFill": false,
  "legend": "Revenue",
  "pointRadius": 5,
  "excludedFields": [],
  "sort": "desc",
  "columnsOrder": [],
  "order": 0,
  "maxRecords": 100,
  "goal": 1000,
  "configuration": {
    "variables": [
      {
        "name": "variable_name",
        "value": "variable_value"
      }
    ]
  }
}
```

## Response

Status Code: `200 OK`

Returns the updated chart dataset configuration.

### Response Example

```json
{
  "id": "3c90c3cc-0d44-4b50-8888-8dd25736052a",
  "chart_id": 123,
  "dataset_id": 123,
  "xAxis": "string",
  "xAxisOperation": "string",
  "yAxis": "string",
  "yAxisOperation": "sum",
  "dateField": "string",
  "dateFormat": "YYYY-MM-DD",
  "conditions": [],
  "formula": "string",
  "datasetColor": "string",
  "fillColor": "string",
  "fill": false,
  "multiFill": false,
  "legend": "string",
  "pointRadius": 5,
  "excludedFields": [],
  "sort": "string",
  "columnsOrder": [],
  "order": 0,
  "maxRecords": 100,
  "goal": 1000,
  "configuration": {
    "variables": []
  }
}
```

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Chart Dataset Config](./create-a-chart-config.md)
* [Delete a Chart Dataset Config](./delete-a-chart-config.md)
* [Update a Chart Dataset Config](./update-a-chart-config.md)
* [What is a Chart Dataset Config](./what-is-a-chart-dataset-config.md)
