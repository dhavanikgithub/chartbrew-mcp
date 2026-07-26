# List Connection Providers

Retrieve a complete list of all supported Chartbrew connection providers, along with their metadata, capabilities, and dependencies.

## Table of Contents

* [Endpoint](#endpoint)
  * [Full URL](#full-url)
* [Authentication](#authentication)
* [Example Request](#example-request)
  * [cURL](#curl)
* [Response](#response)
  * [Success Response (200)](#success-response-200)
* [Response Fields](#response-fields)
* [Related Resources](#related-resources)

## Endpoint

```http
GET /connection-providers
```

### Full URL

```text
https://api.chartbrew.com/connection-providers
```

## Authentication

This endpoint requires Bearer Token authentication.

| Header | Type | Required | Description |
|----------|--------|----------|-------------|
| Authorization | string | Yes | Bearer authentication token in the format `Bearer <token>` |

Example:

```http
Authorization: Bearer <token>
```

---

## Example Request

### cURL

```bash
curl --request GET \
  --url https://api.chartbrew.com/connection-providers \
  --header 'Authorization: Bearer <token>'
```

---

## Response

### Success Response (200)

Returns an array of source plugin summaries.

```json
[
  {
    "id": "postgres",
    "type": "postgres",
    "name": "PostgreSQL",
    "category": "database",
    "description": "Connect to your PostgreSQL database.",
    "availability": "community",
    "capabilities": {
      "dataPreview": true,
      "queryGeneration": true
    },
    "dependsOn": []
  }
]
```

---

## Response Fields

| Field | Type | Description |
|---------|--------|-------------|
| id | string | Provider unique ID |
| type | string | Provider base type (e.g. `postgres`, `api`) |
| subType | string | Provider subtype, if applicable (e.g. `rdsPostgres`) |
| name | string | Human readable provider name |
| category | string | Category of the data source (e.g. `database`, `api`) |
| description | string | Description of the provider |
| availability | string | Licensing or availability of the provider (`community`, `pro`, etc.) |
| capabilities | object | Capabilities supported by the provider plugin |
| dependsOn | string[] | Other plugin IDs this provider depends on |

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Connection](./create-a-connection.md)
* [Get a Connection](./get-a-connection.md)
* [List Connections](./list-connections.md)
* [Get Connection Schema](./get-connection-schema.md)
