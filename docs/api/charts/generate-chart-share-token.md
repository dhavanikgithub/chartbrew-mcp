# Generate Chart Share Token

Generate a signed JWT token for secure chart embedding with optional parameters and expiration.

## Table of Contents

* [Endpoint](#endpoint)
* [Try it](#try-it)
  * [cURL](#curl)
* [Response](#response)
* [Path Parameters](#path-parameters)
* [Body Parameters](#body-parameters)
  * [`share_policy`](#share_policy)
  * [`params`](#params)
  * [`allow_params`](#allow_params)
  * [`exp`](#exp)
* [Response Parameters](#response-parameters)
* [Usage Notes](#usage-notes)
* [Authorization](#authorization)
  * [Bearer Authentication](#bearer-authentication)
* [Request Details](#request-details)
  * [Headers](#headers)
  * [Body](#body)
* [HTTP Response](#http-response)
  * [200 OK](#200-ok)
* [Related Resources](#related-resources)

## Endpoint

`POST /project/{project_id}/chart/{id}/share/token`

## Try it

### cURL

```bash
curl -X POST \
  'https://api.chartbrew.com/project/123/chart/456/share/token' \
  -H 'Authorization: Bearer YOUR_API_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "share_policy": {
      "params": [
        {
          "key": "filter_date",
          "value": "2024-01"
        },
        {
          "key": "category",
          "value": "sales"
        }
      ],
      "allow_params": true
    },
    "exp": "2024-12-31T23:59:59Z"
  }'
```

## Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsidHlwZSI6IkNoYXJ0IiwiaWQiOjQ1Nn0sImlhdCI6MTY0MjQ0MDAwMCwiZXhwIjoxNzAzOTc2MDAwfQ.example_signature",
  "url": "https://app.chartbrew.com/chart/3b2a5538-6895-4856-8933-ef1e0c67a820/share?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example_signature"
}
```

This endpoint generates a JWT token for embedding a chart with a SharePolicy. The token can include custom parameters, expiration dates, and URL parameter permissions.

## Path Parameters

| Parameter    | Type   | Required | Description                                |
| ------------ | ------ | -------- | ------------------------------------------ |
| `project_id` | string | Yes      | The ID of the project containing the chart |
| `id`         | string | Yes      | The ID of the chart                        |

## Body Parameters

### `share_policy`

Object containing the share policy configuration to update before generating the token.

#### `params`

Array of parameters to include in the chart share policy.

Parameter object:

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| `key`     | string | The parameter name/key |
| `value`   | string | The parameter value    |

#### `allow_params`

`boolean`

Whether to allow URL parameters to override policy parameters for the chart.

### `exp`

`string`

Token expiration date and time in ISO 8601 format.

Example:

```text
2024-12-31T23:59:59Z
```

## Response Parameters

| Parameter | Type   | Description                                                |
| --------- | ------ | ---------------------------------------------------------- |
| `token`   | string | The generated JWT access token for chart access            |
| `url`     | string | The complete embeddable URL with the access token included |

## Usage Notes

* **Prerequisites:** A SharePolicy must exist for the chart before generating tokens. Use the "Create Chart Share Policy" endpoint first.
* **Token Expiration:** If no expiration is specified, the token will have a very long expiration period (99999 days).
* **Parameters:** Parameters defined in the share policy will be passed as variables to the chart.
* **URL Parameters:** If `allow_params` is `true`, additional parameters can be passed through URL query parameters and will override policy parameters.
* **Embedding:** Use the returned URL inside an iframe or as a direct link for chart embedding.
* **Security:** Always use HTTPS when sharing URLs containing access tokens.

## Authorization

### Bearer Authentication

Header:

```http
Authorization: Bearer <token>
```

The authentication header requires a valid API token.

## Request Details

### Headers

| Header          | Value                   |
| --------------- | ----------------------- |
| `Authorization` | `Bearer YOUR_API_TOKEN` |
| `Content-Type`  | `application/json`      |

### Body

Content type:

```text
application/json
```

## HTTP Response

### 200 OK

Returns the generated chart share token and URL.

Response body:

```json
{
  "token": "string",
  "url": "string"
}
```

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
