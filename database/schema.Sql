DROP DATABASE groceries;

CREATE DATABASE groceries;

USE DATABASE groceries;

CREATE TABLE grocerylist(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(20) NOT NULL,
    department VARCHAR(20) NOT NULL,
    quantity INT NOT NULL,
    number INT NOT NULL
);

