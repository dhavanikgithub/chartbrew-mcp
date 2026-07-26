# Query a Chart

Run the query for a chart.

## Table of Contents

* [Endpoint](#endpoint)
* [Authentication](#authentication)
* [Request](#request)
  * [cURL](#curl)
* [Request Body](#request-body)
  * [Query Filters](#query-filters)
* [Path Parameters](#path-parameters)
* [Query Parameters](#query-parameters)
* [Responses](#responses)
  * [200 - Chart data response](#200---chart-data-response)
* [Supported Chart Types](#supported-chart-types)
* [Error Responses](#error-responses)
  * [400 - Bad Request](#400---bad-request)
  * [401 - Unauthorized](#401---unauthorized)
  * [403 - Forbidden](#403---forbidden)
  * [413 - Payload Too Large](#413---payload-too-large)
* [Related Resources](#related-resources)

## Endpoint

```http
POST /project/{project_id}/chart/{id}/query
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
  --url https://api.chartbrew.com/project/{project_id}/chart/{id}/query \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "filters": [
      {}
    ]
  }'
```

## Request Body

Content-Type: `application/json`

### Query Filters

| Field     | Type     | Required | Description                                |
| --------- | -------- | -------- | ------------------------------------------ |
| `filters` | object[] | No       | Filters to apply while querying chart data |

Example:

```json
{
  "filters": [
    {}
  ]
}
```

## Path Parameters

| Parameter    | Type   | Required | Description       |
| ------------ | ------ | -------- | ----------------- |
| `project_id` | string | Yes      | ID of the project |
| `id`         | string | Yes      | ID of the chart   |

## Query Parameters

| Parameter      | Type    | Required | Description                  |
| -------------- | ------- | -------- | ---------------------------- |
| `no_source`    | boolean | No       | Skip source data in response |
| `skip_parsing` | boolean | No       | Skip data parsing            |
| `getCache`     | boolean | No       | Get cached data if available |

## Responses

### 200 - Chart data response

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
  "ChartDatasetConfigs": [
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
  ]
}
```

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

### 413 - Payload Too Large

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
