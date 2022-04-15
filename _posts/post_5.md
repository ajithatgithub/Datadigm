---
title: "Machine learning based Data Classification for a Healthcare Customer"
coverImage: "/images/posts/5/5.png"
heroImage: "/images/posts/1/hero.jpeg"
date: "2022-04-09"
challenge: "Following a data security breach, a leading healthcare company wanted to implement universal data classification model across the organization following the least privilege access and controls over all the data in organization. Lack of business metadata and improper table/attribute naming standards require deep analysis to correctly categorize all attributes into following data classification levels"
author:
  name: ""
  picture: ""
ogImage:
  url: ""
---

**Public:** Public information can be openly shared on your website and does not require any additional controls when used.

#

**Internal:** Internal information is companywide. It includes the employee handbook, various policies and company-wide memos. If disclosed, it has a minimal impact to the business.

#

**Confidential:** Confidential information is team-wide, and its use should be contained within the business. If disclosed, it could negatively affect your business.

#

**Restricted:** Highly sensitive and limited on a need-to-know basis. It is protected with a Non-disclosure Agreement (NDA) to minimize legal risk. If disclosed, there would be a significant financial or legal impact to the business.

#

## Classification Approach:

Automatic Machine Learning (ML) based process to classify an attribute in a faster and cost-effective way. It also continuously improves the prediction process and achieve better results in every iteration.

#

Text classification popularly known as text tagging or text-categorization is the most suitable ML solution. It breaks the attributes in different ways to classify them into appropriate protection groups.

#

The steps to classify table, attribute names and their definition into correct protection groups:

### Data Preparation – Following pre-processing actions are performed,

- Data standardization – Handle special characters, extra spaces, remove duplicates, remove punctuations

- Elimination of common words that do not add any value

### Data Classification Models executed in waterfall,

- Full match - Compare exact text match with training texts, classify matched ones

- Boyer-Moore algorithm

- Tokenization in NLP – Breaks into list of tokens/words and matched

- Processing engine – Categorize based on class word and keyword

### Refine the models based on feedback

#

To keep the model evergreen, it should be continuously feed from approved dataset into training dataset. Accuracy of the model is highly dependent on the quality and quantity of the training data provided

#

## Process Workflow:

#

## Benefits

- Consistent data classification allowed for more effective operations while also lowering the expenses of maintaining acceptable data protection.

- Understanding the data's sensitivity helped to determine who should and shouldn't have access to it both inside and outside the company.

- By classifying data, the company was better prepared to assess the risk and effect of an incident based on the type of data involved.
