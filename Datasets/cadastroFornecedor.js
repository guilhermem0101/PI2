///HEINEKEN
db.fornecedor.insertOne({
  CNPJ: 12.015.5150001-44,
  Nome: 'Heineken Brasil',
  razao_social: 'Heineken Brazil B V',
  endereco: [
    {
      logradouro: 'Rua Olimpíadas' ,
      num: 205,
      bairro: '',
      uf: 'SP',
      cep: 03178-200
    },
  ],
  contatos: [
    {
      dd: 11,
      tel: 2802-0000,
      Email: 'sac@heineken.com.br'
    },
  ],
  servico: 'A Heineken Brasil é uma empresa brasileira de bebidas fabricante de cerveja, refrigerantes, energéticos e água mineral.',
  categorias: ['Cervejas', 'Refrigerantes'],
  Status: 'Ativa',   prazo_entrega: 20
})

///ASSAI
db.fornecedor.insertOne({
  CNPJ: 06.057.2230001-71,
  Nome: 'Assaí Atacadista',
  razao_social: 'SENDAS DISTRIBUIDORA S/A',
  endereco: [
    {
      logradouro: 'Rua Maria Luiza Santiago',
      num:110,
      bairro: '',
      uf: 'MG',
      cep: 30.360-740,
      cidade: 'Belo Horizonte'
    },
    {
      logradouro: 'Rodovia BR-116' ,
      num: 18580,
      bairro: 'Pinheirinho',
      uf: 'PR',
      cep: 81690-400,
      cidade: 'Curitiba'
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 773-2322,
      Email: ''
    },
    {
      dd: 3003,
      tel: 3030,
      Email: ''
    },
    {
      dd: 0800,
      tel: 720-3030,
      Email: ''
    },
  ],
  servico: 'A empresa oferece mais de 7 mil itens, abrangendo categorias como mercearia, embalagens, bazar, higiene, bebidas, limpeza e produtos perecíveis.',
  categorias: ['Alimentos', 'Bebidas', 'Higiene pessoal', 'Limpeza', 'Bazar', 'Automotiva', 'Pet', 'Eletroportáteis', 'Embalagens', 'Descartáveis'],
  Status: 'Ativa',   prazo_entrega: 20
}),


//UNILEVER

{
  CNPJ: 61.068.2760001-04,
  Nome: 'Unilever Brasil Ltda',
  razao_social: 'Unilever Brasil Ltda',
  endereco: [
    {
      logradouro: 'Avenida das Nações Unidas ',
      num: 14261,
      bairro: '',
      uf: 'SP',
      cep: 04794-000,
      cidade: 'São Paulo'
    },
  ],
  contatos: [
    {
      dd: 11,
      tel: 3741-4326,
      Email: ''
    },
    {
      dd: 0800,
      tel: 7079977,
      Email: 'sac@unilever.com.br'
    },
  ],
  servico: 'A Unilever Brasil é uma empresa de bens de consumo que atua nas categorias de limpeza do lar, cuidados pessoais, alimentação, sorvetes e bebidas. Ela possui 40 marcas.',
  categorias: ['Limpeza do lar', 'Cuidados pessoais', 'Alimentação', 'Sorvetes', 'Bebidas'],
  Status: 'Ativa',   prazo_entrega: 20
},
//PECCIN
{
  CNPJ: 89.425.8880001-18,
  Nome: 'Peccin S.A.',
  razao_social: 'Peccin S.A.',
  endereco: [
    {
      logradouro: 'Rua Doutor Sidney Guerra',
      num: 1700,
      bairro: 'Copas Verdes',
      uf: 'RS',
      cep: 99704-660,
      cidade: 'Erechim'
    },
  ],
  contatos: [
    {
      dd: 54,
      tel: 3520-9797,
      Email: ''
    },
  ],
  servico: 'A Peccin é uma empresa brasileira que fabrica chicletes, balas e chocolates. Ela é a 5ª maior fabricante no segmento de frutas cristalizadas, balas e semelhantes do Brasil. Ela criou a marca de chocolates Trento, que viralizou nas redes sociais por apresentar, na opinião dos internautas, qualidade superior em relação aos doces produzidos por empresas concorrentes.',
  Status: 'Ativa',   prazo_entrega: 20
},


