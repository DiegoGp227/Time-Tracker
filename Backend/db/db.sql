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
    inclinacion_minima DECIMAL(4,2),
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
