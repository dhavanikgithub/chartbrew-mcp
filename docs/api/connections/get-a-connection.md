# Get a Connection

Retrieve details for a specific connection by its ID.

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
* [Connection Types](#connection-types)
* [Connection Subtypes](#connection-subtypes)
* [Authentication Object](#authentication-object)
* [Firebase Service Account](#firebase-service-account)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http
GET /team/{team_id}/connections/{connection_id}
```

### Full URL

```text
https://api.chartbrew.com/team/{team_id}/connections/{connection_id}
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
  --url https://api.chartbrew.com/team/{team_id}/connections/{connection_id} \
  --header 'Authorization: Bearer <token>'
```

---

## Response

### Success Response (200)

Returns the complete connection configuration.

```json
{
  "id": 123,
  "team_id": 123,
  "project_ids": [
    "project-id"
  ],
  "oauth_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a",
  "name": "Production Database",
  "type": "postgres",
  "subType": "rdsPostgres",
  "active": true,
  "host": "db.example.com",
  "dbName": "analytics",
  "port": "5432",
  "username": "admin",
  "password": "********",
  "srv": false,
  "options": {},
  "connectionString": "postgres://...",
  "authentication": {
    "token": "token",
    "user": "user",
    "pass": "password"
  },
  "firebaseServiceAccount": {},
  "ssl": false,
  "sslMode": "require",
  "sslCa": "",
  "sslCert": "",
  "sslKey": "",
  "schema": {}
}
```

---

## Response Fields

| Field | Type | Description |
|---------|--------|-------------|
| id | integer | Connection ID |
| team_id | integer | Team ID |
| project_ids | string[] | Associated project IDs |
| oauth_id | string (UUID) | OAuth connection identifier |
| name | string | Connection name |
| type | string | Connection type |
| subType | string | Connection subtype |
| active | boolean | Whether the connection is active |
| host | string | Database host |
| dbName | string | Database name |
| port | string | Database port |
| username | string | Connection username |
| password | string | Connection password |
| srv | boolean | Indicates whether SRV records are used |
| options | object | Additional connection options |
| connectionString | string | Connection URI |
| authentication | object | API authentication credentials |
| firebaseServiceAccount | object | Firebase service account credentials |
| ssl | boolean | SSL enabled flag |
| sslMode | string | SSL mode |
| sslCa | string | SSL CA certificate |
| sslCert | string | SSL certificate |
| sslKey | string | SSL private key |
| schema | object | Connection schema metadata |

---

## Connection Types

Supported values for `type`:

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

## Connection Subtypes

Supported values for `subType`:

| Value |
|---------|
| timescaledb |
| supabasedb |
| rdsPostgres |
| rdsMysql |

---

## Authentication Object

Used primarily for API connections.

```json
{
  "token": "string",
  "user": "string",
  "pass": "string"
}
```

| Field | Type | Description |
|---------|--------|-------------|
| token | string | API token |
| user | string | Username |
| pass | string | Password |

---

## Firebase Service Account

Used for Firebase Realtime Database and Firestore connections.

```json
{
  "...": "service account credentials"
}
```

Contains the Firebase service account JSON credentials required for authentication.

---

## Notes

- Database connections may use either individual connection fields (`host`, `port`, `dbName`, etc.) or a `connectionString`.
- SSL configuration can be customized using `sslMode`, `sslCa`, `sslCert`, and `sslKey`.
- API connections use the `authentication` object for credentials.
- Firebase-based connections require a valid `firebaseServiceAccount` object.

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