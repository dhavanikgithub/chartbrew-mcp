# Delete a Chart Dataset Config

Delete a chart dataset configuration.

## Table of Contents

* [Endpoint](#endpoint)
* [Authentication](#authentication)
* [Request Examples](#request-examples)
  * [cURL](#curl)
* [Path Parameters](#path-parameters)
* [Response](#response)
  * [Response Body](#response-body)
* [Response Fields](#response-fields)
* [Related Resources](#related-resources)

## Endpoint

```http
DELETE /project/{project_id}/chart/{id}/chart-dataset-config/{cdc_id}
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
  --url https://api.chartbrew.com/project/{project_id}/chart/{id}/chart-dataset-config/{cdc_id} \
  --header 'Authorization: Bearer <token>'
```

## Path Parameters

| Parameter    | Type   | Required | Description                           |
| ------------ | ------ | -------- | ------------------------------------- |
| `project_id` | string | Yes      | ID of the project                     |
| `id`         | string | Yes      | ID of the chart                       |
| `cdc_id`     | string | Yes      | ID of the chart dataset configuration |

## Response

**Status Code:** `200 OK`

**Content-Type:** `application/json`

Description: Deleted chart dataset configuration.

### Response Body

```json
{
  "removed": true
}
```

## Response Fields

| Field     | Type    | Example | Description                                                   |
| --------- | ------- | ------- | ------------------------------------------------------------- |
| `removed` | boolean | `true`  | Indicates whether the chart dataset configuration was removed |

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Chart Dataset Config](./create-a-chart-config.md)
* [Delete a Chart Dataset Config](./delete-a-chart-config.md)
* [Update a Chart Dataset Config](./update-a-chart-config.md)
* [What is a Chart Dataset Config](./what-is-a-chart-dataset-config.md)
