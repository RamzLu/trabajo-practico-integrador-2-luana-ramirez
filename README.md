Descripción breve

Aplicación web para la gestión de tareas con autenticación de usuarios.
Permite registrar usuarios, iniciar sesión, crear, editar, eliminar y marcar tareas como completadas o pendientes.
Construida con React, Node.js, Express y MySQL.

Instrucciones de instalación
Clonar el repositorio
git clone [https://github.com/tu-usuario/task-manager.git](https://github.com/RamzLu/trabajo-practico-integrador-2-luana-ramirez.git)

Instalar dependencias del backend
cd servidor
npm install
Instalar dependencias del frontend
cd ../frontend
npm install

Iniciar los servidores

Servidor:

npm run dev

Frontend:

npm run dev

Configuración del archivo .env

Crea un archivo llamado .env dentro del directorio server/ con el siguiente contenido:
DB_NAME=tp_integrador
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
DB_DIALECT=mysql
DB_PORT=3306
JWT_SECRET=jwt_secret
PORT=3000

Tecnologías utilizadas

Frontend: React + Vite + Tailwind CSS

Backend: Node.js + Express

Base de datos: MySQL

Autenticación: JWT (JSON Web Token)
