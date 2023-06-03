-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 06 2022 г., 19:14
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `My_Landing`
--

-- --------------------------------------------------------

--
-- Структура таблицы `contactForm`
--

CREATE TABLE `contactForm` (
  `id` int UNSIGNED NOT NULL,
  `Тема` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `Имя` varchar(12) COLLATE utf8mb4_general_ci NOT NULL,
  `Email` varchar(64) COLLATE utf8mb4_general_ci NOT NULL,
  `Телефон` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Комментарий` varchar(300) COLLATE utf8mb4_general_ci NOT NULL,
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `contactForm`
--

INSERT INTO `contactForm` (`id`, `Тема`, `Имя`, `Email`, `Телефон`, `Комментарий`, `reg_date`) VALUES
(1, 'Сервис', 'Олег', 'qwerty@ww.com', '+38(050) 500 50 50', '!!!', '2022-10-18 15:00:34'),
(2, 'Сотрудничество', 'Даша', 'dasha1337@gmail.com', '+38(068) 680 68 68', 'Добрый день!', '2022-10-18 15:01:51'),
(3, 'Техника', 'Андрей', 'andrey22@gmail.com', '+38(088)999 55 44', 'Hello!\nI want to contact with you', '2022-10-19 14:28:33'),
(14, 'Техника', 'Nick', 'nick4488@ooo.net', '+38(596)666 11 12', 'Hi!', '2022-11-04 13:24:22'),
(15, 'Сервис', 'Ivan', 'vano87@mail.com', '+38(050)999 44 56', 'Добрый день!', '2022-11-04 13:26:38'),
(16, 'Сотрудничество', 'Olga', 'ol.kkk12@mail.com', '+38(050) 223 36 87', 'Hi!', '2022-11-04 13:29:50'),
(17, 'Сервис', 'Eugen', 'eugen@gmail.com', '+38(778) 961 31 32', 'Hi!', '2022-11-04 13:32:21');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `contactForm`
--
ALTER TABLE `contactForm`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `contactForm`
--
ALTER TABLE `contactForm`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
