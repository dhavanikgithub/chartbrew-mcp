# Create Team

Create a new team.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authorization](#authorization)
* [Request Body](#request-body)
* [Request Example](#request-example)
* [Response](#response)
  * [Success Response (200)](#success-response-200)
  * [Error Response (400)](#error-response-400)
* [Response Schema](#response-schema)
* [Related Resources](#related-resources)

## Endpoint

```http
POST /team
```

### Base URL

```text
https://api.chartbrew.com
```

### Full URL

```text
https://api.chartbrew.com/team
```

## Description

This endpoint creates a new team. The team owner is automatically determined from the authentication token used in the request.

## Authorization

All requests require a Bearer token in the `Authorization` header.

| Header        | Type   | Required | Description                                                |
| ------------- | ------ | -------- | ---------------------------------------------------------- |
| Authorization | string | Yes      | Bearer authentication token in the format `Bearer <token>` |

### Example

```http
Authorization: Bearer <token>
```

## Request Body

**Content-Type:** `application/json`

### Body Parameters

| Field              | Type    | Required | Description                        |
| ------------------ | ------- | -------- | ---------------------------------- |
| name               | string  | Yes      | Name of the team                   |
| showBranding       | boolean | Yes      | Enable or disable branding         |
| allowReportRefresh | boolean | Yes      | Allow report refresh functionality |
| allowReportExport  | boolean | Yes      | Allow report export functionality  |

### Example Request Body

```json
{
  "name": "<string>",
  "showBranding": true,
  "allowReportRefresh": true,
  "allowReportExport": true
}
```

## Request Example

### cURL

```bash
curl --request POST \
  --url https://api.chartbrew.com/team \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '
{
  "name": "<string>",
  "showBranding": true,
  "allowReportRefresh": true,
  "allowReportExport": true
}
'
```

## Response

### Success Response (200)

Team created successfully.

```json
{
  "id": 123,
  "name": "<string>",
  "TeamRoles": [
    {
      "id": 123,
      "team_id": 123,
      "user_id": 123,
      "role": "<string>",
      "projects": [
        "<string>"
      ],
      "canExport": true
    }
  ],
  "showBranding": true,
  "allowReportRefresh": true,
  "allowReportExport": true,
  "createdAt": "2023-11-07T05:31:56Z",
  "updatedAt": "2023-11-07T05:31:56Z"
}
```

### Error Response (400)

```json
{
  "error": "<string>"
}
```

## Response Schema

| Field              | Type               | Description                           |
| ------------------ | ------------------ | ------------------------------------- |
| id                 | integer            | Unique team identifier                |
| name               | string             | Team name                             |
| TeamRoles          | object[]           | Team role assignments                 |
| showBranding       | boolean            | Indicates whether branding is enabled |
| allowReportRefresh | boolean            | Allows report refresh operations      |
| allowReportExport  | boolean            | Allows report export operations       |
| createdAt          | string (date-time) | Team creation timestamp               |
| updatedAt          | string (date-time) | Last update timestamp                 |

### TeamRoles Object

| Field     | Type     | Description            |
| --------- | -------- | ---------------------- |
| id        | integer  | Team role identifier   |
| team_id   | integer  | Team identifier        |
| user_id   | integer  | User identifier        |
| role      | string   | Assigned role          |
| projects  | string[] | Accessible projects    |
| canExport | boolean  | Export permission flag |

## Related Resources

* [API Reference Index](../introduction.md)
* [Create Team](./create-team.md)
* [Get Team](./get-team.md)
* [Get User Teams](./get-user-teams.md)
* [Update Team](./update-team.md)
