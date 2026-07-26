# Get a Dashboard

Retrieve a specific dashboard by its ID.

> **Note:** In the Chartbrew API, a Dashboard is represented as a **Project** resource.

## Table of Contents

* [Endpoint](#endpoint)
* [Authentication](#authentication)
* [Path Parameters](#path-parameters)
* [Request Example](#request-example)
  * [cURL](#curl)
* [Response](#response)
  * [Success Response (200)](#success-response-200)
* [Response Fields](#response-fields)
  * [Dashboard](#dashboard)
  * [Update Schedule Object](#update-schedule-object)
  * [Time Object](#time-object)
  * [Chart Object](#chart-object)
  * [Dataset Configuration Object](#dataset-configuration-object)
* [Related Resources](#related-resources)

## Endpoint

```http
GET /project/{id}
```

**Base URL**

```text
https://api.chartbrew.com
```

## Authentication

Include your API token in the Authorization header.

| Header        | Type   | Required |
| ------------- | ------ | -------- |
| Authorization | string | Yes      |

Format:

```http
Authorization: Bearer <token>
```

## Path Parameters

| Parameter | Type   | Required | Description                   |
| --------- | ------ | -------- | ----------------------------- |
| id        | string | Yes      | ID of the dashboard (project) |

## Request Example

### cURL

```bash
curl --request GET \
  --url https://api.chartbrew.com/project/{id} \
  --header 'Authorization: Bearer <token>'
```

## Response

### Success Response (200)

```json
{
  "id": 123,
  "team_id": 123,
  "name": "<string>",
  "brewName": "<string>",
  "dashboardTitle": "<string>",
  "description": "<string>",
  "backgroundColor": "#103751",
  "titleColor": "white",
  "headerCode": "<string>",
  "footerCode": "<string>",
  "logo": "<string>",
  "logoLink": "<string>",
  "public": false,
  "passwordProtected": false,
  "timezone": "<string>",
  "updateSchedule": {
    "timezone": "Asia/Bangkok",
    "frequency": "every_x_minutes",
    "frequencyNumber": "1",
    "time": {
      "hour": 9,
      "minute": 0,
      "second": 0,
      "millisecond": 0
    }
  },
  "lastUpdatedAt": "2023-11-07T05:31:56Z",
  "Charts": []
}
```

## Response Fields

### Dashboard

| Field             | Type               | Description                                     |
| ----------------- | ------------------ | ----------------------------------------------- |
| id                | integer            | Dashboard ID                                    |
| team_id           | integer            | Team ID that owns the dashboard                 |
| name              | string             | Internal dashboard name                         |
| brewName          | string             | Dashboard slug or brew name                     |
| dashboardTitle    | string             | Display title                                   |
| description       | string             | Dashboard description                           |
| backgroundColor   | string             | Background color (default: `#103751`)           |
| titleColor        | string             | Title color (default: `white`)                  |
| headerCode        | string             | Custom header code                              |
| footerCode        | string             | Custom footer code                              |
| logo              | string             | Logo URL or reference                           |
| logoLink          | string             | Logo redirect URL                               |
| public            | boolean            | Whether the dashboard is public                 |
| passwordProtected | boolean            | Whether password protection is enabled          |
| timezone          | string             | Dashboard timezone                              |
| updateSchedule    | object             | Dashboard refresh schedule                      |
| lastUpdatedAt     | string (date-time) | Last dashboard refresh timestamp                |
| Charts            | array              | Collection of charts belonging to the dashboard |

### Update Schedule Object

| Field           | Type   | Description              |
| --------------- | ------ | ------------------------ |
| timezone        | string | Schedule timezone        |
| frequency       | string | Refresh frequency type   |
| frequencyNumber | string | Frequency interval       |
| time            | object | Scheduled execution time |

### Time Object

| Field       | Type    |
| ----------- | ------- |
| hour        | integer |
| minute      | integer |
| second      | integer |
| millisecond | integer |

### Chart Object

Each dashboard contains a collection of charts in the `Charts` array.

| Field               | Type               | Description                 |
| ------------------- | ------------------ | --------------------------- |
| id                  | string             | Chart ID                    |
| name                | string             | Chart name                  |
| subType             | string             | Chart subtype               |
| chartData           | object             | Generated chart data        |
| chartDataUpdated    | string (date-time) | Last chart update timestamp |
| project_id          | string             | Associated dashboard ID     |
| public              | boolean            | Public visibility flag      |
| shareable           | boolean            | Shareable flag              |
| ChartDatasetConfigs | array              | Dataset configuration list  |

### Dataset Configuration Object

| Field          | Type    |
| -------------- | ------- |
| id             | string  |
| chart_id       | integer |
| dataset_id     | integer |
| xAxis          | string  |
| xAxisOperation | string  |
| yAxis          | string  |
| yAxisOperation | string  |
| dateField      | string  |
| dateFormat     | string  |
| conditions     | array   |
| formula        | string  |
| datasetColor   | string  |
| fillColor      | string  |
| fill           | boolean |
| multiFill      | boolean |
| legend         | string  |
| pointRadius    | integer |
| excludedFields | array   |
| sort           | string  |
| columnsOrder   | array   |
| order          | integer |
| maxRecords     | integer |
| goal           | integer |
| configuration  | object  |

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Dashboard](./create-a-dashboard.md)
* [Create Dashboard Share Policy](./create-dashboard-share-policy.md)
* [Delete a Dashboard](./delete-a-dashboard.md)
* [Delete Dashboard Share Policy](./delete-dashboard-share-policy.md)
* [Generate Dashboard Share Token](./generate-dashboard-share-token.md)
* [Get a Dashboard](./get-a-dashboard.md)
* [List All Dashboards](./list-all-dashboards.md)
* [Update a Dashboard](./update-a-dashboard.md)
* [Update Dashboard Share Policy](./update-dashboard-share-policy.md)
* [What is a Dashboard](./what-is-a-dashboard.md)
