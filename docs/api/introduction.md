# Introduction

## Table of Contents

* [Introduction](#introduction-1)
* [Authentication](#authentication)
* [Main Endpoint](#main-endpoint)
* [Documentation Notices](#documentation-notices)
* [API Reference Index](#api-reference-index)
  * [Chart Dataset Configs](#chart-dataset-configs)
  * [Charts](#charts)
  * [Connections](#connections)
  * [Dashboards](#dashboards)
  * [Data Requests](#data-requests)
  * [Datasets](#datasets)
  * [Teams](#teams)

## Introduction

You can use the Chartbrew API to create, read, update, and delete charts, dashboards, and other resources.

To authenticate your requests, you must first create an API key in Chartbrew.

> Example section for showcasing API endpoints.


## Authentication

All API endpoints require authentication using a Bearer token supplied in the `Authorization` header.

### Example Request

```bash
curl -X GET "https://api.chartbrew.com/project/65342" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Main Endpoint

For Chartbrew Cloud (managed service), use the following base URL:

```text
https://api.chartbrew.com
```

If you are self-hosting Chartbrew, replace the base URL with your own deployment endpoint.

All examples in this documentation use the managed service endpoint.

## Documentation Notices

Most endpoints include a **"What is a..."** section.

These sections explain:

* The purpose of the resource
* How the resource works
* Common usage patterns
* Important implementation details


## API Reference Index

### Chart Dataset Configs
* [Create a Chart Config](./chart-dataset-configs/create-a-chart-config.md)
* [Delete a Chart Config](./chart-dataset-configs/delete-a-chart-config.md)
* [Update a Chart Config](./chart-dataset-configs/update-a-chart-config.md)
* [What is a Chart Dataset Config](./chart-dataset-configs/what-is-a-chart-dataset-config.md)

### Charts
* [Create a Chart](./charts/create-a-chart.md)
* [Create Chart Share Policy](./charts/create-chart-share-policy.md)
* [Delete a Chart](./charts/delete-a-chart.md)
* [Delete Chart Share Policy](./charts/delete-chart-share-policy.md)
* [Generate Chart Share Token](./charts/generate-chart-share-token.md)
* [Get a Chart](./charts/get-a-chart.md)
* [Get Chart for Sharing](./charts/get-chart-for-sharing.md)
* [Query a Chart](./charts/query-a-chart.md)
* [Quick Create Chart](./charts/quick-create-chart.md)
* [Update Chart Share Policy](./charts/update-chart-share-policy.md)
* [What is a Chart](./charts/what-is-a-chart.md)

### Connections
* [Create a Connection](./connections/create-a-connection.md)
* [Delete a Connection](./connections/delete-a-connection.md)
* [Get a Connection](./connections/get-a-connection.md)
* [List Connections](./connections/list-connections.md)
* [Test a Connection](./connections/test-a-connection.md)
* [Update a Connection](./connections/update-a-connection.md)
* [Update Connection Files](./connections/update-connection-files.md)
* [What is a Connection](./connections/what-is-a-connection.md)

### Dashboards
* [Create a Dashboard](./dashboards/create-a-dashboard.md)
* [Create Dashboard Share Policy](./dashboards/create-dashboard-share-policy.md)
* [Delete a Dashboard](./dashboards/delete-a-dashboard.md)
* [Delete Dashboard Share Policy](./dashboards/delete-dashboard-share-policy.md)
* [Generate Dashboard Share Token](./dashboards/generate-dashboard-share-token.md)
* [Get a Dashboard](./dashboards/get-a-dashboard.md)
* [List All Dashboards](./dashboards/list-all-dashboards.md)
* [Update a Dashboard](./dashboards/update-a-dashboard.md)
* [Update Dashboard Share Policy](./dashboards/update-dashboard-share-policy.md)
* [What is a Dashboard](./dashboards/what-is-a-dashboard.md)

### Data Requests
* [Create a Data Request](./data-requests/create-a-data-request.md)
* [Create a Variable Binding](./data-requests/create-a-variable-binding.md)
* [Get Dataset Data Requests](./data-requests/get-dataset-data-requests.md)
* [Run a Data Request](./data-requests/run-a-data-request.md)
* [Update a Data Request](./data-requests/update-a-data-request.md)
* [Update a Variable Binding](./data-requests/update-a-variable-binding.md)
* [What is a Data Request](./data-requests/what-is-a-data-request.md)

### Datasets
* [Create a Dataset](./datasets/create-a-dataset.md)
* [Delete a Dataset](./datasets/delete-a-dataset.md)
* [Fetch Dataset Data](./datasets/fetch-dataset-data.md)
* [Get a Dataset](./datasets/get-a-dataset.md)
* [List Datasets](./datasets/list-datasets.md)
* [Quick Create](./datasets/quick-create.md)
* [Update a Dataset](./datasets/update-a-dataset.md)
* [What is a Dataset](./datasets/what-is-a-dataset.md)

### Teams
* [Create Team](./teams/create-team.md)
* [Get Team](./teams/get-team.md)
* [Get User Teams](./teams/get-user-teams.md)
* [Update Team](./teams/update-team.md)
