# Etapa de build do Angular
FROM node:20 AS builder

WORKDIR /app

# Copia apenas arquivos essenciais primeiro para otimizar cache
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copia o código-fonte restante e executa o build
COPY . .
RUN npm run build --prod

# Usa uma imagem do Nginx para servir o Angular
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm -rf /etc/nginx/conf.d

# Copia os arquivos gerados pelo Angular para o diretório padrão do Nginx
COPY --from=builder /app/dist/project-angular-estoque /usr/share/nginx/html

# Copia a configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


# # Etapa de build do Angular
# FROM node:20 AS builder
# WORKDIR /app

# COPY . .
# RUN npm install
# RUN npm run build

# # Etapa final: Servindo o Angular com Nginx
# FROM nginx:alpine

# COPY --from=builder /app/dist/project-angular-estoque/browser /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY mime.types /etc/nginx/mime.types

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
