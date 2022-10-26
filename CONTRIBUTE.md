# <h1 align="center">Como contribuir?</h1>

## Fork

Faça o fork desse repositório para que você possa fazer as alterações.

## Branch

No seu fork crie uma branch que defina a tarefa que você fará, exemplo.

```sh
git checkout -b adicionar-nome-daniel
```

## Faça as alterações

Adicione seu nome no arquivo especificado.

Vá em `./src/App.tsx`, encontre a linha que contenha `// Array de participantes` e adicione seu nome no array.

```ts
const participants: Array<Participant> = [
  {
    name: "Daniel Boll",
    bio: "Estudante do quarto ano bla bla bla",
    github: "daniel-boll",
  },
  {
    name: "Pablo Hugen",
    bio: "Estudante do quarto ano bla bla bla",
    github: "tomcat-42",
  },
  // Adicione no mesmo formato aqui
];
```
> OBS: o campo github é o nome do seu perfil no github

## Commit

Faça o commit de suas alterações

```sh
git add . # no diretório raíz do projeto
git commit -m "feat(name): add my daniel's to the project"
```

## Push

Leve suas alterações para seu repositório na branch que você criou

```sh
git push origin adicionar-nome-daniel
```

## Pull request

Vá ao seu github e terá os passos para contribuir e abrir um Pull Request para o repositório original em um botão `contribute`.
