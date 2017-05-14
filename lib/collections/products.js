Products = [
  {
    "sku" : "illudium-q36",
    "name" : "Chatbot Básico para Facebook",
    "image" : "illudium-q36.jpg",
    "summary" : "Precisa de algo para responder seus clientes rapidamente? O novo bot Facebook Messenger é a solução",
    "description" : "Bot clássico para responder perguntas frequentes",
    "price" : 4900,
    "vendor" : {
      "id" : 1,
      "slug" : "luiz-guilherme",
      "name" : "Luiz Guilherme Santos da Silva"
    }
  },
  {
    "sku" : "honeymoon-mars",
    "name" : "Chatbot de Lembretes para Telegram",
    "image" : "honeymoon-mars.jpg",
    "summary" : "Não consegue se lembrar de seus comprosmissos? Seus problemas acabaram!",
    "description" : "Chatbot para criar lembretes e avisar participantes de um grupo",
    "price" : 3500,
    "vendor" : {
      "id" : 1,
      "slug" : "luiz-guilherme",
      "name" : "Luiz Guilherme Santos da Silva"
    }
  },
  {
    "sku" : "mars-trek",
    "name" : "Chatbot - Feed de Notícias para Facebook Messenger",
    "image" : "mars-trek.jpg",
    "summary" : "Mantenha os seus clientes atualizados com as ultimas notícias do seu site!",
    "description" : "Bot básico de feed de notícias no Facebook",
    "price" : 2100,
    "vendor" : {
      "id" : 1,
      "slug" : "luiz-guilherme",
      "name" : "Luiz Guilherme Santos da Silva"
    }
  },
  {
    "sku" : "moon-races",
    "name" : "Chatbot avançado de Perguntas e Respostas",
    "image" : "moon-races.jpg",
    "summary" : "Não perca tempo respondendo perguntas bobas, fazemos isso pra você!",
    "description" : "Bot avançado de Perguntas e respostas para Websites",
    "price" : 2100,
    "vendor" : {
      "id" : 1,
      "slug" : "luiz-guilherme",
      "name" : "Luiz Guilherme Santos da Silva"
    }
  },
];

Products.featured = function (){
  var featuredSkus = ["honeymoon-mars", "illudium-q36", "mars-trek"];
  return _.filter(Products, function(product){
    return featuredSkus.indexOf(product.sku) > -1;
  });
};

Products.findOne = function(args) {
  return _.find(Products, function(product){
    return product.sku === args.sku;
  });
};