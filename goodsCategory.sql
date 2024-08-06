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
-- SQLINES DEMO *** � таблицы `goodsCategory`
--

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE goodsCategory (
  category_id int CHECK (category_id > 0) NOT NULL,
  category varchar(50) NOT NULL
) ;

--
-- SQLINES DEMO *** ых таблицы `goodsCategory`
--

-- SQLINES LICENSE FOR EVALUATION USE ONLY
INSERT INTO goodsCategory (category_id, category) VALUES
(1, 'tractor'),
(2, 'zeleniy tractor'),
(3, 'buldozer'),
(4, 'veloseped');

--
-- SQLINES DEMO *** охранённых таблиц
--

--
-- SQLINES DEMO *** аблицы `goodsCategory`
--
ALTER TABLE goodsCategory
  ADD PRIMARY KEY (category_id),
  ADD UNIQUE KEY category_id (category_id);

--
-- SQLINES DEMO *** ля сохранённых таблиц
--

--
-- SQLINES DEMO *** ля таблицы `goodsCategory`
--
ALTER TABLE goodsCategory
  MODIFY category_id int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/* SQLINES DEMO *** ER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/* SQLINES DEMO *** ER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/* SQLINES DEMO *** ON_CONNECTION=@OLD_COLLATION_CONNECTION */;
