# Create Chart Share Policy

Create a share policy for a chart to enable secure embedding with signed URLs.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authorization](#authorization)
* [Request](#request)
  * [cURL](#curl)
* [Path Parameters](#path-parameters)
* [Response](#response)
  * [Example Response](#example-response)
* [Response Fields](#response-fields)
* [Related Resources](#related-resources)

## Endpoint

```
POST /project/{project_id}/chart/{id}/share/policy
```

## Description

This endpoint creates a new `SharePolicy` for a chart, enabling advanced sharing and embedding features, including:

* Signed URL generation with expiration dates
* Parameter passing to chart variables
* Control over URL parameter allowance
* Enhanced security for embedded charts

## Authorization

**Type:** Bearer Token

Include the authorization header:

```http
Authorization: Bearer <token>
```

## Request

### cURL

```bash
curl --request POST \
  --url https://api.chartbrew.com/project/{project_id}/chart/{id}/share/policy \
  --header 'Authorization: Bearer <token>'
```

## Path Parameters

| Parameter    | Type   | Required | Description       |
| ------------ | ------ | -------- | ----------------- |
| `project_id` | string | Yes      | ID of the project |
| `id`         | string | Yes      | ID of the chart   |

## Response

**Status Code:** `200 OK`

**Content-Type:** `application/json`

### Example Response

```json
{
  "id": 123,
  "entity_id": 123,
  "params": [
    {
      "key": "<string>",
      "value": "<string>"
    }
  ],
  "allow_params": false,
  "createdAt": "2023-11-07T05:31:56Z",
  "updatedAt": "2023-11-07T05:31:56Z"
}
```

## Response Fields

| Field          | Type               | Description                                               |
| -------------- | ------------------ | --------------------------------------------------------- |
| `id`           | integer            | Share policy ID                                           |
| `entity_type`  | enum               | Entity type. Available values: `Project`, `Chart`         |
| `entity_id`    | integer            | ID of the associated entity                               |
| `params`       | object[]           | Parameters to pass to variables in the dashboard's charts |
| `allow_params` | boolean            | Whether URL parameters are allowed. Default: `false`      |
| `createdAt`    | string (date-time) | Policy creation timestamp                                 |
| `updatedAt`    | string (date-time) | Policy last update timestamp                              |

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
