# Update Connection Files

Upload or update SSL certificate files for an existing connection. This endpoint is primarily used for PostgreSQL and MySQL connections that require SSL/TLS authentication.

## Table of Contents

* [Endpoint](#endpoint)
  * [Full URL](#full-url)
* [Description](#description)
* [Authentication](#authentication)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
* [Example Request](#example-request)
  * [cURL](#curl)
* [Supported File Types](#supported-file-types)
* [Successful Response](#successful-response)
  * [Status: `200 OK`](#status-200-ok)
* [Error Response](#error-response)
  * [Status: `400 Bad Request`](#status-400-bad-request)
* [Response Fields](#response-fields)
* [Connection Types](#connection-types)
* [Connection Subtypes](#connection-subtypes)
* [Related Resources](#related-resources)

## Endpoint

```http
POST /team/{team_id}/connections/{connection_id}/files
```

### Full URL

```text
https://api.chartbrew.com/team/{team_id}/connections/{connection_id}/files
```

## Description

Uploads SSL-related files to a connection:

* `sslCa` – SSL Certificate Authority (CA) certificate
* `sslCert` – SSL client certificate
* `sslKey` – SSL private key

After a successful upload, the updated connection object is returned.

## Authentication

Include a Bearer token in the `Authorization` header:

```http
Authorization: Bearer <token>
```

## Path Parameters

| Parameter       | Type   | Required | Description          |
| --------------- | ------ | -------- | -------------------- |
| `team_id`       | string | Yes      | ID of the team       |
| `connection_id` | string | Yes      | ID of the connection |

## Request Body

**Content-Type:** `multipart/form-data`

| Field     | Type | Description             |
| --------- | ---- | ----------------------- |
| `sslCa`   | file | SSL CA certificate file |
| `sslCert` | file | SSL certificate file    |
| `sslKey`  | file | SSL private key file    |

## Example Request

### cURL

```bash
curl --request POST \
  --url https://api.chartbrew.com/team/{team_id}/connections/{connection_id}/files \
  --header 'Authorization: Bearer <token>' \
  --form sslCa='@ca.pem' \
  --form sslCert='@client-cert.pem' \
  --form sslKey='@client-key.pem'
```

## Supported File Types

This endpoint supports SSL certificate uploads for:

* PostgreSQL connections
* MySQL connections

Common file formats include:

* `.pem`
* `.crt`
* `.cer`
* `.key`

## Successful Response

### Status: `200 OK`

Returns the updated connection object.

```json
{
  "id": 123,
  "team_id": 123,
  "project_ids": ["project-id"],
  "oauth_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a",
  "name": "Production Database",
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
    "token": "",
    "user": "",
    "pass": ""
  },
  "firebaseServiceAccount": {},
  "ssl": true,
  "sslMode": "require",
  "sslCa": "ca.pem",
  "sslCert": "client-cert.pem",
  "sslKey": "client-key.pem",
  "schema": {}
}
```

## Error Response

### Status: `400 Bad Request`

Returned when no files are provided.

```json
{
  "error": "No files were uploaded"
}
```

## Response Fields

| Field                    | Type     | Description                          |
| ------------------------ | -------- | ------------------------------------ |
| `id`                     | integer  | Connection ID                        |
| `team_id`                | integer  | Team ID                              |
| `project_ids`            | string[] | Associated project IDs               |
| `oauth_id`               | UUID     | OAuth identifier                     |
| `name`                   | string   | Connection name                      |
| `type`                   | string   | Connection type                      |
| `subType`                | string   | Connection subtype                   |
| `active`                 | boolean  | Whether the connection is active     |
| `host`                   | string   | Database host                        |
| `dbName`                 | string   | Database name                        |
| `port`                   | string   | Database port                        |
| `username`               | string   | Database username                    |
| `password`               | string   | Database password                    |
| `srv`                    | boolean  | MongoDB SRV mode                     |
| `options`                | object   | Additional connection options        |
| `connectionString`       | string   | Connection string                    |
| `authentication`         | object   | API authentication configuration     |
| `firebaseServiceAccount` | object   | Firebase service account credentials |
| `ssl`                    | boolean  | SSL enabled flag                     |
| `sslMode`                | string   | SSL mode                             |
| `sslCa`                  | string   | Uploaded CA certificate filename     |
| `sslCert`                | string   | Uploaded certificate filename        |
| `sslKey`                 | string   | Uploaded private key filename        |
| `schema`                 | object   | Connection schema information        |

## Connection Types

Supported values for `type`:

```text
mongodb
api
mysql
postgres
realtimedb
firestore
googleAnalytics
customerio
```

## Connection Subtypes

Supported values for `subType`:

```text
timescaledb
supabasedb
rdsPostgres
rdsMysql
api
mongodb
mysql
postgres
realtimedb
firestore
googleAnalytics
customerio
```

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
