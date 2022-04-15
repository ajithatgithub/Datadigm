---
title: "Enterprise Data Lake & Pipeline for a Leading bank"
coverImage: "/images/posts/2/2.png"
heroImage: "/images/posts/1/hero.jpeg"
date: "2022-04-09"
challenge: "Leading US bank’s Consumer banking segment provides a variety of services to consumers and businesses including deposit and investment products, cash management, payment solutions, mortgage origination and servicing, credit-card issuance, and auto loans.

On-premise data silos for Mortgage, Cards, and Auto Lines of Business have various technological stacks, making it difficult to achieve an integrated customer perspective. This redundant data raises operating costs and reduces income prospects. To establish a truly customer 360 view, businesses require an open and adaptable platform.

The bank’s approach to data developing local solutions that addressed specific business needs or manual efforts by each autonomous team, resulting in a fragmented approach and a huge number of siloed data pools."
author:
  name: ""
  picture: ""
ogImage:
  url: ""
---

The solution was to build a data ecosystem (data lake and data pipeline) that would be key to giving access to core data domains and additional data sources to Mortgage, Cards, and Auto Lines of Business within the bank.

#

An Azure cloud-based platform that would accommodate different types of data and compute needs that were most relevant to the business based on the technical needs to enable the data lake – a meta data driven automated data pipeline that ingests data to a data lake staging layer. Canonical Integration model built over raw staging data acts as a central repository, discovery through a data catalog.

#

Semantic data marts built over integration data using Azure Databricks helped in achieving customer 360-degree view combining all heterogenous data sources from different LOB’s into single version of truth. Analytics can be performed on it, ranging from dashboards and visualizations to big data processing, real-time analytics, and machine learning to help people make better decisions.

#

The key elements of the cloud infrastructure, data, and compute platform that we created are described below.

### Metadata driven Data Pipeline

The Metadata driven data pipeline functions as a utility, providing the bank with a common set of data tools that allowed it to automate data sourcing, staging, and Integration. The strategy for the cloud data lake may then be extracted, converted, merged, validated, and loaded (ETL) for future use thanks to the automation of these procedures. The data pipeline can process numerous data sources at the same time.

### Elastic Storage and compute

The fund takes advantage of the capacity to construct and execute applications and services with infinite elasticity without needing physical hardware by utilizing cloud serverless computation and storage, such as Azure Functions and Blob Storage.

#

Furthermore, the previous expenditures associated with managing servers and containers (such as operating system upgrades, maintenance updates, image snapshots, backups, restarts, and so on) have essentially vanished.

### Data Catalog

The establishment of a data catalog provided the company with a single searchable lexicon of data, including the data source, definition, and entitlements. The data catalog built on top of the data lake allows users to discover the data they need and utilize it in the tools of their choice while also guaranteeing that information borders and data contracts are respected.

## BENEFITS

The benefits of establishing an enterprise data lake are numerous. Previously, the bank had data stored in several business teams or systems. Access to this data necessitated point-to-point solutions, and each team that used it spent a significant amount of effort preparing and reconciling data. Furthermore, teams were unaware of data that existed within the company. By bringing together internal and external datasets in a one location and reducing unnecessary reconciliations by using the same dataset, the corporate data lake enabled bank’s teams to capitalize on the value in data.

- The data discovery effort spent by data analyst across LOB’s reduced by 50%

- Multiple LOB’s adopted API and microservice based architecture to access data directly into their environment. This helped in saving overall new development effort by 30%

- Improved accuracy and performance of Machine Learning algorithms against multiple datasets
