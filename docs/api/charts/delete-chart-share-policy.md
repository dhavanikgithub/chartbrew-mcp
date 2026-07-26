# Delete Chart Share Policy

Delete a share policy for a chart.

## Table of Contents

* [Endpoint](#endpoint)
* [cURL](#curl)
* [Response](#response)
  * [200 - application/json](#200---applicationjson)
* [Authorizations](#authorizations)
  * [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Description](#description)
* [Related Resources](#related-resources)

## Endpoint

```http
DELETE /project/{project_id}/chart/{chart_id}/share/policy/{policy_id}
```

## cURL

```bash
curl --request DELETE \
  --url https://api.chartbrew.com/project/{project_id}/chart/{chart_id}/share/policy/{policy_id} \
  --header "Authorization: Bearer <token>"
```


## Response

### 200 - application/json

Deleted share policy.

```json
{
  "deleted": true
}
```

## Authorizations

### Authorization

**Type:** `string`
**Location:** Header
**Required:** Yes

Bearer authentication header:

```http
Authorization: Bearer <token>
```

where `<token>` is your authentication token.

## Path Parameters

| Parameter    | Type   | Required | Description            |
| ------------ | ------ | -------- | ---------------------- |
| `project_id` | string | Yes      | ID of the project      |
| `chart_id`   | string | Yes      | ID of the chart        |
| `policy_id`  | string | Yes      | ID of the share policy |

## Description

This endpoint deletes an existing `SharePolicy` for a chart.

Deleting a share policy removes advanced sharing configurations, including:

* Signed URL generation with expiration dates
* Parameter passing to chart variables
* Control over URL parameter allowance
* Enhanced security for embedded charts

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
