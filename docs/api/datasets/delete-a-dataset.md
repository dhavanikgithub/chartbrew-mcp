# Delete a Dataset

Deletes an existing dataset by its ID.

## Table of Contents

* [Endpoint](#endpoint)
* [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Request Example](#request-example)
  * [cURL](#curl)
* [Response](#response)
  * [Success Response (200)](#success-response-200)
* [Response Schema](#response-schema)
* [Example Response](#example-response)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http
DELETE /team/{team_id}/datasets/{dataset_id}
```

## Authorization

Requires Bearer token authentication.

| Header        | Type   | Required | Description                                                |
| ------------- | ------ | -------- | ---------------------------------------------------------- |
| Authorization | string | Yes      | Bearer authentication token in the format `Bearer <token>` |

## Path Parameters

| Parameter  | Type   | Required | Description       |
| ---------- | ------ | -------- | ----------------- |
| team_id    | string | Yes      | ID of the team    |
| dataset_id | string | Yes      | ID of the dataset |

## Request Example

### cURL

```bash
curl --request DELETE \
  --url https://api.chartbrew.com/team/{team_id}/datasets/{dataset_id} \
  --header 'Authorization: Bearer <token>'
```

## Response

### Success Response (200)

Returns `true` when the dataset is successfully deleted.

```json
true
```

## Response Schema

| Type    | Description                                            |
| ------- | ------------------------------------------------------ |
| boolean | Indicates whether the dataset was successfully deleted |

## Example Response

```json
true
```

## Notes

* The specified dataset is permanently deleted.
* Ensure the dataset is no longer required before performing this operation.
* A successful deletion returns a boolean value of `true`.
* You must provide valid `team_id` and `dataset_id` values.

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Dataset](./create-a-dataset.md)
* [Delete a Dataset](./delete-a-dataset.md)
* [Fetch Dataset Data](./fetch-dataset-data.md)
* [Get a Dataset](./get-a-dataset.md)
* [List Datasets](./list-datasets.md)
* [Quick Create](./quick-create.md)
* [Update a Dataset](./update-a-dataset.md)
* [What is a Dataset](./what-is-a-dataset.md)