db.fornecedor.insertOne(//MONDELEZ
{
  CNPJ: 33.033.0280001-84,
  Nome: 'Mondelez Brasil',
  razao_social: 'Mondelez Brasil Ltda',
  nome_fantasia: 'Mondelez Brasil',
  endereco: [
    {
      logradouro: 'Avenida Juscelino Kubitschek de Oliveira',
      num: 13300,
      bairro: 'Conjunto Administrativo, Cidade Industrial',
      uf: 'PR',
      cep: 81460-000,
      cidade: 'Curitiba'
    },
    {
      logradouro: '',
      num: '',
      bairro: '',
      uf: 'SP',
      cep: '',
      cidade: 'São Paulo'
    },
  ],
  contatos: [
    {
      dd: 41,
      tel: 3212-8115,
      Email: 'corporate.brasil@mdlz.com'
    },
    {
      dd: 11,
      tel: 2179-1600,
      Email: ''
    },
  ],
  servico: 'A Mondelez Brasil é líder ou co-líder nas categorias de Chocolates, Gomas, Balas, Biscoitos, Bebidas em Pó, Sobremesas em Pó e Queijos. Eles têm várias marcas, incluindo Belvita, Chips Ahoy!, Nabisco, Oreo, Ritz, TUC, Triscuit, LU, Club Social, Barny, Peek Freans, marcas de chocolate Milka, Côte d’Or, Toblerone, Cadbury, Green & Black’s, Freia, Marabou, Fry’s, Lacta, marcas de pastilhas elásticas e para tosse Trident, Dentyne, Chiclets, Halls, Bubbaloo, Clorets, Plets, Stride, Tate’s Bake Shop, fermento em pó e sobremesas Royal e a marca de bebidas em pó Tang, Fresh e Clight.',
  categorias: ['Chocolates', 'Gomas', 'Balas', 'Biscoitos', 'Bebidas em Pó', 'Sobremesas em Pó', 'Queijos'],
 Status: 'Ativa',   prazo_entrega: 30
}),

//RED BULL

{
    CNPJ: 33.033.0280001-84,
    Nome: 'Mondelez Brasil',
    razao_social: 'Mondelez Brasil Ltda',
    nome_fantasia: 'Mondelez Brasil',
    endereco: [
        {
            logradouro: 'Avenida Juscelino Kubitschek de Oliveira',
            num:  13300,
            bairro: 'Conjunto Administrativo, Cidade Industrial',
            uf: 'PR',
            cep: 81460-000,
            cidade: 'Curitiba'
        },
        {
            logradouro: '',
            num: '',
            bairro: '',
            uf: 'SP',
            cep: '',
            cidade: 'São Paulo'
        },
    ],
    contatos: [
        {
            dd: 41,
            tel: 3212-8115,
            Email: 'corporate.brasil@mdlz.com'
        },
        {
            dd: 11,
            tel: 2179-1600,
            Email: ''
        },
    ],
    servico: 'A Mondelez Brasil é líder ou co-líder nas categorias de Chocolates, Gomas, Balas, Biscoitos, Bebidas em Pó, Sobremesas em Pó e Queijos. Eles têm várias marcas, incluindo Belvita, Chips Ahoy!, Nabisco, Oreo, Ritz, TUC, Triscuit, LU, Club Social, Barny, Peek Freans, marcas de chocolate Milka, Côte d’Or, Toblerone, Cadbury, Green & Black’s, Freia, Marabou, Fry’s, Lacta, marcas de pastilhas elásticas e para tosse Trident, Dentyne, Chiclets, Halls, Bubbaloo, Clorets, Plets, Stride, Tate’s Bake Shop, fermento em pó e sobremesas Royal e a marca de bebidas em pó Tang, Fresh e Clight.',
    categorias: ['Chocolates', 'Gomas', 'Balas', 'Biscoitos', 'Bebidas em Pó', 'Sobremesas em Pó', 'Queijos'],
   Status: 'Ativa',   prazo_entrega: 20
}
//Bombril

