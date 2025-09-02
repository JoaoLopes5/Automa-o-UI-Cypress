# Usar imagem base oficial do Cypress
FROM cypress/base:latest

# Definir diretório de trabalho
WORKDIR /home/cypress/

# Instalar dependências do sistema (ex: Java para Allure)
RUN apt-get update && apt-get install -y default-jre && rm -rf /var/lib/apt/lists/*

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências do Node (incluindo Cypress)
RUN npm install

# Garantir que o binário do Cypress seja instalado
RUN npx cypress install

# Copiar todo o restante do projeto
COPY . .

# Definir comando padrão para rodar os testes
CMD ["npx", "cypress", "run"]
