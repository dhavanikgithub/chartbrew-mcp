# Delete Dashboard Share Policy

Delete a share policy for a dashboard.

## Table of Contents

* [Endpoint](#endpoint)
* [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Example Request](#example-request)
  * [cURL](#curl)
* [Response](#response)
  * [200 OK](#200-ok)
  * [Response Schema](#response-schema)
    * [Example](#example)
* [Related Resources](#related-resources)

## Endpoint

```http
DELETE /project/{id}/share/policy/{policy_id}
```

## Authorization

| Name | Type | Location | Required |
|--------|--------|----------|----------|
| Authorization | string | Header | Yes |

Bearer authentication header:

```text
Authorization: Bearer <token>
```

## Path Parameters

| Name | Type | Required | Description |
|--------|--------|----------|-------------|
| policy_id | string | Yes | ID of the share policy |

## Example Request

### cURL

```bash
curl --request DELETE \
  --url https://api.chartbrew.com/project/{id}/share/policy/{policy_id} \
  --header 'Authorization: Bearer <token>'
```

## Response

### 200 OK

Deleted share policy.

**Content-Type:** `application/json`

```json
{
  "deleted": true
}
```

### Response Schema

| Field | Type | Description |
|---------|---------|-------------|
| deleted | boolean | Indicates whether the share policy was deleted |

#### Example

```json
true
```

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