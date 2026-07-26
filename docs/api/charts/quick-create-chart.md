# Quick Create Chart API

## Overview

Creates a chart and all associated chart dataset configurations in a single API request.

## Table of Contents

* [Overview](#overview)
* [Authentication](#authentication)
* [Request](#request)
  * [Path Parameters](#path-parameters)
  * [Headers](#headers)
* [Request Body](#request-body)
* [Chart Configuration Fields](#chart-configuration-fields)
* [Supported Chart Types](#supported-chart-types)
* [Chart Dataset Configuration](#chart-dataset-configuration)
  * [Fields](#fields)
* [Conditions](#conditions)
* [Dataset Variables](#dataset-variables)
* [Example cURL Request](#example-curl-request)
* [Response](#response)
  * [Success Response](#success-response)
* [Error Responses](#error-responses)
  * [400 Bad Request](#400-bad-request)
  * [401 Unauthorized](#401-unauthorized)
  * [403 Forbidden](#403-forbidden)
* [Notes](#notes)
* [Related Resources](#related-resources)

**Endpoint**

```http
POST /project/{project_id}/chart/quick-create
```

## Authentication

Requires Bearer token authentication.

```http
Authorization: Bearer <token>
```

## Request

### Path Parameters

| Parameter    | Type   | Required | Description       |
| ------------ | ------ | -------- | ----------------- |
| `project_id` | string | Yes      | ID of the project |

### Headers

```http
Content-Type: application/json
Authorization: Bearer <token>
```

## Request Body

Creates a chart with all dataset configurations.

```json
{
  "project_id": 123,
  "name": "Chart Name",
  "type": "line",
  "subType": "AddTimeseries",
  "public": false,
  "shareable": false,
  "displayLegend": true,
  "chartDatasetConfigs": [
    {
      "dataset_id": 123,
      "xAxis": "date",
      "yAxis": "value",
      "legend": "Revenue",
      "dateField": "created_at",
      "dateFormat": "YYYY-MM-DD"
    }
  ]
}
```

## Chart Configuration Fields

| Field                | Type     | Default   | Description                                       |
| -------------------- | -------- | --------- | ------------------------------------------------- |
| `project_id`         | integer  | -         | Project ID                                        |
| `name`               | string   | -         | Chart name                                        |
| `type`               | enum     | -         | Chart type                                        |
| `subType`            | string   | -         | Chart subtype. Currently supports `AddTimeseries` |
| `public`             | boolean  | false     | Whether the chart is publicly accessible          |
| `shareable`          | boolean  | false     | Whether sharing is enabled                        |
| `displayLegend`      | boolean  | false     | Display Chart.js legend                           |
| `pointRadius`        | integer  | -         | Point radius. Use `0` to hide points              |
| `dataLabels`         | boolean  | false     | Display data labels                               |
| `startDate`          | datetime | -         | Fixed chart start date                            |
| `endDate`            | datetime | -         | Fixed chart end date                              |
| `dateVarsFormat`     | string   | -         | Date variable format                              |
| `includeZeros`       | boolean  | true      | Include zero-value points                         |
| `currentEndDate`     | boolean  | false     | Use current date as end date                      |
| `fixedStartDate`     | boolean  | false     | Keep start date fixed                             |
| `timeInterval`       | enum     | `day`     | Time aggregation interval                         |
| `autoUpdate`         | integer  | -         | Auto update interval in seconds                   |
| `draft`              | boolean  | true      | Hide draft charts from viewers                    |
| `mode`               | enum     | `chart`   | Chart display mode                                |
| `maxValue`           | integer  | -         | Maximum y-axis value                              |
| `minValue`           | integer  | -         | Minimum y-axis value                              |
| `disabledExport`     | boolean  | false     | Disable export button                             |
| `onReport`           | boolean  | true      | Display on reports                                |
| `xLabelTicks`        | enum     | `default` | X-axis tick density                               |
| `stacked`            | boolean  | false     | Stack bar charts                                  |
| `horizontal`         | boolean  | false     | Horizontal bar chart                              |
| `showGrowth`         | boolean  | false     | Display growth percentage                         |
| `invertGrowth`       | boolean  | false     | Reverse growth calculation                        |
| `layout`             | object   | -         | React grid layout configuration                   |
| `isLogarithmic`      | boolean  | false     | Use logarithmic y-axis                            |
| `content`            | string   | -         | Markdown chart content                            |
| `ranges`             | object   | -         | Gauge chart ranges                                |
| `dashedLastPoint`    | boolean  | false     | Dash final point on line charts                   |
| `defaultRowsPerPage` | integer  | 10        | Table rows per page                               |

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

## Chart Dataset Configuration

Each dataset configuration is defined inside `chartDatasetConfigs`.

### Fields

| Field            | Type    | Description                      |
| ---------------- | ------- | -------------------------------- |
| `dataset_id`     | integer | Dataset identifier               |
| `xAxis`          | string  | X-axis field                     |
| `xAxisOperation` | string  | X-axis aggregation operation     |
| `yAxis`          | string  | Y-axis field                     |
| `yAxisOperation` | string  | Y-axis aggregation operation     |
| `dateField`      | string  | Date column used for time series |
| `dateFormat`     | string  | Date formatting pattern          |
| `conditions`     | array   | Dataset filtering conditions     |
| `formula`        | string  | Custom calculation formula       |
| `datasetColor`   | string  | Dataset color                    |
| `fillColor`      | string  | Fill color                       |
| `fill`           | boolean | Enable fill                      |
| `multiFill`      | boolean | Enable multiple fills            |
| `legend`         | string  | Display label for the series     |
| `pointRadius`    | integer | Series point radius              |
| `excludedFields` | array   | Fields excluded from output      |
| `columnsOrder`   | array   | Table column order               |
| `order`          | integer | Dataset order                    |
| `maxRecords`     | integer | Maximum records                  |
| `goal`           | integer | Target goal value                |
| `configuration`  | object  | Dataset variables                |

## Conditions

Conditions filter dataset values.

Example:

```json
{
  "conditions": [
    {
      "id": "status",
      "field": "status",
      "value": "active",
      "displayValues": true
    }
  ]
}
```

## Dataset Variables

Custom variables can be supplied using `configuration`.

Example:

```json
{
  "configuration": {
    "variables": [
      {
        "name": "currency",
        "value": "USD"
      }
    ]
  }
}
```

## Example cURL Request

```bash
curl --request POST \
  --url https://api.chartbrew.com/project/{project_id}/chart/quick-create \
  --header "Authorization: Bearer <token>" \
  --header "Content-Type: application/json" \
  --data '{
    "project_id": 123,
    "name": "Monthly Revenue",
    "type": "line",
    "chartDatasetConfigs": [
      {
        "dataset_id": 456,
        "xAxis": "month",
        "yAxis": "revenue",
        "legend": "Revenue"
      }
    ]
  }'
```

## Response

### Success Response

Status: `200 OK`

```json
{
  "id": "chart-id",
  "name": "Monthly Revenue",
  "type": "line",
  "subType": "AddTimeseries",
  "chartData": {},
  "project_id": "123",
  "public": false,
  "shareable": false,
  "ChartDatasetConfigs": []
}
```

## Error Responses

### 400 Bad Request

```json
{
  "message": "Invalid request",
  "error": "Validation failed"
}
```

### 401 Unauthorized

```json
{
  "message": "Unauthorized",
  "error": "Invalid token"
}
```

### 403 Forbidden

```json
{
  "message": "Forbidden",
  "error": "Insufficient permissions"
}
```

## Notes

* Dataset visualization bindings belong inside each `chartDatasetConfigs` item.
* The `legend` field controls the series label shown on the chart.
* If `legend` is omitted, Chartbrew uses the dataset name.
* The chart ID is automatically assigned to created dataset configurations.

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
