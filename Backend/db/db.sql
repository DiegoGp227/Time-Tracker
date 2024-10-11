-- Tabla para almacenar usuarios
CREATE DATABASE IF NOT EXISTS timeTrack;

CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    correo VARCHAR(100) UNIQUE,
    contraseña VARCHAR(100)
);

-- Tabla para almacenar deportes pre-cargados
CREATE TABLE deportes (
    id_deporte INT PRIMARY KEY AUTO_INCREMENT,
    nombre_deporte VARCHAR(50)
);


-- Tabla para almacenar los puertos de montaña pre-cargados
CREATE TABLE puertos_montana (
    id_puerto INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    altitud INT,
    distancia DECIMAL(6,2),
    inclinacion_maxima DECIMAL(4,2),
    inclinacion_minima DECIMAL(4,2), -- quitar esto
    inclinacion_promedio DECIMAL(4,2),
    ubicacion VARCHAR(100),
    foto_url VARCHAR(255)
);

-- Tabla para almacenar las actividades del usuario
CREATE TABLE actividades (
    id_actividad INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_deporte INT,
    id_puerto INT,
    fecha DATE,
    distancia DECIMAL(6,2),
    tiempo TIME,
    nombre_actividad VARCHAR(100),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_deporte) REFERENCES deportes(id_deporte),
    FOREIGN KEY (id_puerto) REFERENCES puertos_montana(id_puerto)
);

-- Tabla para almacenar el ranking global por puerto
CREATE TABLE ranking_global (
    id_ranking INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_puerto INT,
    mejor_tiempo TIME,
    fecha_mejor_tiempo DATE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_puerto) REFERENCES puertos_montana(id_puerto)
);

CREATE TABLE actividades (
    id_actividad INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_deporte INT,
    id_puerto INT,
    fecha DATE,
    tiempo TIME,
    velocidad DECIMAL(5,2),
    distancia DECIMAL(6,2),
    nombre_actividad VARCHAR(100),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_deporte) REFERENCES deportes(id_deporte),
    FOREIGN KEY (id_puerto) REFERENCES puertos_montana(id_puerto)
);


INSERT INTO usuarios (nombre, correo, contraseña) VALUES
('Diego', 'Diego.gp227@gmail.com', 'Pepepollo');

INSERT INTO deportes (nombre_deporte) VALUES
('ciclismo'),
('running');

INSERT INTO puertos_montana (nombre, altitud, distancia, inclinacion_maxima, inclinacion_minima, inclinacion_promedio, ubicacion) VALUES
('Patios', 3001, 6.80, 11.00, 0.00, 6.90, 'La Calera - Bogotá'),
('El Vino', 3001, 2.20, 7.00, 0.00, 2.50, 'La Vega - Cundinamarca'),
('Monserrate', 3200, 2.50, 7.00, 0.00, 5.50, 'Bogotá');

INSERT INTO actividades (id_usuario, id_deporte, id_puerto, fecha, tiempo, velocidad, distancia, nombre_actividad) 
VALUES 
(1, 1, 1, '2024-10-01', '00:30:00', 12.50, 5.00, 'Correr 5k'),
(1, 2, 2, '2024-10-02', '00:45:00', 10.00, 6.80, 'Caminata en montaña'),
(1, 1, 3, '2024-10-03', '00:50:00', 11.00, 4.50, 'Entrenamiento de velocidad');
