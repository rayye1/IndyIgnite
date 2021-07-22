DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS employer;
DROP TABLE IF EXISTS job;

CREATE TABLE IF NOT EXISTS `employee` (
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `employee` (`username`, `password`) VALUES
('dev', 'indyignite');

CREATE TABLE IF NOT EXISTS `employer` (
    `username` varchar(50) NOT NULL,
    `password` varchar(50) NOT NULL,
    PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `employer` (`username`, `password`) VALUES
('dev', 'indyignite');

CREATE TABLE IF NOT EXISTS `job` (
    `job_id` int NOT NULL AUTO_INCREMENT,
    `employer_username` varchar(50) NOT NULL,
    `company` varchar(50) NOT NULL,
    `title` varchar(50) NOT NULL,
    `description` TEXT NOT NULL,
    PRIMARY KEY (`job_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `job` (`job_id`, `employer_username`, `company`, `title`, `description`) VALUES
(1, 'dev', 'indy basketball camp', 'counselor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