db.fornecedor.insertOne({
  CNPJ: 50.564.0530001-03,
  Nome: 'Bombril',
  razao_social: 'Bombril S.A.',
  endereco: [
    {
      logradouro: 'Rodovia Anchieta',
      num: 'Km 14',
      bairro: 'Rudge Ramos',
      uf: 'SP',
      cep: 09696-000
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 7076161,
      Email: 'sac@bombril.com.br'
    },
  ],
  servico: 'A Bombril é uma empresa brasileira que fabrica produtos de higiene e limpeza. Ela é conhecida por sua linha de produtos que inclui esponjas de aço, detergentes, amaciantes, desinfetantes, limpadores multiuso, saponáceos, limpadores perfumados, esponja sintética e outros itens essenciais da limpeza doméstica.',
  categorias: ['Higiene e Limpeza', 'Esponjas de Aço', 'Detergentes', 'Amaciantes', 'Desinfetantes', 'Limpadores Multiuso', 'Saponáceos', 'Limpadores Perfumados', 'Esponja Sintética'],
 Status: 'Ativa',   prazo_entrega: 20
}),

//Ypê

{
    CNPJ: 02.940.0280001-34,
    Nome: "Ypê",
    razao_social: "Química Amparo",
    endereco: [{
        logradouro: "Av. Valdir Beira",
        num: 1000,
        bairro: "Jardim da Figueira",
        uf: "SP",
        cep: 13904-906
    }],
    contatos: [{
        dd: 19,
        tel: 3808-80,
        Email: "imprensaype@gbr.com.br"
    }],
    servico: "Produtos de limpeza para a casa, cuidado com as roupas, com as louças e cuidados pessoais",  
    categorias: ["limpeza da casa", "cuidado com a roupa", "cuidados com as louças", "higiene corporal"],
    Status: "Ativa"
},

//Procter & Gamble (P&G)
{
    CNPJ: 59.4767700041-45,
    Nome: "Procter & Gamble do Brasil",
    razao_social: "Procter & Gamble do Brasil Ltda",
    endereco: [{
        logradouro: "Av. Dr. Chucri Zaidan",
        num: 296,
        bairro: "Vila Cordeiro",
        uf: "SP",
        cep: 04583-110
    }],
    contatos: [{
        dd: 0800,
        tel: 701-5515,
        Email: "sac@pg.com"
    }],
    servico: "A P&G Brasil é uma empresa de bens de consumo que produz produtos de alta qualidade nas categorias de saúde pessoal, saúde do consumidor e produtos de cuidados pessoais",
    categorias: ["saúde pessoal", "saúde do consumidor", "cuidados pessoais"],
    Status: "Ativa"
},

//Nestlé

{
    CNPJ: 60.409.0750001-52,
    Nome: "Nestlé Brasil",
    razao_social: "Nestle Brasil LTDA",
    endereco: [{
        logradouro: "Av. das Nações Unidas",
        num: 17007,
        bairro: "Várzea de Baixo",
        uf: "SP",
        cep: 04578-000
    }],
    contatos: [{
        dd: 11,
        tel: 5508-4400,
        Email: "falecom@nestle.com.br"
    }],
    servico: "A Nestlé Brasil é uma empresa de bens de consumo que produz produtos de alta qualidade nas categorias de alimentos para bebês, águas engarrafadas, cereais, chocolates e confeitos, café, culinária e produtos culinários, alimentos resfriados e congelados, produtos lácteos, bebidas, serviços de alimentação profissional, nutrição voltada para cuidados com a saúde, sorvetes, petcare e gestão de peso",
    categorias: ["alimentos para bebês", "águas engarrafadas", "cereais", "chocolates e confeitos", "café", "culinária e produtos culinários", "alimentos resfriados e congelados", "produtos lácteos", "bebidas", "serviços de alimentação profissional", "nutrição voltada para cuidados com a saúde", "sorvetes", "petcare", "gestão de peso"],
    Status: "Ativa"
},

