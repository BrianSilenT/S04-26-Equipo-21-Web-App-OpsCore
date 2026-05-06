# 🧬 Arquitectura Frontend - Incident System

Este proyecto utiliza una arquitectura basada en **Atomic Design**, combinada con una separación clara de responsabilidades para escalabilidad, mantenibilidad y claridad en el código.

Stack principal:
- React + Vite
- TypeScript
- TailwindCSS
- Zustand (estado UI)
- TanStack Query (server state)
- Axios (HTTP client)

---

# 📁 Estructura del proyecto
```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
│
├── pages/
│
├── services/
│
├── hooks/
│
├── store/
│
├── types/
│
├── utils/
│
└── app/

```
# 🧱 Atomic Design (UI Layer)

## 🧩 Atoms

Componentes básicos e indivisibles de UI.

### Características:
- No tienen lógica de negocio
- No consumen APIs
- Son completamente reutilizables

### Ejemplos:
- Button
- Input
- Badge
- Avatar
- Text

---

## 🧩 Molecules

Combinación de atoms con lógica de UI ligera.

### Características:
- Componen UI más compleja
- No conocen el dominio del backend
- Siguen siendo reutilizables

### Ejemplos:
- UserBadge
- StatusTag
- DateLabel
- MetricCard

---

## 🧩 Organisms

Bloques funcionales completos de UI.

### Características:
- Representan secciones completas
- Pueden recibir datos por props
- Presentan información del dominio

### Ejemplos:
- IncidentTable
- IncidentFilters
- MetricsDashboard
- ResolutionTimeline

---

## 🧩 Templates

Estructuras de layout sin datos reales.

### Características:
- Definen distribución visual
- No contienen lógica de negocio
- Reciben componentes como props

### Ejemplos:
- IncidentLayout
- DashboardLayout

---

# 📄 Pages (Capa de composición)

Las pages son el punto de conexión entre UI y lógica.

### Responsabilidades:
- Consumir hooks (TanStack Query)
- Manejar estado global (Zustand si aplica)
- Componer templates + organisms
- Representar rutas

### Ejemplo de flujo:
- Fetch de datos
- Paso de datos a organisms
- Render del template

---

# 🌐 Services (API Layer)

Capa encargada de comunicación con backend.

### Características:
- Sin React
- Sin estado UI
- Solo llamadas HTTP

### Ejemplo:
- incident.api.ts
- user.api.ts

---

# ⚡ Hooks (Server State Layer)

Encapsulan TanStack Query.

### Responsabilidades:
- Fetching de datos
- Cacheo automático
- Revalidación

### Ejemplo:
- useIncidents
- useUsers
- useMetrics

---

# 🧠 Store (Zustand - UI State)

Estado global de UI.

### Usos correctos:
- Modales
- Filtros UI
- Sidebars
- Toggles

### ❌ NO usar para:
- Data del backend
- Cache de API

---

# 🧾 Types (Contratos TS)

Definición de tipos del dominio.

### Ejemplo:
- Incidente
- Usuario
- Resolución
- Métrica
- Checklist

---

# 🧰 Utils

Funciones puras reutilizables.

### Ejemplos:
- formatDate
- formatNumber
- helpers de validación

---

# 🔄 Flujo de datos

```
Backend API
↓
Services (Axios)
↓
Hooks (TanStack Query)
↓
Pages
↓
Templates
↓
Organisms
↓
Molecules
↓
Atoms
```


# 🧠 Reglas de arquitectura

## ❌ Prohibido
- Llamar APIs dentro de components
- Mezclar UI con lógica de negocio
- Usar Zustand para server state
- Romper separación atomic design

---

## ✅ Permitido
- UI pura en components
- Data fetching solo en hooks/pages
- Zustand solo para estado de UI
- Services aislados sin React

---

# 🚀 Objetivo de la arquitectura

Esta estructura busca:

- Escalabilidad sin deuda técnica
- Reutilización de componentes
- Separación clara de responsabilidades
- Facilidad para testing
- Mantenimiento a largo plazo

---

# 🧬 Resultado final

Una arquitectura donde:

- UI es totalmente reutilizable
- Lógica de negocio está aislada
- El backend no contamina componentes
- El sistema puede crecer sin refactors agresivos