CREATE DATABASE IF NOT EXISTS infolegalapp;


USE infolegalapp;

CREATE TABLE IF NOT EXISTS proceso (
    id INT NOT NULL AUTO_INCREMENT,
    proceso VARCHAR(300) NOT NULL,
    partes VARCHAR(300) NOT NULL,
    descripcion TEXT,
    PRIMARY KEY (id)
);

INSERT INTO proceso (proceso, partes, descripcion) VALUES
    ('Declarativo, Juz 55 Civil mun, Bogotá', 'Andrea Velez vs Carolina Ramos', 'Auto admite demanda'),
    ('Declarativo, Juz 20 Civil mun, Ibague', 'Andres Perez vs Lina Ramirez', 'Auto inadmite demanda');