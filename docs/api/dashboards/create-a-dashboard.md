# Create Dashboard

Create a new dashboard (called a **Project** in the Chartbrew API).

## Table of Contents

* [Endpoint](#endpoint)
* [Authorization](#authorization)
* [Request Body](#request-body)
  * [Schema](#schema)
  * [Example Request](#example-request)
* [cURL Example](#curl-example)
* [Success Response](#success-response)
  * [Status Code](#status-code)
  * [Response Body](#response-body)
* [Response Fields](#response-fields)
* [Error Response](#error-response)
  * [Status Code](#status-code)
  * [Response Body](#response-body)
  * [Example](#example)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http
POST /project
```

**URL**

```text
https://api.chartbrew.com/project
```

---

## Authorization

| Header        | Type   | Required |
| ------------- | ------ | -------- |
| Authorization | string | Yes      |

Use Bearer authentication:

```http
Authorization: Bearer <token>
```

---

## Request Body

**Content-Type:** `application/json`

### Schema

| Field          | Type    | Required | Description                     |
| -------------- | ------- | -------- | ------------------------------- |
| name           | string  | Yes      | Internal dashboard name         |
| team_id        | integer | Yes      | Team ID that owns the dashboard |
| dashboardTitle | string  | No       | Display title of the dashboard  |
| description    | string  | No       | Dashboard description           |

### Example Request

```json
{
  "name": "sales-dashboard",
  "team_id": 123,
  "dashboardTitle": "Sales Performance Dashboard",
  "description": "Monthly sales analytics and KPIs"
}
```

---

## cURL Example

```bash
curl --request POST \
  --url https://api.chartbrew.com/project \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "sales-dashboard",
    "team_id": 123,
    "dashboardTitle": "Sales Performance Dashboard",
    "description": "Monthly sales analytics and KPIs"
  }'
```

---

## Success Response

### Status Code

```http
200 OK
```

### Response Body

```json
{
  "id": 123,
  "team_id": 123,
  "name": "sales-dashboard",
  "brewName": "sales-dashboard",
  "dashboardTitle": "Sales Performance Dashboard",
  "description": "Monthly sales analytics and KPIs",
  "backgroundColor": "#103751",
  "titleColor": "white",
  "headerCode": "",
  "footerCode": "",
  "logo": "",
  "logoLink": "",
  "public": false,
  "passwordProtected": false,
  "timezone": "Asia/Bangkok",
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

---

## Response Fields

| Field             | Type     | Description                     |
| ----------------- | -------- | ------------------------------- |
| id                | integer  | Dashboard ID                    |
| team_id           | integer  | Team ID                         |
| name              | string   | Internal dashboard name         |
| brewName          | string   | Generated dashboard slug        |
| dashboardTitle    | string   | Dashboard display title         |
| description       | string   | Dashboard description           |
| backgroundColor   | string   | Dashboard background color      |
| titleColor        | string   | Dashboard title color           |
| headerCode        | string   | Custom header HTML              |
| footerCode        | string   | Custom footer HTML              |
| logo              | string   | Logo URL or asset               |
| logoLink          | string   | Logo redirect URL               |
| public            | boolean  | Public dashboard flag           |
| passwordProtected | boolean  | Password protection enabled     |
| timezone          | string   | Dashboard timezone              |
| updateSchedule    | object   | Automatic refresh configuration |
| lastUpdatedAt     | datetime | Last refresh timestamp          |
| Charts            | array    | Dashboard charts                |

---

## Error Response

### Status Code

```http
400 Bad Request
```

### Response Body

```json
{
  "message": "<string>",
  "error": "<string>"
}
```

### Example

```json
{
  "message": "Validation failed",
  "error": "team_id is required"
}
```

---

## Notes

* A dashboard is referred to as a **Project** in the Chartbrew API.
* `name` and `team_id` are required fields.
* Newly created dashboards are private by default (`public: false`).
* The dashboard is created under the specified team.
* The response includes the full dashboard configuration and any associated charts.

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
