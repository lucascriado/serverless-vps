
# Template para Aplicações VPS com uso de chave PEM

Essa aplicação vem com intuito de ajudar pessoas que possuem VPS, dominios, e uma chave PEM com SSL já configurado.

O que possibilitará, de usar sua porta, por exemplo 3030, junto ao seu dominio.. 

Anteriormente,

```198.1.0.0.0:9090```

Após o uso da template, 

```seudominio.com:9090```


## Instalações necessárias

Para realizar as instalações necessárias, precisamos executar os sequintes comandos..

```bash
  nvm install --lts (instalação do node, npm)
```

```bash
  npm i fs, https, express (instalação do fs, https, express)
```

## Rodando o projeto na sua VPS

Para executar o projeto na VPS(lembrando que esse é apenas um modelo então apenas um 'Hell World' nada de demais.. ), vamos estar usando o pm2

```link
  https://pm2.keymetrics.io/
```

Podendo iniciar o projeto como..

```link
  pm2 start <app.js ou o arquivo que possuir>
```





