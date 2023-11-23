---
title: "Кейс: Регистрация на выездное мероприятие с помощью Airtable"
date: 2023/10/30
description: Я сделал Airtable-таблицы и интерфейсы для упрощения процесса регистрации на курсы медитации"
tag: case study
thumbnailUrl: "https://res.cloudinary.com/preshetin/image/upload/v1700742086/preshetin.com/case-studies/airtable-cover_pjgcaq.png"
author: Петр Решетин
---

# Кейс: Регистрация на выездное мероприятие с помощью Airtable

![cover](https://res.cloudinary.com/preshetin/image/upload/v1700742086/preshetin.com/case-studies/airtable-cover_pjgcaq.png)

## О проекте

Есть такие [курсы медитации](https://www.dhamma.org/ru) Випассана, где люди учатся медитировать. Такие курсы длятся несколько дней (самый популярный курс длится 10 дней), и обычно проходят в арендованных детских лагерях или базах отдыха. Количество участников обычно от 60 до 120 человек.

Чтобы попасть на курс, люди сначала заполняют онлайн-анкету. Далее приходит подтверждение и высылается письмо, как добраться по места проведения курса.

Когда люди приезжают на место проведния курса, они проходят через процесс регистрации уже на месте. Регистраторы просят показать паспорт, сверяются со списками онлайн-анкет, и заселяют человека. 

Данный кейс улучшает процесс регистрации на месте. От момента приезда и до момента заселения в лагерь.

## Проблема

До внедрения Airtable-решения, волонтеры регистрировали участников по бумажным спискам, распечатанным из онлайн-системы регистрации. Такой подход имел такие проблемы:
- Находить человека по бумажным спискам довольно долго. Для курса на 100 человек бумажные списки из неских листов. Это приводило к очередям.
- Неполная информация. Неопытный волнтер мог забыть спросить человека специфичные для данного места проведения. На некоторых курсов важно отмечать гражданство (это может быть требование у администрации лагеря) или гос. номер автомобиля (чтобы убедиться, что человек припарковался в правильном месте). Во время пандемии важно было мерять темпетратуру.
- Ошибки при заселении. 
- Дублирование усилий по внесению инфомации. 

## Решение

Я сделал Airtable-базу с двумя таблицами и двумя интерфейсами.

### Таблицы
- Таблица *Анкеты*. Наполняется через импорт CSV-файла, сгенерированном в системе онлайн-регистрации.
- Таблица *Проживание*. Для каждого лагеря она своя. Каждая запись это место проживания. При заселении человека сюда добавяляется связь из таблицы *Анкеты*.

![Таблица *Анкеты*](https://res.cloudinary.com/preshetin/image/upload/v1700741395/preshetin.com/case-studies/airtable-applicaions-table_idh2a3.png)

![Таблица *Проживание*](https://res.cloudinary.com/preshetin/image/upload/v1700741395/preshetin.com/case-studies/airtable-accommodations-table_inopnv.png)

### Интерфейсы 
Мужчины и женищины регистриуются отдельно. Мужской и женский регистратов работают какжый со своим списком участников в интерфейсах *День 0 / Мужчины* и *День 0 / Женщины*

![Интерфейс Airtable для мужского регистратора](https://res.cloudinary.com/preshetin/image/upload/v1700738738/preshetin.com/case-studies/airtable-interface-males_pbxcra.png)

 ## Результаты

- При использовании Airtable-решения процесс регистрации проходите быстрее
- Волонтер совершает меньше ошибок за счет наглядного списка полей, котрые он или она должен заполнить.
- Благодаря наглядности в таблице заселения можно быстро найти ошибку "двойного" заселения
- Быстрая подготовка отчетов. Поскольку все данные об участниках вносятся уже на этапе регистрации, то подготова отчета рассадки в зале занимает несколько минут (раньше требовалось несколько часов на внесение всей информации).

## Свяжитесь со мной

Буду рад обсудить ваш проект на Airtable. Свяжитесь со мной по почте preshetin@gmail.com.