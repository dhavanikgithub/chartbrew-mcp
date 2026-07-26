# Create a Connection

Create a new connection inside a team.

## Table of Contents

* [Endpoint](#endpoint)
* [Authentication](#authentication)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
* [Available Connection Types](#available-connection-types)
* [Available Subtypes](#available-subtypes)
* [Request Example](#request-example)
* [cURL Example](#curl-example)
* [Response](#response)
* [Response Fields](#response-fields)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http
POST /team/{team_id}/connections
```

### Base URL

```text
https://api.chartbrew.com
```

### Full URL

```text
https://api.chartbrew.com/team/{team_id}/connections
```

---

## Authentication

This endpoint requires Bearer Token authentication.

| Header | Type | Required |
|----------|------|----------|
| Authorization | string | Yes |

Example:

```http
Authorization: Bearer <token>
```

---

## Path Parameters

| Parameter | Type | Required | Description |
|------------|------|----------|-------------|
| team_id | string | Yes | ID of the team |

---

## Request Body

**Content-Type:** `application/json`

### Body Parameters

| Field | Type | Required | Description |
|---------|------|----------|-------------|
| name | string | Yes | Connection name |
| type | enum<string> | Yes | Connection type |
| team_id | integer | Yes | Team ID |
| subType | enum<string> | No | Connection subtype |
| host | string | No | Database host |
| port | string | No | Database port |
| username | string | No | Database username |
| password | string | No | Database password |
| options | object | No | Additional database options |
| authentication | object | No | Authentication settings for API connections |
| firebaseServiceAccount | object | No | Firebase service account credentials |
| ssl | boolean | No | Enable SSL. Default: `false` |
| sslMode | string | No | SSL mode. Default: `require` |
| schema | object | No | Database schema information |

---

## Available Connection Types

| Value |
|---------|
| mongodb |
| api |
| mysql |
| postgres |
| realtimedb |
| firestore |
| googleAnalytics |
| customerio |

---

## Available Subtypes

| Value |
|---------|
| timescaledb |
| supabasedb |
| rdsPostgres |
| rdsMysql |
| api |
| mongodb |
| mysql |
| postgres |
| realtimedb |
| firestore |
| googleAnalytics |
| customerio |

---

## Request Example

```json
{
  "name": "Production Database",
  "type": "postgres",
  "team_id": 123,
  "host": "db.example.com",
  "port": "5432",
  "username": "admin",
  "password": "secret",
  "options": {},
  "authentication": {
    "token": "api-token",
    "user": "api-user",
    "pass": "api-password"
  },
  "firebaseServiceAccount": {},
  "ssl": false,
  "sslMode": "require",
  "schema": {}
}
```

---

## cURL Example

```bash
curl --request POST \
  --url https://api.chartbrew.com/team/{team_id}/connections \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Production Database",
    "type": "postgres",
    "team_id": 123,
    "host": "db.example.com",
    "port": "5432",
    "username": "admin",
    "password": "secret",
    "options": {},
    "authentication": {
      "token": "api-token",
      "user": "api-user",
      "pass": "api-password"
    },
    "firebaseServiceAccount": {},
    "ssl": false,
    "sslMode": "require",
    "schema": {}
  }'
```

---

## Response

### Status Code

```http
200 OK
```

### Response Body

```json
{
  "id": 123,
  "team_id": 123,
  "project_ids": [
    "string"
  ],
  "oauth_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a",
  "name": "Production Database",
  "type": "postgres",
  "active": true,
  "host": "db.example.com",
  "dbName": "analytics",
  "port": "5432",
  "username": "admin",
  "password": "secret",
  "srv": false,
  "options": {},
  "connectionString": "postgres://...",
  "authentication": {
    "token": "api-token",
    "user": "api-user",
    "pass": "api-password"
  },
  "firebaseServiceAccount": {},
  "ssl": false,
  "sslMode": "require",
  "sslCa": "string",
  "sslCert": "string",
  "sslKey": "string",
  "schema": {}
}
```

---

## Response Fields

| Field | Type | Description |
|---------|------|-------------|
| id | integer | Connection ID |
| team_id | integer | Team ID |
| project_ids | string[] | Associated project IDs |
| oauth_id | string (UUID) | OAuth identifier |
| name | string | Connection name |
| type | string | Connection type |
| subType | string | Connection subtype |
| active | boolean | Whether connection is active |
| host | string | Database host |
| dbName | string | Database name |
| port | string | Database port |
| username | string | Username |
| password | string | Password |
| srv | boolean | MongoDB SRV mode |
| options | object | Additional connection options |
| connectionString | string | Connection string |
| authentication | object | API authentication settings |
| firebaseServiceAccount | object | Firebase credentials |
| ssl | boolean | SSL enabled |
| sslMode | string | SSL mode |
| sslCa | string | SSL CA certificate |
| sslCert | string | SSL certificate |
| sslKey | string | SSL private key |
| schema | object | Database schema metadata |

---

## Notes

- SSL certificate files (`sslCa`, `sslCert`, `sslKey`) are **not uploaded during connection creation**.
- If your connection requires SSL certificates, create the connection first and then upload certificates using the **Update Connection Files** endpoint.
- The `schema` field is automatically populated for PostgreSQL and MySQL connections when used by charts.
- `authentication` is primarily used for API-based connections.
- `firebaseServiceAccount` is used for Firebase Realtime Database and Firestore connections.

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