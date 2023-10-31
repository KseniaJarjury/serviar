CREATE DATABASE IF NOT EXISTS Serviar;
USE Serviar;

CREATE TABLE Servicio (
  `Id_Servicio` int auto_increment PRIMARY KEY,
  `Servicio` varchar(50) NOT NULL
);
CREATE TABLE Provincia (
  Id_Provincia int AUTO_INCREMENT PRIMARY KEY,
  Provincia varchar(50)
);

CREATE TABLE Localidad (
  Id_Localidad int AUTO_INCREMENT PRIMARY KEY,
  Localidad varchar(50),
  CP int(10),
  Id_Provincia int, 
  FOREIGN KEY (Id_Provincia) REFERENCES Provincia(Id_Provincia)
);
	
CREATE TABLE Usuario (
  Id_Usuario int AUTO_INCREMENT PRIMARY KEY,
  Descripcion varchar(255),
  Foto_Perfil LONGBLOB, 
  Foto_Portada LONGBLOB, 
  `CUIT` int(11) NOT NULL,
  `NombreApellido` varchar(255) NOT NULL,
  `Telefono` int(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(8) NOT NULL,
  Id_Localidad int,
  Id_Servicio int, 
  FOREIGN KEY (Id_Servicio) REFERENCES Servicio(Id_Servicio),
  FOREIGN KEY (Id_Localidad) REFERENCES Localidad(Id_Localidad)
);

CREATE TABLE Usuario_Imagenes (
  Id_UsImagenes int AUTO_INCREMENT PRIMARY KEY,
  Imagen LONGBLOB, 
  Id_Usuario int, 
  FOREIGN KEY (Id_Usuario) REFERENCES Usuario(Id_Usuario)
);

CREATE TABLE Puntaje (
  Id_Puntaje int AUTO_INCREMENT PRIMARY KEY,
  Valor int,
  Fecha Date,
  Id_Usuario int, 
  FOREIGN KEY (Id_Usuario) REFERENCES Usuario(Id_Usuario)
);


CREATE TABLE Comentario (
  Id_Comentario int AUTO_INCREMENT PRIMARY KEY,
  Comentario varchar(255),
  Fecha Date,
  Id_Usuario int, 
  FOREIGN KEY (Id_Usuario) REFERENCES Usuario(Id_Usuario)
);

INSERT INTO Servicio (Servicio) VALUES
  ('Electricista'),
  ('Albañil'),
  ('Plomeria'),
  ('Carpinteria'),
  ('Belleza');
  
  SELECT * FROM Servicio;
  
  
  INSERT INTO Provincia (Provincia) VALUES
  ('Buenos Aires'),
  ('Cordoba'),
  ('Santa Fe'),
  ('Mendoza'),
  ('Tucuman');
  
 SELECT * FROM Provincia;
    
-- Buenos Aires
INSERT INTO Localidad (Localidad, CP, Id_Provincia) VALUES
  ('Lomas de Zamora', 1840, 1),
  ('Adrogue', 1754, 1),
  ('Ezeiza', 1642, 1);

-- Córdoba
INSERT INTO Localidad (Localidad, CP, Id_Provincia) VALUES
  ('Villa Carlos Paz', 5152, 2),
  ('Río Cuarto', 5800, 2),
  ('Villa María', 5900, 2);

-- Santa Fe
INSERT INTO Localidad (Localidad, CP, Id_Provincia) VALUES
  ('Rosario', 2000, 3),
  ('Santa Fe', 3000, 3),
  ('Venado Tuerto', 2600, 3);

-- Mendoza
INSERT INTO Localidad (Localidad, CP, Id_Provincia) VALUES
  ('Godoy Cruz', 5501, 4),
  ('San Rafael', 5600, 4),
  ('Malargüe', 5613, 4);
  
  
-- Tucumán
INSERT INTO Localidad (Localidad, CP, Id_Provincia) VALUES
  ('San Miguel de Tucumán', 4000, 5),
  ('Tafí Viejo', 4103, 5),
  ('Yerba Buena', 4107, 5);


SELECT * FROM Localidad

-- Usuarios
INSERT INTO `usuario` (`Id_Usuario`, `Descripcion`, `Foto_Perfil`, `Foto_Portada`, `CUIT`, `NombreApellido`, `Telefono`, `email`, `password`, `Id_Localidad`, `Id_Servicio`) VALUES
(1, 'Soy un electricista con experiencia dedicado a brindar soluciones eléctricas seguras y eficientes para satisfacer las necesidades de mis clientes. Mi objetivo es garantizar que sus instalaciones eléctricas funcionen de manera óptima y cumplan con los más ', NULL, NULL, 0, 'Martin Romero', 13998709, 'martinromero@gmail.com', 'Invalid ', 3, 1);
