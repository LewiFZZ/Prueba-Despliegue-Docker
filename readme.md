# app-devops

Aplicación web desarrollada como práctica de despliegue seguro con DevOps y contenedores, dentro del Ciclo de Especialización en Ciberseguridad en Entornos de las Tecnologías de la Información.

## Stack

- **Node.js + Express** — servidor HTTP que sirve los archivos estáticos
- **SweetAlert2** — librería de modales visuales cargada vía CDN
- **Docker + Docker Compose** — contenedorización y despliegue

## Estructura

```
.
├── app.js               # Servidor Express
├── index.html           # Interfaz principal
├── assets/
│   ├── js/client.js     # Lógica del cliente (navegador)
│   └── styles/styles.css
├── Dockerfile
├── docker-compose.yml
└── deploy.sh            # Script de automatización del despliegue
```

## Requisitos

- Docker
- Docker Compose

## Despliegue

Clonar el repositorio:
```bash
git clone https://github.com/tuusuario/app-devops.git
cd app-devops
```

Crear el fichero de variables de entorno:
```bash
cp .env.example .env
```

Levantar el contenedor:
```bash
docker compose up --build
```

La aplicación estará disponible en `http://localhost:3000`

## Automatización

El script `deploy.sh` automatiza el build y el despliegue:
```bash
chmod +x deploy.sh
./deploy.sh
```

## Variables de entorno

| Variable | Descripción |
|---|---|
| `PASSWORD` | Ejemplo de variable sensible gestionada fuera del código |

Las variables se definen en un fichero `.env` local que **no se versiona** en el repositorio.

## Seguridad

- Credenciales externalizadas mediante variables de entorno
- `.env` excluido del repositorio vía `.gitignore`
- Separación entre código de servidor (`app.js`) y cliente (`client.js`)