//Pepsico
{
    CNPJ: 31.565.1040001-77,
    Nome: "Pepsico do Brasil",
    razao_social: "Pepsico do Brasil LTDA",
    endereco: [{
        logradouro: "Av. das Nações Unidas",
        num: 14171,
        bairro: "Vila Gertrudes",
        uf: "SP",
        cep: 04794-000
    }],
    contatos: [{
        dd: 0800,
        tel: 703-4444,
        Email: "sac@pepsico.com"
    }],
    servico: "A Pepsico Brasil é uma empresa de bens de consumo que produz produtos de alta qualidade nas categorias de alimentos e bebidas",
    categorias: ["alimentos", "bebidas"],
    Status: "Ativa"
},

//Wickbold

{
    CNPJ: 62.691.0430001-18,
    Nome: "Wickbold",
    razao_social: "Wickbold & Nosso Pao Industrias Alimenticias LTDA",
    endereco: [{
        logradouro: "Av. Presidente Juscelino",
        num: 734,
        bairro: "Piraporinha",
        uf: "SP",
        cep: 09950-900
    }],
    contatos: [{
        dd: 11,
        tel: 3124-35,
        Email: "sac@wickbold.com.br"
    }],
    servico: "A Wickbold é uma empresa brasileira de alimentos que atua na fabricação de pães, panetones e entre outros produtos à base de massas",
    categorias: ["pães", "panetones", "produtos à base de massas"],
    Status: "Ativa"
},

//Pullman
{
    CNPJ: 30.857.6840001-03,
    Nome: "Pullman",
    razao_social: "Pallmann do Brasil Industria e Comercio em Recuperacao Judicial",
    endereco: [{
        logradouro: "Av. Presidente Juscelino",
        num: 734,
        bairro: "Piraporinha",
        uf: "SP",
        cep: 09950-900
    }],
    contatos: [{
        dd: 11,
        tel: 3124-35,
        Email: "sac@pullman.com.br"
    }],
    servico: "A Pullman é conhecida por seus hotéis exclusivos em sintonia com o mundo moderno, conectando desempenho e prazer",
    categorias: ["hotéis"],
    Status: "Ativa"
},

//Bauducco
{
    CNPJ: 60.409.0750001-52,
    Nome: "Bauducco",
    razao_social: "Bauducco & Cia Ltda",
    endereco: [{
        logradouro: "Av. das Nações Unidas",
        num: 17007,
        bairro: "Várzea de Baixo",
        uf: "SP",
        cep: 04578-000
    }],
    contatos: [{
        dd: 11,
        tel: 5508-4400,
        Email: "sac@bauducco.com.br"
    }],
    servico: "A Bauducco é conhecida por seus produtos alimentícios, incluindo panetones, biscoitos, bolos e pães de mel",
    categorias: ["panetones", "biscoitos", "bolos", "pães de mel"],
    Status: "Ativa"
},


//Fornecedores de produtos de açougue:
//Friboi
db.fornecedor.insertOne({
  CNPJ: 02.914.2650029-77,
  Nome: 'Friboi',
  razao_social: 'JBS S.A.',
  endereco: [
    {
      logradouro: 'Rua Antônio Prado',
      num: 300,
      bairro: 'Centro',
      uf: 'SP',
      cep: 01010-000
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 7001111,
      Email: 'faleconosco@jbs.com.br'
    },
  ],
  servico: 'A Friboi é uma marca de produtos de carne bovina e pertence à JBS S.A.',
  categorias: ['Carnes Bovinas'],
  Status: 'Ativa',   prazo_entrega: 20 , 
}),

