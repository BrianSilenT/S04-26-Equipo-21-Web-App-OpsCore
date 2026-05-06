# Incident Management - OpsCore

## 🎯 Propósito
Este proyecto tiene como objetivo desarrollar un sistema de **gestión de incidentes y mantenimiento de maquinaria/estaciones de trabajo**.  
Busca centralizar el reporte de incidentes, la asignación de responsables, el seguimiento de resoluciones y la generación de métricas para la toma de decisiones.

## 🏗️ Arquitectura del Monorepo
El repositorio está organizado como un **monorepo** con dos módulos principales:

- **Backend/** → Aplicación Spring Boot (Java) con arquitectura en capas.
- **Frontend/** → Aplicación cliente (framework por definir, ej. React).
- **pom.xml (raíz)** → Proyecto padre Maven que gestiona los módulos.

## 📂 Backend - Estructura de directorios
Dentro de `backend/incident-management` se ha creado la arquitectura base:

- `model/` → Entidades JPA (Usuario, Incidente, Resolución, Checklist, Métrica).
- `repository/` → Interfaces Spring Data JPA para acceso a datos.
- `service/` → Lógica de negocio con implementaciones `@Service`.
- `controller/` → Endpoints REST para exponer la API.
- `enums/` → Enumeraciones (Roles, Estados de incidente, Prioridad).
- `component/` → Beans reutilizables (pendiente).
- `config/` → Configuración (seguridad, CORS, DB).
- `dto/` → Objetos de transferencia (pendiente).
- `mapper/` → Conversión entre entidades y DTOs (pendiente).
- `exception/` → Manejo centralizado de errores (pendiente).
- `security/` → Configuración de autenticación/autorización (pendiente).
- `scheduler/` → Tareas programadas para alertas y mantenimientos (pendiente).

> En los directorios aún no implementados se ha agregado un `README.md` temporal para mantener la estructura visible en Git.

## 🚀 Estado actual
- Arquitectura base creada y organizada.
- Entidades principales definidas (`Usuario`, `Incidente`, `Resolución`, `Checklist`, `Métrica`).
- Enums definidos (`Rol`, `EstadoIncidente`, `Prioridad`).
- Repositorios JPA listos.
- Servicios (`@Service`) implementados para usuarios, incidentes y resoluciones.
- Controladores REST iniciales (`/usuarios`, `/incidentes`, `/resoluciones`, `/checklists`, `/metricas`).

## 📌 Próximos pasos
- Completar lógica de `Checklist` con ítems detallados de verificación.
- Implementar seguridad con Spring Security (roles y contraseñas).
- Configurar base de datos PostgreSQL y probar endpoints.
- Desarrollar frontend para interacción con la API.
