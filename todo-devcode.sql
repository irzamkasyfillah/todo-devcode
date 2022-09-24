-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2022 at 07:22 PM
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
-- Database: `todo-devcode`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `id` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`id`, `title`, `created_at`, `updated_at`) VALUES
(7, 'hahaha', '2022-09-24 11:53:42', NULL),
(8, 'tes 3', '2022-09-24 03:33:11', NULL),
(9, 'my activity', '2022-09-24 04:30:24', NULL),
(10, 'my activity haha', '2022-09-24 04:31:05', NULL),
(11, 'my activity hahahi', '2022-09-24 12:31:44', NULL),
(12, 'hahahahi', '2022-09-24 12:50:27', NULL),
(13, 'tes tes tes 123', '2022-09-24 12:35:56', NULL),
(14, 'irzam dian dian', '2022-09-24 14:57:34', NULL),
(15, 'irzam dian dian', '2022-09-24 14:52:59', NULL),
(16, 'dian dian dian cantik', '2022-09-24 15:02:38', NULL),
(17, 'dian dian dian cantik banget', NULL, NULL),
(18, 'dian love', NULL, NULL),
(20, 'irzam dian dian cantik', '2022-09-24 07:12:58', '2022-09-24 07:18:15'),
(21, 'irzam dian dian cantik', '2022-09-24 07:15:07', '2022-09-24 07:18:35');

-- --------------------------------------------------------

--
-- Table structure for table `todo`
--

CREATE TABLE `todo` (
  `id` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `activity_group_id` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `priority` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `todo`
--

INSERT INTO `todo` (`id`, `title`, `activity_group_id`, `is_active`, `priority`) VALUES
(7, 'teslagihehe 123 456', 6, 1, 'high'),
(8, 'teslagihehe 123 456', 7, 1, 'high'),
(9, 'teslagihehe 123 456', 7, 1, 'high'),
(10, 'teslagihehe 123 456', 7, 1, 'high'),
(11, 'teslagihehe 123 456', 7, 1, 'high'),
(12, 'hahahohuhuasd', 7, 1, 'high');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `todo`
--
ALTER TABLE `todo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `todo`
--
ALTER TABLE `todo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
