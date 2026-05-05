-- Insertar Áreas
INSERT INTO areas (nombre) VALUES ('Producción A'), ('Mantenimiento'), ('Calidad');

-- Insertar las 5 Máquinas (Estaciones)
INSERT INTO estaciones_trabajo (nombre, codigo, area_id) VALUES
('Prensa Hidráulica PH-01', 'PH01', 1),
('Torno CNC-02', 'CNC02', 1),
('Estación de Limpieza Química', 'ELQ01', 1),
('Brazo Robótico Ensamblador', 'BRE01', 1),
('Compresor Industrial de Gas', 'CIG01', 2);

-- Insertar Usuarios de Prueba (Password en texto plano por ahora)
INSERT INTO usuarios (nombre, numero_reloj, rol, password, area_id) VALUES
('Brian Operador', 'OP100', 'OPERADOR', '123456', 1),
('Vicky Supervisora', 'SV200', 'SUPERVISOR', '123456', 1),
('Tecnico Especialista', 'TC300', 'TECNICO', '123456', 2);