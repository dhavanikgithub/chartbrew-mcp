# Test a Connection

Test an existing connection by its ID to verify that it is configured correctly and can be reached successfully.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authentication](#authentication)
* [Path Parameters](#path-parameters)
* [Request Example](#request-example)
  * [cURL](#curl)
* [Successful Response](#successful-response)
* [Response Fields](#response-fields)
  * [Example](#example)
* [Response Schema](#response-schema)
* [Use Cases](#use-cases)
* [Notes](#notes)
* [Example Workflow](#example-workflow)
* [Related Resources](#related-resources)

## Endpoint

```http
GET /team/{team_id}/connections/{connection_id}/test
```

## Description

This endpoint tests a connection and returns whether the connection is valid and accessible.

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

## Request Example

### cURL

```bash
curl --request GET \
  --url https://api.chartbrew.com/team/{team_id}/connections/{connection_id}/test \
  --header 'Authorization: Bearer <token>'
```

## Successful Response

**Status Code:** `200 OK`

```json
{
  "success": true
}
```

## Response Fields

| Field     | Type    | Description                                     |
| --------- | ------- | ----------------------------------------------- |
| `success` | boolean | Indicates whether the connection test succeeded |

### Example

| Value  | Meaning                           |
| ------ | --------------------------------- |
| `true` | Connection is valid and reachable |

## Response Schema

```json
{
  "success": true
}
```

## Use Cases

* Verify database connectivity.
* Validate API connection credentials.
* Confirm connection settings after creation or update.
* Troubleshoot connection issues.

## Notes

* A successful response does not necessarily validate data availability; it only confirms that the connection can be established.
* Ensure the connection configuration and credentials are correct before testing.
* The authenticated user must have access to the specified team and connection.

## Example Workflow

1. Create or update a connection.
2. Call the test endpoint.
3. Check the `success` value in the response.
4. Proceed with datasets and charts if the test succeeds.

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
