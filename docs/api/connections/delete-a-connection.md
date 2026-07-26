# Delete a Connection

Delete an existing connection by its ID.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authentication](#authentication)
  * [Authorization Header](#authorization-header)
* [Path Parameters](#path-parameters)
* [Query Parameters](#query-parameters)
  * [Example](#example)
* [Example Request](#example-request)
  * [cURL](#curl)
* [Response](#response)
  * [Status Code](#status-code)
  * [Response Body](#response-body)
* [Response Fields](#response-fields)
  * [Example](#example-1)
* [Success Response](#success-response)
* [Related Resources](#related-resources)

## Endpoint

```http
DELETE /team/{team_id}/connections/{connection_id}
```

**Base URL**

```text
https://api.chartbrew.com
```

## Description

Deletes a connection belonging to a specific team.

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

## Query Parameters

| Parameter      | Type    | Required | Description                           |
| -------------- | ------- | -------- | ------------------------------------- |
| removeDatasets | boolean | No       | Whether to remove associated datasets |

### Example

```http
DELETE /team/{team_id}/connections/{connection_id}?removeDatasets=true
```

---

## Example Request

### cURL

```bash
curl --request DELETE \
  --url https://api.chartbrew.com/team/{team_id}/connections/{connection_id} \
  --header 'Authorization: Bearer <token>'
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
  "removed": true
}
```

---

## Response Fields

| Field   | Type    | Description                                               |
| ------- | ------- | --------------------------------------------------------- |
| removed | boolean | Indicates whether the connection was successfully deleted |

### Example

```json
{
  "removed": true
}
```

---

## Success Response

A successful deletion returns:

```json
{
  "removed": true
}
```

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
