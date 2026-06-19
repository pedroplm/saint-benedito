# 🎉 Festa Junina Paróquia São Benedito - Documentação do WebApp

## Visão Geral

Este documento descreve a criação de um WebApp completo para divulgação da Festa Junina da Paróquia São Benedito.

O objetivo principal é criar uma experiência digital para visitantes, facilitando o acesso às informações do evento, programação, localização, atrações, comidas típicas e compartilhamento com a comunidade.

Além disso, o projeto deve ser desenvolvido pensando em **SEO (Search Engine Optimization)** para aumentar a chance de aparecer nos resultados do Google quando usuários pesquisarem termos relacionados à festa.

---

# Objetivos do Projeto

## Objetivo principal

Criar um site moderno, rápido e responsivo para divulgar a Festa Junina da Paróquia São Benedito.

## Objetivos secundários

* Facilitar o compartilhamento do evento pelo WhatsApp
* Melhorar a presença digital da paróquia
* Centralizar informações importantes
* Atrair visitantes através de pesquisa orgânica no Google
* Criar uma identidade visual relacionada à cultura junina

---

# Sobre Festa Junina

A Festa Junina é uma celebração tradicional brasileira realizada principalmente durante o mês de junho.

Ela mistura elementos religiosos, culturais e populares, tendo origem nas celebrações dos santos católicos:

* Santo Antônio
* São João
* São Pedro

Os principais elementos de uma festa junina são:

* Quadrilha
* Bandeirinhas coloridas
* Fogueira
* Música sertaneja e forró
* Comidas típicas
* Brincadeiras
* Barracas beneficentes

A festa representa um momento de união comunitária, valorização cultural e convivência entre famílias.

---

# Identidade do Evento

## Nome sugerido

Festa Junina da Paróquia São Benedito

## Tema visual

Arraiá tradicional:

* Bandeirinhas
* Madeira rústica
* Palha
* Milho
* Fogueira
* Elementos caipiras

---

# Estrutura do WebApp

## Página Inicial

Objetivo:

Apresentar o evento rapidamente.

Elementos:

* Banner principal
* Nome da festa
* Data
* Localização
* Botão "Como chegar"
* Botão "Compartilhar"

Exemplo:

"Venha participar da tradicional Festa Junina da Paróquia São Benedito!"

---

# Página Sobre

Conteúdo:

* História da festa
* Importância cultural
* História da comunidade
* Informações da paróquia

---

# Programação

Criar uma página dinâmica contendo:

Exemplo:

## Atrações

* Música ao vivo
* Quadrilha
* Apresentações
* Brincadeiras
* Sorteios

---

# Gastronomia

Criar uma seção mostrando comidas típicas:

Exemplos:

* Pastel
* Milho
* Canjica
* Quentão
* Pipoca
* Doces
* Lanches

---

# Localização

Adicionar:

* Google Maps embed
* Endereço
* Como chegar
* Transporte público próximo

---

# Galeria

Criar uma galeria de fotos:

Categorias:

* Festa
* Quadrilha
* Comidas
* Comunidade
* Decoração

---

# Fotos públicas para utilização como referência visual

Preferir imagens com licença aberta.

## Wikimedia Commons

Festa Junina:

https://commons.wikimedia.org/wiki/File:Festa_Junina_-_24827936.jpg

https://commons.wikimedia.org/wiki/File:Festa_junina_01.jpg

https://commons.wikimedia.org/wiki/File:Festa_junina_02.jpg

Quadrilha:

https://commons.wikimedia.org/wiki/File:FestaJunina07_Quadrilha.jpg

Outras imagens:

https://commons.wikimedia.org/wiki/Category:Festa_junina

Observação:

Sempre verificar licença da imagem antes de publicar comercialmente.

Fontes encontradas:

* Creative Commons
* Domínio público
* Wikimedia Commons

---

# SEO - Estratégia para aparecer no Google

## Palavras-chave principais

Utilizar naturalmente:

* festa junina Campinas
* festa junina Paróquia São Benedito
* quermesse Campinas
* arraiá Campinas
* festa junina Vila Costa e Silva
* festa religiosa Campinas
* eventos Campinas junho

---

# SEO Técnico

## Meta Title

Exemplo:

Festa Junina Paróquia São Benedito Campinas | Arraiá 2026

## Meta Description

Exemplo:

Confira programação, atrações, comidas típicas e localização da Festa Junina da Paróquia São Benedito em Campinas.

---

# Schema.org

Implementar JSON-LD:

Tipo:

Event

Informações:

* Nome do evento
* Data
* Local
* Endereço
* Imagem
* Descrição

Exemplo:

```json
{
 "@context": "https://schema.org",
 "@type": "Event",
 "name": "Festa Junina da Paróquia São Benedito",
 "description": "Festa junina tradicional em Campinas",
 "location": {
   "@type": "Place",
   "name": "Paróquia São Benedito"
 }
}
```

---

# Performance

Requisitos:

* Site rápido
* Mobile first
* Imagens otimizadas
* Lazy loading
* Compressão WebP

---

# Compartilhamento

Adicionar:

Open Graph:

* imagem de capa
* título
* descrição

Objetivo:

Quando alguém mandar o link no WhatsApp aparecer um card bonito.

---

# Recursos extras

## Contagem regressiva

Exemplo:

"Faltam X dias para o Arraiá"

---

## Botão WhatsApp

Compartilhar:

"Venha para a Festa Junina da Paróquia São Benedito 🎉"

---

## Mapa interativo

Adicionar rota usando Google Maps.

---

# Tecnologias sugeridas

Frontend:

* React
* Next.js

Estilo:

* Tailwind CSS

Hospedagem:

* Vercel

Banco (caso necessário):

* Supabase

---

# Organização de páginas

```
/
├── inicio
├── sobre
├── programacao
├── comidas
├── galeria
├── localizacao
└── contato
```

---

# Referências do evento

Matérias relacionadas:

* Jornal Mais Bragança:
  https://jornalmaisbraganca.com.br/2026/06/04/paroquia-sao-benedito-realiza-tradicional-festa-junina-com-shows-quadrilhas-e-gastronomia-neste-fim-de-semana/

* A Cidade On:
  https://www.acidadeon.com/tudoep/especiais/rota-do-arraia/campinas/rota-do-arraia-em-campinas-festa-junina-da-paroquia-de-sao-benedito-tem-musica-ao-vivo-e-show-de-premios-de-07-a-29-de-junho/

---

# Resultado esperado

Um WebApp moderno que:

* Divulga a festa
* Facilita acesso da comunidade
* Ajuda visitantes a encontrarem o evento
* Possui boa indexação no Google
* Pode ser reutilizado em futuras edições da festa

---

# Observação SEO

Não existe garantia de primeiro lugar no Google.

Para aumentar a chance:

* Publicar com antecedência
* Conseguir links apontando para o site
* Compartilhar em redes sociais
* Atualizar informações
* Ter conteúdo original
* Cadastrar no Google Search Console
* Criar perfil no Google Business Profile da paróquia
S