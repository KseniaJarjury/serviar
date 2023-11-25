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


INSERT INTO `usuario` (`Descripcion`, `Foto_Perfil`, `Foto_Portada`, `CUIT`, `NombreApellido`, `Telefono`, `email`, `password`, `Id_Localidad`, `Id_Servicio`) VALUES
('Nuestro servicio de albañilería profesional está diseñado para atender todas tus necesidades de construcción y renovación en el hogar. Contamos con un equipo de albañiles altamente capacitados y experimentados que se encargarán de llevar a cabo una amplia', NULL, NULL, 763876328, 'Julian Notario', 1144645674, 'julianotario@gmail.com', 'Maseba12', 15, 2),
('Plomero de confianza, más de 20 años en el rubro', NULL, NULL, 2112345437, 'Marcelo Gallardo', 1123243223, 'marcegall@gmail.com', 'mg123456', 1, 3),
('Manicura. Hago esculpidas en gel', NULL, NULL, 242356787, 'Belen Dara', 1143526473, 'bd1997@gmail.com', 'dara1234', 3, 5),
('¿Necesitas solucionar problemas eléctricos en tu hogar o negocio? ¡No busques más! Como electricista profesional, estoy listo para ayudarte. Ofrezco servicios de instalación, reparación y mantenimiento eléctrico de alta calidad. Tu seguridad y comodidad.', NULL, NULL, 2112345437, 'Marcelo Gallardo', 1123243223, 'marcegall@gmail.com', 'mg123456', 2, 1),
('Como carpintero experimentado, ofrezco servicios de diseño, fabricación y montaje de muebles y estructuras de madera a medida. Mi pasión es crear piezas de calidad que se adapten a tus necesidades y estilo. Contacta conmigo para convertir tus ideas en re', NULL, NULL, 2147483647, 'Sebastian Teran', 1144645674, 'sebastianteran@gmail.com', 'Sebas123', 13, 4);


