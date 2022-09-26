-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2022 at 06:41 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo4`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `title`, `email`, `created_at`, `updated_at`, `deleted_at`) VALUES
(7, 'hahaha', '', '2022-09-24 11:53:42', NULL, NULL),
(8, 'tes 3', '', '2022-09-24 03:33:11', NULL, NULL),
(9, 'my activity', '', '2022-09-24 04:30:24', NULL, NULL),
(10, 'my activity haha', '', '2022-09-24 04:31:05', NULL, NULL),
(11, 'my activity hahahi', '', '2022-09-24 12:31:44', NULL, NULL),
(12, 'hahahahi', '', '2022-09-24 12:50:27', NULL, NULL),
(13, 'tes tes tes 123', '', '2022-09-24 12:35:56', NULL, NULL),
(14, 'irzam dian dian', '', '2022-09-24 14:57:34', NULL, NULL),
(15, 'irzam dian dian', '', '2022-09-24 14:52:59', NULL, NULL),
(16, 'dian dian dian cantik', '', '2022-09-24 15:02:38', NULL, NULL),
(17, 'dian dian dian cantik banget', '', NULL, NULL, NULL),
(18, 'dian love', '', NULL, NULL, NULL),
(20, 'irzam dian dian cantik', '', '2022-09-24 07:12:58', '2022-09-24 07:18:15', NULL),
(21, 'irzam dian dian cantik', '', '2022-09-24 07:15:07', '2022-09-24 18:33:54', NULL),
(23, 'dian love you baby', '', '2022-09-24 18:11:16', NULL, NULL),
(24, 'dian love you baby', 'irzam@gmail.com', '2022-09-24 18:14:42', NULL, NULL),
(25, 'dian love you baby', 'irzam@gmail.com', '2022-09-24 18:16:58', NULL, NULL),
(26, 'dian love you baby', 'irzam@gmail.com', '2022-09-24 18:17:37', '2022-09-24 18:17:37', NULL),
(27, 'dian love you baby', 'irzam@gmail.com', '2022-09-24 18:20:22', '2022-09-24 18:20:22', NULL),
(28, 'dian love you baby', 'irzam@gmail.com', '2022-09-24 18:20:24', '2022-09-24 18:20:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `activity_group_id` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `priority` varchar(256) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `title`, `activity_group_id`, `is_active`, `priority`, `created_at`, `updated_at`, `deleted_at`) VALUES
(7, 'teslagihehe 123 456', 6, 1, 'high', NULL, NULL, NULL),
(8, 'teslagihehe 123 456', 7, 1, 'high', NULL, NULL, NULL),
(9, 'teslagihehe 123 456', 7, 1, 'high', NULL, NULL, NULL),
(10, 'teslagihehe 123 456', 7, 1, 'high', NULL, NULL, NULL),
(11, 'teslagihehe 123 456', 7, 1, 'high', NULL, NULL, NULL),
(12, 'hahahohuhuasd', 7, 1, 'high', NULL, NULL, NULL),
(13, 'hahahohuhuasdasd', 7, 1, 'high', '2022-09-24 18:30:22', '2022-09-24 18:33:41', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
