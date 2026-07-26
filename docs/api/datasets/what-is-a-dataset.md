# What is a Dataset?

Learn how datasets work in Chartbrew and how they interact with connections, data requests, and charts.

## Table of Contents

* [Overview](#overview)
* [How Datasets Work](#how-datasets-work)
  * [1. Connection](#1-connection)
  * [2. Data Request](#2-data-request)
  * [3. Dataset](#3-dataset)
  * [4. Chart](#4-chart)
* [Dataset Responsibilities](#dataset-responsibilities)
* [Example Workflow](#example-workflow)
* [Key Concept](#key-concept)
* [Related Resources](#related-resources)

## Overview

A **Dataset** is a core component in Chartbrew that is responsible for formatting and transforming the data retrieved by its associated **Data Requests**.

Once the data has been processed by the dataset, it can be consumed by **Charts** to generate visualizations such as line charts, bar charts, pie charts, and other dashboard components.

## How Datasets Work

The data flow in Chartbrew follows this sequence:

```text
Connection
    ↓
Data Request
    ↓
Dataset
    ↓
Chart
```

### 1. Connection

A connection defines the data source, such as:

* PostgreSQL
* MySQL
* MongoDB
* REST APIs
* Firebase
* Google Analytics
* Other supported integrations

### 2. Data Request

A data request fetches raw data from the configured connection.

Examples:

* SQL queries
* MongoDB aggregation pipelines
* API requests
* Firebase queries

### 3. Dataset

The dataset processes and formats the raw data returned by the data request.

Responsibilities may include:

* Structuring data for visualization
* Mapping fields to chart axes
* Organizing labels and values
* Preparing time-series data
* Transforming response formats

### 4. Chart

Charts consume the formatted dataset and render visualizations for dashboards and reports.

Examples include:

* Line charts
* Bar charts
* Area charts
* Pie charts
* Tables
* Metric cards

## Dataset Responsibilities

A dataset typically handles:

| Responsibility        | Description                                        |
| --------------------- | -------------------------------------------------- |
| Data Formatting       | Converts raw responses into chart-ready structures |
| Data Mapping          | Maps fields to labels, values, and dimensions      |
| Data Transformation   | Reshapes data for visualization requirements       |
| Visualization Support | Supplies data in a format expected by charts       |

## Example Workflow

```text
PostgreSQL Database
        ↓
Connection
        ↓
SQL Query (Data Request)
        ↓
Dataset Formatting
        ↓
Line Chart Visualization
```

In this example:

1. A connection is established to a PostgreSQL database.
2. A data request executes an SQL query.
3. The dataset formats the query results.
4. A chart visualizes the processed data.

## Key Concept

Datasets act as the bridge between raw data retrieval and chart visualization. They ensure that data fetched from external sources is transformed into a structure that Chartbrew charts can understand and display.

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