# Get a Chart

Returns a specific chart by its ID.

## Table of Contents

* [Endpoint](#endpoint)
* [Authentication](#authentication)
* [Path Parameters](#path-parameters)
* [Request](#request)
  * [cURL](#curl)
* [Response](#response)
  * [200 - Chart Response](#200---chart-response)
* [Chart Object](#chart-object)
* [Supported Chart Types](#supported-chart-types)
* [ChartDatasetConfig Object](#chartdatasetconfig-object)
* [Error Responses](#error-responses)
  * [400 - Bad Request](#400---bad-request)
  * [401 - Unauthorized](#401---unauthorized)
  * [403 - Forbidden](#403---forbidden)
* [Related Resources](#related-resources)

## Endpoint

```
GET /project/{project_id}/chart/{id}
```

## Authentication

This endpoint requires a Bearer authentication token.

```
Authorization: Bearer <token>
```

## Path Parameters

| Parameter    | Type   | Required | Description       |
| ------------ | ------ | -------- | ----------------- |
| `project_id` | string | Yes      | ID of the project |
| `id`         | string | Yes      | ID of the chart   |

## Request

### cURL

```bash
curl --request GET \
  --url https://api.chartbrew.com/project/{project_id}/chart/{id} \
  --header 'Authorization: Bearer <token>'
```

## Response

### 200 - Chart Response

```json
{
  "id": "<string>",
  "name": "<string>",
  "type": "line",
  "subType": "<string>",
  "chartData": {},
  "chartDataUpdated": "2023-11-07T05:31:56Z",
  "project_id": "<string>",
  "public": true,
  "shareable": true,
  "ChartDatasetConfigs": []
}
```

## Chart Object

| Field                 | Type      | Description                              |
| --------------------- | --------- | ---------------------------------------- |
| `id`                  | string    | Chart ID                                 |
| `name`                | string    | Chart name                               |
| `type`                | enum      | Chart type                               |
| `subType`             | string    | Chart subtype                            |
| `chartData`           | object    | Chart data configuration                 |
| `chartDataUpdated`    | date-time | Last chart data update timestamp         |
| `project_id`          | string    | Associated project ID                    |
| `public`              | boolean   | Whether the chart is publicly accessible |
| `shareable`           | boolean   | Whether the chart can be shared          |
| `ChartDatasetConfigs` | array     | Dataset configurations used by the chart |

## Supported Chart Types

The `type` field supports the following values:

* `line`
* `bar`
* `pie`
* `doughnut`
* `radar`
* `polar`
* `table`
* `kpi`
* `avg`
* `gauge`
* `matrix`
* `markdown`

## ChartDatasetConfig Object

Each chart can contain one or more dataset configurations.

```json
{
  "id": "3c90c3cc-0d44-4b50-8888-8dd25736052a",
  "chart_id": 123,
  "dataset_id": 123,
  "xAxis": "<string>",
  "xAxisOperation": "<string>",
  "yAxis": "<string>",
  "yAxisOperation": "<string>",
  "dateField": "<string>",
  "dateFormat": "<string>",
  "conditions": [],
  "formula": "<string>",
  "datasetColor": "<string>",
  "fillColor": "<string>",
  "fill": false,
  "multiFill": false,
  "legend": "<string>",
  "pointRadius": 123,
  "excludedFields": [],
  "sort": "<string>",
  "columnsOrder": [],
  "order": 0,
  "maxRecords": 123,
  "goal": 123,
  "configuration": {
    "variables": [
      {
        "name": "<string>",
        "value": "<string>"
      }
    ]
  }
}
```

## Error Responses

### 400 - Bad Request

```json
{
  "message": "<string>",
  "error": "<string>"
}
```

### 401 - Unauthorized

```json
{
  "message": "<string>",
  "error": "<string>"
}
```

### 403 - Forbidden

```json
{
  "message": "<string>",
  "error": "<string>"
}
```

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Chart](./create-a-chart.md)
* [Create Chart Share Policy](./create-chart-share-policy.md)
* [Delete a Chart](./delete-a-chart.md)
* [Delete Chart Share Policy](./delete-chart-share-policy.md)
* [Generate Chart Share Token](./generate-chart-share-token.md)
* [Get a Chart](./get-a-chart.md)
* [Get Chart for Sharing](./get-chart-for-sharing.md)
* [Query a Chart](./query-a-chart.md)
* [Quick Create Chart](./quick-create-chart.md)
* [Update Chart Share Policy](./update-chart-share-policy.md)
* [What is a Chart](./what-is-a-chart.md)
