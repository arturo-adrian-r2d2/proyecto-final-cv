# Proyecto Curriculum

Aplicacion web de CV personal con React, Node.js, MySQL y Docker Compose.

## Servicios

- `frontend`: React + Nginx, publicado en `http://localhost:3000`.
- `backend`: Node.js + Express, endpoint `GET /cv` en `http://localhost:4000/cv`.
- `database`: MySQL 8.0 con tablas y datos iniciales desde `database/init.sql`.

## Base de datos

La base de datos `cv_db` se crea automaticamente al iniciar Docker Compose. Las tablas y registros iniciales se cargan desde `database/init.sql`.

### Tabla `persona`

| Campo | Tipo | Descripcion |
| --- | --- | --- |
| `id` | `INT` | Identificador principal de la persona. |
| `nombre` | `VARCHAR(80)` | Nombre del estudiante. |
| `apellido` | `VARCHAR(80)` | Apellido del estudiante. |
| `ciudad` | `VARCHAR(120)` | Ciudad de residencia. |
| `foto` | `VARCHAR(500)` | URL de la fotografia del CV. |

### Tabla `formacion`

| Campo | Tipo | Descripcion |
| --- | --- | --- |
| `id` | `INT` | Identificador principal del registro academico. |
| `titulo` | `VARCHAR(180)` | Titulo, curso o formacion realizada. |
| `institucion` | `VARCHAR(180)` | Institucion donde se realizo la formacion. |
| `anio` | `VARCHAR(20)` | Ano de la formacion. |
| `persona_id` | `INT` | Relacion con la tabla `persona`. |

## Ejecutar con Docker Compose

Antes de iniciar, cree el archivo `.env` desde el ejemplo:

```powershell
Copy-Item .env.example .env
```

Ejemplo de `.env`:

```env
DOCKERHUB_USER=user_docker_test
LASTNAME=lastname_test
```

```bash
docker-compose up -d
```

La aplicacion queda disponible en:

```bash
http://localhost:3000
```

## Imagenes Docker Hub

Docker Compose usara `DOCKERHUB_USER` y `LASTNAME` desde el archivo `.env`.

```bash
docker login
docker-compose build
docker-compose push
```

Con el ejemplo anterior, las imagenes publicadas serian:

```text
user_docker_test/lastname_test-backend:v1
user_docker_test/lastname_test-frontend:v1
```

Para probar desde cero:

```powershell
docker-compose down -v
docker-compose up -d
```

## Desarrollo local

Backend:

```bash
cd backend
npm install
npm run start:dev
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```
