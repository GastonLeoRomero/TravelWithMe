-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 21-11-2024 a las 05:08:22
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `turismo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paquetes`
--

CREATE TABLE IF NOT EXISTS `paquetes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `destino` varchar(250) NOT NULL,
  `hotel` text NOT NULL,
  `paquete` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Volcado de datos para la tabla `paquetes`
--

INSERT INTO `paquetes` (`id`, `destino`, `hotel`, `paquete`) VALUES
(1, 'BARILOCHE 6 NOCHES', 'VILLA HUINID PIONEROS', 'El precio incluye\r\nAéreos Buenos Aires/Bariloche/Buenos Aires\r\nincluye Equipaje Carry On 8kg + 1 Pieza de 15 kg en bodega\r\nTraslados de llegada y de salida\r\nAlojamiento con desayuno\r\nAsistencia al viajero.'),
(2, 'Paquete a Iguazú - 3 noches 3*', 'Hostería Los Helechos', 'El precio incluye\r\nPasaje aéreo BUE/IGR/BUE con Aerolineas Argentinas\r\nIncluye equipaje de mano (1 pieza de 8kg) y equipaje en bodega (1 pieza de 15kg)\r\nTraslado aeropuerto / hotel / aeropuerto\r\n3 noches de alojamiento con régimen desayuno\r\nAsistencia al Viajero.'),
(3, 'CALAFATE Y USHUAIA - 6 NOCHES', 'HOTEL LAS LENGAS', 'El precio incluye\r\nAéreos Buenos Aires/El Calafate// Ushuaia/Buenos Aires\r\nincluye Equipaje Carry On 8kg + 1 Pieza de 15 kg en bodega\r\nVuelos internos entre El Calafate y Ushuaia\r\nTraslados de llegada y de salida\r\nConexion entre Ushuaia y El Calafate\r\nAlojamiento con desayuno\r\nAsistencia al viajero.'),
(4, 'PAQUETE A VILLA LA ANGOSTURA 4*', 'DEL CABALLERO CASTILLO', 'El precio incluye\r\nAéreos Buenos Aires/Bariloche/Buenos Aires\r\nincluye Equipaje Carry On 8kg + 1 Pieza de 15 kg en bodega\r\nTraslados de llegada y de salida\r\nAlojamiento con desayuno\r\nAsistencia al viajero.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'gaston', '81dc9bdb52d04dc20036dbd8313ed055'), 
(2, 'flavia', '674f3c2c1a8a6f90461e8a66fb5550ba');

-- gaston: 1234(contraseña)  ---flavia:5678

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
