-- ph... SQLINES DEMO ***
-- ve... SQLINES DEMO ***
-- SQLINES DEMO *** admin.net/
--
-- SQLINES DEMO *** .1:3306
-- SQLINES DEMO *** дания: Ноя 06 2022 г., 19:14
-- SQLINES DEMO *** рвера: 8.0.30
-- SQLINES DEMO ***  7.2.34

/* SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO"; */
START TRANSACTION;
time_zone := "+00:00";


/* SQLINES DEMO *** ARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/* SQLINES DEMO *** ARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/* SQLINES DEMO *** LLATION_CONNECTION=@@COLLATION_CONNECTION */;
/* SQLINES DEMO *** tf8mb4 */;

--
-- SQLINES DEMO *** ых: `My_Landing`
--

-- SQLINES DEMO *** ---------------------------------------

--
-- SQLINES DEMO *** � таблицы `goodsList`
--

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE goodsList (
  goods_id int CHECK (goods_id > 0) NOT NULL,
  name varchar(30) NOT NULL,
  model varchar(30) NOT NULL,
  weight varchar(15) NOT NULL,
  volume varchar(15) NOT NULL,
  power varchar(15) NOT NULL,
  info varchar(100) NOT NULL,
  img_href varchar(1000) CHARACTER SET utf8mb4 NOT NULL
) ;

--
-- SQLINES DEMO *** ых таблицы `goodsList`
--

-- SQLINES LICENSE FOR EVALUATION USE ONLY
INSERT INTO goodsList (goods_id, name, model, weight, volume, power, info, img_href) VALUES
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
-- SQLINES DEMO *** охранённых таблиц
--

--
-- SQLINES DEMO *** аблицы `goodsList`
--
ALTER TABLE goodsList
  ADD PRIMARY KEY (goods_id),
  ADD UNIQUE KEY goods_id (goods_id);

--
-- SQLINES DEMO *** ля сохранённых таблиц
--

--
-- SQLINES DEMO *** ля таблицы `goodsList`
--
ALTER TABLE goodsList
  MODIFY goods_id int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/* SQLINES DEMO *** ER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/* SQLINES DEMO *** ER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/* SQLINES DEMO *** ON_CONNECTION=@OLD_COLLATION_CONNECTION */;
