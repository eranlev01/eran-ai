CREATE DATABASE eranai;

USE eranai;

CREATE TABLE
    user_api_limit (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        user_id VARCHAR(191) UNIQUE,
        count INT DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    user_subscription (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        user_id VARCHAR(255) UNIQUE NOT NULL,
        stripe_customer_id VARCHAR(255) UNIQUE,
        stripe_subscription_id VARCHAR(255) UNIQUE,
        stripe_price_id VARCHAR(255),
        stripe_current_period_end DATETIME
    );