//Seara
db.fornecedor.insertOne({
  CNPJ: 02.914.2650029-77,
  Nome: 'Friboi',
  razao_social: 'JBS S.A.',
  endereco: [
    {
      logradouro: 'Rua Antônio Prado',
      num: 300,
      bairro: 'Centro',
      uf: 'SP',
      cep: 01010-000
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 7001111,
      Email: 'faleconosco@jbs.com.br'
    },
  ],
  servico: 'A Friboi é uma marca de produtos de carne bovina e pertence à JBS S.A.',
  categorias: ['Carnes Bovinas'],
  Status: 'Ativa',   prazo_entrega: 20
}),

//Perdigão
db.fornecedor.insertOne({
  CNPJ: 01.838.7230026-09,
  Nome: 'Perdigão',
  razao_social: 'BRF S.A.',
  endereco: [
    {
      logradouro: 'Rua Hungria',
      num: 1400,
      bairro: 'Jardim Europa',
      uf: 'SP',
      cep: 01455-000
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 7021818,
      Email: 'sac@brf-br.com'
    },
  ],
  servico: 'A Perdigão é uma marca de produtos alimentícios, especialmente conhecida por seus produtos de carne, e pertence à BRF S.A.',
  categorias: ['Carnes Diversas'],
  Status: 'Ativa',   prazo_entrega: 20
}),


//Fornecedores de laticínios:
//Lactalis

db.fornecedor.insertOne({
  CNPJ: 44.356.6910001-30,
  Nome: 'Lactalis',
  razao_social: 'Lactalis do Brasil Comércio e Indústria de Produtos Alimentícios Ltda.',
  endereco: [
    {
      logradouro: 'Avenida Dom Pedro II',
      num: 1051,
      bairro: 'Campestre',
      uf: 'SP',
      cep: 09080-111
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 7054212,
      Email: 'sac@lactalis.com.br'
    },
  ],
  servico: 'A Lactalis é uma empresa que atua no ramo de laticínios.',
  categorias: ['Laticínios'],
  Status: 'Ativa',   prazo_entrega: 20
}),

//Vigor

db.fornecedor.insertOne({
  CNPJ: 14.564.6950001-87,
  Nome: 'Vigor',
  razao_social: 'Vigor Alimentos S.A.',
  endereco: [
    {
      logradouro: 'Rua Fulvia Spinelli',
      num: 141,
      bairro: 'Vila Olimpia',
      uf: 'SP',
      cep: 04550-000
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 7284100,
      Email: "N/a" }]}),

//Fornecedores de produtos de hortifruti:
//CEAGESP 
db.fornecedor.insertOne({
  CNPJ: 62.338.3670001-89,
  Nome: 'CEAGESP',
  razao_social: 'Companhia de Entrepostos e Armazéns Gerais de São Paulo',
  endereco: [
    {
      logradouro: 'Avenida Doutor Gastão Vidigal',
      num: 1946,
      bairro: 'Vila Leopoldina',
      uf: 'SP',
      cep: 05022-000
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 1147275000,
      Email: 'faleconosco@ceagesp.gov.br'
    },
  ],
  servico: 'A CEAGESP é uma empresa que atua no mercado atacadista de frutas, verduras, legumes, flores e pescados.',
  categorias: ['Hortifruti'],
  Status: 'Ativa',   prazo_entrega: 20
}),



//Fornecedores de embalagens:
//Plasvale
db.fornecedor.insertOne({
  CNPJ: 80.128.4790001-85,
  Nome: 'Plasvale',
  razao_social: 'Plasvale Indústria e Comércio de Plásticos Vale Ltda.',
  endereco: [
    {
      logradouro: 'Rua João Gurgel',
      num: 137,
      bairro: 'Santa Rita',
      uf: 'SC',
      cep: 89290-000
    },
  ],
  contatos: [
    {
      dd: 047,
      tel: 3644000,
      Email: 'contato@plasvale.com.br'
    },
  ],
  servico: 'A Plasvale é uma empresa que atua na fabricação de produtos plásticos, incluindo embalagens.',
  categorias: ['Embalagens'],
  Status: 'Ativa',   prazo_entrega: 20
}),

