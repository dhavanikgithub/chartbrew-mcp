# Update Chart Share Policy

Update a share policy for a chart to enable secure sharing with signed URLs.

## Table of Contents

* [Endpoint](#endpoint)
* [Request](#request)
  * [cURL](#curl)
* [Authorization](#authorization)
  * [Bearer Authentication](#bearer-authentication)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
  * [`params`](#params)
  * [`allow_params`](#allow_params)
  * [`expires_at`](#expires_at)
* [Response](#response)
  * [Response Example](#response-example)
* [Response Fields](#response-fields)
* [Features](#features)
* [Related Resources](#related-resources)

## Endpoint

```
PUT /project/{project_id}/chart/{chart_id}/share/policy/{policy_id}
```

## Request

### cURL

```bash
curl --request PUT \
  --url https://api.chartbrew.com/project/{project_id}/chart/{chart_id}/share/policy/{policy_id} \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '
{
  "params": [
    {
      "key": "<string>",
      "value": "<string>"
    }
  ],
  "allow_params": false,
  "expires_at": "2023-11-07T05:31:56Z"
}
'
```

## Authorization

### Bearer Authentication

**Header**

```
Authorization: Bearer <token>
```

Bearer authentication header where `<token>` is your authentication token.

## Path Parameters

| Parameter    | Type   | Required | Description            |
| ------------ | ------ | -------- | ---------------------- |
| `project_id` | string | Yes      | ID of the project      |
| `chart_id`   | string | Yes      | ID of the chart        |
| `policy_id`  | string | Yes      | ID of the share policy |

## Request Body

Content-Type:

```
application/json
```

### `params`

Type:

```json
object[]
```

Parameters to include in the share policy. These values are passed to dashboard variables.

Example:

```json
[
  {
    "key": "<string>",
    "value": "<string>"
  }
]
```

### `allow_params`

Type:

```json
boolean
```

Default:

```json
false
```

Whether URL parameters are allowed when accessing the shared chart.

### `expires_at`

Type:

```text
date-time
```

Token expiration date and time.

Example:

```text
2023-11-07T05:31:56Z
```

## Response

Status:

```
200 OK
```

Returns the updated share policy.

### Response Example

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

| Field          | Type      | Description                                    |
| -------------- | --------- | ---------------------------------------------- |
| `id`           | integer   | Share policy ID                                |
| `entity_type`  | enum      | Entity type (`Project` or `Chart`)             |
| `entity_id`    | integer   | Entity ID                                      |
| `params`       | object[]  | Parameters passed to dashboard chart variables |
| `allow_params` | boolean   | Whether URL parameters are allowed             |
| `createdAt`    | date-time | Creation timestamp                             |
| `updatedAt`    | date-time | Last update timestamp                          |

## Features

This endpoint enables:

* Signed URL generation with expiration dates
* Parameter passing to chart variables
* URL parameter access control
* Secure embedded chart sharing

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
