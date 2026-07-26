# Delete a Chart

Delete a specific chart.

## Table of Contents

* [Endpoint](#endpoint)
* [Authentication](#authentication)
* [Request Examples](#request-examples)
  * [cURL](#curl)
* [Path Parameters](#path-parameters)
* [Responses](#responses)
  * [200 - Chart deleted successfully](#200---chart-deleted-successfully)
  * [400 - Bad Request](#400---bad-request)
  * [401 - Unauthorized](#401---unauthorized)
  * [403 - Forbidden](#403---forbidden)
* [Response Schema](#response-schema)
* [Related Resources](#related-resources)

## Endpoint

```http
DELETE /project/{project_id}/chart/{id}
```

## Authentication

Requires a Bearer authentication header.

```http
Authorization: Bearer <token>
```

## Request Examples

### cURL

```bash
curl --request DELETE \
  --url https://api.chartbrew.com/project/{project_id}/chart/{id} \
  --header 'Authorization: Bearer <token>'
```


## Path Parameters

| Parameter    | Type   | Required | Description       |
| ------------ | ------ | -------- | ----------------- |
| `project_id` | string | Yes      | ID of the project |
| `id`         | string | Yes      | ID of the chart   |

## Responses

### 200 - Chart deleted successfully

```json
{
  "deleted": true
}
```

### 400 - Bad Request

```json
{
  "message": "<string>",
  "error": "<string>"
}
```

### 401 - Unauthorized

```json
{
  "message": "<string>",
  "error": "<string>"
}
```

### 403 - Forbidden

```json
{
  "message": "<string>",
  "error": "<string>"
}
```

## Response Schema

| Field     | Type    | Description                                          |
| --------- | ------- | ---------------------------------------------------- |
| `deleted` | boolean | Indicates whether the chart was deleted successfully |

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Chart](./create-a-chart.md)
* [Create Chart Share Policy](./create-chart-share-policy.md)
* [Delete a Chart](./delete-a-chart.md)
* [Delete Chart Share Policy](./delete-chart-share-policy.md)
* [Generate Chart Share Token](./generate-chart-share-token.md)
* [Get a Chart](./get-a-chart.md)
* [Get Chart for Sharing](./get-chart-for-sharing.md)
* [Query a Chart](./query-a-chart.md)
* [Quick Create Chart](./quick-create-chart.md)
* [Update Chart Share Policy](./update-chart-share-policy.md)
* [What is a Chart](./what-is-a-chart.md)
