# 📌 Hello-GraphQL  
🚀 Um servidor GraphQL simples usando **Node.js**, **Express** e **Apollo Server**.

## 📖 Sobre o projeto  
Este projeto demonstra a criação de uma **API GraphQL** básica, permitindo consultar uma mensagem simples (`hello: String`). Ele serve como introdução para quem deseja aprender GraphQL na prática.

## 🛠 Tecnologias utilizadas  
- **Node.js**  
- **Express**  
- **GraphQL**  
- **Apollo Server**  

---

## 📦 Instalação  
### 🔹 1. Clone o repositório
```ruby
git clone https://github.com/mukslima/Hello-GraphQL.git
cd Hello-GraphQL
```

### 🔹 2. Instale as dependências
```ruby
npm install
```

### 🔹 3. Execute o servidor
```ruby
node server.js
```

## 🚀 Como usar?
 1. Acesse http://localhost:4000/graphql no navegador.
 2. No GraphQL Playground, execute a seguinte query:
```ruby
{
  hello
}
```
### O resultado esperado será:
```ruby
{
  "data": {
    "hello": "Olá, GraphQL!"
  }
}
```

