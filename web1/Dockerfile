# Dockerfile para web1
FROM node:18-alpine

WORKDIR /app
# Copiar la aplicación al contenedor

COPY / app
# Establecer el directorio de trabajo

COPY package*.json ./
# Instalar las dependencias de la aplicación
RUN npm install

COPY . .

EXPOSE 80

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
