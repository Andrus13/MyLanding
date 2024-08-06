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
-- SQLINES DEMO *** � таблицы `contactForm`
--

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE contactForm (
  id int CHECK (id > 0) NOT NULL,
  Тема varchar(20) NOT NULL,
  Имя varchar(12) NOT NULL,
  Email varchar(64) NOT NULL,
  Телефон varchar(20) CHARACTER SET utf8mb4 NOT NULL,
  Комментарий varchar(300) NOT NULL,
  reg_date timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP /* ON UPDATE CURRENT_TIMESTAMP */
) ;

--
-- SQLINES DEMO *** ых таблицы `contactForm`
--

-- SQLINES LICENSE FOR EVALUATION USE ONLY
INSERT INTO contactForm (id, Тема, Имя, Email, Телефон, Комментарий, reg_date) VALUES
(1, 'Сервис', 'Олег', 'qwerty@ww.com', '+38(050) 500 50 50', '!!!', '2022-10-18 15:00:34'),
(2, 'Сотрудничество', 'Даша', 'dasha1337@gmail.com', '+38(068) 680 68 68', 'Добрый день!', '2022-10-18 15:01:51'),
(3, 'Техника', 'Андрей', 'andrey22@gmail.com', '+38(088)999 55 44', 'Hello!nI want to contact with you', '2022-10-19 14:28:33'),
(14, 'Техника', 'Nick', 'nick4488@ooo.net', '+38(596)666 11 12', 'Hi!', '2022-11-04 13:24:22'),
(15, 'Сервис', 'Ivan', 'vano87@mail.com', '+38(050)999 44 56', 'Добрый день!', '2022-11-04 13:26:38'),
(16, 'Сотрудничество', 'Olga', 'ol.kkk12@mail.com', '+38(050) 223 36 87', 'Hi!', '2022-11-04 13:29:50'),
(17, 'Сервис', 'Eugen', 'eugen@gmail.com', '+38(778) 961 31 32', 'Hi!', '2022-11-04 13:32:21');

--
-- SQLINES DEMO *** охранённых таблиц
--

--
-- SQLINES DEMO *** аблицы `contactForm`
--
ALTER TABLE contactForm
  ADD PRIMARY KEY (id);

--
-- SQLINES DEMO *** ля сохранённых таблиц
--

--
-- SQLINES DEMO *** ля таблицы `contactForm`
--
ALTER TABLE contactForm
  MODIFY id int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/* SQLINES DEMO *** ER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/* SQLINES DEMO *** ER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/* SQLINES DEMO *** ON_CONNECTION=@OLD_COLLATION_CONNECTION */;
