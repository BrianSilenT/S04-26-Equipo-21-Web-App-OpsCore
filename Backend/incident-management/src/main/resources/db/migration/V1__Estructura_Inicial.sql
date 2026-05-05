-- Tabla de Áreas
CREATE TABLE areas (
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Tabla de Usuarios
CREATE TABLE usuarios (
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    numero_reloj VARCHAR(50) UNIQUE NOT NULL,
    rol VARCHAR(20) NOT NULL, -- OPERADOR, SUPERVISOR, TECNICO, GERENTE
    password VARCHAR(255),
    area_id BIGINT REFERENCES areas(id)
);

-- Tabla de Estaciones de Trabajo (Máquinas)
CREATE TABLE estaciones_trabajo (
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    area_id BIGINT REFERENCES areas(id)
);

-- Tabla de Incidentes
CREATE TABLE incidentes (
    id BIGSERIAL PRIMARY KEY,
    estacion_id BIGINT REFERENCES estaciones_trabajo(id),
    reportado_por_id BIGINT REFERENCES usuarios(id),
    tecnico_asignado_id BIGINT REFERENCES usuarios(id),
    descripcion TEXT NOT NULL,
    fecha_reporte TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_cierre TIMESTAMP,
    estado VARCHAR(20) NOT NULL, -- ABIERTO, ASIGNADO, RESUELTO, CERRADO
    prioridad VARCHAR(20) NOT NULL, -- NORMAL, CRITICO
    solucion_tecnica TEXT
);

-- Tabla de Encabezado de Checklist
CREATE TABLE checklists_ejecucion (
    id BIGSERIAL PRIMARY KEY,
    estacion_id BIGINT REFERENCES estaciones_trabajo(id),
    operador_id BIGINT REFERENCES usuarios(id),
    fecha_realizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Detalle de Checklist (Puntos de Control)
CREATE TABLE respuestas_puntos_control (
    id BIGSERIAL PRIMARY KEY,
    checklist_id BIGINT REFERENCES checklists_ejecucion(id) ON DELETE CASCADE,
    categoria VARCHAR(50), -- Mecánica, Eléctrica, etc.
    descripcion_punto VARCHAR(255) NOT NULL,
    es_critico BOOLEAN DEFAULT FALSE,
    estado_ok BOOLEAN DEFAULT TRUE,
    observaciones TEXT
);
