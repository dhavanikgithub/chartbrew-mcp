# Create Dashboard Share Policy

Creates a share policy for a dashboard, enabling secure sharing through signed URLs and parameterized dashboard access.

## Table of Contents

* [Endpoint](#endpoint)
* [Headers](#headers)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
* [Example Request](#example-request)
* [Success Response (200)](#success-response-200)
* [Response Fields](#response-fields)
* [Params Object](#params-object)
* [Features Enabled by Share Policy](#features-enabled-by-share-policy)
* [Example Usage](#example-usage)
* [Example Response](#example-response)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http
POST /project/{id}/share/policy
```

## Headers

| Header        | Type   | Required | Description                     |
| ------------- | ------ | -------- | ------------------------------- |
| Authorization | string | Yes      | Bearer token (`Bearer <token>`) |

## Path Parameters

| Parameter | Type   | Required | Description            |
| --------- | ------ | -------- | ---------------------- |
| id        | string | Yes      | Dashboard (Project) ID |

## Request Body

No request body is required.

## Example Request

```bash
curl --request POST \
  --url https://api.chartbrew.com/project/{id}/share/policy \
  --header 'Authorization: Bearer <token>'
```

## Success Response (200)

```json
{
  "id": 123,
  "entity_type": "Project",
  "entity_id": 123,
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

| Field        | Type     | Description                                  |
| ------------ | -------- | -------------------------------------------- |
| id           | integer  | Share policy ID                              |
| entity_type  | string   | Entity type (`Project` or `Chart`)           |
| entity_id    | integer  | Dashboard/Project ID                         |
| params       | array    | Parameters available for dashboard variables |
| allow_params | boolean  | Whether URL parameters are allowed           |
| createdAt    | datetime | Creation timestamp                           |
| updatedAt    | datetime | Last update timestamp                        |

## Params Object

| Field | Type   | Description     |
| ----- | ------ | --------------- |
| key   | string | Parameter name  |
| value | string | Parameter value |

## Features Enabled by Share Policy

* Signed URL generation
* URL expiration support
* Dashboard variable parameterization
* Optional URL parameter passing
* Enhanced security for public dashboards

## Example Usage

```http
POST /project/123/share/policy
Authorization: Bearer <token>
```

## Example Response

```json
{
  "id": 45,
  "entity_type": "Project",
  "entity_id": 123,
  "params": [],
  "allow_params": false,
  "createdAt": "2023-11-07T05:31:56Z",
  "updatedAt": "2023-11-07T05:31:56Z"
}
```

## Notes

* A dashboard can have a share policy that controls secure access.
* Share policies are required for signed URL functionality.
* Parameters defined in the policy can be passed to dashboard variables.
* `allow_params` determines whether external URL parameters are accepted.

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
