# Get Chart for Sharing

Retrieve chart data for sharing with support for public charts and SharePolicy tokens.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authentication](#authentication)
* [Path Parameters](#path-parameters)
* [Query Parameters](#query-parameters)
* [Request Examples](#request-examples)
  * [cURL](#curl)
* [Response](#response)
  * [200 OK](#200-ok)
* [Response Fields](#response-fields)
* [Supported Chart Types](#supported-chart-types)
* [ChartDatasetConfig Object](#chartdatasetconfig-object)
  * [Conditions](#conditions)
  * [Configuration Variables](#configuration-variables)
* [Related Resources](#related-resources)

## Endpoint

```http
GET /chart/share/{share_string}
```

## Description

This endpoint returns chart data optimized for sharing.

## Authentication

Requires a Bearer authentication header.

```http
Authorization: Bearer <token>
```

## Path Parameters

| Parameter      | Type   | Required | Description                 |
| -------------- | ------ | -------- | --------------------------- |
| `share_string` | string | Yes      | Share policy's share string |

## Query Parameters

| Parameter | Type   | Required | Description                                 |
| --------- | ------ | -------- | ------------------------------------------- |
| `token`   | string | No       | Access token generated from the SharePolicy |
| `theme`   | enum   | No       | Theme for the embedded chart                |

Available theme values:

* `light`
* `dark`
* `os`

## Request Examples

### cURL

```bash
curl --request GET \
  --url https://api.chartbrew.com/chart/share/{share_string} \
  --header "Authorization: Bearer <token>"
```


## Response

### 200 OK

Content-Type:

```http
application/json
```

Example response:

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

## Response Fields

| Field                 | Type      | Description                     |
| --------------------- | --------- | ------------------------------- |
| `id`                  | string    | Chart identifier                |
| `name`                | string    | Chart name                      |
| `type`                | enum      | Chart type                      |
| `subType`             | string    | Chart subtype                   |
| `chartData`           | object    | Chart data                      |
| `chartDataUpdated`    | date-time | Last update timestamp           |
| `project_id`          | string    | Project identifier              |
| `public`              | boolean   | Whether the chart is public     |
| `shareable`           | boolean   | Whether the chart can be shared |
| `ChartDatasetConfigs` | array     | Dataset configuration objects   |

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

## ChartDatasetConfig Object

Each object in `ChartDatasetConfigs` contains:

| Field            | Type    | Description              |
| ---------------- | ------- | ------------------------ |
| `id`             | string  | Dataset configuration ID |
| `chart_id`       | number  | Chart ID                 |
| `dataset_id`     | number  | Dataset ID               |
| `xAxis`          | string  | X-axis field             |
| `xAxisOperation` | string  | X-axis operation         |
| `yAxis`          | string  | Y-axis field             |
| `yAxisOperation` | string  | Y-axis operation         |
| `dateField`      | string  | Date field               |
| `dateFormat`     | string  | Date formatting          |
| `formula`        | string  | Dataset formula          |
| `datasetColor`   | string  | Dataset color            |
| `fillColor`      | string  | Fill color               |
| `fill`           | boolean | Enable fill              |
| `multiFill`      | boolean | Enable multiple fills    |
| `legend`         | string  | Legend label             |
| `pointRadius`    | number  | Data point radius        |
| `excludedFields` | array   | Excluded fields          |
| `sort`           | string  | Sorting configuration    |
| `columnsOrder`   | array   | Column ordering          |
| `order`          | number  | Display order            |
| `maxRecords`     | number  | Maximum records          |
| `goal`           | number  | Target goal value        |
| `configuration`  | object  | Additional configuration |

### Conditions

Dataset conditions contain:

| Field           | Type    | Description             |
| --------------- | ------- | ----------------------- |
| `id`            | string  | Condition ID            |
| `field`         | string  | Field name              |
| `value`         | string  | Condition value         |
| `displayValues` | boolean | Display matching values |

### Configuration Variables

The `configuration.variables` array contains:

| Field   | Type   | Description    |
| ------- | ------ | -------------- |
| `name`  | string | Variable name  |
| `value` | string | Variable value |

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
