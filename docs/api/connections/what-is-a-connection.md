# What is a Connection?

A **Connection** represents a data source in Chartbrew.

Connections are responsible for:

* Authenticating with external data sources.
* Storing the configuration needed to access those sources.
* Serving as the data source used by `DataRequests`.

## Table of Contents

* [How it Works](#how-it-works)
* [Description](#description)
* [Related Resources](#related-resources)

## How it Works

```text
Connection
    ↓
DataRequest
    ↓
Dataset
    ↓
Chart / Dashboard
```

* **Connection** → Defines and authenticates access to a data source (database, API, etc.).
* **DataRequest** → Executes queries or requests against the connection.
* **Dataset** → Stores and structures the returned data.
* **Chart/Dashboard** → Visualizes the dataset.

## Description

A connection is a representation of a data source. Connections are used to authenticate with your data sources and are used by `DataRequests`, which in turn are part of a `Dataset`.

## Related Resources

* [API Reference Index](../introduction.md)
* [Create a Connection](./create-a-connection.md)
* [Delete a Connection](./delete-a-connection.md)
* [Get a Connection](./get-a-connection.md)
* [List Connections](./list-connections.md)
* [Test a Connection](./test-a-connection.md)
* [Update a Connection](./update-a-connection.md)
* [Update Connection Files](./update-connection-files.md)
* [What is a Connection](./what-is-a-connection.md)
