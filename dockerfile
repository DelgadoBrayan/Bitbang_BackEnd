# Trae la imagen base de node 
FROM node:20

# se establece el directorio de trabajo dentro del contenedor
WORKDIR /app 

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instalacion de dependencias
RUN npm install

# Copia codigo de la app
COPY . .

# configuracion del puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD [ "node","index.js"]