//Copobras

db.fornecedor.insertOne({
  CNPJ: 82.739.7920001-41,
  Nome: 'Copobras',
  razao_social: 'Copobras S.A. Indústria e Comércio',
  endereco: [
    {
      logradouro: 'Rua Venâncio Aires',
      num: 398,
      bairro: 'Centro',
      uf: 'SC',
      cep: 89140-000
    },
  ],
  contatos: [
    {
      dd: 047,
      tel: 3645000,
      Email: 'copobras@copobras.com.br'
    },
  ],
  servico: 'A Copobras é uma empresa que atua na fabricação de produtos plásticos, incluindo embalagens.',
  categorias: ['Embalagens'],
  Status: 'Ativa',   prazo_entrega: 20
}),

//Cromus
db.fornecedor.insertOne({
  CNPJ: 60.212.7960001-47,
  Nome: 'Cromus',
  razao_social: 'Cromus Embalagens Ltda.',
  endereco: [
    {
      logradouro: 'Rua Manuel Joaquim da Silva',
      num: 75,
      bairro: 'Jardim Riacho das Pedras',
      uf: 'MG',
      cep: 32241-270
    },
  ],
  contatos: [
    {
      dd: 031,
      tel: 21050000,
      Email: 'sac@cromus.com.br'
    },
  ],
  servico: 'A Cromus é uma empresa que atua na fabricação de embalagens.',
  categorias: ['Embalagens'],
  Status: 'Ativa',   prazo_entrega: 20
}),

//Fornecedores de produtos de limpeza e manutenção:
//3M
db.fornecedor.insertOne({
  CNPJ: 60.564.6900001-64,
  Nome: '3M',
  razao_social: '3M do Brasil Ltda.',
  endereco: [
    {
      logradouro: 'Avenida Maria Coelho Aguiar',
      num: 215,
      bairro: 'Jardim São Luís',
      uf: 'SP',
      cep: 05804-900
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 013627-2210,
      Email: '3mbrasil@mmm.com'
    },
  ],
  servico: 'A 3M é uma empresa que atua na fabricação de produtos diversos, incluindo produtos de limpeza e manutenção.',
  categorias: ['Produtos Diversos', 'Limpeza e Manutenção'],
  Status: 'Ativa',   prazo_entrega: 30
}),

//Veja
db.fornecedor.insertOne({
  CNPJ: 50.017.3320001-09,
  Nome: 'Veja',
  razao_social: 'Reckitt Benckiser (Brasil) Ltda.',
  endereco: [
    {
      logradouro: 'Avenida das Nações Unidas',
      num: 14171,
      bairro: 'Vila Gertrudes',
      uf: 'SP',
      cep: 04794-000
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 08007017017,
      Email: 'sac@reckitt.com.br'
    },
  ],
  servico: 'Veja é uma marca de produtos de limpeza, especialmente conhecida por seus produtos de limpeza doméstica.',
  categorias: ['Limpeza e Manutenção'],
  Status: 'Ativa',   prazo_entrega: 20
}),




//Johnson & Johnson (para produtos de limpeza)
db.fornecedor.insertOne({
  CNPJ: 50.746.5770001-15,
  Nome: 'Johnson & Johnson',
  razao_social: 'Johnson & Johnson Consumo do Brasil Ltda.',
  endereco: [
    {
      logradouro: 'Avenida Presidente Juscelino Kubitschek',
      num: 2041,
      bairro: 'Vila Olímpia',
      uf: 'SP',
      cep: 04543-011
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 70350100,
      Email: 'sac@jnjbrasil.com.br'
    },
  ],
  servico: 'A Johnson & Johnson é uma empresa que atua na fabricação de produtos diversos, incluindo produtos de limpeza.',
  categorias: ['Produtos Diversos', 'Limpeza e Manutenção'],
  Status: 'Ativa',   prazo_entrega: 30
}),


