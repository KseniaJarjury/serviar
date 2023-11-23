CREATE DATABASE IF NOT EXISTS Serviar;
USE Serviar;
DROP DATABASE serviar;

CREATE TABLE Servicio (
  `Id_Servicio` int auto_increment PRIMARY KEY,
  `Servicio` varchar(50) NOT NULL
);
CREATE TABLE Provincia (
  Id_Provincia int AUTO_INCREMENT PRIMARY KEY,
  Provincia varchar(50),
  LatitudP decimal(12,8) NOT NULL,
  LongitudP decimal(12,8) NOT NULL
);

CREATE TABLE Localidad (
  Id_Localidad int AUTO_INCREMENT PRIMARY KEY,
  Localidad varchar(50),
  CP int(10),
  LatitudL decimal(12,8) NOT NULL,
  LongitudL decimal(12,8) NOT NULL,
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
  `password` varchar(60) NOT NULL,
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
  
  
  INSERT INTO Provincia (Provincia, LatitudP, LongitudP) VALUES
  ('Buenos Aires', -34.6036844, -58.3815591),
  ('Cordoba', -31.4200833, -64.1887761),
  ('Santa Fe', -31.6106578,	-60.697294),
  ('Mendoza', -32.8894587, -68.8458386),
  ('Tucuman', -26.8082848,	-65.2175903);
  
 SELECT * FROM Provincia;
    
-- Buenos Aires
INSERT INTO Localidad (Localidad, CP, LatitudL, LongitudL, Id_Provincia) VALUES
  ('Lomas de Zamora', 1840, -34.7611823, -58.4302476, 1),
  ('Adrogué', 1754, -34.8012352,	-58.3889046, 1),
  ('Ezeiza', 1642, -34.8537327,	-58.5228619, 1),
  ('Villa Carlos Paz', 5152, -31.4207828, -64.4992141, 2),
  ('Río Cuarto', 5800, -33.1231585,	-64.3493441, 2),
  ('Villa María', 5900, -32.4104614, -63.243645, 2),
  ('Rosario', 2000,  -32.9587022,	-60.6930416, 3),
  ('Santa Fe', 3000, -31.6106578,	-60.697294, 3),
  ('Venado Tuerto', 2600, -33.7455566,	-61.9690161, 3),
  ('Godoy Cruz', 5501, -32.9286268,	-68.8583963, 4),
  ('San Rafael', 5600, -34.6128922,	-68.3390622, 4),
  ('Malargüe', 5613, -35.484462, -69.5797495, 4),
  ('San Miguel de Tucumán', 4000, -26.8082848, -65.2175903, 5),
  ('Tafí Viejo', 4103, -26.7324791, -65.2670288, 5),
  ('Yerba Buena', 4107, -26.8119881,	-65.3013529, 5);


INSERT INTO `usuario` (`Id_Usuario`, `Descripcion`, `Foto_Perfil`, `Foto_Portada`, `CUIT`, `NombreApellido`, `Telefono`, `email`, `password`, `Id_Localidad`, `Id_Servicio`) VALUES
(1, 'Nuestro servicio de albañilería profesional está diseñado para atender todas tus necesidades de construcción y renovación en el hogar. Contamos con un equipo de albañiles altamente capacitados y experimentados que se encargarán de llevar a cabo una amplia', NULL, NULL, 763876328, 'Julian Notario', 1144645674, 'julianotario@gmail.com', 'Maseba12', 15, 2),
(2, 'Plomero de confianza, más de 20 años en el rubro', NULL, NULL, 2112345437, 'Marcelo Gallardo', 1123243223, 'marcegall@gmail.com', 'mg123456', 1, 3),
(3, 'Manicura. Hago esculpidas en gel', NULL, NULL, 242356787, 'Belen Dara', 1143526473, 'bd1997@gmail.com', 'dara1234', 3, 5),
(4, '¿Necesitas solucionar problemas eléctricos en tu hogar o negocio? ¡No busques más! Como electricista profesional, estoy listo para ayudarte. Ofrezco servicios de instalación, reparación y mantenimiento eléctrico de alta calidad. Tu seguridad y comodidad.', NULL, NULL, 2112345437, 'Marcelo Gallardo', 1123243223, 'marcegall@gmail.com', 'mg123456', 2, 1),
(5, ' Como carpintero experimentado, ofrezco servicios de diseño, fabricación y montaje de muebles y estructuras de madera a medida. Mi pasión es crear piezas de calidad que se adapten a tus necesidades y estilo. Contacta conmigo para convertir tus ideas en re', NULL, NULL, 2147483647, 'Sebastian Teran', 1144645674, 'sebastianteran@gmail.com', 'Sebas123', 13, 4);


