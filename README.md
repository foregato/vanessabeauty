# Vanessa Beauty Spa — Site Institucional

Site institucional em React + Vite para a Vanessa Beauty Spa (Podologia e Cabeleireira).

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Onde editar as informações

Tudo o que muda com frequência está centralizado em:

- **`src/data/siteData.js`** — nome da empresa, contato, WhatsApp, Instagram, endereço, horário, serviços de podologia, diferenciais e imagens da galeria.
- **`src/styles/variables.css`** — cores principais do site (dourado, grafite, branco, verde menta).
- **`public/images/`** — imagens placeholder. Substitua pelos arquivos finais mantendo os mesmos nomes (ou atualize os caminhos em `siteData.js` e nos componentes).
- **Logo**: `src/assets/logo.jpeg` (usada no Header e Footer) e `public/images/logo.jpeg` — é o arquivo oficial enviado, não deve ser alterado.

## Textos com placeholders

Os seguintes campos contêm `[ADICIONAR]` e devem ser preenchidos antes de publicar:

- WhatsApp, telefone, endereço, horário e Instagram (`src/data/siteData.js`)
- Link do Google Maps (`contato.mapsEmbedUrl`)
- Depoimentos reais (`src/components/Testimonials.jsx`)
- Textos institucionais de "Sobre" e "Cabeleireira" (marcados com comentário `TEXTO EDITÁVEL`)

## Estrutura

```
public/          arquivos estáticos, imagens, favicon, robots.txt, sitemap.xml
src/assets/      logo oficial
src/components/  componentes reutilizáveis (Header, Hero, Podology, etc.)
src/data/        dados centralizados (siteData.js)
src/pages/       página Home
src/styles/      CSS global e variáveis de cor
```

## Observações

- Os dois únicos serviços de podologia (Podoprofilaxia e Pés Diabéticos) estão com preço `R$ 0,00`, conforme solicitado — atualize em `siteData.js`.
- A seção Cabeleireira está preparada para receber os serviços reais futuramente.
- Nenhum dado de contato, endereço, avaliação ou preço foi inventado.
"# vanessabeauty"  
