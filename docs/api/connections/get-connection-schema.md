# Get Connection Schema

Retrieve the schema details for a specific authenticated connection. The schema dynamically inspects the source plugin and returns the data structure (tables, collections, fields) exposed by the connection.

## Table of Contents

* [Endpoint](#endpoint)
  * [Full URL](#full-url)
* [Authentication](#authentication)
* [Path Parameters](#path-parameters)
* [Example Request](#example-request)
  * [cURL](#curl)
* [Response](#response)
  * [Success Response (200)](#success-response-200)
* [Response Fields](#response-fields)
* [Related Resources](#related-resources)

## Endpoint

```http
GET /team/{team_id}/connections/{connection_id}/schema
```

### Full URL

```text
https://api.chartbrew.com/team/{team_id}/connections/{connection_id}/schema
```

## Authentication

This endpoint requires Bearer Token authentication. The user must also have `readOwn` permissions for the specified team, and the connection must belong to the team.

| Header | Type | Required | Description |
|----------|--------|----------|-------------|
| Authorization | string | Yes | Bearer authentication token in the format `Bearer <token>` |

Example:

```http
Authorization: Bearer <token>
```

## Path Parameters

| Parameter | Type | Required | Description |
|------------|--------|----------|-------------|
| team_id | string | Yes | ID of the team |
| connection_id | string | Yes | ID of the connection |

---

## Example Request

### cURL

```bash
curl --request GET \
  --url https://api.chartbrew.com/team/{team_id}/connections/{connection_id}/schema \
  --header 'Authorization: Bearer <token>'
```

---

## Response

### Success Response (200)

Returns the schema structure for the connection. Depending on the source, this might be an array of table schemas, a nested object, or an array of collections.

```json
{
  "schema": [
    {
      "name": "users",
      "type": "table",
      "fields": [
        { "name": "id", "type": "integer" },
        { "name": "email", "type": "string" },
        { "name": "created_at", "type": "datetime" }
      ]
    },
    {
      "name": "orders",
      "type": "table",
      "fields": [
        { "name": "id", "type": "integer" },
        { "name": "user_id", "type": "integer" },
        { "name": "total", "type": "float" }
      ]
    }
  ]
}
```

---

## Response Fields

| Field | Type | Description |
|---------|--------|-------------|
| schema | object/array | The dynamically resolved schema object or array |

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Connection](./create-a-connection.md)
* [Get a Connection](./get-a-connection.md)
* [List Connections](./list-connections.md)
* [List Connection Providers](./list-connection-providers.md)
