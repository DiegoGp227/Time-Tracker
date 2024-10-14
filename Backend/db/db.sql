-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS timeTrack;

-- Table to store pre-loaded sports
CREATE TABLE sports (
    sport_id INT PRIMARY KEY AUTO_INCREMENT,
    sport_name VARCHAR(50)
);

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table to store pre-loaded mountain passes
CREATE TABLE mountain_passes (
    port_id INT PRIMARY KEY AUTO_INCREMENT,
    port_name VARCHAR(100),
    altitude INT,
    distance DECIMAL(6,2),
    max_inclination DECIMAL(4,2),
    avg_inclination DECIMAL(4,2), -- Reemplazo de min_inclination
    location VARCHAR(100),
    photo_url VARCHAR(255) NULL
);

-- Table to store user activities
CREATE TABLE activities (
    activity_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    sport_id INT,
    port_id INT,
    activity_date DATE,
    activity_time TIME,
    average_speed DECIMAL(5,2),
    activity_name VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (sport_id) REFERENCES sports(sport_id),
    FOREIGN KEY (port_id) REFERENCES mountain_passes(port_id)
);

-- Insertar en sports
INSERT INTO sports (sport_name) VALUES ('Ciclismo');
INSERT INTO sports (sport_name) VALUES ('running');

-- Insertar en users
INSERT INTO users (username, email, password) VALUES ('usuario1', 'usuario1@example.com', 'contraseñaSegura');

-- Insertar en mountain_passes
INSERT INTO mountain_passes (port_name, altitude, distance, max_inclination, avg_inclination, location, photo_url) 
VALUES ('Puerto de montaña Ejemplo', 2500, 15.5, 12.5, 8.0, 'Ubicación Ejemplo', 'http://ejemplo.com/foto.jpg');

-- Insertar en activities (ajusta los IDs según corresponda)
INSERT INTO activities (user_id, sport_id, port_id, activity_date, activity_time, average_speed, activity_name)
VALUES (1, 1, 1, '2024-10-13', '01:30:00', 15.75, 'Ciclismo en la montaña');
