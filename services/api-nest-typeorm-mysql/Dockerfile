FROM node:18

# Actualizar npm
RUN npm install -g npm@10.8.2
RUN npm install -g ts-node 

WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY . .

# Puerto correcto según configuración
EXPOSE 3001

# Comando para desarrollo
CMD [ "npm", "run" , "start:dev" ]