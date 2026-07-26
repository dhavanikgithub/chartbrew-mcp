# Delete a Dashboard

Delete an existing dashboard.

## Table of Contents

* [Endpoint](#endpoint)
* [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Example Request](#example-request)
  * [cURL](#curl)
  * [Request URL](#request-url)
* [Responses](#responses)
  * [200 OK](#200-ok)
    * [Response Fields](#response-fields)
  * [400 Bad Request](#400-bad-request)
    * [Error Response Fields](#error-response-fields)
* [Related Resources](#related-resources)

## Endpoint

```http
DELETE /project/{id}
```

**Base URL**

```text
https://api.chartbrew.com
```

## Authorization

Include a Bearer token in the request header.

| Header | Type | Required | Description |
|----------|--------|----------|-------------|
| Authorization | string | Yes | Bearer authentication header in the format `Bearer <token>` |

Example:

```http
Authorization: Bearer <token>
```

---

## Path Parameters

| Parameter | Type | Required | Description |
|------------|--------|----------|-------------|
| id | string | Yes | ID of the dashboard |

---

## Example Request

### cURL

```bash
curl --request DELETE \
  --url https://api.chartbrew.com/project/{id} \
  --header 'Authorization: Bearer <token>'
```

### Request URL

```http
DELETE https://api.chartbrew.com/project/{id}
```

---

## Responses

### 200 OK

Dashboard deleted successfully.

```json
{
  "removed": true
}
```

#### Response Fields

| Field | Type | Description |
|---------|--------|-------------|
| removed | boolean | Indicates whether the dashboard was successfully deleted |

Example:

```json
{
  "removed": true
}
```

---

### 400 Bad Request

Returned when the request cannot be processed.

```json
{
  "message": "<string>",
  "error": "<string>"
}
```

#### Error Response Fields

| Field | Type | Description |
|---------|--------|-------------|
| message | string | Human-readable error message |
| error | string | Error identifier or details |

---

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Dashboard](./create-a-dashboard.md)
* [Create Dashboard Share Policy](./create-dashboard-share-policy.md)
* [Delete a Dashboard](./delete-a-dashboard.md)
* [Delete Dashboard Share Policy](./delete-dashboard-share-policy.md)
* [Generate Dashboard Share Token](./generate-dashboard-share-token.md)
* [Get a Dashboard](./get-a-dashboard.md)
* [List All Dashboards](./list-all-dashboards.md)
* [Update a Dashboard](./update-a-dashboard.md)
* [Update Dashboard Share Policy](./update-dashboard-share-policy.md)
* [What is a Dashboard](./what-is-a-dashboard.md)