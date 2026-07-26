# Generate Dashboard Share Token

Generate a signed JWT token for secure dashboard sharing with optional parameters and expiration.

## Table of Contents

* [Endpoint](#endpoint)
* [Description](#description)
* [Authentication](#authentication)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
  * [Body Fields](#body-fields)
    * [share\_policy](#share_policy)
    * [params\[\]](#params)
    * [exp](#exp)
* [Example Request](#example-request)
  * [cURL](#curl)
* [Response](#response)
  * [Response Fields](#response-fields)
* [Usage Notes](#usage-notes)
* [Related Resources](#related-resources)

## Endpoint

```http
POST /project/{id}/share/token
```

## Description

Creates a JWT-based share token for a dashboard/project. The generated token can:

* Include custom parameters that are passed to dashboard variables.
* Define an expiration date.
* Allow URL query parameters to override policy parameters.
* Return a complete shareable URL containing the token.

> A Share Policy must already exist for the project before generating a token.

---

## Authentication

| Header        | Type         | Required |
| ------------- | ------------ | -------- |
| Authorization | Bearer Token | Yes      |

Example:

```http
Authorization: Bearer <token>
```

---

## Path Parameters

| Parameter | Type   | Required | Description          |
| --------- | ------ | -------- | -------------------- |
| id        | string | Yes      | Dashboard/Project ID |

---

## Request Body

```json
{
  "share_policy": {
    "params": [
      {
        "key": "userId",
        "value": "12345"
      },
      {
        "key": "region",
        "value": "us-east"
      }
    ],
    "allow_params": true
  },
  "exp": "2024-12-31T23:59:59Z"
}
```

### Body Fields

#### share_policy

Share policy configuration used when generating the token.

| Field        | Type    | Required | Description                                         |
| ------------ | ------- | -------- | --------------------------------------------------- |
| params       | array   | No       | Parameters passed to dashboard variables            |
| allow_params | boolean | No       | Allows URL parameters to override policy parameters |

#### params[]

| Field | Type   | Description     |
| ----- | ------ | --------------- |
| key   | string | Parameter name  |
| value | string | Parameter value |

#### exp

| Type                       | Required | Description                    |
| -------------------------- | -------- | ------------------------------ |
| string (ISO 8601 datetime) | No       | Token expiration date and time |

Example:

```text
2024-12-31T23:59:59Z
```

---

## Example Request

### cURL

```bash
curl -X POST \
  'https://api.chartbrew.com/project/123/share/token' \
  -H 'Authorization: Bearer YOUR_API_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "share_policy": {
      "params": [
        {
          "key": "userId",
          "value": "12345"
        },
        {
          "key": "region",
          "value": "us-east"
        }
      ],
      "allow_params": true
    },
    "exp": "2024-12-31T23:59:59Z"
  }'
```

---

## Response

**200 OK**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsidHlwZSI6IlByb2plY3QiLCJpZCI6MTIzfSwiaWF0IjoxNjQyNDQwMDAwLCJleHAiOjE3MDM5NzYwMDB9.example_signature",
  "url": "https://app.chartbrew.com/report/my-dashboard?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsidHlwZSI6IlByb2plY3QiLCJpZCI6MTIzfSwiaWF0IjoxNjQyNDQwMDAwLCJleHAiOjE3MDM5NzYwMDB9.example_signature"
}
```

### Response Fields

| Field | Type   | Description                                 |
| ----- | ------ | ------------------------------------------- |
| token | string | Generated JWT access token                  |
| url   | string | Complete shareable URL containing the token |

---

## Usage Notes

* **Prerequisite:** A Share Policy must exist before generating tokens.
* **Expiration:** If `exp` is not provided, the token receives a very long expiration period (99999 days).
* **Parameters:** Values in `share_policy.params` are passed to dashboard variables.
* **URL Overrides:** When `allow_params` is `true`, URL query parameters can override policy parameters.
* **Security:** Share URLs should always be distributed over HTTPS.

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
