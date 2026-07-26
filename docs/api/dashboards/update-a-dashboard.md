# Update a Dashboard

Update an existing dashboard.

## Table of Contents

* [Endpoint](#endpoint)
* [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
  * [updateSchedule](#updateschedule)
  * [updateSchedule.time](#updatescheduletime)
* [Example Request](#example-request)
  * [cURL](#curl)
  * [Request Payload](#request-payload)
* [Responses](#responses)
  * [200 OK](#200-ok)
* [Response Fields](#response-fields)
* [Related Resources](#related-resources)

## Endpoint

```http
PUT /project/{id}
```

**Base URL**

```text
https://api.chartbrew.com
```

## Authorization

Include a Bearer token in the request header:

| Header | Type | Required | Description |
|----------|--------|----------|-------------|
| Authorization | string | Yes | Bearer authentication header in the format `Bearer <token>` |

Example:

```http
Authorization: Bearer <token>
```

---

## Path Parameters

| Parameter | Type | Required | Description |
|------------|--------|----------|-------------|
| id | string | Yes | ID of the dashboard |

---

## Request Body

**Content-Type:** `application/json`

| Field | Type | Required | Description |
|---------|--------|----------|-------------|
| name | string | No | Dashboard name |
| dashboardTitle | string | No | Dashboard title |
| description | string | No | Dashboard description |
| backgroundColor | string | No | Dashboard background color |
| titleColor | string | No | Dashboard title color |
| headerCode | string | No | Custom header code |
| footerCode | string | No | Custom footer code |
| public | boolean | No | Make dashboard public |
| passwordProtected | boolean | No | Enable password protection |
| timezone | string | No | Dashboard timezone |
| updateSchedule | object | No | Automatic update schedule configuration |

### updateSchedule

| Field | Type | Description |
|---------|--------|-------------|
| timezone | string | Timezone for updates |
| frequency | string | Update frequency |
| frequencyNumber | string | Frequency interval |
| time | object | Scheduled execution time |

### updateSchedule.time

| Field | Type |
|---------|--------|
| hour | integer |
| minute | integer |
| second | integer |
| millisecond | integer |

---

## Example Request

### cURL

```bash
curl --request PUT \
  --url https://api.chartbrew.com/project/{id} \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "<string>",
    "dashboardTitle": "<string>",
    "description": "<string>",
    "backgroundColor": "<string>",
    "titleColor": "<string>",
    "headerCode": "<string>",
    "footerCode": "<string>",
    "public": true,
    "passwordProtected": true,
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
    }
  }'
```

### Request Payload

```json
{
  "name": "<string>",
  "dashboardTitle": "<string>",
  "description": "<string>",
  "backgroundColor": "<string>",
  "titleColor": "<string>",
  "headerCode": "<string>",
  "footerCode": "<string>",
  "public": true,
  "passwordProtected": true,
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
  }
}
```

---

## Responses

### 200 OK

Dashboard updated successfully.

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
  "Charts": [
    {
      "id": "<string>",
      "name": "<string>",
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
  ]
}
```

---

## Response Fields

| Field | Type | Default |
|---------|--------|---------|
| id | integer | - |
| team_id | integer | - |
| name | string | - |
| brewName | string | - |
| dashboardTitle | string | - |
| description | string | - |
| backgroundColor | string | `#103751` |
| titleColor | string | `white` |
| headerCode | string | - |
| footerCode | string | - |
| logo | string | - |
| logoLink | string | - |
| public | boolean | `false` |
| passwordProtected | boolean | `false` |
| timezone | string | - |
| updateSchedule | object | - |
| lastUpdatedAt | string (date-time) | - |
| Charts | array | - |

---

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