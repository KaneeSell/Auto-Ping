# Auto-Ping
Auto-Ping para api na render não ficar inativa, ou qualquer outra utilidade.

---

### Como rodar?
Precisa criar um arquivo `.env` para colocar a variavel de ambiente `URL_API`:
```
URL_API: "url-para-pingar-automatico.com"
```
Insatalar dependencias:
```
npm install
```
Fazer o Build da aplicação:
```
npm run build
```
Rodar aplicação:
```
npm start
```

dentro do arquivo `src/index.ts` podemos editar a constante `minutos`, de acordo como precisar, esse tempo será definido para ficar pingando na `URL_API` que indicar no .env
