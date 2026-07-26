# Update a Dataset

Updates an existing dataset by its ID.

## Table of Contents

* [Endpoint](#endpoint)
* [Authorization](#authorization)
* [Path Parameters](#path-parameters)
* [Request Body](#request-body)
  * [joinSettings Structure](#joinsettings-structure)
* [Example Request](#example-request)
* [Response](#response)
  * [Response Fields](#response-fields)
  * [Example Response](#example-response)
* [Notes](#notes)
* [Related Resources](#related-resources)

## Endpoint

```http
PUT /team/{team_id}/datasets/{dataset_id}
```

## Authorization

| Header        | Type   | Required | Description                                                |
| ------------- | ------ | -------- | ---------------------------------------------------------- |
| Authorization | string | Yes      | Bearer authentication token in the format `Bearer <token>` |

## Path Parameters

| Parameter  | Type   | Required | Description       |
| ---------- | ------ | -------- | ----------------- |
| team_id    | string | Yes      | ID of the team    |
| dataset_id | string | Yes      | ID of the dataset |

## Request Body

Content-Type: `application/json`

| Field         | Type      | Required | Description                       |
| ------------- | --------- | -------- | --------------------------------- |
| project_ids   | integer[] | No       | List of associated project IDs    |
| name          | string    | No       | Dataset name                      |
| connection_id | integer   | No       | Connection ID used by the dataset |
| type          | string    | No       | Dataset type                      |
| query         | string    | No       | Query used to fetch data          |
| datasetColor  | string    | No       | Dataset color                     |
| dateField     | string    | No       | Date field name                   |
| dateFormat    | string    | No       | Date format                       |
| legend        | string    | No       | Legacy dataset name field         |
| configuration | object    | No       | Dataset configuration             |
| joinSettings  | object    | No       | Join configuration settings       |

### joinSettings Structure

```json
{
  "joins": [
    {
      "dr_id": 123,
      "join_id": 123,
      "dr_field": "<string>",
      "join_field": "<string>"
    }
  ]
}
```

## Example Request

```bash
curl --request PUT \
  --url https://api.chartbrew.com/team/{team_id}/datasets/{dataset_id} \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "project_ids": [123],
    "name": "<string>",
    "connection_id": 123,
    "type": "<string>",
    "query": "<string>",
    "datasetColor": "<string>",
    "dateField": "<string>",
    "dateFormat": "<string>",
    "legend": "<string>",
    "configuration": {},
    "joinSettings": {
      "joins": [
        {
          "dr_id": 123,
          "join_id": 123,
          "dr_field": "<string>",
          "join_field": "<string>"
        }
      ]
    }
  }'
```

## Response

**Status Code:** `200 OK`

Returns the updated dataset object.

### Response Fields

| Field          | Type      | Description                                |
| -------------- | --------- | ------------------------------------------ |
| id             | integer   | Dataset ID                                 |
| team_id        | integer   | Team ID                                    |
| project_ids    | integer[] | Associated project IDs                     |
| chart_id       | integer   | Chart ID                                   |
| connection_id  | integer   | Connection ID                              |
| draft          | boolean   | Indicates whether dataset is in draft mode |
| name           | string    | Canonical dataset name                     |
| query          | string    | Dataset query                              |
| xAxis          | string    | Legacy dataset-level X-axis binding        |
| xAxisOperation | string    | Legacy X-axis operation                    |
| yAxis          | string    | Legacy dataset-level Y-axis binding        |
| yAxisOperation | string    | Legacy Y-axis operation                    |
| dateField      | string    | Legacy dataset-level date field            |
| dateFormat     | string    | Legacy dataset-level date format           |
| legend         | string    | Legacy dataset name field                  |
| fieldsSchema   | object    | Schema of dataset fields                   |
| excludedFields | string[]  | Excluded fields                            |
| configuration  | object    | Dataset configuration                      |
| joinSettings   | object    | Dataset join configuration                 |

### Example Response

```json
{
  "id": 123,
  "team_id": 123,
  "project_ids": [123],
  "chart_id": 123,
  "connection_id": 123,
  "draft": true,
  "name": "<string>",
  "query": "<string>",
  "xAxis": "<string>",
  "xAxisOperation": "<string>",
  "yAxis": "<string>",
  "yAxisOperation": "none",
  "dateField": "<string>",
  "dateFormat": "<string>",
  "legend": "<string>",
  "fieldsSchema": {},
  "excludedFields": [
    "<string>"
  ],
  "configuration": {},
  "joinSettings": {
    "joins": [
      {
        "dr_id": 123,
        "join_id": 123,
        "dr_field": "<string>",
        "join_field": "<string>"
      }
    ]
  }
}
```

## Notes

* `name` is the canonical dataset name and should be preferred over `legend`.
* `legend`, `xAxis`, `yAxis`, `dateField`, and related fields are maintained for legacy compatibility.
* New chart bindings should be stored on `ChartDatasetConfig`.
* Updating a dataset preserves its existing ID and returns the updated resource.

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
