-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-09-2020 a las 18:47:45
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `kampin`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cancha`
--

CREATE TABLE `cancha` (
  `IDcancha` char(3) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `N_Cancha` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cancha`
--

INSERT INTO `cancha` (`IDcancha`, `Nombre`, `N_Cancha`) VALUES
('1', 'volleyball', 1),
('1', 'volleyball', 2),
('2', 'futbol', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `IDcliente` char(5) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Apellido` varchar(45) NOT NULL,
  `NumeroCelular` char(9) NOT NULL,
  `DNI` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`IDcliente`, `Nombre`, `Apellido`, `NumeroCelular`, `DNI`) VALUES
('1', 'Ana', 'Quispe', '957119080', NULL),
('2', 'Juan', 'Perez', '957117070', NULL),
('3', 'Ruben', 'Ugarte', '957119090', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `idreserva` char(5) NOT NULL,
  `Adelanto` float DEFAULT NULL,
  `Total` float DEFAULT NULL,
  `Cancelado` char(2) DEFAULT NULL,
  `IDcliente` char(5) NOT NULL,
  `IDusuarios` char(5) NOT NULL,
  `Fecha` datetime NOT NULL,
  `Falta` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`idreserva`, `Adelanto`, `Total`, `Cancelado`, `IDcliente`, `IDusuarios`, `Fecha`, `Falta`) VALUES
('1', 0, 20, 'si', '1', '3', '2020-08-28 00:00:00', 0),
('2', 0, 20, 'SI', '3', '3', '2020-09-09 11:43:00', 0),
('3', 0, 20, 'SI', '2', '4', '2020-09-09 18:52:00', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiempo_reserva`
--

CREATE TABLE `tiempo_reserva` (
  `HoraInicio` time NOT NULL,
  `HoraFinal` time NOT NULL,
  `Fecha` datetime NOT NULL,
  `Costo` float NOT NULL,
  `Total_hora` float NOT NULL,
  `IDcancha` char(3) NOT NULL,
  `N_Cancha` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tiempo_reserva`
--

INSERT INTO `tiempo_reserva` (`HoraInicio`, `HoraFinal`, `Fecha`, `Costo`, `Total_hora`, `IDcancha`, `N_Cancha`) VALUES
('03:50:00', '00:00:05', '2020-08-28 00:00:00', 20, 2, '1', 2),
('03:50:00', '00:00:07', '2020-08-30 00:00:00', 20, 2, '2', 1),
('11:41:00', '12:41:00', '2020-09-09 11:41:00', 20, 1, '2', 1),
('11:42:00', '11:42:00', '2020-09-09 11:42:00', 20, 1, '2', 1),
('11:43:00', '12:43:00', '2020-09-09 11:43:00', 20, 1, '2', 1),
('18:52:00', '19:52:00', '2020-09-09 18:52:00', 20, 1, '2', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `IDusuarios` char(5) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Apellido` varchar(45) NOT NULL,
  `Numcelular` char(9) NOT NULL,
  `Foto` blob DEFAULT NULL,
  `passwords` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`IDusuarios`, `Nombre`, `Apellido`, `Numcelular`, `Foto`, `passwords`) VALUES
('1', 'Danny', 'Ugarte', '957119090', 0x3730373632343538, 'lupecurasco1'),
('2', 'sebas', 'Dominguez', '957119898', NULL, ''),
('3', 'Jhon', 'Huaman', '983759168', NULL, ''),
('4', 'Maria', 'Antonieta', '957119060', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cancha`
--
ALTER TABLE `cancha`
  ADD PRIMARY KEY (`IDcancha`,`N_Cancha`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`IDcliente`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`idreserva`),
  ADD KEY `fk_RESERVA_CLIENTE_idx` (`IDcliente`),
  ADD KEY `fk_RESERVA_USUARIO_idx` (`IDusuarios`),
  ADD KEY `fk_RESERVA_CANCHA_idx` (`Fecha`);

--
-- Indices de la tabla `tiempo_reserva`
--
ALTER TABLE `tiempo_reserva`
  ADD PRIMARY KEY (`Fecha`),
  ADD KEY `fk_tiempo_reserva_cancha_idx` (`IDcancha`,`N_Cancha`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`IDusuarios`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `fk_RESERVA_CANCHA` FOREIGN KEY (`Fecha`) REFERENCES `tiempo_reserva` (`Fecha`),
  ADD CONSTRAINT `fk_RESERVA_CLIENTE` FOREIGN KEY (`IDcliente`) REFERENCES `cliente` (`IDcliente`),
  ADD CONSTRAINT `fk_RESERVA_USUARIO` FOREIGN KEY (`IDusuarios`) REFERENCES `usuario` (`IDusuarios`);

--
-- Filtros para la tabla `tiempo_reserva`
--
ALTER TABLE `tiempo_reserva`
  ADD CONSTRAINT `fk_tiempo_reserva_cancha` FOREIGN KEY (`IDcancha`,`N_Cancha`) REFERENCES `cancha` (`IDcancha`, `N_Cancha`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
