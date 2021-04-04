DROP DATABASE registrar;
CREATE DATABASE registrar;
USE registrar;

CREATE TABLE `COURSES` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `credits` int(11) NOT NULL,
    `type` enum('course','lab','combined') NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `name_type_unique` (`name`, `type`),
    KEY `type` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `course_offerings` (
    `id` int NOT NULL AUTO_INCREMENT,
    `course_id` int NOT NULL,
    `instructor_id` int NOT NULL,
    `year` tinyint NOT NULL,
    `term` enum('summer','spring','fall') NOT NULL,
    `days` varchar(100) NOT NULL,
    `time` varchar(100) NOT NULL,
    `capacity` tinyint NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `students` (
    `id` tinyint NOT NULL AUTO_INCREMENT,
    `name` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `id_name_unique` (`id`, `name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `instructors` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `enrollments` (
    `id` int NOT NULL AUTO_INCREMENT,
    `course_offering_id` int(11) NOT NULL,
    `student_id` int(11) NOT NULL,
    `student_name` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `id_student_id_unique` (`id`, `student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;