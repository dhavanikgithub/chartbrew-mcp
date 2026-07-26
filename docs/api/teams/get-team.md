# Get Team

Get team information by ID.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Request Example](#request-example)
* [Response](#response)
  * [Success Response (200)](#success-response-200)
  * [Error Response (400)](#error-response-400)
* [Response Schema](#response-schema)
* [Related Resources](#related-resources)

## Endpoint

```http
GET /team/{team_id}
```

### Base URL

```text
https://api.chartbrew.com
```

### Full URL

```text
https://api.chartbrew.com/team/{team_id}
```

## Description

This endpoint returns the details of a team if the provided authentication token has permission to access it.

## Authorization

All requests require a Bearer token in the `Authorization` header.

| Header        | Type   | Required | Description                                                |
| ------------- | ------ | -------- | ---------------------------------------------------------- |
| Authorization | string | Yes      | Bearer authentication token in the format `Bearer <token>` |

### Example

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
  --url https://api.chartbrew.com/team/{team_id} \
  --header 'Authorization: Bearer <token>'
```

## Response

### Success Response (200)

Returns the team details.

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
| projects  | string[] | Accessible project IDs |
| canExport | boolean  | Export permission flag |

## Related Resources

* [API Reference Index](../introduction.md)
* [Create Team](./create-team.md)
* [Get Team](./get-team.md)
* [Get User Teams](./get-user-teams.md)
* [Update Team](./update-team.md)
