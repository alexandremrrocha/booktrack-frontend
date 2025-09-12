# 📚 BooktrackFrontend

Frontend do sistema **Booktrack**, responsável pela visualização e interação com os dados de livros e autores.  
Este projeto foi desenvolvido em **Angular** e consome a API do [book-track](https://github.com/alexandremrrocha/book-track).

---

## 🚀 Tecnologias

- [Angular 20](https://angular.dev/)  
- [Chart.js 2.9.4](https://www.chartjs.org/) para gráficos  
- [TypeScript](https://www.typescriptlang.org/)  
- [RxJS](https://rxjs.dev/)  

---

## ⚙️ Como rodar o projeto localmente

Para iniciar o servidor de desenvolvimento:

```
npm install
ng serve
```

Depois, abra no navegador:

```
http://localhost:4200/
```

---

## 🔗 Integração com o Backend

Certifique-se de que o [book-track](https://github.com/alexandremrrocha/book-track) está rodando antes de usar o frontend. Por padrão, o backend roda em:

```
http://localhost:3000
```

---

## 📊 Funcionalidades

- Listagem de autores e seus livros
- Gráfico de top autores (Chart.js)
- Separação entre "Top 10 autores" e "Outros"
- Atualização em tempo real ao alterar os dados

---

## 📅 Roadmap

- Melhorar layout responsivo
- Adicionar paginação nas listagens
- Criar tela de detalhes de autor
- Implementar autenticação integrada ao backend

---

## 📜 Licença

Este projeto é licenciado sob a [MIT License](LICENSE)