-- Insertar 20 usuarios
INSERT INTO `usuario` (`Id_Usuario`, `Descripcion`, `Foto_Perfil`, `Foto_Portada`, `CUIT`, `NombreApellido`, `Telefono`, `email`, `password`, `Id_Localidad`, `Id_Servicio`) VALUES
  (6,'¿Experimentas problemas eléctricos en tu residencia o empresa? ¡Estoy aquí para resolverlos! Soy un electricista con experiencia, preparado para ofrecerte servicios de instalación, reparación y mantenimiento eléctrico excepcionales. Tu seguridad y bienestar son mi máxima prioridad.', NULL, NULL, 12345678901, 'Santiago Rodríguez', 123456789, 'santiago.rodriguez@hotmail.com', 'Santiago456', 1, 1),
  (7,'Dale vida a tus proyectos de construcción con un albañil dedicado a la excelencia. Como profesional en albañilería, ofrezco servicios que van desde la instalación de estructuras hasta la creación de espacios más funcionales y estéticos. Transforma tu propiedad con resultados duraderos y de alta calidad.', NULL, NULL,23456789012, 'Matías González', 234567890, 'matias.gonzalez@hotmail.com', 'Matias987', 2, 2),
  (8,'¿Problemas con las tuberías o las instalaciones de fontanería? Como fontanero experto, estoy aquí para resolver cualquier inconveniente. Ofrezco servicios de plomería confiables, desde reparaciones rápidas hasta instalaciones completas. Restaura la funcionalidad de tus sistemas hidráulicos con mi experiencia.', NULL, NULL,34567890123, 'Leonardo Mendoza', 345678901, 'leonardo.mendoza@hotmail.com', 'Leonardo123', 3, 3),
  (9,'¿Buscas servicios de carpintería de calidad? Como carpintero profesional, estoy especializado en la creación y reparación de muebles a medida. Desde diseños únicos hasta restauraciones, garantizo resultados duraderos y estéticamente atractivos para satisfacer tus necesidades.', NULL, NULL,45678901234, 'Facundo Pérez', 456789012, 'facundo.perez@hotmail.com', 'Facundo789', 4, 4),
  (10,'Descubre la experiencia de un servicio de peluquería que va más allá del corte de cabello. Como estilista apasionado, me especializo en crear looks personalizados que realzan tu belleza única. Desde cortes modernos hasta peinados elegantes, estoy comprometido a proporcionarte un servicio profesional y atención personalizada. Haz de tu visita a la peluquería un momento de bienestar y transformación.', NULL, NULL,56789012345, 'Sofía Fernández', 567890123, 'sofia.fernandez@gmail.com', 'Sofia654', 5, 5),
  (11,'Solucionar desafíos eléctricos es mi especialidad. Como electricista profesional, ofrezco servicios confiables de instalación, reparación y mantenimiento eléctrico. Desde pequeñas reparaciones hasta proyectos más grandes, estoy comprometido con tu tranquilidad y satisfacción.', NULL, NULL,67890123456, 'Agustín Sánchez', 678901234, 'agustin.sanchez@hotmail.com', 'Agustin654', 6, 1),
  (12,'Dale vida a tus proyectos de construcción con un albañil dedicado a la excelencia. Como profesional en albañilería, ofrezco servicios que van desde la instalación de estructuras hasta la creación de espacios más funcionales y estéticos. Transforma tu propiedad con resultados duraderos y de alta calidad.', NULL, NULL,78901234567, 'Tomás López', 789012345, 'tomas.lopez@hotmail.com', 'Tomas456', 7, 2),
  (13,'Mantén tu hogar o negocio libre de problemas de fontanería con mis servicios especializados. Como plomero profesional, me encargo de reparaciones, mantenimiento preventivo e instalaciones de alta calidad. Confía en mí para solucionar cualquier desafío que tengas en tus sistemas de fontanería.', NULL, NULL,89012345678, 'Juan Martinez', 890123456, 'juan.martinez@hotmail.com', 'Juan654', 8, 3),
  (14,'Dale vida a tus ideas con servicios de carpintería personalizados. Como experto en la materia, ofrezco la creación de muebles y objetos de madera a medida. Desde proyectos simples hasta piezas únicas, mi enfoque artesanal garantiza resultados excepcionales.', NULL, NULL,90123456789, 'Maximiliano Torres', 901234567, 'maximiliano.torres@gmail.com', 'Maxi123', 9, 4),
  (15,'Sumérgete en el lujo y la relajación con nuestro servicio de pedicuría especializado. Con atención meticulosa, nos enfocamos en el cuidado de tus pies, ofreciéndote tratamientos rejuvenecedores y estéticamente agradables. Disfruta de un ambiente tranquilo mientras te mimamos con exfoliaciones, masajes y un impecable acabado en tus uñas. Embellece tus pies y eleva tu bienestar con nuestra experiencia de pedicuría de alta calidad.', NULL, NULL,12345678900, 'Valentina López', 123456780, 'valentina.lopez@gmail.com', 'Valentina789', 10, 5),
  (16,'Si buscas un electricista de confianza, estás en el lugar correcto. Como profesional en servicios eléctricos, proporciono soluciones expertas para tus necesidades. Mis servicios abarcan desde instalaciones precisas hasta reparaciones efectivas. Tu seguridad y confort son mi prioridad número uno.', NULL, NULL,23456789001, 'Franco Lopez', 234567890, 'franco.lopez@hotmail.com', 'Franco456', 11, 1),
  (17,'Dale vida a tus proyectos de construcción con un albañil dedicado a la excelencia. Como profesional en albañilería, ofrezco servicios que van desde la instalación de estructuras hasta la creación de espacios más funcionales y estéticos. Transforma tu propiedad con resultados duraderos y de alta calidad.', NULL, NULL,34567890112, 'Bruno Herrera', 345678901, 'bruno.herrera@hotmail.com', 'Bruno654', 12, 2),
  (18,'La fontanería no debería ser una preocupación constante. Como fontanero de confianza, ofrezco soluciones efectivas para problemas de tuberías, grifos y sistemas hidráulicos en general. Tu tranquilidad es mi prioridad, así que deja que me encargue de cualquier trabajo de plomería que necesites.', NULL, NULL,45678901223, 'Santiago Ramírez', 456789012, 'santiago.ramirez@gmail.com', 'Santiago123', 13, 3),
  (19,'Transforma tu espacio con servicios de carpintería que combinan funcionalidad y estética. Como carpintero experimentado, me especializo en proyectos que van desde la fabricación de muebles hasta la instalación de elementos decorativos. Haz realidad tus ideas con mi experiencia en carpintería.', NULL, NULL,56789012334, 'Facundo García', 567890123, 'facundo.garcia@gmail.com', 'Facundo789', 14, 4),
  (20,'Descubre el arte del bienestar con nuestro servicio de masajes personalizados. Como masajista profesional, estoy comprometido/a a brindarte una experiencia relajante y terapéutica. Con técnicas especializadas, alivio del estrés y atención individualizada, cada sesión está diseñada para revitalizar tu cuerpo y mente. Sumérgete en un mundo de tranquilidad y renueva tu energía con nuestros masajes que se adaptan a tus necesidades específicas.', NULL, NULL,67890123445, 'Martina Pérez', 678901234, 'martina.perez@gmail.com', 'Martina123', 15, 5)
 
 