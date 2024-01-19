---
title: "Case Study: Event Registration with Airtable"
date: 2024/01/02
description: A case study showing how Airtable helps conducting offline events.
thumbnailUrl: https://res.cloudinary.com/preshetin/image/upload/v1705661365/preshetin.com/airtable-one-day-course/teaser-1_fcwhl4.png
tag: case-study, airtable
author: Peter Reshetin
---

![teaser](https://res.cloudinary.com/preshetin/image/upload/v1705661365/preshetin.com/airtable-one-day-course/teaser-1_fcwhl4.png)

# Case Study: Event Registration with Airtable

This case study outline how I used Airtable to organize registration for an offline event, one day meditation courses.

## About

In Belarus, one day meditation courses are conducted on a mothly basis since 2017. 

Every month, an email campaing is sent via SendGrid. This campaign contains a link to Airtable. People apply for such course by fillling this Airtable form. 

## Process

Once a user fills the form, two things happen:
1. The applicant receives confirmation email saying that application is received.
2. An organizer receives actionable Slack message with application data. The application can be either approved or canceled without leaving Slack.

The form itself is an interface, and the above actions as powered by automations.

| ![slack actionable messages](https://res.cloudinary.com/preshetin/image/upload/v1705661365/preshetin.com/airtable-one-day-course/slack-actionable_message_m3esmd.png) | 
|:--:| 
| *Actionabe Slack message with application data is sent to organizer. Organizer can approve it or cancel it.* |

Once an organizer verifies an email with route details is sent to the applicant. In case of cancelation the cancelation email is sent.

One is that the event can be held in different places. Also, the contact peson can be different. To address this an *Email Pieces* table was created where a proper place address can be selected as well as contact person details.

| ![email pieces](https://res.cloudinary.com/preshetin/image/upload/v1705661366/preshetin.com/airtable-one-day-course/email-pieces_vell0d.png) | 
|:--:| 
| *The email with route details can be confgiruered so that place adrress can be selected as well as contact info details.* |

Here is the full list of Airtable automations:
- When new application is submitted, an email and Slack actionable message is sent
- When application status is set to confirmed, the email with route details is sent to the applicant. This email is composed so that one of places can be selected as well as contact person details. Also, Slack notification is sent to the organizers.
- When application status is set to canceled, the cancellation confirmation email is sent to the applicant. Also, Slack notification is sent to the organizers.

![automations](https://res.cloudinary.com/preshetin/image/upload/v1705661366/preshetin.com/airtable-one-day-course/automations_h4cuft.png)

## Contact

I would be happy to discuss your case. Feel free to contact me at preshetin@gmail.com
