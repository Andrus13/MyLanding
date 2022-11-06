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
-- Структура таблицы `goodsList`
--

CREATE TABLE `goodsList` (
  `goods_id` int UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `model` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `weight` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  `volume` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  `power` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  `info` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `img_href` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `goodsList`
--

INSERT INTO `goodsList` (`goods_id`, `name`, `model`, `weight`, `volume`, `power`, `info`, `img_href`) VALUES
(1, 'Tractor', '6110M', '5682 kg', '4.5 L', '110 hp', '', 'img/traktor_10.jpg'),
(2, 'Tractor', '6110M', '5682 kg', '4.5 L', '110 hp', '', 'img/traktor_10.jpg'),
(3, 'Tractor', '6110M', '5682 kg', '4.5 L', '110 hp', '', 'img/traktor_10.jpg'),
(4, 'Tractor', '6110M', '5682 kg', '4.5 L', '110 hp', '', 'img/traktor_10.jpg'),
(5, 'Tractor', '6110M', '5682 kg', '4.5 L', '110 hp', '', 'img/traktor_10.jpg'),
(6, 'Tractor', '6110M', '5682 kg', '4.5 L', '110 hp', '', 'img/traktor_10.jpg'),
(7, 'Tractor', '6110M', '5682 kg', '4.5 L', '110 hp', '', 'img/traktor_10.jpg'),
(8, 'Tractor', '6110M', '5682 kg', '4.5 L', '110 hp', '', 'img/traktor_10.jpg'),
(9, 'Tractor', '6110M', '5682 kg', '4.5 L', '110 hp', '', 'img/traktor_10.jpg'),
(10, 'Buldozerr', '1988BG', '8420 kg', '4.5 L', '152 hp', '', 'img/traktor_10.jpg'),
(11, 'veloseped', 'Ukraine', '17 kg', '0 L', '1 hp', '', 'img/velo_ukr.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `goodsList`
--
ALTER TABLE `goodsList`
  ADD PRIMARY KEY (`goods_id`),
  ADD UNIQUE KEY `goods_id` (`goods_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `goodsList`
--
ALTER TABLE `goodsList`
  MODIFY `goods_id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
