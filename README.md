#  Inventory Management Service

This is an inventory management project as REST API Services based on Node.js. it is webserver application.

## Getting Started

To get & run this project in your local machine, run the following commands:

```bash
git clone https://github.com/ketanvnavadiya2/rewaa-webserver.git

cd rewaa-webserver

npm install

npm start

```

This will get a copy of the project installed locally. and ng serve will run the project in your machine on Port: 8080

# Setup a Database

1. MySQL Database is used in this project so create scheema in you MySQL Database with name 'inventory'
2. Create following tables by given queries and insert some records mannually for in users table for login

~~~~sql
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
~~~~

~~~~sql
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(45) NOT NULL,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`,`email`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
~~~~

3.  Now access the Application from the UI by login 


#### There are following third party packages are used in this Projects
1. mysql2
2. jsonwebtoken
3. express
4. body-parser
