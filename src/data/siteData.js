// Centralize aqui todas as informações fáceis de alterar no futuro.

export const empresa = {
  nome: 'Vanessa Beauty Spa',
  logoAlt: 'Vanessa Beauty Spa',
};

export const contato = {
  whatsapp: '[ADICIONAR NÚMERO DE WHATSAPP]',
  whatsappLink: 'https://wa.me/[ADICIONAR]', // substitua pelo número completo, ex: 5511999999999
  telefone: '[ADICIONAR TELEFONE]',
  endereco: '[ADICIONAR ENDEREÇO]',
  horario: '[ADICIONAR HORÁRIO DE ATENDIMENTO]',
  instagram: '[ADICIONAR @INSTAGRAM]',
  instagramLink: 'https://instagram.com/[ADICIONAR]',
  mapsEmbedUrl: '', // cole aqui a URL do iframe do Google Maps quando disponível
};

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Podologia', href: '#podologia' },
  { label: 'Cabeleireira', href: '#cabeleireira' },
  { label: 'Contato', href: '#contato' },
];

export const servicosPodologia = [
  {
    id: 'podoprofilaxia',
    nome: 'Podoprofilaxia',
    descricao:
      'Procedimento voltado à prevenção e aos cuidados dos pés, incluindo higiene, corte e cuidados das unhas e manutenção da saúde dos pés.',
    preco: 'R$ 0,00',
    icone: 'sparkle',
  },
  {
    id: 'pes-diabeticos',
    nome: 'Pés Diabéticos',
    descricao:
      'Atendimento especializado para cuidados dos pés de pessoas com diabetes, com foco em prevenção, segurança e cuidados adequados.',
    preco: 'R$ 0,00',
    icone: 'shield',
  },
];

export const diferenciais = [
  {
    titulo: 'Atendimento personalizado',
    texto: 'Cada cliente recebe cuidado individual, respeitando suas necessidades específicas.',
    icone: 'heart',
  },
  {
    titulo: 'Cuidado em cada detalhe',
    texto: 'Processos cuidadosos, do início ao fim de cada atendimento.',
    icone: 'leaf',
  },
  {
    titulo: 'Conforto e bem-estar',
    texto: 'Um ambiente pensado para o seu relaxamento e tranquilidade.',
    icone: 'feather',
  },
  {
    titulo: 'Experiência completa de beleza',
    texto: 'Podologia e cabelo em um só espaço, com o mesmo padrão de excelência.',
    icone: 'star',
  },
];

export const galeria = [
  { src: '/images/galeria-1.svg', alt: 'Ambiente do spa — substituir imagem' },
  { src: '/images/galeria-2.svg', alt: 'Cuidados com os pés — substituir imagem' },
  { src: '/images/galeria-3.svg', alt: 'Salão de beleza — substituir imagem' },
  { src: '/images/galeria-4.svg', alt: 'Detalhes de bem-estar — substituir imagem' },
  { src: '/images/galeria-5.svg', alt: 'Atendimento de podologia — substituir imagem' },
  { src: '/images/galeria-6.svg', alt: 'Espaço de beleza — substituir imagem' },
];

export const depoimentosPlaceholder = [1, 2, 3];
