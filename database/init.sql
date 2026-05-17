CREATE TABLE IF NOT EXISTS persona (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(80) NOT NULL,
  apellido VARCHAR(80) NOT NULL,
  ciudad VARCHAR(120) NOT NULL,
  foto VARCHAR(500) NOT NULL
);

CREATE TABLE IF NOT EXISTS formacion (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(180) NOT NULL,
  institucion VARCHAR(180) NOT NULL,
  anio VARCHAR(20) NOT NULL,
  persona_id INT NOT NULL,
  CONSTRAINT fk_formacion_persona
    FOREIGN KEY (persona_id)
    REFERENCES persona(id)
    ON DELETE CASCADE
);

INSERT INTO persona (id, nombre, apellido, ciudad, foto)
VALUES
  (
    1,
    'Mateo',
    'Valdez',
    'La Paz, Bolivia',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  )
ON DUPLICATE KEY UPDATE
  nombre = VALUES(nombre),
  apellido = VALUES(apellido),
  ciudad = VALUES(ciudad),
  foto = VALUES(foto);

INSERT INTO formacion (id, titulo, institucion, anio, persona_id)
VALUES
  (1, 'Diplomado Full Stack', 'Instituto Tecnologico Andes', '2026', 1),
  (2, 'Licenciatura en Ingenieria de Sistemas', 'Universidad Central', '2024', 1),
  (3, 'Curso de Docker y Contenedores', 'Academia Cloud Lab', '2025', 1)
ON DUPLICATE KEY UPDATE
  titulo = VALUES(titulo),
  institucion = VALUES(institucion),
  anio = VALUES(anio),
  persona_id = VALUES(persona_id);
