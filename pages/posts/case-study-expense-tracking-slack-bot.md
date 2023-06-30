---
title: Case Study - Slack Bot for Expense Tracking in a Non-Profit Organization
date: 2023/2/12
description: Case Study - Slack Bot for Expense Tracking in a Non-Profit Organization
tag: case study
author: Peter Reshetin
---

# Case Study: Slack Bot for Expense Tracking in a Non-Profit Organization

## Our Goal

As a small group of organizers conducting Vipassana meditation courses in our local region in Minsk, Belarus, we wanted to streamline our financial tracking process and improve communication within our team. Our main objective was to eliminate the need for multiple tools and achieve real-time updates on expenses and income.

## Project Details and Contribution

Previously, we used a bookkeeping tool called Drebedengi.ru to track donations and expenses, but it required us to visit a separate website, causing inconvenience and inefficiency. We also relied on Slack for team communication.

To address these challenges, I developed a Slack bot hosted on AWS Lambda. Written in TypeScript, the bot integrated with our Slack workspace and allowed us to track expenses and income directly within Slack. This eliminated the need for context switching and enhanced our workflow.

| ![Balance Modal](https://res.cloudinary.com/preshetin/image/upload/v1688108203/preshetin.com/drebedengi-slack/balance-modal.png) | 
|:--:| 
| *The balance modal provides an overview of where the donations are currently allocated.* |

Additionally, I implemented a feature where users could share income or expense updates to a dedicated public channel, ensuring transparency and keeping the entire team informed about our current financial situation.

| ![Public Channel](https://res.cloudinary.com/preshetin/image/upload/v1688108203/preshetin.com/drebedengi-slack/messages%20in%20public%20channel.png) | 
|:--:| 
| *Messages in the public channel allow everyone to stay updated on the financial transactions.* |

Furthermore, the Slack bot offered a modal with a list of available features, making it convenient to access and utilize the various expense tracking functionalities.

| ![Bot Modal](https://res.cloudinary.com/preshetin/image/upload/v1688108203/preshetin.com/drebedengi-slack/modal%20with%20list%20of%20buttons.png) | 
|:--:| 
| *The Slack bot modal displays a list of available features for tracking expenses and income.* |

The expense modal provided a user-friendly form for inputting expenses, making it easy for us to track expenditures efficiently.

| ![Expense Modal](https://res.cloudinary.com/preshetin/image/upload/v1688108203/p

