DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) default 0,
	stock_quantity INT default 0,
	PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Bvlgari Man", "Cologne", 92, 86),
("Bvlgari Aqua", "Cologne", 91.50, 71),
("Bvlgari Man Extreme", "Cologne", 95, 24),
("Bvlgari Man Wood Essence", "Cologne", 97, 94),
("Bvlgari Diagono", "Watch", 50, 37),
("Bvlgari Endurer", "Watch", 61.50, 48),
("Bvlgari Octo Roma", "Watch", 59, 31),
("Bvlgari Wilbur", "Glasses", 42, 16),
("Bvlgari Le Gemme", "Glasses", 39, 25),
("Bvlgari Vincente", "Glasses", 265, 18);