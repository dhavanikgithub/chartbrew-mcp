# What is a Dashboard?

Learn how dashboards work in Chartbrew.

## Table of Contents

* [Overview](#overview)
* [Dashboard and Project Relationship](#dashboard-and-project-relationship)
  * [Example](#example)
* [Related Resources](#related-resources)

## Overview

A dashboard is a collection of charts that can be used to visualize data.

Users within your team can access dashboards to view and interact with the underlying data visualizations.

## Dashboard and Project Relationship

In the Chartbrew API, a **Dashboard** is represented as a **Project**.

When working with dashboard-related API endpoints, you will encounter the term `Project` rather than `Dashboard`.

| UI Term   | API Term |
| --------- | -------- |
| Dashboard | Project  |
| Charts    | Charts   |

### Example

When retrieving dashboard information through the API, you will typically work with project resources and endpoints.

```text id="h4o6rb"
Dashboard (UI) → Project (API)
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
