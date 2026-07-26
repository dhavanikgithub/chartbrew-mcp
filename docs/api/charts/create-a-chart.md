# Create a Chart

Creates a new chart in the project.

## Table of Contents

* [Endpoint](#endpoint)
* [Authentication](#authentication)
* [Request](#request)
  * [cURL](#curl)
* [Request Body](#request-body)
* [Path Parameters](#path-parameters)
* [Supported Chart Types](#supported-chart-types)
* [Responses](#responses)
  * [200 - Created chart](#200---created-chart)
  * [ChartDatasetConfig Object](#chartdatasetconfig-object)
* [Error Responses](#error-responses)
  * [400 - Bad Request](#400---bad-request)
  * [401 - Unauthorized](#401---unauthorized)
  * [403 - Forbidden](#403---forbidden)
* [Related Resources](#related-resources)

## Endpoint

```http
POST /project/{project_id}/chart
```

## Authentication

Bearer authentication header is required.

```http
Authorization: Bearer <token>
```

## Request

### cURL

```bash
curl --request POST \
  --url https://api.chartbrew.com/project/{project_id}/chart \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "<string>",
    "type": "<string>",
    "id": "<string>",
    "subType": "<string>",
    "chartData": {},
    "chartDataUpdated": "2023-11-07T05:31:56Z",
    "project_id": "<string>",
    "public": true,
    "shareable": true,
    "ChartDatasetConfigs": [
      "3c90c3cc-0d44-4b50-8888-8dd25736052a"
    ]
  }'
```

## Request Body

Content-Type: `application/json`

| Field                 | Type      | Required | Description                     |
| --------------------- | --------- | -------- | ------------------------------- |
| `name`                | string    | Yes      | Chart name                      |
| `type`                | string    | Yes      | Chart type                      |
| `id`                  | string    | No       | Chart ID                        |
| `subType`             | string    | No       | Chart subtype                   |
| `chartData`           | object    | No       | Chart configuration data        |
| `chartDataUpdated`    | date-time | No       | Last update timestamp           |
| `project_id`          | string    | No       | Project ID                      |
| `public`              | boolean   | No       | Whether the chart is public     |
| `shareable`           | boolean   | No       | Whether the chart can be shared |
| `ChartDatasetConfigs` | UUID[]    | No       | Dataset configuration IDs       |

## Path Parameters

| Parameter    | Type   | Required | Description       |
| ------------ | ------ | -------- | ----------------- |
| `project_id` | string | Yes      | ID of the project |

## Supported Chart Types

The `type` field supports:

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

## Responses

### 200 - Created chart

```json
{
  "id": "<string>",
  "name": "<string>",
  "type": "<string>",
  "subType": "<string>",
  "chartData": {},
  "chartDataUpdated": "2023-11-07T05:31:56Z",
  "project_id": "<string>",
  "public": true,
  "shareable": true,
  "ChartDatasetConfigs": []
}
```

### ChartDatasetConfig Object

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
  "conditions": [
    {
      "id": "<string>",
      "field": "<string>",
      "value": "<string>",
      "displayValues": true
    }
  ],
  "formula": "<string>",
  "datasetColor": "<string>",
  "fillColor": "<string>",
  "fill": false,
  "multiFill": false,
  "legend": "<string>",
  "pointRadius": 123,
  "excludedFields": [
    "<string>"
  ],
  "sort": "<string>",
  "columnsOrder": [
    "<string>"
  ],
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
