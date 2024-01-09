---
title: "Low-Code in Catering: Menu Planning and Purchasing"
date: 2023/6/02
description: Learn how transitioning from Google Sheets to Airtable improved the organization of meals at meditation courses
thumbnailUrl: https://res.cloudinary.com/preshetin/image/upload/v1688101501/preshetin.com/case-studies/meal-planning-1_vitsdr.png
tag: case-study, retool, retool-mobile, airtable, airtable-extension
author: Peter Reshetin
---

![teaser](https://res.cloudinary.com/preshetin/image/upload/v1702906736/preshetin.com/case-studies/meals-and-purchasing/meals-and-purchasing-teaser_dx0pew.png)

# Low-Code in Catering: Menu Planning and Purchasing

Tech stack & tools: Airtable, Retool Mobile, JavaScript, React.

## About

In Belarus, Vipassana meditation courses have been held since 2017. The courses usually last ten days and involve about one hundred participants. These courses are held several times a year and are organized by a team of volunteers on a non-profit basis.

To save costs, the volunteers provide the meals for these courses. They create menus and calculate the amount of groceries to purchase.

## Problem

Before implementing the Airtable and Retool solution, menu planning and purchasing calculations were done in Google Sheets.

Problems with the Google Sheets solution:
- Inconvenient for making changes. When a dish needed to be changed, for example, replacing borscht with solyanka, the formulas in the Google Sheets had to be manually updated. This led to difficulties in the change process and errors.
- Duplication of effort when entering inventory.
- Purchase history was not preserved.

## Solution

My involvement in the project:
1. Development of the Airtable database structure. I designed and implemented a solution consisting of interconnected tables.
2. Development of an extension for Airtable. It allows printing menus for the chef and generating a shopping list.
3. Development of mobile applications on Retool. The first application is for entering inventory at the course, and the second is for tracking purchases.

### Airtable Database

The developed table structure allows for easy changes to the menu.

| ![airtable](https://res.cloudinary.com/preshetin/image/upload/v1702907563/preshetin.com/case-studies/meals-and-purchasing/meal-ingredients_yj0q5d.png) |
|:--:|
| *The "Meal Ingredients" table includes ingredient quantities per person for each dish (usually in grams)* |

### Airtable Extension

I developed an extension that lives on top of Airtable that enables printing menus for the chef and generating a shopping list.

| ![airtable](https://res.cloudinary.com/preshetin/image/upload/v1702907564/preshetin.com/case-studies/meals-and-purchasing/extension_i3vmet.png) |
|:--:|
| *An Airtable table with daily menus (left) and the developed extension for printing menus for the chef (right)* |

### Retool Mobile Apps

To avoid non-organizers having to work with tables, I created separate applications for entering inventory and tracking purchase history.

| ![app-1](https://res.cloudinary.com/preshetin/image/upload/v1704780694/preshetin.com/case-studies/meals-and-purchasing/retool-mobile-apps-meals-and-purchasing_bwqmk8.png) |
|:--:|
| *I created two mobile apps on Retool. The first app (on the left) is for the course manager to enter inventory during inventory checks. The second app (on the right) is for purchasing purposes, it enables entering purchase history.* |


## Results

- Organizers spend less time on planning and purchasing.
- Reduced planning errors result in a higher-quality course.


## Contact

I would be happy to discuss your case. Contact me via email at preshetin@gmail.com
