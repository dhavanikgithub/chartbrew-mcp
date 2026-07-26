# Update Dashboard Share Policy

Updates an existing dashboard share policy, allowing you to configure URL parameters, variable mappings, and token expiration for secure dashboard sharing.

## Table of Contents

* [Endpoint](#endpoint)
* [Headers](#headers)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
* [Params Object](#params-object)
* [Example Request](#example-request)
* [Example Request Body](#example-request-body)
* [Success Response (200)](#success-response-200)
* [Response Fields](#response-fields)
* [Example Usage](#example-usage)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http
PUT /project/{id}/share/policy/{policy_id}
```

## Headers

| Header        | Type   | Required | Description                     |
| ------------- | ------ | -------- | ------------------------------- |
| Authorization | string | Yes      | Bearer token (`Bearer <token>`) |
| Content-Type  | string | Yes      | `application/json`              |

## Path Parameters

| Parameter | Type   | Required | Description            |
| --------- | ------ | -------- | ---------------------- |
| id        | string | Yes      | Dashboard (Project) ID |
| policy_id | string | Yes      | Share Policy ID        |

## Request Body

| Field        | Type     | Required | Description                              |
| ------------ | -------- | -------- | ---------------------------------------- |
| params       | array    | No       | Parameters passed to dashboard variables |
| allow_params | boolean  | No       | Allow parameters to be passed via URL    |
| expires_at   | datetime | No       | Expiration date/time for signed URLs     |

## Params Object

| Field | Type   | Description     |
| ----- | ------ | --------------- |
| key   | string | Parameter name  |
| value | string | Parameter value |

## Example Request

```bash
curl --request PUT \
  --url https://api.chartbrew.com/project/{id}/share/policy/{policy_id} \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "params": [
      {
        "key": "customer_id",
        "value": "123"
      }
    ],
    "allow_params": false,
    "expires_at": "2026-12-31T23:59:59Z"
  }'
```

## Example Request Body

```json
{
  "params": [
    {
      "key": "customer_id",
      "value": "123"
    },
    {
      "key": "region",
      "value": "US"
    }
  ],
  "allow_params": true,
  "expires_at": "2026-12-31T23:59:59Z"
}
```

## Success Response (200)

```json
{
  "id": 123,
  "entity_type": "Project",
  "entity_id": 456,
  "params": [
    {
      "key": "customer_id",
      "value": "123"
    }
  ],
  "allow_params": false,
  "createdAt": "2023-11-07T05:31:56Z",
  "updatedAt": "2023-11-07T05:31:56Z"
}
```

## Response Fields

| Field        | Type     | Description                        |
| ------------ | -------- | ---------------------------------- |
| id           | integer  | Share policy ID                    |
| entity_type  | string   | Entity type (`Project` or `Chart`) |
| entity_id    | integer  | Associated dashboard/project ID    |
| params       | array    | Dashboard variable parameters      |
| allow_params | boolean  | Whether URL parameters are allowed |
| createdAt    | datetime | Creation timestamp                 |
| updatedAt    | datetime | Last update timestamp              |

## Example Usage

Enable URL parameters and set expiration:

```http
PUT /project/123/share/policy/45
Authorization: Bearer <token>
Content-Type: application/json
```

```json
{
  "allow_params": true,
  "expires_at": "2026-12-31T23:59:59Z"
}
```

Update dashboard variables:

```json
{
  "params": [
    {
      "key": "department",
      "value": "sales"
    }
  ]
}
```

## Notes

* Use `params` to pass values into dashboard variables.
* Setting `allow_params` to `true` permits URL query parameters to override or provide variable values.
* `expires_at` controls how long signed URLs remain valid.
* Omitting a field leaves its existing value unchanged (subject to API implementation).
* Share policies are commonly used for secure public dashboard access and embedded dashboard scenarios.

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
