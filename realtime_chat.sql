-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2020 at 03:33 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `realtime_chat`
--

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `imageId` int(11) NOT NULL,
  `imageProfile` varchar(256) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `messageId` int(11) NOT NULL,
  `messageBody` varchar(8000) NOT NULL,
  `senderId` int(11) NOT NULL,
  `senderName` varchar(64) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `receiverName` varchar(64) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`messageId`, `messageBody`, `senderId`, `senderName`, `receiverId`, `receiverName`, `createdAt`) VALUES
(6, 'tes', 1, 'Friemorn', 3, 'df7', '2020-09-22 17:24:39'),
(7, 'apa', 3, 'DF7', 3, 'df7', '2020-09-22 17:25:40'),
(8, 'coy', 1, 'Friemorn', 3, 'df7', '2020-09-22 17:25:44'),
(9, 'naon', 3, 'DF7', 3, 'df7', '2020-09-22 17:25:50'),
(10, 'tes', 1, 'Friemorn', 3, 'df7', '2020-09-22 17:28:32'),
(11, 'tes', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:49:26'),
(12, '1312313', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:49:36'),
(13, 'tes', 3, 'DF7', 3, 'df7', '2020-09-23 12:49:43'),
(14, 'eagsgsgg', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:51:49'),
(15, 'tesajkbjkdasf', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:52:32'),
(16, 'dlmf;kldsmg', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:52:34'),
(17, 'safasfafsafas', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:53:30'),
(18, 'safdfldag', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:53:32'),
(19, 'sa,fgl;d,a;g4', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:53:34'),
(20, 'dalgm,ldg', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:53:35'),
(21, 'adslmgld', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:53:37'),
(22, 'safadfadfadf', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:54:47'),
(23, 'asfaf', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:54:48'),
(24, 'asfafasfa', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:54:49'),
(25, 'kjbjkbj', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:54:52'),
(26, 'dsgmnksdg', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:56:15'),
(27, 's', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:56:15'),
(28, 'd', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:56:16'),
(29, 'fg', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:56:16'),
(30, 'dg', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:56:17'),
(31, 'dg', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:56:18'),
(32, 'dg', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:56:19'),
(33, 'dg', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:56:19'),
(34, '123', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:57:37'),
(35, 'sgfsdf', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:59:15'),
(36, 'asdfa', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:59:16'),
(37, 'afa', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:59:17'),
(38, 'safdkmg', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:59:19'),
(39, 'sadgldl', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:59:20'),
(40, 'dag,sdg', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:59:21'),
(41, 'ds,glsf', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:59:23'),
(42, 'dfdsfdsfa', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:59:49'),
(43, 'asdfad', 1, 'Friemorn', 3, 'df7', '2020-09-23 12:59:50'),
(44, 'dfsdgsfdg', 1, 'Friemorn', 3, 'df7', '2020-09-23 13:00:59'),
(45, 'dsngkskdg', 1, 'Friemorn', 3, 'df7', '2020-09-23 13:01:02'),
(46, 'tes', 3, 'DF7', 3, 'df7', '2020-09-23 14:52:29'),
(47, 'woy', 1, 'Friemorn', 3, 'df7', '2020-09-23 14:52:34'),
(48, 'tes', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:15:39'),
(49, 'tes', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:16:00'),
(50, 'jbjkb', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:16:03'),
(51, 'trs', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:16:33'),
(52, 'xfhdfh', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:16:40'),
(53, 'tes', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:17:53'),
(54, 'tes', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:18:40'),
(55, 'tes', 3, 'DF7', 3, 'df7', '2020-09-23 15:18:52'),
(56, 'dnkdsjg', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:18:57'),
(57, 'tes', 3, 'DF7', 3, 'df7', '2020-09-23 15:20:16'),
(58, 'dfhdfh', 3, 'DF7', 3, 'df7', '2020-09-23 15:21:39'),
(59, '123', 3, 'DF7', 3, 'df7', '2020-09-23 15:21:53'),
(60, 'tes', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:33:08'),
(61, 'tes', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:37:15'),
(62, 'dgsf', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:37:21'),
(63, 'gfsh', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:37:22'),
(64, 'sfgsf', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:37:23'),
(65, 'sfhfsd', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:37:23'),
(66, 'sfh', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:37:25'),
(67, 'hgjhjkhj', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:38:08'),
(68, 'jkdjkf4', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:00'),
(69, 'dgfd', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:01'),
(70, 'gd', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:02'),
(71, 'gd', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:02'),
(72, 'gdg', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:03'),
(73, 'd', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:03'),
(74, 'gdsg', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:03'),
(75, 'sfg', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:04'),
(76, 'sf', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:04'),
(77, 'hsf', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:04'),
(78, 'h', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:04'),
(79, 'sfh', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:05'),
(80, 'sfh', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:05'),
(81, 'sfh', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:05'),
(82, 'sfh', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:05'),
(83, 'sfh', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:05'),
(84, 'sf', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:05'),
(85, 'hsf', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:06'),
(86, 'hfss', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:06'),
(87, 'tes', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:33'),
(88, 'sf', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:35'),
(89, 'sfs', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:36'),
(90, 'dsjgijisf', 3, 'DF7', 3, 'df7', '2020-09-23 15:39:40'),
(91, 'adfadf', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:39:43'),
(92, 'wrewf', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:40:03'),
(93, 'tes', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:41:03'),
(94, 'tsfdgdfh', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:41:52'),
(95, 'jasdfklnkelaf', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:41:57'),
(96, 'tes', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:42:29'),
(97, 'sdkknfkdsg', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:42:31'),
(98, 'sdlgjkfosd', 1, 'Friemorn', 3, 'df7', '2020-09-23 15:42:32');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `username` varchar(64) NOT NULL,
  `fullname` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(256) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `bio` varchar(512) NOT NULL,
  `latitude` varchar(64) NOT NULL,
  `longitude` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `username`, `fullname`, `email`, `password`, `phone`, `bio`, `latitude`, `longitude`) VALUES
(1, 'dewo', 'Your Fullname', 'dewo@gmail.com', '$2a$10$HE9WzmwRfUzvSpMyt5oRG.AeOJ.5mWP4B87yKyPLQ6uqyz4o6UAC.', 'Your Phone Number', 'Your Bio', '1', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`imageId`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`messageId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `imageId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `messageId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
