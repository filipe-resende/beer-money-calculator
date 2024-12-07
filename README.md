# Aplicativo Mobile de Calculadora de Porcentagem - React Native 📱

## 📖 Sobre o Projeto

Este projeto é um **aplicativo mobile** criado em **React Native** com o objetivo de calcular porcentagens de valores. A aplicação permite que os usuários informem um valor e uma porcentagem, e o sistema retorna o valor correspondente. Este projeto foi desenvolvido como parte de um estudo sobre **React Native** e tem como foco a construção de uma aplicação simples para cálculos matemáticos.

## 🔧 Funcionalidades

- **Cálculo de Porcentagem:** Os usuários podem informar um valor e uma porcentagem e obter o valor correspondente à porcentagem solicitada.
- **API Simples:** A aplicação utiliza endpoints que recebem dados (valor e porcentagem) e retornam o cálculo da porcentagem.
  
## 🛠 Tecnologias Utilizadas

- **React Native:** Framework utilizado para desenvolver a API e a interface mobile.
- **Express.js (Backend):** Usado para criar a API que realiza os cálculos de porcentagem.
- **JavaScript:** Linguagem de programação principal utilizada no projeto.
- **Axios:** Biblioteca para facilitar as requisições HTTP.

## 🔧 Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o Node.js instalado. Caso contrário, baixe a versão mais recente do [Node.js](https://nodejs.org/).

Se for rodar o projeto no dispositivo, tenha o **React Native CLI** instalado e o **Android Studio** ou **Xcode** configurado, dependendo do seu sistema operacional.

### Instalação

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/calculadora-porcentagem-react-native.git
    cd calculadora-porcentagem-react-native
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Inicie o servidor de desenvolvimento:**
    ```bash
    npx react-native start
    ```

4. **Rodar o app no Android ou iOS:**
    - No Android:
      ```bash
      npx react-native run-android
      ```
    - No iOS (apenas MacOS):
      ```bash
      npx react-native run-ios
      ```

5. O app estará disponível no seu dispositivo ou emulador.

### Estrutura do Projeto

- `/src`: Contém os arquivos principais da lógica de cálculo, como os componentes React Native.
- `/components`: Contém os componentes utilizados na interface, como o campo para entrada de dados e botões.
- `/utils`: Funções auxiliares para o cálculo de porcentagens.

### API Endpoints

## 🤝 Contribuição

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova feature'`).
4. Envie sua branch (`git push origin feature/nome-da-feature`).
5. Crie um pull request.

## 📝 Licença

Este projeto está licenciado sob os termos da MIT License - veja o arquivo LICENSE para mais detalhes.

