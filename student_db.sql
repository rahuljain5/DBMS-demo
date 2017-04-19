-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 23, 2017 at 03:40 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `name` varchar(10) NOT NULL,
  `meetsat` varchar(5) DEFAULT NULL,
  `room` varchar(10) DEFAULT NULL,
  `fid` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`name`, `meetsat`, `room`, `fid`) VALUES
('co', '10:00', 'r158', 1109),
('dbms', '10:00', 'p201', 1109),
('ds', '13:00', 'r158', 1200),
('flat', '11:00', 'r128', 1111),
('oops', '12:00', 'r128', 1109);

-- --------------------------------------------------------

--
-- Table structure for table `enrolled`
--

CREATE TABLE `enrolled` (
  `snum` int(10) NOT NULL,
  `cname` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enrolled`
--

INSERT INTO `enrolled` (`snum`, `cname`) VALUES
(1, 'co'),
(1, 'flat'),
(10, 'co'),
(10, 'dbms'),
(10, 'ds'),
(10, 'flat'),
(20, 'co'),
(20, 'ds'),
(20, 'flat'),
(67, 'co'),
(67, 'flat'),
(67, 'oops'),
(68, 'co'),
(68, 'dbms'),
(68, 'flat');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `fid` int(5) NOT NULL,
  `fname` varchar(10) DEFAULT NULL,
  `deptid` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`fid`, `fname`, `deptid`) VALUES
(1109, 'harshit', 0),
(1111, 'akash', 0),
(1140, 'varsha', 0),
(1200, 'varshit', 0),
(2210, 'sparsh', 0);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `snum` int(10) NOT NULL,
  `sname` varchar(20) NOT NULL,
  `major` varchar(5) NOT NULL,
  `level` varchar(7) NOT NULL,
  `age` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`snum`, `sname`, `major`, `level`, `age`) VALUES
(1, 'allen', 'cse', 'sr', 22),
(10, 'keshav', 'ise', 'jr', 19),
(20, 'maaz', 'ise', 'jr', 20),
(67, 'arvind', 'cse', 'sr', 20),
(68, 'rahul', 'cse', 'sr', 19),
(69, '', '', '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`name`),
  ADD KEY `fid` (`fid`);

--
-- Indexes for table `enrolled`
--
ALTER TABLE `enrolled`
  ADD PRIMARY KEY (`snum`,`cname`),
  ADD KEY `cname` (`cname`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD UNIQUE KEY `snum` (`snum`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `class`
--
ALTER TABLE `class`
  ADD CONSTRAINT `class_ibfk_1` FOREIGN KEY (`fid`) REFERENCES `faculty` (`fid`);

--
-- Constraints for table `enrolled`
--
ALTER TABLE `enrolled`
  ADD CONSTRAINT `enrolled_ibfk_1` FOREIGN KEY (`snum`) REFERENCES `student` (`snum`),
  ADD CONSTRAINT `enrolled_ibfk_2` FOREIGN KEY (`cname`) REFERENCES `class` (`name`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
