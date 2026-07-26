# Update a Connection

Update an existing connection by its ID.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authentication](#authentication)
  * [Authorization Header](#authorization-header)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
  * [Request Schema](#request-schema)
  * [Type Values](#type-values)
  * [SubType Values](#subtype-values)
* [Example Request](#example-request)
  * [cURL](#curl)
  * [JSON Payload](#json-payload)
* [Response](#response)
  * [Status Code](#status-code)
  * [Response Body](#response-body)
  * [Response Fields](#response-fields)
* [Related Resources](#related-resources)

## Endpoint

```http
PUT /team/{team_id}/connections/{connection_id}
```

**Base URL**

```text
https://api.chartbrew.com
```

## Description

Updates a connection belonging to a specific team.

---

## Authentication

### Authorization Header

| Header        | Type   | Required |
| ------------- | ------ | -------- |
| Authorization | string | Yes      |

Format:

```text
Bearer <token>
```

Example:

```http
Authorization: Bearer your_access_token
```

---

## Path Parameters

| Parameter     | Type   | Required | Description          |
| ------------- | ------ | -------- | -------------------- |
| team_id       | string | Yes      | ID of the team       |
| connection_id | string | Yes      | ID of the connection |

---

## Request Body

**Content-Type**

```json
application/json
```

### Request Schema

| Field                  | Type     | Description                                       |
| ---------------------- | -------- | ------------------------------------------------- |
| name                   | string   | Connection name                                   |
| host                   | string   | Connection host                                   |
| port                   | string   | Connection port                                   |
| username               | string   | Database username                                 |
| password               | string   | Database password                                 |
| options                | object   | Used for MongoDB, Postgres, and MySQL connections |
| type                   | string   | Connection type                                   |
| subType                | string   | Connection subtype                                |
| authentication         | object   | Used for API connections                          |
| firebaseServiceAccount | object   | Firebase service account credentials              |
| ssl                    | boolean  | Enable SSL                                        |
| sslMode                | string   | SSL mode                                          |
| schema                 | object   | Auto-generated schema metadata                    |
| project_ids            | string[] | Associated project IDs                            |

### Type Values

```text
mongodb
api
mysql
postgres
```

### SubType Values

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

---

## Example Request

### cURL

```bash
curl --request PUT \
  --url https://api.chartbrew.com/team/{team_id}/connections/{connection_id} \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "<string>",
    "host": "<string>",
    "port": "<string>",
    "username": "<string>",
    "password": "<string>",
    "options": {},
    "authentication": {
      "token": "<string>",
      "user": "<string>",
      "pass": "<string>"
    },
    "firebaseServiceAccount": {},
    "ssl": false,
    "sslMode": "require",
    "schema": {},
    "project_ids": [
      "<string>"
    ]
  }'
```

### JSON Payload

```json
{
  "name": "<string>",
  "host": "<string>",
  "port": "<string>",
  "username": "<string>",
  "password": "<string>",
  "options": {},
  "authentication": {
    "token": "<string>",
    "user": "<string>",
    "pass": "<string>"
  },
  "firebaseServiceAccount": {},
  "ssl": false,
  "sslMode": "require",
  "schema": {},
  "project_ids": [
    "<string>"
  ]
}
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
    "<string>"
  ],
  "oauth_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a",
  "name": "<string>",
  "active": true,
  "host": "<string>",
  "dbName": "<string>",
  "port": "<string>",
  "username": "<string>",
  "password": "<string>",
  "srv": false,
  "options": {},
  "connectionString": "<string>",
  "authentication": {
    "token": "<string>",
    "user": "<string>",
    "pass": "<string>"
  },
  "firebaseServiceAccount": {},
  "ssl": false,
  "sslMode": "require",
  "sslCa": "<string>",
  "sslCert": "<string>",
  "sslKey": "<string>",
  "schema": {}
}
```

### Response Fields

| Field                  | Type     |
| ---------------------- | -------- |
| id                     | integer  |
| team_id                | integer  |
| project_ids            | string[] |
| oauth_id               | uuid     |
| name                   | string   |
| type                   | string   |
| subType                | string   |
| active                 | boolean  |
| host                   | string   |
| dbName                 | string   |
| port                   | string   |
| username               | string   |
| password               | string   |
| srv                    | boolean  |
| options                | object   |
| connectionString       | string   |
| authentication         | object   |
| firebaseServiceAccount | object   |
| ssl                    | boolean  |
| sslMode                | string   |
| sslCa                  | string   |
| sslCert                | string   |
| sslKey                 | string   |
| schema                 | object   |

---

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
