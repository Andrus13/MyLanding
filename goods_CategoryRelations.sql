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
-- SQLINES DEMO *** � таблицы `goods_CategoryRelations`
--

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE goods_CategoryRelations (
  id int CHECK (id > 0) NOT NULL,
  goods_id int CHECK (goods_id > 0) NOT NULL,
  category_id int CHECK (category_id > 0) NOT NULL
) ;

--
-- SQLINES DEMO *** ых таблицы `goods_CategoryRelations`
--

-- SQLINES LICENSE FOR EVALUATION USE ONLY
INSERT INTO goods_CategoryRelations (id, goods_id, category_id) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 2, 2),
(5, 3, 1),
(6, 3, 2),
(7, 4, 1),
(8, 4, 2),
(9, 5, 1),
(10, 5, 2),
(11, 6, 1),
(12, 6, 2),
(13, 7, 1),
(14, 7, 2),
(15, 8, 1),
(16, 8, 2),
(17, 9, 1),
(18, 10, 3),
(19, 11, 4);

--
-- SQLINES DEMO *** охранённых таблиц
--

--
-- SQLINES DEMO *** аблицы `goods_CategoryRelations`
--
ALTER TABLE goods_CategoryRelations
  ADD PRIMARY KEY (id),
  ADD KEY goods_id (goods_id),
  ADD KEY category_id (category_id);

--
-- SQLINES DEMO *** ля сохранённых таблиц
--

--
-- SQLINES DEMO *** ля таблицы `goods_CategoryRelations`
--
ALTER TABLE goods_CategoryRelations
  MODIFY id int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- SQLINES DEMO *** �ия внешнего ключа сохраненных таблиц
--

--
-- SQLINES DEMO *** �ия внешнего ключа таблицы `goods_CategoryRelations`
--
ALTER TABLE goods_CategoryRelations
  ADD CONSTRAINT goods_categoryrelations_ibfk_1 FOREIGN KEY (category_id) REFERENCES goodsCategory (category_id) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT goods_categoryrelations_ibfk_2 FOREIGN KEY (goods_id) REFERENCES goodsList (goods_id) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/* SQLINES DEMO *** ER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/* SQLINES DEMO *** ER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/* SQLINES DEMO *** ON_CONNECTION=@OLD_COLLATION_CONNECTION */;
