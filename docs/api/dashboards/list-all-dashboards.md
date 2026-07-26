# List All Dashboards

Retrieve all dashboards that belong to a specific team.

> **Note:** In the Chartbrew API, dashboards are represented as **Projects**.

## Table of Contents

* [Endpoint](#endpoint)
* [Authentication](#authentication)
* [Path Parameters](#path-parameters)
* [Request Example](#request-example)
  * [cURL](#curl)
* [Response](#response)
  * [Success Response (200)](#success-response-200)
* [Response Fields](#response-fields)
  * [Dashboard Object](#dashboard-object)
  * [Auto Update Object](#auto-update-object)
  * [Time Object](#time-object)
  * [Chart Object](#chart-object)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http
GET /project/team/{team_id}
```

**Base URL**

```text
https://api.chartbrew.com
```

## Authentication

Include your API token in the request header.

| Header        | Type   | Required |
| ------------- | ------ | -------- |
| Authorization | string | Yes      |

Format:

```http
Authorization: Bearer <token>
```

## Path Parameters

| Parameter | Type   | Required | Description    |
| --------- | ------ | -------- | -------------- |
| team_id   | string | Yes      | ID of the team |

## Request Example

### cURL

```bash
curl --request GET \
  --url https://api.chartbrew.com/project/team/{team_id} \
  --header 'Authorization: Bearer <token>'
```

## Response

### Success Response (200)

Returns an array of dashboards associated with the specified team.

```json
[
  {
    "id": 123,
    "name": "<string>",
    "dashboardTitle": "<string>",
    "description": "<string>",
    "team_id": 123,
    "brewName": "<string>",
    "backgroundColor": "<string>",
    "titleColor": "<string>",
    "headerCode": "<string>",
    "footerCode": "<string>",
    "public": false,
    "password": "<string>",
    "autoUpdate": {
      "enabled": false,
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
        "id": 123,
        "layout": {}
      }
    ]
  }
]
```

## Response Fields

### Dashboard Object

| Field           | Type               | Description                                  |
| --------------- | ------------------ | -------------------------------------------- |
| id              | integer            | Dashboard ID                                 |
| name            | string             | Internal dashboard name                      |
| dashboardTitle  | string             | Dashboard display title                      |
| description     | string             | Dashboard description                        |
| team_id         | integer            | Team ID that owns the dashboard              |
| brewName        | string             | Dashboard slug or unique identifier          |
| backgroundColor | string             | Dashboard background color                   |
| titleColor      | string             | Dashboard title color                        |
| headerCode      | string             | Custom HTML/code displayed in header         |
| footerCode      | string             | Custom HTML/code displayed in footer         |
| public          | boolean            | Whether the dashboard is publicly accessible |
| password        | string             | Dashboard password (if configured)           |
| autoUpdate      | object             | Dashboard refresh schedule                   |
| lastUpdatedAt   | string (date-time) | Last successful update timestamp             |
| Charts          | array              | Collection of dashboard charts               |

### Auto Update Object

| Field           | Type    | Description               |
| --------------- | ------- | ------------------------- |
| enabled         | boolean | Enables automatic refresh |
| frequencyNumber | string  | Refresh interval value    |
| time            | object  | Scheduled execution time  |

### Time Object

| Field       | Type    |
| ----------- | ------- |
| hour        | integer |
| minute      | integer |
| second      | integer |
| millisecond | integer |

### Chart Object

| Field  | Type    | Description                |
| ------ | ------- | -------------------------- |
| id     | integer | Chart ID                   |
| layout | object  | Chart layout configuration |

## Notes

* Only dashboards accessible to the authenticated user are returned.
* Each dashboard belongs to the team identified by `team_id`.
* The response contains basic dashboard information and associated chart metadata.
* For complete dashboard details, use the [Get a Dashboard](./get-a-dashboard.md) endpoint.

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
