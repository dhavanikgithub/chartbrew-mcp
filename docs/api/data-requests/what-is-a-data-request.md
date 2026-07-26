# What is a Data Request?

A Data Request is a representation of a data query in Chartbrew. It is responsible for fetching data from configured data sources through Connections.

Data Requests act as the bridge between your datasets and external data sources, allowing Chartbrew to retrieve, process, and visualize data.

## Table of Contents

* [Overview](#overview)
* [Relationship Between Components](#relationship-between-components)
  * [Connection](#connection)
  * [Data Request](#data-request)
  * [Dataset](#dataset)
* [Key Concepts](#key-concepts)
  * [Multiple Data Requests per Dataset](#multiple-data-requests-per-dataset)
  * [Data Fetching Workflow](#data-fetching-workflow)
* [Use Cases](#use-cases)
  * [Single Source Dataset](#single-source-dataset)
  * [Multi-Source Dataset](#multi-source-dataset)
* [Related Endpoints](#related-endpoints)
  * [Fetch Dataset Data](#fetch-dataset-data)
  * [Create a Data Request](#create-a-data-request)
* [Summary](#summary)
* [Related Resources](#related-resources)

## Overview

A Data Request defines:

* The data source to query
* The query or request configuration
* How data should be fetched from a Connection
* The data returned to a Dataset

## Relationship Between Components

```text
Connection
    │
    ▼
Data Request
    │
    ▼
Dataset
    │
    ▼
Chart / Visualization
```

### Connection

A Connection represents an external data source, such as:

* Databases
* APIs
* Analytics platforms
* Cloud services

### Data Request

A Data Request contains the query logic used to retrieve data from a Connection.

Examples include:

* SQL queries
* API requests
* Aggregation configurations
* Filter definitions

### Dataset

A Dataset stores and organizes data retrieved through one or more Data Requests.

A single Dataset can contain multiple Data Requests, allowing data to be collected from different sources and combined into a unified dataset.

## Key Concepts

### Multiple Data Requests per Dataset

A Dataset can have multiple Data Requests associated with it.

This enables:

* Combining data from multiple sources
* Joining datasets together
* Aggregating information from different systems
* Building more complex visualizations

### Data Fetching Workflow

```text
1. Create a Connection
        │
        ▼
2. Create a Data Request
        │
        ▼
3. Attach Data Request to a Dataset
        │
        ▼
4. Run Dataset Request
        │
        ▼
5. Retrieve Data
        │
        ▼
6. Display in Charts
```

## Use Cases

### Single Source Dataset

```text
PostgreSQL Connection
        │
        ▼
Data Request
        │
        ▼
Sales Dataset
```

### Multi-Source Dataset

```text
PostgreSQL Connection ──► Data Request #1
                                   │
REST API Connection ────► Data Request #2
                                   │
Google Analytics ──────► Data Request #3
                                   │
                                   ▼
                              Dataset
```

## Related Endpoints

### Fetch Dataset Data

Runs all Data Requests associated with a Dataset and returns the resulting data.

### Create a Data Request

Creates a new Data Request that can be attached to a Dataset for data retrieval.

## Summary

* A Data Request represents a data query.
* Data Requests fetch data through Connections.
* A Dataset can contain multiple Data Requests.
* Multiple Data Requests allow data aggregation from different sources.
* Data Requests are the core mechanism used by Chartbrew to retrieve data for datasets and charts.

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Data Request](./create-a-data-request.md)
* [Create a Variable Binding](./create-a-variable-binding.md)
* [Get Dataset Data Requests](./get-dataset-data-requests.md)
* [Run a Data Request](./run-a-data-request.md)
* [Update a Data Request](./update-a-data-request.md)
* [Update a Variable Binding](./update-a-variable-binding.md)
* [What is a Data Request](./what-is-a-data-request.md)