//Fornecedores de produtos de papelaria:
//Kalunga
db.fornecedor.insertOne({
  CNPJ: 43.283.8110001-50,
  Nome: 'Kalunga',
  razao_social: 'KLC Participações Ltda.',
  endereco: [
    {
      logradouro: 'Rua da Mooca',
      num: 766,
      bairro: 'Mooca',
      uf: 'SP',
      cep: 03104-000
    },
  ],
  contatos: [
    {
      dd: 011,
      tel: 33461600,
      Email: 'sac@kalunga.com.br'
    },
  ],
  servico: 'A Kalunga é uma empresa brasileira que atua no setor de papelaria e materiais de escritório.',
  categorias: ['Papelaria'],
  Status: 'Ativa',   prazo_entrega: 20
}),

//Tilibra
db.fornecedor.insertOne({
  CNPJ: 61.084.0040001-92,
  Nome: 'Tilibra',
  razao_social: 'Bignardi Indústria Gráfica Ltda.',
  endereco: [
    {
      logradouro: 'Rua do Curtume',
      num: 1750,
      bairro: 'Água Branca',
      uf: 'SP',
      cep: 05074-000
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 40037020,
      Email: 'sac@tilibra.com.br'
    },
  ],
  servico: 'A Tilibra é uma empresa brasileira que atua no setor de papelaria e materiais de escritório.',
  categorias: ['Papelaria'],
  Status: 'Ativa',   prazo_entrega: 30
}),

//Faber-Castell
db.fornecedor.insertOne({
  CNPJ: 56.840.6810001-00,
  Nome: 'Faber-Castell',
  razao_social: 'Faber-Castell do Brasil Ltda.',
  endereco: [
    {
      logradouro: 'Rua Alexandre Dumas',
      num: 1658,
      bairro: 'Chácara Santo Antônio',
      uf: 'SP',
      cep: 04717-904
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 0800985800,
      Email: 'sac@faber-castell.com.br'
    },
  ],
  servico: 'A Faber-Castell é uma empresa alemã que atua no setor de papelaria e materiais de escritório.',
  categorias: ['Papelaria'],
  Status: 'Ativa',   prazo_entrega: 20
}),


//Fornecedores de produtos de conveniência:
//Mars
db.fornecedor.insertOne({
  CNPJ: 60.500.1390001-26,
  Nome: 'Mars',
  razao_social: 'Mars Brasil Comercial Ltda.',
  endereco: [
    {
      logradouro: 'Rua Dr. Renato Paes de Barros',
      num: 1017,
      bairro: 'Itaim Bibi',
      uf: 'SP',
      cep: 04530-001
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 08007736869,
      Email: 'sac@mars.com'
    },
  ],
  servico: 'A Mars é uma empresa global que atua no setor de alimentos, incluindo chocolates e snacks.',
  categorias: ['Alimentos e Bebidas', 'Conveniência'],
  Status: 'Ativa',   prazo_entrega: 20
}),

//Nestlé (para chocolates e snacks)
db.fornecedor.insertOne({
  CNPJ: 60.409.0750001-32,
  Nome: 'Nestlé',
  razao_social: 'Nestlé Brasil Ltda.',
  endereco: [
    {
      logradouro: 'Avenida Doutor Chucri Zaidan',
      num: 246,
      bairro: 'Vila Cordeiro',
      uf: 'SP',
      cep: 04583-110
    },
  ],
  contatos: [
    {
      dd: 0800,
      tel: 7098599,
      Email: 'sac@nestle.com.br'
    },
  ],
  servico: 'A Nestlé é uma empresa suíça de alimentos e bebidas, e no Brasil, atua em diversas categorias, incluindo chocolates e snacks.',
  categorias: ['Alimentos e Bebidas', 'Conveniência'],
  Status: 'Ativa',   prazo_entrega: 30
})
