# Get User Teams

Get all teams for the authenticated user.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authorization](#authorization)
* [Request Example](#request-example)
* [Response](#response)
  * [Success Response (200)](#success-response-200)
  * [Error Response (400)](#error-response-400)
* [Response Schema](#response-schema)
  * [Team Object](#team-object)
  * [TeamRoles Object](#teamroles-object)
  * [Projects Object](#projects-object)
  * [Charts Object](#charts-object)
  * [Connections Object](#connections-object)
* [Related Resources](#related-resources)

## Endpoint

```http
GET /team
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

This endpoint returns all teams that the authenticated user is a member of.

The user is identified using the authentication token supplied in the request.

## Authorization

All requests require a Bearer token in the `Authorization` header.

| Header        | Type   | Required | Description                                                |
| ------------- | ------ | -------- | ---------------------------------------------------------- |
| Authorization | string | Yes      | Bearer authentication token in the format `Bearer <token>` |

### Example

```http
Authorization: Bearer <token>
```

## Request Example

### cURL

```bash
curl --request GET \
  --url https://api.chartbrew.com/team \
  --header 'Authorization: Bearer <token>'
```

## Response

### Success Response (200)

Returns an array of teams the authenticated user belongs to.

```json
[
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
    "Projects": [
      {
        "id": 123,
        "name": "<string>",
        "Charts": [
          {
            "id": 123
          }
        ]
      }
    ],
    "Connections": [
      {
        "id": 123
      }
    ],
    "showBranding": true,
    "allowReportRefresh": true,
    "allowReportExport": true,
    "createdAt": "2023-11-07T05:31:56Z",
    "updatedAt": "2023-11-07T05:31:56Z"
  }
]
```

### Error Response (400)

```json
{
  "error": "<string>"
}
```

## Response Schema

### Team Object

| Field              | Type               | Description                           |
| ------------------ | ------------------ | ------------------------------------- |
| id                 | integer            | Unique team identifier                |
| name               | string             | Team name                             |
| TeamRoles          | object[]           | Team role assignments                 |
| Projects           | object[]           | Projects belonging to the team        |
| Connections        | object[]           | Team connections                      |
| showBranding       | boolean            | Indicates whether branding is enabled |
| allowReportRefresh | boolean            | Allows report refresh operations      |
| allowReportExport  | boolean            | Allows report export operations       |
| createdAt          | string (date-time) | Team creation timestamp               |
| updatedAt          | string (date-time) | Last update timestamp                 |

### TeamRoles Object

| Field     | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| id        | integer  | Team role identifier           |
| team_id   | integer  | Team identifier                |
| user_id   | integer  | User identifier                |
| role      | string   | Assigned role                  |
| projects  | string[] | Accessible project identifiers |
| canExport | boolean  | Export permission flag         |

### Projects Object

| Field  | Type     | Description                        |
| ------ | -------- | ---------------------------------- |
| id     | integer  | Project identifier                 |
| name   | string   | Project name                       |
| Charts | object[] | Charts associated with the project |

### Charts Object

| Field | Type    | Description      |
| ----- | ------- | ---------------- |
| id    | integer | Chart identifier |

### Connections Object

| Field | Type    | Description           |
| ----- | ------- | --------------------- |
| id    | integer | Connection identifier |

## Related Resources

* [API Reference Index](../introduction.md)
* [Create Team](./create-team.md)
* [Get Team](./get-team.md)
* [Get User Teams](./get-user-teams.md)
* [Update Team](./update-team.md)
