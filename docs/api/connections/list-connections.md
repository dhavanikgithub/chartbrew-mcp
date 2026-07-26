# List Connections

Retrieve all connections associated with a team.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authentication](#authentication)
* [Path Parameters](#path-parameters)
* [Example Request](#example-request)
  * [cURL](#curl)
* [Response](#response)
* [Response Fields](#response-fields)
* [Connection Types](#connection-types)
* [Connection Subtypes](#connection-subtypes)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http id="8x6t2p"
GET /team/{team_id}/connections
```

## Description

Returns an array of connections configured for a team. Connections represent data sources used by Chartbrew for datasets, queries, and dashboards.

---

## Authentication

| Header        | Type         | Required |
| ------------- | ------------ | -------- |
| Authorization | Bearer Token | Yes      |

Example:

```http id="m5r7ka"
Authorization: Bearer <token>
```

---

## Path Parameters

| Parameter | Type   | Required | Description    |
| --------- | ------ | -------- | -------------- |
| team_id   | string | Yes      | ID of the team |

---

## Example Request

### cURL

```bash id="n3u9yc"
curl --request GET \
  --url https://api.chartbrew.com/team/{team_id}/connections \
  --header 'Authorization: Bearer <token>'
```
---

## Response

**200 OK**

```json id="h9b8wt"
[
  {
    "id": 123,
    "team_id": 123,
    "project_ids": [
      "<string>"
    ],
    "oauth_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a",
    "name": "<string>",
    "type": "postgres",
    "subType": "timescaledb",
    "active": true,
    "ssl": false,
    "sslMode": "require"
  }
]
```

---

## Response Fields

| Field       | Type          | Description                                |
| ----------- | ------------- | ------------------------------------------ |
| id          | integer       | Connection ID                              |
| team_id     | integer       | Team ID that owns the connection           |
| project_ids | string[]      | Projects associated with the connection    |
| oauth_id    | string (UUID) | OAuth integration identifier               |
| name        | string        | Connection name                            |
| type        | string        | Connection type                            |
| subType     | string        | Connection subtype                         |
| active      | boolean       | Indicates whether the connection is active |
| ssl         | boolean       | SSL enabled status                         |
| sslMode     | string        | SSL mode configuration                     |

---

## Connection Types

| Type            |
| --------------- |
| mongodb         |
| api             |
| mysql           |
| postgres        |
| realtimedb      |
| firestore       |
| googleAnalytics |
| customerio      |

---

## Connection Subtypes

| Subtype     |
| ----------- |
| timescaledb |
| supabasedb  |
| rdsPostgres |
| rdsMysql    |

---

## Notes

* Connections are reusable data source configurations.
* A single connection can be linked to multiple projects through `project_ids`.
* Database connections may include SSL configuration (`ssl` and `sslMode`).
* Only connections accessible to the specified team are returned.

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Connection](./create-a-connection.md)
* [Delete a Connection](./delete-a-connection.md)
* [Get a Connection](./get-a-connection.md)
* [List Connections](./list-connections.md)
* [Test a Connection](./test-a-connection.md)
* [Update a Connection](./update-a-connection.md)
* [Update Connection Files](./update-connection-files.md)
* [What is a Connection](./what-is-a-connection.md)
