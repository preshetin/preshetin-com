---
title: "Кейс: Внутрення админка на Budibase для управления онлайн-пожертвованиями"
date: 2023/5/31
description: "Для некоммерческой организации я сделал внутреннюю админку на платформе Budibase."
tag: case study
thumbnailUrl: "https://asset.cloudinary.com/preshetin/1a242c4373e5fd24d8521025a99576e9"
author: Peter Reshetin
---

# Кейс: Внутрення Админка на Budibase для Управления Онлайн-Пожертвованиями

Для некоммерческой организации я сделал внутреннюю админку на платформе Budibase. В этой админке можно посмотреть, сколько пожертвований было сделано, сколько регулярных (ежемесячных) и сколько разовых пожертвований. 

Для регулярных пожертвований в этой админке можно вручную отвязать карту. Тогда с помощью Automation пользователю отправляется письмо о том, что его карта отвязана. Источники данных для Budibase является база данных MySQL а также API-endpoint, выполняющий за отвязывание карты.

| ![Пример админки, как ее видит пользователь](https://res.cloudinary.com/preshetin/image/upload/v1700411873/preshetin.com/budibase-donations_nnslra.png)|
|:--:| 
| *Внутренняя админка на Budibase, как ее видит пользователь* |


| ![Автоматизация в Budibase](https://res.cloudinary.com/preshetin/image/upload/v1700412478/preshetin.com/budibase-automation-example_thln28.png)|
|:--:| 
| *Автоматизация в Budibase: после отмены регулярного пожертвования пользователь получает уведомление на почту. Также приходит уведомление в Slack.* |