///HEINEKEN
db.fornecedor.insertOne({
  CNPJ: '12.015.515/0001-44',
  Nome: 'Heineken Brasil',
  razao_social: 'Heineken Brazil B V',
  endereco: [
    {
      logradouro: 'Rua Olimpíadas 205',
      num: '',
      bairro: '',
      uf: 'SP',
      cep: '03178-200'
    },
  ],
  contatos: [
    {
      dd: '11',
      tel: '2802-0000',
      Email: 'sac@heineken.com.br'
    },
  ],
  servico: 'A Heineken Brasil é uma empresa brasileira de bebidas fabricante de cerveja, refrigerantes, energéticos e água mineral.',
  categorias: ['Cervejas', 'Refrigerantes'],
  Status: 'Ativa'
})

///ASSAI
db.fornecedor.insertOne({
  CNPJ: '06.057.223/0001-71',
  Nome: 'Assaí Atacadista',
  razao_social: 'SENDAS DISTRIBUIDORA S/A',
  endereco: [
    {
      logradouro: 'Rua Maria Luiza Santiago, 110',
      num: '',
      bairro: '',
      uf: 'MG',
      cep: '30.360-740',
      cidade: 'Belo Horizonte'
    },
    {
      logradouro: 'Rodovia BR-116, 18580',
      num: '',
      bairro: 'Pinheirinho',
      uf: 'PR',
      cep: '81690-400',
      cidade: 'Curitiba'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '773-2322',
      Email: ''
    },
    {
      dd: '3003',
      tel: '3030',
      Email: ''
    },
    {
      dd: '0800',
      tel: '720-3030',
      Email: ''
    },
  ],
  servico: 'A empresa oferece mais de 7 mil itens, abrangendo categorias como mercearia, embalagens, bazar, higiene, bebidas, limpeza e produtos perecíveis.',
  categorias: ['Alimentos', 'Bebidas', 'Higiene pessoal', 'Limpeza', 'Bazar', 'Automotiva', 'Pet', 'Eletroportáteis', 'Embalagens', 'Descartáveis'],
  Status: 'Ativa'
}),


//UNILEVER

{
  CNPJ: '61.068.276/0001-04',
  Nome: 'Unilever Brasil Ltda',
  razao_social: 'Unilever Brasil Ltda',
  endereco: [
    {
      logradouro: 'Avenida das Nações Unidas 14261',
      num: '',
      bairro: '',
      uf: 'SP',
      cep: '04794-000',
      cidade: 'São Paulo'
    },
  ],
  contatos: [
    {
      dd: '11',
      tel: '3741-4326',
      Email: ''
    },
    {
      dd: '0800',
      tel: '707 9977',
      Email: 'sac@unilever.com.br'
    },
  ],
  servico: 'A Unilever Brasil é uma empresa de bens de consumo que atua nas categorias de limpeza do lar, cuidados pessoais, alimentação, sorvetes e bebidas. Ela possui 40 marcas.',
  categorias: ['Limpeza do lar', 'Cuidados pessoais', 'Alimentação', 'Sorvetes', 'Bebidas'],
  Status: 'Ativa'
},
//PECCIN
{
  CNPJ: '89.425.888/0001-18',
  Nome: 'Peccin S.A.',
  razao_social: 'Peccin S.A.',
  endereco: [
    {
      logradouro: 'Rua Doutor Sidney Guerra, 1700',
      num: '',
      bairro: 'Copas Verdes',
      uf: 'RS',
      cep: '99704-660',
      cidade: 'Erechim'
    },
  ],
  contatos: [
    {
      dd: '54',
      tel: '3520-9797',
      Email: ''
    },
  ],
  servico: 'A Peccin é uma empresa brasileira que fabrica chicletes, balas e chocolates. Ela é a 5ª maior fabricante no segmento de frutas cristalizadas, balas e semelhantes do Brasil. Ela criou a marca de chocolates Trento, que viralizou nas redes sociais por apresentar, na opinião dos internautas, qualidade superior em relação aos doces produzidos por empresas concorrentes.',
  Status: 'Ativa'
},


db.fornecedor.insertOne(//MONDELEZ
{
  CNPJ: '33.033.028/0001-84',
  Nome: 'Mondelez Brasil',
  razao_social: 'Mondelez Brasil Ltda',
  nome_fantasia: 'Mondelez Brasil',
  endereco: [
    {
      logradouro: 'Avenida Juscelino Kubitschek de Oliveira, 13300',
      num: '',
      bairro: 'Conjunto Administrativo, Cidade Industrial',
      uf: 'PR',
      cep: '81460-000',
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
      dd: '41',
      tel: '3212-8115',
      Email: 'corporate.brasil@mdlz.com'
    },
    {
      dd: '11',
      tel: '2179-1600',
      Email: ''
    },
  ],
  servico: 'A Mondelez Brasil é líder ou co-líder nas categorias de Chocolates, Gomas, Balas, Biscoitos, Bebidas em Pó, Sobremesas em Pó e Queijos. Eles têm várias marcas, incluindo Belvita, Chips Ahoy!, Nabisco, Oreo, Ritz, TUC, Triscuit, LU, Club Social, Barny, Peek Freans, marcas de chocolate Milka, Côte d’Or, Toblerone, Cadbury, Green & Black’s, Freia, Marabou, Fry’s, Lacta, marcas de pastilhas elásticas e para tosse Trident, Dentyne, Chiclets, Halls, Bubbaloo, Clorets, Plets, Stride, Tate’s Bake Shop, fermento em pó e sobremesas Royal e a marca de bebidas em pó Tang, Fresh e Clight.',
  categorias: ['Chocolates', 'Gomas', 'Balas', 'Biscoitos', 'Bebidas em Pó', 'Sobremesas em Pó', 'Queijos'],
  Status: 'Ativa',
}),

//RED BULL

{
    CNPJ: '33.033.028/0001-84',
    Nome: 'Mondelez Brasil',
    razao_social: 'Mondelez Brasil Ltda',
    nome_fantasia: 'Mondelez Brasil',
    endereco: [
        {
            logradouro: 'Avenida Juscelino Kubitschek de Oliveira, 13300',
            num: '',
            bairro: 'Conjunto Administrativo, Cidade Industrial',
            uf: 'PR',
            cep: '81460-000',
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
            dd: '41',
            tel: '3212-8115',
            Email: 'corporate.brasil@mdlz.com'
        },
        {
            dd: '11',
            tel: '2179-1600',
            Email: ''
        },
    ],
    servico: 'A Mondelez Brasil é líder ou co-líder nas categorias de Chocolates, Gomas, Balas, Biscoitos, Bebidas em Pó, Sobremesas em Pó e Queijos. Eles têm várias marcas, incluindo Belvita, Chips Ahoy!, Nabisco, Oreo, Ritz, TUC, Triscuit, LU, Club Social, Barny, Peek Freans, marcas de chocolate Milka, Côte d’Or, Toblerone, Cadbury, Green & Black’s, Freia, Marabou, Fry’s, Lacta, marcas de pastilhas elásticas e para tosse Trident, Dentyne, Chiclets, Halls, Bubbaloo, Clorets, Plets, Stride, Tate’s Bake Shop, fermento em pó e sobremesas Royal e a marca de bebidas em pó Tang, Fresh e Clight.',
    categorias: ['Chocolates', 'Gomas', 'Balas', 'Biscoitos', 'Bebidas em Pó', 'Sobremesas em Pó', 'Queijos'],
    Status: 'Ativa',
}
//Bombril

db.fornecedor.insertOne({
  CNPJ: '50.564.053/0001-03',
  Nome: 'Bombril',
  razao_social: 'Bombril S.A.',
  endereco: [
    {
      logradouro: 'Rodovia Anchieta',
      num: 'Km 14',
      bairro: 'Rudge Ramos',
      uf: 'SP',
      cep: '09696-000'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '7076161',
      Email: 'sac@bombril.com.br'
    },
  ],
  servico: 'A Bombril é uma empresa brasileira que fabrica produtos de higiene e limpeza. Ela é conhecida por sua linha de produtos que inclui esponjas de aço, detergentes, amaciantes, desinfetantes, limpadores multiuso, saponáceos, limpadores perfumados, esponja sintética e outros itens essenciais da limpeza doméstica.',
  categorias: ['Higiene e Limpeza', 'Esponjas de Aço', 'Detergentes', 'Amaciantes', 'Desinfetantes', 'Limpadores Multiuso', 'Saponáceos', 'Limpadores Perfumados', 'Esponja Sintética'],
  Status: 'Ativa',
}),

//Ypê

{
    CNPJ: "02.940.028/0001-34",
    Nome: "Ypê",
    razao_social: "Química Amparo",
    endereco: [{
        logradouro: "Av. Valdir Beira",
        num: "1000",
        bairro: "Jardim da Figueira",
        uf: "SP",
        cep: "13904-906"
    }],
    contatos: [{
        dd: "19",
        tel: "3808-80",
        Email: "imprensaype@gbr.com.br"
    }],
    servico: "Produtos de limpeza para a casa, cuidado com as roupas, com as louças e cuidados pessoais",  
    categorias: ["limpeza da casa", "cuidado com a roupa", "cuidados com as louças", "higiene corporal"],
    Status: "Ativa"
},

//Procter & Gamble (P&G)
{
    CNPJ: "59.476.770/0041-45",
    Nome: "Procter & Gamble do Brasil",
    razao_social: "Procter & Gamble do Brasil Ltda",
    endereco: [{
        logradouro: "Av. Dr. Chucri Zaidan",
        num: "296",
        bairro: "Vila Cordeiro",
        uf: "SP",
        cep: "04583-110"
    }],
    contatos: [{
        dd: "0800",
        tel: "701-5515",
        Email: "sac@pg.com"
    }],
    servico: "A P&G Brasil é uma empresa de bens de consumo que produz produtos de alta qualidade nas categorias de saúde pessoal, saúde do consumidor e produtos de cuidados pessoais",
    categorias: ["saúde pessoal", "saúde do consumidor", "cuidados pessoais"],
    Status: "Ativa"
},

//Nestlé

{
    CNPJ: "60.409.075/0001-52",
    Nome: "Nestlé Brasil",
    razao_social: "Nestle Brasil LTDA",
    endereco: [{
        logradouro: "Av. das Nações Unidas",
        num: "17007",
        bairro: "Várzea de Baixo",
        uf: "SP",
        cep: "04578-000"
    }],
    contatos: [{
        dd: "11",
        tel: "5508-4400",
        Email: "falecom@nestle.com.br"
    }],
    servico: "A Nestlé Brasil é uma empresa de bens de consumo que produz produtos de alta qualidade nas categorias de alimentos para bebês, águas engarrafadas, cereais, chocolates e confeitos, café, culinária e produtos culinários, alimentos resfriados e congelados, produtos lácteos, bebidas, serviços de alimentação profissional, nutrição voltada para cuidados com a saúde, sorvetes, petcare e gestão de peso",
    categorias: ["alimentos para bebês", "águas engarrafadas", "cereais", "chocolates e confeitos", "café", "culinária e produtos culinários", "alimentos resfriados e congelados", "produtos lácteos", "bebidas", "serviços de alimentação profissional", "nutrição voltada para cuidados com a saúde", "sorvetes", "petcare", "gestão de peso"],
    Status: "Ativa"
},

//Pepsico
{
    CNPJ: "31.565.104/0001-77",
    Nome: "Pepsico do Brasil",
    razao_social: "Pepsico do Brasil LTDA",
    endereco: [{
        logradouro: "Av. das Nações Unidas",
        num: "14171",
        bairro: "Vila Gertrudes",
        uf: "SP",
        cep: "04794-000"
    }],
    contatos: [{
        dd: "0800",
        tel: "703-4444",
        Email: "sac@pepsico.com"
    }],
    servico: "A Pepsico Brasil é uma empresa de bens de consumo que produz produtos de alta qualidade nas categorias de alimentos e bebidas",
    categorias: ["alimentos", "bebidas"],
    Status: "Ativa"
},

//Wickbold

{
    CNPJ: "62.691.043/0001-18",
    Nome: "Wickbold",
    razao_social: "Wickbold & Nosso Pao Industrias Alimenticias LTDA",
    endereco: [{
        logradouro: "Av. Presidente Juscelino",
        num: "734",
        bairro: "Piraporinha",
        uf: "SP",
        cep: "09950-900"
    }],
    contatos: [{
        dd: "11",
        tel: "3124-35",
        Email: "sac@wickbold.com.br"
    }],
    servico: "A Wickbold é uma empresa brasileira de alimentos que atua na fabricação de pães, panetones e entre outros produtos à base de massas",
    categorias: ["pães", "panetones", "produtos à base de massas"],
    Status: "Ativa"
},

//Pullman
{
    CNPJ: "30.857.684/0001-03",
    Nome: "Pullman",
    razao_social: "Pallmann do Brasil Industria e Comercio em Recuperacao Judicial",
    endereco: [{
        logradouro: "Av. Presidente Juscelino",
        num: "734",
        bairro: "Piraporinha",
        uf: "SP",
        cep: "09950-900"
    }],
    contatos: [{
        dd: "11",
        tel: "3124-35",
        Email: "sac@pullman.com.br"
    }],
    servico: "A Pullman é conhecida por seus hotéis exclusivos em sintonia com o mundo moderno, conectando desempenho e prazer",
    categorias: ["hotéis"],
    Status: "Ativa"
},

//Bauducco
{
    CNPJ: "60.409.075/0001-52",
    Nome: "Bauducco",
    razao_social: "Bauducco & Cia Ltda",
    endereco: [{
        logradouro: "Av. das Nações Unidas",
        num: "17007",
        bairro: "Várzea de Baixo",
        uf: "SP",
        cep: "04578-000"
    }],
    contatos: [{
        dd: "11",
        tel: "5508-4400",
        Email: "sac@bauducco.com.br"
    }],
    servico: "A Bauducco é conhecida por seus produtos alimentícios, incluindo panetones, biscoitos, bolos e pães de mel",
    categorias: ["panetones", "biscoitos", "bolos", "pães de mel"],
    Status: "Ativa"
},


//Fornecedores de produtos de açougue:
//Friboi
db.fornecedor.insertOne({
  CNPJ: '02.914.265/0029-77',
  Nome: 'Friboi',
  razao_social: 'JBS S.A.',
  endereco: [
    {
      logradouro: 'Rua Antônio Prado',
      num: '300',
      bairro: 'Centro',
      uf: 'SP',
      cep: '01010-000'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '7001111',
      Email: 'faleconosco@jbs.com.br'
    },
  ],
  servico: 'A Friboi é uma marca de produtos de carne bovina e pertence à JBS S.A.',
  categorias: ['Carnes Bovinas'],
  Status: 'Ativa'
}),

//Seara
db.fornecedor.insertOne({
  CNPJ: '02.914.265/0029-77',
  Nome: 'Friboi',
  razao_social: 'JBS S.A.',
  endereco: [
    {
      logradouro: 'Rua Antônio Prado',
      num: '300',
      bairro: 'Centro',
      uf: 'SP',
      cep: '01010-000'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '7001111',
      Email: 'faleconosco@jbs.com.br'
    },
  ],
  servico: 'A Friboi é uma marca de produtos de carne bovina e pertence à JBS S.A.',
  categorias: ['Carnes Bovinas'],
  Status: 'Ativa'
}),

//Perdigão
db.fornecedor.insertOne({
  CNPJ: '01.838.723/0026-09',
  Nome: 'Perdigão',
  razao_social: 'BRF S.A.',
  endereco: [
    {
      logradouro: 'Rua Hungria',
      num: '1400',
      bairro: 'Jardim Europa',
      uf: 'SP',
      cep: '01455-000'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '7021818',
      Email: 'sac@brf-br.com'
    },
  ],
  servico: 'A Perdigão é uma marca de produtos alimentícios, especialmente conhecida por seus produtos de carne, e pertence à BRF S.A.',
  categorias: ['Carnes Diversas'],
  Status: 'Ativa'
}),


//Fornecedores de laticínios:
//Lactalis

db.fornecedor.insertOne({
  CNPJ: '44.356.691/0001-30',
  Nome: 'Lactalis',
  razao_social: 'Lactalis do Brasil Comércio e Indústria de Produtos Alimentícios Ltda.',
  endereco: [
    {
      logradouro: 'Avenida Dom Pedro II',
      num: '1051',
      bairro: 'Campestre',
      uf: 'SP',
      cep: '09080-111'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '7054212',
      Email: 'sac@lactalis.com.br'
    },
  ],
  servico: 'A Lactalis é uma empresa que atua no ramo de laticínios.',
  categorias: ['Laticínios'],
  Status: 'Ativa'
}),

//Vigor

db.fornecedor.insertOne({
  CNPJ: '14.564.695/0001-87',
  Nome: 'Vigor',
  razao_social: 'Vigor Alimentos S.A.',
  endereco: [
    {
      logradouro: 'Rua Fulvia Spinelli',
      num: '141',
      bairro: 'Vila Olimpia',
      uf: 'SP',
      cep: '04550-000'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '7284100',
      Email: "N/a" }]}),

//Fornecedores de produtos de hortifruti:
//CEAGESP 
db.fornecedor.insertOne({
  CNPJ: '62.338.367/0001-89',
  Nome: 'CEAGESP',
  razao_social: 'Companhia de Entrepostos e Armazéns Gerais de São Paulo',
  endereco: [
    {
      logradouro: 'Avenida Doutor Gastão Vidigal',
      num: '1946',
      bairro: 'Vila Leopoldina',
      uf: 'SP',
      cep: '05022-000'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '1147275000',
      Email: 'faleconosco@ceagesp.gov.br'
    },
  ],
  servico: 'A CEAGESP é uma empresa que atua no mercado atacadista de frutas, verduras, legumes, flores e pescados.',
  categorias: ['Hortifruti'],
  Status: 'Ativa'
}),



//Fornecedores de embalagens:
//Plasvale
db.fornecedor.insertOne({
  CNPJ: '80.128.479/0001-85',
  Nome: 'Plasvale',
  razao_social: 'Plasvale Indústria e Comércio de Plásticos Vale Ltda.',
  endereco: [
    {
      logradouro: 'Rua João Gurgel',
      num: '137',
      bairro: 'Santa Rita',
      uf: 'SC',
      cep: '89290-000'
    },
  ],
  contatos: [
    {
      dd: '047',
      tel: '3644000',
      Email: 'contato@plasvale.com.br'
    },
  ],
  servico: 'A Plasvale é uma empresa que atua na fabricação de produtos plásticos, incluindo embalagens.',
  categorias: ['Embalagens'],
  Status: 'Ativa'
}),

//Copobras

db.fornecedor.insertOne({
  CNPJ: '82.739.792/0001-41',
  Nome: 'Copobras',
  razao_social: 'Copobras S.A. Indústria e Comércio',
  endereco: [
    {
      logradouro: 'Rua Venâncio Aires',
      num: '398',
      bairro: 'Centro',
      uf: 'SC',
      cep: '89140-000'
    },
  ],
  contatos: [
    {
      dd: '047',
      tel: '3645000',
      Email: 'copobras@copobras.com.br'
    },
  ],
  servico: 'A Copobras é uma empresa que atua na fabricação de produtos plásticos, incluindo embalagens.',
  categorias: ['Embalagens'],
  Status: 'Ativa'
}),

//Cromus
db.fornecedor.insertOne({
  CNPJ: '60.212.796/0001-47',
  Nome: 'Cromus',
  razao_social: 'Cromus Embalagens Ltda.',
  endereco: [
    {
      logradouro: 'Rua Manuel Joaquim da Silva',
      num: '75',
      bairro: 'Jardim Riacho das Pedras',
      uf: 'MG',
      cep: '32241-270'
    },
  ],
  contatos: [
    {
      dd: '031',
      tel: '21050000',
      Email: 'sac@cromus.com.br'
    },
  ],
  servico: 'A Cromus é uma empresa que atua na fabricação de embalagens.',
  categorias: ['Embalagens'],
  Status: 'Ativa'
}),

//Fornecedores de produtos de limpeza e manutenção:
//3M
db.fornecedor.insertOne({
  CNPJ: '60.564.690/0001-64',
  Nome: '3M',
  razao_social: '3M do Brasil Ltda.',
  endereco: [
    {
      logradouro: 'Avenida Maria Coelho Aguiar',
      num: '215',
      bairro: 'Jardim São Luís',
      uf: 'SP',
      cep: '05804-900'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '013627-2210',
      Email: '3mbrasil@mmm.com'
    },
  ],
  servico: 'A 3M é uma empresa que atua na fabricação de produtos diversos, incluindo produtos de limpeza e manutenção.',
  categorias: ['Produtos Diversos', 'Limpeza e Manutenção'],
  Status: 'Ativa'
}),

//Veja
db.fornecedor.insertOne({
  CNPJ: '50.017.332/0001-09',
  Nome: 'Veja',
  razao_social: 'Reckitt Benckiser (Brasil) Ltda.',
  endereco: [
    {
      logradouro: 'Avenida das Nações Unidas',
      num: '14171',
      bairro: 'Vila Gertrudes',
      uf: 'SP',
      cep: '04794-000'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '08007017017',
      Email: 'sac@reckitt.com.br'
    },
  ],
  servico: 'Veja é uma marca de produtos de limpeza, especialmente conhecida por seus produtos de limpeza doméstica.',
  categorias: ['Limpeza e Manutenção'],
  Status: 'Ativa'
}),




//Johnson & Johnson (para produtos de limpeza)
db.fornecedor.insertOne({
  CNPJ: '50.746.577/0001-15',
  Nome: 'Johnson & Johnson',
  razao_social: 'Johnson & Johnson Consumo do Brasil Ltda.',
  endereco: [
    {
      logradouro: 'Avenida Presidente Juscelino Kubitschek',
      num: '2041',
      bairro: 'Vila Olímpia',
      uf: 'SP',
      cep: '04543-011'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '70350100',
      Email: 'sac@jnjbrasil.com.br'
    },
  ],
  servico: 'A Johnson & Johnson é uma empresa que atua na fabricação de produtos diversos, incluindo produtos de limpeza.',
  categorias: ['Produtos Diversos', 'Limpeza e Manutenção'],
  Status: 'Ativa'
}),


//Fornecedores de produtos de papelaria:
//Kalunga
db.fornecedor.insertOne({
  CNPJ: '43.283.811/0001-50',
  Nome: 'Kalunga',
  razao_social: 'KLC Participações Ltda.',
  endereco: [
    {
      logradouro: 'Rua da Mooca',
      num: '766',
      bairro: 'Mooca',
      uf: 'SP',
      cep: '03104-000'
    },
  ],
  contatos: [
    {
      dd: '011',
      tel: '33461600',
      Email: 'sac@kalunga.com.br'
    },
  ],
  servico: 'A Kalunga é uma empresa brasileira que atua no setor de papelaria e materiais de escritório.',
  categorias: ['Papelaria'],
  Status: 'Ativa'
}),

//Tilibra
db.fornecedor.insertOne({
  CNPJ: '61.084.004/0001-92',
  Nome: 'Tilibra',
  razao_social: 'Bignardi Indústria Gráfica Ltda.',
  endereco: [
    {
      logradouro: 'Rua do Curtume',
      num: '1750',
      bairro: 'Água Branca',
      uf: 'SP',
      cep: '05074-000'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '40037020',
      Email: 'sac@tilibra.com.br'
    },
  ],
  servico: 'A Tilibra é uma empresa brasileira que atua no setor de papelaria e materiais de escritório.',
  categorias: ['Papelaria'],
  Status: 'Ativa'
}),

//Faber-Castell
db.fornecedor.insertOne({
  CNPJ: '56.840.681/0001-00',
  Nome: 'Faber-Castell',
  razao_social: 'Faber-Castell do Brasil Ltda.',
  endereco: [
    {
      logradouro: 'Rua Alexandre Dumas',
      num: '1658',
      bairro: 'Chácara Santo Antônio',
      uf: 'SP',
      cep: '04717-904'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '0800985800',
      Email: 'sac@faber-castell.com.br'
    },
  ],
  servico: 'A Faber-Castell é uma empresa alemã que atua no setor de papelaria e materiais de escritório.',
  categorias: ['Papelaria'],
  Status: 'Ativa'
}),


//Fornecedores de produtos de conveniência:
//Mars
db.fornecedor.insertOne({
  CNPJ: '60.500.139/0001-26',
  Nome: 'Mars',
  razao_social: 'Mars Brasil Comercial Ltda.',
  endereco: [
    {
      logradouro: 'Rua Dr. Renato Paes de Barros',
      num: '1017',
      bairro: 'Itaim Bibi',
      uf: 'SP',
      cep: '04530-001'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '08007736869',
      Email: 'sac@mars.com'
    },
  ],
  servico: 'A Mars é uma empresa global que atua no setor de alimentos, incluindo chocolates e snacks.',
  categorias: ['Alimentos e Bebidas', 'Conveniência'],
  Status: 'Ativa'
}),

//Nestlé (para chocolates e snacks)
db.fornecedor.insertOne({
  CNPJ: '60.409.075/0001-32',
  Nome: 'Nestlé',
  razao_social: 'Nestlé Brasil Ltda.',
  endereco: [
    {
      logradouro: 'Avenida Doutor Chucri Zaidan',
      num: '246',
      bairro: 'Vila Cordeiro',
      uf: 'SP',
      cep: '04583-110'
    },
  ],
  contatos: [
    {
      dd: '0800',
      tel: '7098599',
      Email: 'sac@nestle.com.br'
    },
  ],
  servico: 'A Nestlé é uma empresa suíça de alimentos e bebidas, e no Brasil, atua em diversas categorias, incluindo chocolates e snacks.',
  categorias: ['Alimentos e Bebidas', 'Conveniência'],
  Status: 'Ativa'
})


 
 

//HEINEKEN 
db.produtos.InsertMany(
{
    nome: 'Heineken - Lata de 350ml',
    descricao: 'Cerveja pilsen premium, conhecida mundialmente pela sua qualidade e sabor.',
    preco_unitario: 8.00,
    fornecedor: 'Heineken',
    categoria: 'Cervejas',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Schin - Lata de 350ml',
    descricao: 'Cerveja pilsen popular, conhecida por seu sabor suave e preço acessível.',
    preco_unitario: 3.00,
    fornecedor: 'Heineken',
    categoria: 'Cervejas',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Devassa - Lata de 350ml',
    descricao: 'Cerveja pilsen brasileira, conhecida por seu sabor equilibrado e refrescante.',
    preco_unitario: 4.00,
    fornecedor: 'Heineken',
    categoria: 'Cervejas',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Eisenbahn - Lata de 350ml',
    descricao: 'Cerveja pilsen artesanal, conhecida por seu sabor encorpado e aroma marcante.',
    preco_unitario: 4.50,
    fornecedor: 'Heineken',
    categoria: 'Cervejas',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Schin Refrigerante (todos os sabores) - Lata de 350ml',
    descricao: 'Refrigerante popular, disponível em vários sabores.',
    preco_unitario: 4.00,
    fornecedor: 'Heineken',
    categoria: 'Refrigerantes',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Itubaína - Lata de 350ml',
    descricao: 'Refrigerante tradicional brasileiro, conhecido por seu sabor único de tutti-frutti.',
    preco_unitario: 3.50,
    fornecedor: 'Heineken',
    categoria: 'Refrigerantes',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
//ASSAI ATACADISTA
//UNILEVER
{
    nome: 'Hellmann\'s - Maionese 500g',
    descricao: 'Maionese cremosa e saborosa, perfeita para sanduíches, saladas e muitos outros pratos.',
    preco_unitario: 7.00,
    fornecedor: 'Unilever',
    categoria: 'Alimentos e Bebidas',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Dove - Sabonete em barra 90g',
    descricao: 'Sabonete hidratante com 1/4 de creme hidratante, para uma pele mais macia e suave.',
    preco_unitario: 2.50,
    fornecedor: 'Unilever',
    categoria: 'Cuidados Pessoais',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'OMO - Detergente em pó 1kg',
    descricao: 'Detergente em pó para lavagem de roupas, com fórmula que remove manchas difíceis.',
    preco_unitario: 12.00,
    fornecedor: 'Unilever',
    categoria: 'Limpeza Doméstica',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},

//PECCIN]
{
    nome: 'Trento - Chocolate Branco 512g',
    descricao: 'Chocolate branco cremoso com wafer crocante, para uma experiência de sabor inesquecível.',
    preco_unitario: 10.00,
    fornecedor: 'Peccin',
    categoria: 'Chocolates',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Trento - Chocolate ao Leite 512g',
    descricao: 'Chocolate ao leite cremoso com wafer crocante, para uma experiência de sabor inesquecível.',
    preco_unitario: 10.00,
    fornecedor: 'Peccin',
    categoria: 'Chocolates',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Trento - Chocolate Amargo 512g',
    descricao: 'Chocolate amargo cremoso com wafer crocante, para uma experiência de sabor inesquecível.',
    preco_unitario: 10.00,
    fornecedor: 'Peccin',
    categoria: 'Chocolates',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Trento - Chocolate com Avelã 512g',
    descricao: 'Chocolate com avelã cremoso com wafer crocante, para uma experiência de sabor inesquecível.',
    preco_unitario: 10.00,
    fornecedor: 'Peccin',
    categoria: 'Chocolates',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Trento - Chocolate com Morango 512g',
    descricao: 'Chocolate com morango cremoso com wafer crocante, para uma experiência de sabor inesquecível.',
    preco_unitario: 10.00,
    fornecedor: 'Peccin',
    categoria: 'Chocolates',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Blong - Chiclete Morango 200g',
    descricao: 'Chiclete sabor morango, para um frescor duradouro.',
    preco_unitario: 6.99,
    fornecedor: 'Peccin',
    categoria: 'Chicletes',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Blong - Chiclete Menta 200g',
    descricao: 'Chiclete sabor menta, para um frescor duradouro.',
    preco_unitario: 6.99,
    fornecedor: 'Peccin',
    categoria: 'Chicletes',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Blong - Chiclete Melancia 200g',
    descricao: 'Chiclete sabor melancia, para um frescor duradouro.',
    preco_unitario: 6.99,
    fornecedor: 'Peccin',
    categoria: 'Chicletes',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Blong - Chiclete Uva 200g',
    descricao: 'Chiclete sabor uva, para um frescor duradouro.',
    preco_unitario: 6.99,
    fornecedor: 'Peccin',
    categoria: 'Chicletes',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Blong - Chiclete Limão 200g',
    descricao: 'Chiclete sabor limão, para um frescor duradouro.',
    preco_unitario: 6.99,
    fornecedor: 'Peccin',
    categoria: 'Chicletes',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},

//MONDELEZ
{
    nome: 'Oreo - Biscoito 154g',
    descricao: 'Biscoito recheado de baunilha, conhecido mundialmente por seu sabor único.',
    preco_unitario: 6.50,
    fornecedor: 'Mondelez',
    categoria: 'Biscoitos',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Tang - Bebida em Pó Sabor Laranja 25g',
    descricao: 'Bebida em pó sabor laranja, perfeita para um refresco rápido.',
    preco_unitario: 1.00,
    fornecedor: 'Mondelez',
    categoria: 'Bebidas em Pó',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Halls - Pastilha Sabor Menta 32g',
    descricao: 'Pastilha refrescante sabor menta, para um frescor duradouro.',
    preco_unitario: 2.00,
    fornecedor: 'Mondelez',
    categoria: 'Pastilhas',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Lacta - Chocolate ao Leite 90g',
    descricao: 'Chocolate ao leite cremoso, para uma experiência de sabor inesquecível.',
    preco_unitario: 4.50,
    fornecedor: 'Mondelez',
    categoria: 'Chocolates',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Trident - Chiclete Sabor Menta 14g',
    descricao: 'Chiclete sabor menta, para um frescor duradouro.',
    preco_unitario: 2.50,
    fornecedor: 'Mondelez',
    categoria: 'Chicletes',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Club Social - Biscoito Salgado 144g',
    descricao: 'Biscoito salgado crocante, perfeito para um lanche rápido.',
    preco_unitario: 3.50,
    fornecedor: 'Mondelez',
    categoria: 'Biscoitos',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Sonho de Valsa - Bombom 20g',
    descricao: 'Bombom de chocolate ao leite com recheio cremoso de castanha de caju.',
    preco_unitario: 1.00,
    fornecedor: 'Mondelez',
    categoria: 'Chocolates',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Fresh - Pastilha Sabor Menta 15g',
    descricao: 'Pastilha refrescante sabor menta, para um frescor duradouro.',
    preco_unitario: 1.50,
    fornecedor: 'Mondelez',
    categoria: 'Pastilhas',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Bis - Chocolate ao Leite 126g',
    descricao: 'Chocolate ao leite com wafer crocante, para uma experiência de sabor inesquecível.',
    preco_unitario: 4.99,
    fornecedor: 'Mondelez',
    categoria: 'Chocolates',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Clight - Bebida em Pó Sabor Laranja 8g',
    descricao: 'Bebida em pó sabor laranja, perfeita para um refresco rápido.',
    preco_unitario: 1.00,
    fornecedor: 'Mondelez',
    categoria: 'Bebidas em Pó',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Oreo - Biscoito de Morango 154g',
    descricao: 'Biscoito recheado de morango, conhecido mundialmente por seu sabor único.',
    preco_unitario: 6.50,
    fornecedor: 'Mondelez',
    categoria: 'Biscoitos',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Tang - Bebida em Pó Sabor Morango 25g',
    descricao: 'Bebida em pó sabor morango, perfeita para um refresco rápido.',
    preco_unitario: 1.00,
    fornecedor: 'Mondelez',
    categoria: 'Bebidas em Pó',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Halls - Pastilha Sabor Morango 32g',
    descricao: 'Pastilha refrescante sabor morango, para um frescor duradouro.',
    preco_unitario: 2.00,
    fornecedor: 'Mondelez',
    categoria: 'Pastilhas',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Lacta - Chocolate Branco 90g',
    descricao: 'Chocolate branco cremoso, para uma experiência de sabor inesquecível.',
    preco_unitario: 4.50,
    fornecedor: 'Mondelez',
    categoria: 'Chocolates',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Trident - Chiclete Sabor Morango 14g',
    descricao: 'Chiclete sabor morango, para um frescor duradouro.',
    preco_unitario: 2.50,
    fornecedor: 'Mondelez',
    categoria: 'Chicletes',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Club Social - Biscoito Integral 144g',
    descricao: 'Biscoito integral crocante, perfeito para um lanche rápido e saudável.',
    preco_unitario: 3.50,
    fornecedor: 'Mondelez',
    categoria: 'Biscoitos',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Sonho de Valsa - Bombom de Avelã 20g',
    descricao: 'Bombom de chocolate ao leite com recheio cremoso de avelã.',
    preco_unitario: 1.00,
    fornecedor: 'Mondelez',
    categoria: 'Chocolates',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Fresh - Pastilha Sabor Limão 15g',
    descricao: 'Pastilha refrescante sabor limão, para um frescor duradouro.',
    preco_unitario: 1.50,
    fornecedor: 'Mondelez',
    categoria: 'Pastilhas',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Bis - Chocolate Branco 126g',
    descricao: 'Chocolate branco com wafer crocante, para uma experiência de sabor inesquecível.',
    preco_unitario: 4.99,
    fornecedor: 'Mondelez',
    categoria: 'Chocolates',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Clight - Bebida em Pó Sabor Morango 8g',
    descricao: 'Bebida em pó sabor morango, perfeita para um refresco rápido.',
    preco_unitario: 1.00,
    fornecedor: 'Mondelez',
    categoria: 'Bebidas em Pó',
    estoque_minimo: 300,
    estoque_maximo: 1500,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},

//RED BULL
{
    nome: 'Red Bull Energy Drink - Caixa com 24 latas',
    descricao: 'Bebida energética que revitaliza corpo e mente.',
    preco_unitario: 180.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Sugarfree - Caixa com 24 latas',
    descricao: 'Bebida energética sem açúcar que revitaliza corpo e mente.',
    preco_unitario: 180.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Zero - Caixa com 24 latas',
    descricao: 'Bebida energética zero calorias que revitaliza corpo e mente.',
    preco_unitario: 180.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Organics - Caixa com 24 latas',
    descricao: 'Bebida energética orgânica que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Pitaya Edition - Caixa com 24 latas',
    descricao: 'Bebida energética sabor pitaya que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Melancia Edition - Caixa com 24 latas',
    descricao: 'Bebida energética sabor melancia que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Açaí Edition - Caixa com 24 latas',
    descricao: 'Bebida energética sabor açaí que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Tropical Edition - Caixa com 24 latas',
    descricao: 'Bebida energética sabor tropical que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Coco Edition - Caixa com 24 latas',
    descricao: 'Bebida energética sabor coco que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Winter Edition - Caixa com 24 latas',
    descricao: 'Bebida energética de edição de inverno que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},

//Bombril
{
    nome: 'Red Bull Energy Drink - Caixa com 24 latas',
    descricao: 'Bebida energética que revitaliza corpo e mente.',
    preco_unitario: 180.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Sugarfree - Caixa com 24 latas',
    descricao: 'Bebida energética sem açúcar que revitaliza corpo e mente.',
    preco_unitario: 180.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Zero - Caixa com 24 latas',
    descricao: 'Bebida energética zero calorias que revitaliza corpo e mente.',
    preco_unitario: 180.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Organics - Caixa com 24 latas',
    descricao: 'Bebida energética orgânica que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Pitaya Edition - Caixa com 24 latas',
    descricao: 'Bebida energética sabor pitaya que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Melancia Edition - Caixa com 24 latas',
    descricao: 'Bebida energética sabor melancia que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Açaí Edition - Caixa com 24 latas',
    descricao: 'Bebida energética sabor açaí que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Tropical Edition - Caixa com 24 latas',
    descricao: 'Bebida energética sabor tropical que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Coco Edition - Caixa com 24 latas',
    descricao: 'Bebida energética sabor coco que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Red Bull Winter Edition - Caixa com 24 latas',
    descricao: 'Bebida energética de edição de inverno que revitaliza corpo e mente.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'Red Bull',
    categoria: 'Bebidas Energéticas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},

//Ypê
{
    nome: 'Ypê - Água Sanitária - Caixa com 12 unidades',
    descricao: 'Água sanitária, ideal para limpeza pesada e desinfecção.',
    preco_unitario: 36.00, // Este é um preço fictício
    fornecedor: 'Ypê',
    categoria: 'Produtos de Limpeza',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Ypê - Alvejante - Caixa com 12 unidades',
    descricao: 'Alvejante para roupas, remove manchas e deixa as roupas mais brancas.',
    preco_unitario: 48.00, // Este é um preço fictício
    fornecedor: 'Ypê',
    categoria: 'Produtos de Limpeza',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Ypê - Amaciante - Caixa com 12 unidades',
    descricao: 'Amaciante para roupas, deixa as roupas macias e perfumadas.',
    preco_unitario: 60.00, // Este é um preço fictício
    fornecedor: 'Ypê',
    categoria: 'Produtos de Limpeza',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Ypê - Desinfetante - Caixa com 12 unidades',
    descricao: 'Desinfetante que limpa e perfuma o ambiente.',
    preco_unitario: 48.00, // Este é um preço fictício
    fornecedor: 'Ypê',
    categoria: 'Produtos de Limpeza',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Ypê - Detergente - Caixa com 24 unidades',
    descricao: 'Detergente líquido para limpeza de louças e utensílios de cozinha.',
    preco_unitario: 48.00, // Este é um preço fictício
    fornecedor: 'Ypê',
    categoria: 'Produtos de Limpeza',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Ypê - Esponjas - Caixa com 50 unidades',
    descricao: 'Esponjas para limpeza de louças e utensílios de cozinha.',
    preco_unitario: 75.00, // Este é um preço fictício
    fornecedor: 'Ypê',
    categoria: 'Produtos de Limpeza',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Ypê - Lenços Umedecidos - Caixa com 24 unidades',
    descricao: 'Lenços umedecidos para limpeza rápida e prática.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'Ypê',
    categoria: 'Produtos de Limpeza',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Ypê - Limpador Multiuso - Caixa com 12 unidades',
    descricao: 'Limpador multiuso, ideal para limpeza de diversas superfícies.',
    preco_unitario: 60.00, // Este é um preço fictício
    fornecedor: 'Ypê',
    categoria: 'Produtos de Limpeza',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Ypê - Limpador Perfumado - Caixa com 12 unidades',
    descricao: 'Limpador perfumado, limpa e deixa um agradável aroma no ambiente.',
    preco_unitario: 60.00, // Este é um preço fictício
    fornecedor: 'Ypê',
    categoria: 'Produtos de Limpeza',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Ypê - Limpeza Pesada - Caixa com 12 unidades',
    descricao: 'Produto para limpeza pesada, remove sujeiras difíceis.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'Ypê',
    categoria: 'Produtos de Limpeza',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},

//Procter & Gamble (P&G)
{
    nome: 'Ariel - Detergente - Caixa com 12 unidades',
    descricao: 'Detergente para lavagem de roupas.',
    preco_unitario: 180.00, // Este é um preço fictício
    fornecedor: 'P&G',
    categoria: 'Produtos de Limpeza',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Always - Absorventes - Caixa com 24 unidades',
    descricao: 'Absorventes higiênicos femininos.',
    preco_unitario: 144.00, // Este é um preço fictício
    fornecedor: 'P&G',
    categoria: 'Higiene Pessoal',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Bounty - Toalha de Papel - Caixa com 24 unidades',
    descricao: 'Toalha de papel super absorvente.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'P&G',
    categoria: 'Produtos de Limpeza',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Braun - Barbeador Elétrico',
    descricao: 'Barbeador elétrico para um barbear suave e preciso.',
    preco_unitario: 200.00, // Este é um preço fictício
    fornecedor: 'P&G',
    categoria: 'Cuidados Pessoais',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Charmin - Toalhas Úmidas - Caixa com 24 unidades',
    descricao: 'Toalhas úmidas para limpeza e frescor.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'P&G',
    categoria: 'Higiene Pessoal',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Crest - Pasta de Dentes - Caixa com 24 unidades',
    descricao: 'Pasta de dentes para higiene oral completa.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'P&G',
    categoria: 'Higiene Pessoal',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Dawn - Detergente para Lavar Louças - Caixa com 24 unidades',
    descricao: 'Detergente líquido para limpeza de louças e utensílios de cozinha.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'P&G',
    categoria: 'Produtos de Limpeza',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Gillette - Lâminas de Barbear - Caixa com 24 unidades',
    descricao: 'Lâminas de barbear para um barbear suave e preciso.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'P&G',
    categoria: 'Cuidados Pessoais',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Head & Shoulders - Shampoo - Caixa com 24 unidades',
    descricao: 'Shampoo anti-caspa para cabelos saudáveis e sem caspa.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'P&G',
    categoria: 'Cuidados Pessoais',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Oral-B - Escovas de Dentes - Caixa com 24 unidades',
    descricao: 'Escovas de dentes para uma limpeza completa da boca.',
    preco_unitario: 120.00, // Este é um preço fictício
    fornecedor: 'P&G',
    categoria: 'Higiene Pessoal',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},

//Nestlé
{
    nome: 'Nestlé - Leite Moça - Caixa com 24 latas',
    descricao: 'Leite condensado, ideal para sobremesas.',
    preco_unitario: 120.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Produtos Alimentícios',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Nescafé - Caixa com 24 unidades',
    descricao: 'Café solúvel, para um café rápido e saboroso.',
    preco_unitario: 144.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Nesquik - Caixa com 24 unidades',
    descricao: 'Bebida em pó sabor chocolate, perfeita para um refresco rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Neston - Caixa com 24 unidades',
    descricao: 'Cereal integral, para um café da manhã nutritivo.',
    preco_unitario: 120.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Cereais',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Chocolates - Caixa com 24 unidades',
    descricao: 'Chocolates variados, para uma experiência de sabor inesquecível.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Chocolates',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Sorvetes - Caixa com 24 unidades',
    descricao: 'Sorvetes variados, para um refresco delicioso.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Sorvetes',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Purina - Caixa com 24 unidades',
    descricao: 'Alimentos para animais de estimação, para uma nutrição completa.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Petcare',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Gerber - Caixa com 24 unidades',
    descricao: 'Alimentos para bebês, para uma nutrição completa.',
    preco_unitario: 120.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Alimentos para Bebês',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Maggi - Caixa com 24 unidades',
    descricao: 'Temperos e caldos, para um sabor inigualável.',
    preco_unitario: 48.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Produtos Culinários',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Nesfit - Caixa com 24 unidades',
    descricao: 'Cereal integral, para um café da manhã nutritivo.',
    preco_unitario: 120.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Cereais',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Leite Moça - Caixa com 24 latas',
    descricao: 'Leite condensado, ideal para sobremesas.',
    preco_unitario: 120.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Produtos Alimentícios',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Nescafé - Caixa com 24 unidades',
    descricao: 'Café solúvel, para um café rápido e saboroso.',
    preco_unitario: 144.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Nesquik - Caixa com 24 unidades',
    descricao: 'Bebida em pó sabor chocolate, perfeita para um refresco rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Neston - Caixa com 24 unidades',
    descricao: 'Cereal integral, para um café da manhã nutritivo.',
    preco_unitario: 120.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Cereais',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Chocolates - Caixa com 24 unidades',
    descricao: 'Chocolates variados, para uma experiência de sabor inesquecível.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Chocolates',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Sorvetes - Caixa com 24 unidades',
    descricao: 'Sorvetes variados, para um refresco delicioso.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Sorvetes',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Purina - Caixa com 24 unidades',
    descricao: 'Alimentos para animais de estimação, para uma nutrição completa.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Petcare',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Gerber - Caixa com 24 unidades',
    descricao: 'Alimentos para bebês, para uma nutrição completa.',
    preco_unitario: 120.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Alimentos para Bebês',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Maggi - Caixa com 24 unidades',
    descricao: 'Temperos e caldos, para um sabor inigualável.',
    preco_unitario: 48.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Produtos Culinários',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Nesfit - Caixa com 24 unidades',
    descricao: 'Cereal integral, para um café da manhã nutritivo.',
    preco_unitario: 120.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Cereais',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Nescau - Caixa com 24 unidades',
    descricao: 'Bebida em pó sabor chocolate, perfeita para um refresco rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Ninho - Caixa com 24 unidades',
    descricao: 'Leite em pó integral, para uma nutrição completa.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Produtos Alimentícios',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Molico - Caixa com 24 unidades',
    descricao: 'Leite em pó desnatado, para uma nutrição completa.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Produtos Alimentícios',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Nesfit - Barras de Cereal - Caixa com 24 unidades',
    descricao: 'Barras de cereal integral, para um lanche rápido e nutritivo.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Cereais',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - KitKat - Caixa com 24 unidades',
    descricao: 'Chocolate com wafer crocante, para uma experiência de sabor inesquecível.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Chocolates',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Galak - Caixa com 24 unidades',
    descricao: 'Chocolate branco cremoso, para uma experiência de sabor inesquecível.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Chocolates',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Alpino - Caixa com 24 unidades',
    descricao: 'Chocolate ao leite premium, para uma experiência de sabor inesquecível.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Chocolates',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Nescafé Dolce Gusto - Caixa com 24 unidades',
    descricao: 'Cápsulas de café para máquina Nescafé Dolce Gusto.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Nespresso - Caixa com 24 unidades',
    descricao: 'Cápsulas de café para máquina Nespresso.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Nestlé - Purina - Caixa com 24 unidades',
    descricao: 'Alimentos para animais de estimação, para uma nutrição completa.',
    preco_unitario: 240.00, // Este é um preço fictício
    fornecedor: 'Nestlé',
    categoria: 'Petcare',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},


//Pepsico

{
    nome: 'Pepsi - Refrigerante - Caixa com 24 latas',
    descricao: 'Refrigerante sabor cola, para um refresco rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Gatorade - Bebida Esportiva - Caixa com 24 unidades',
    descricao: 'Bebida esportiva, para hidratação durante atividades físicas.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Quaker - Aveia - Caixa com 24 unidades',
    descricao: 'Aveia integral, para um café da manhã nutritivo.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Cereais',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Lay’s - Batatas Fritas - Caixa com 24 unidades',
    descricao: 'Batatas fritas crocantes, para um lanche rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Snacks',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Doritos - Salgadinho - Caixa com 24 unidades',
    descricao: 'Salgadinho sabor queijo, para um lanche rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Snacks',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Ruffles - Batatas Fritas - Caixa com 24 unidades',
    descricao: 'Batatas fritas onduladas, para um lanche rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Snacks',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Cheetos - Salgadinho - Caixa com 24 unidades',
    descricao: 'Salgadinho sabor queijo, para um lanche rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Snacks',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Kero Coco - Água de Coco - Caixa com 24 unidades',
    descricao: 'Água de coco, para um refresco natural.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'H2OH! - Bebida Saborizada - Caixa com 24 unidades',
    descricao: 'Bebida saborizada, para um refresco leve e saboroso.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Toddy - Achocolatado - Caixa com 24 unidades',
    descricao: 'Achocolatado em pó, para um refresco rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Pepsi - Refrigerante Diet - Caixa com 24 latas',
    descricao: 'Refrigerante sabor cola sem açúcar, para um refresco rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Mountain Dew - Refrigerante - Caixa com 24 latas',
    descricao: 'Refrigerante sabor limão, para um refresco rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: '7UP - Refrigerante - Caixa com 24 latas',
    descricao: 'Refrigerante sabor limão, para um refresco rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Mirinda - Refrigerante - Caixa com 24 latas',
    descricao: 'Refrigerante sabor laranja, para um refresco rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Tropicana - Suco de Laranja - Caixa com 24 unidades',
    descricao: 'Suco de laranja natural, para um refresco saudável.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Aquafina - Água Mineral - Caixa com 24 unidades',
    descricao: 'Água mineral, para uma hidratação pura e refrescante.',
    preco_unitario: 24.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Bebidas',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Lay’s - Batatas Fritas Sabor Queijo - Caixa com 24 unidades',
    descricao: 'Batatas fritas sabor queijo, para um lanche rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Snacks',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Doritos - Salgadinho Sabor Queijo Picante - Caixa com 24 unidades',
    descricao: 'Salgadinho sabor queijo picante, para um lanche rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Snacks',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Ruffles - Batatas Fritas Sabor Cebola - Caixa com 24 unidades',
    descricao: 'Batatas fritas sabor cebola, para um lanche rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Snacks',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Cheetos - Salgadinho Sabor Queijo Picante - Caixa com 24 unidades',
    descricao: 'Salgadinho sabor queijo picante, para um lanche rápido.',
    preco_unitario: 72.00, // Este é um preço fictício
    fornecedor: 'PepsiCo',
    categoria: 'Snacks',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},


//Wickbold
{
    nome: 'Wickbold - Pão de Forma Tradicional - Pacote com 10 unidades',
    descricao: 'Pão de forma tradicional, ideal para sanduíches.',
    preco_unitario: 30.00, // Este é um preço fictício
    fornecedor: 'Wickbold',
    categoria: 'Produtos de Panificação',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Wickbold - Pão de Forma Integral - Pacote com 10 unidades',
    descricao: 'Pão de forma integral, para uma alimentação mais saudável.',
    preco_unitario: 35.00, // Este é um preço fictício
    fornecedor: 'Wickbold',
    categoria: 'Produtos de Panificação',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Wickbold - Pão de Forma Sem Casca - Pacote com 10 unidades',
    descricao: 'Pão de forma sem casca, ideal para lanches rápidos.',
    preco_unitario: 40.00, // Este é um preço fictício
    fornecedor: 'Wickbold',
    categoria: 'Produtos de Panificação',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Wickbold - Pão de Hambúrguer - Pacote com 10 unidades',
    descricao: 'Pão de hambúrguer, ideal para lanches rápidos.',
    preco_unitario: 35.00, // Este é um preço fictício
    fornecedor: 'Wickbold',
    categoria: 'Produtos de Panificação',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Wickbold - Pão de Hot Dog - Pacote com 10 unidades',
    descricao: 'Pão de hot dog, ideal para lanches rápidos.',
    preco_unitario: 35.00, // Este é um preço fictício
    fornecedor: 'Wickbold',
    categoria: 'Produtos de Panificação',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Wickbold - Pão de Forma Sem Glúten - Pacote com 10 unidades',
    descricao: 'Pão de forma sem glúten, ideal para pessoas com restrições alimentares.',
    preco_unitario: 50.00, // Este é um preço fictício
    fornecedor: 'Wickbold',
    categoria: 'Produtos de Panificação',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Wickbold - Pão de Forma Light - Pacote com 10 unidades',
    descricao: 'Pão de forma light, para uma alimentação mais saudável.',
    preco_unitario: 35.00, // Este é um preço fictício
    fornecedor: 'Wickbold',
    categoria: 'Produtos de Panificação',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Wickbold - Pão de Forma Multigrãos - Pacote com 10 unidades',
    descricao: 'Pão de forma com grãos, para uma alimentação mais saudável.',
    preco_unitario: 40.00, // Este é um preço fictício
    fornecedor: 'Wickbold',
    categoria: 'Produtos de Panificação',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Wickbold - Pão de Forma 100% Integral - Pacote com 10 unidades',
    descricao: 'Pão de forma 100% integral, para uma alimentação mais saudável.',
    preco_unitario: 40.00, // Este é um preço fictício
    fornecedor: 'Wickbold',
    categoria: 'Produtos de Panificação',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
},
{
    nome: 'Wickbold - Pão de Forma Sem Lactose - Pacote com 10 unidades',
    descricao: 'Pão de forma sem lactose, ideal para pessoas com restrições alimentares.',
    preco_unitario: 50.00, // Este é um preço fictício
    fornecedor: 'Wickbold',
    categoria: 'Produtos de Panificação',
    estoque_minimo: 10,
    estoque_maximo: 100,
    lote: 'EFG123',
    validade: new Date('2033-12-31')
})

//Pullman
//Bauducco
//Fornecedores de produtos de açougue:
//Friboi
//Seara
//Perdigão
//Fornecedores de laticínios:
//Lactalis
//Vigor
//Nestlé (para produtos lácteos)
//Fornecedores de produtos de hortifruti:
//CEAGESP (para mercados que compram diretamente de centrais de abastecimento)
//Distribuidores locais de frutas e verduras
//Fornecedores de embalagens:
//Plasvale
//Copobras
//Cromus
//Fornecedores de produtos de limpeza e manutenção:
//3M
//Veja
//Johnson & Johnson (para produtos de limpeza)
//Fornecedores de produtos de papelaria:
//Kalunga
//Tilibra
//Faber-Castell
//Fornecedores de produtos de conveniência:
//Mars
//Nestlé (para chocolates e snacks)












db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 10,
            nome: 'Trento - Chocolate Branco 512g',
            qtde_produto: 113,
            preco: 10.00,
            total: 1130.00
        },
        {
            id_produto: 11,
            nome: 'Trento - Chocolate ao Leite 512g',
            qtde_produto: 55,
            preco: 10.00,
            total: 550.00
        },
        {
            id_produto: 12,
            nome: 'Trento - Chocolate Amargo 512g',
            qtde_produto: 212,
            preco: 10.00,
            total: 2120.00
        },
        {
            id_produto: 13,
            nome: 'Trento - Chocolate com Avelã 512g',
            qtde_produto: 86,
            preco: 10.00,
            total: 860.00
        },
        {
            id_produto: 14,
            nome: 'Trento - Chocolate com Morango 512g',
            qtde_produto: 188,
            preco: 10.00,
            total: 1880.00
        },
        {
            id_produto: 15,
            nome: 'Blong - Chiclete Morango 200g',
            qtde_produto: 232,
            preco: 6.99,
            total: 232.00
        },
        {
            id_produto: 16,
            nome: 'Blong - Chiclete Menta 200g',
            qtde_produto: 249,
            preco: 6.99,
            total: 249.00
        },
        {
            id_produto: 17,
            nome: 'Blong - Chiclete Melancia 200g',
            qtde_produto: 170,
            preco: 6.99,
            total: 170.00
        },
        {
            id_produto: 18,
            nome: 'Blong - Chiclete Uva 200g',
            qtde_produto: 96,
            preco: 6.99,
            total: 96.00
        },
        {
            id_produto: 19,
            nome: 'Blong - Chiclete Limão 200g',
            qtde_produto: 216,
            preco: 6.99,
            total: 216.00
        },
        {
            id_produto: 20,
            nome: 'Oreo - Biscoito 154g',
            qtde_produto: 130,
            preco: 6.5,
            total: 130.00
        }
    ],
    subtotal: 8303.00, // Calculate the subtotal based on the new products
    pedido: 1,
    data: new Date('2023-11-29'),
    observacao: 'Itens de pedido variados'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 1,
            nome: 'Heineken - Lata de 350ml',
            qtde_produto: 237,
            preco: 8.00,
            total: 1896.00
        },
        {
            id_produto: 2,
            nome: 'Schin - Lata de 350ml',
            qtde_produto: 181,
            preco: 3.00,
            total: 543.00
        },
        {
            id_produto: 3,
            nome: 'Devassa - Lata de 350ml',
            qtde_produto: 188,
            preco: 4.00,
            total: 752.00
        },
        {
            id_produto: 4,
            nome: 'Eisenbahn - Lata de 350ml',
            qtde_produto: 66,
            preco: 4.5,
            total: 66.00
        },
        {
            id_produto: 5,
            nome: 'Schin Refrigerante (todos os sabores) - Lata de 350ml',
            qtde_produto: 121,
            preco: 4.00,
            total: 484.00
        },
        {
            id_produto: 6,
            nome: 'Itubaína - Lata de 350ml',
            qtde_produto: 210,
            preco: 3.5,
            total: 210.00
        },
        {
            id_produto: 7,
            nome: 'Hellmann’s - Maionese 500g',
            qtde_produto: 103,
            preco: 7.00,
            total: 721.00
        },
        {
            id_produto: 8,
            nome: 'Dove - Sabonete em barra 90g',
            qtde_produto: 246,
            preco: 2.5,
            total: 246.00
        },
        {
            id_produto: 9,
            nome: 'OMO - Detergente em pó 1kg',
            qtde_produto: 209,
            preco: 12.00,
            total: 2508.00
        }
        // Add more entries as needed
    ],
    subtotal: 9466.50, // Calculate the subtotal based on the new products
    pedido: 2, // Use a different order number if needed
    data: new Date('2023-11-29'),
    observacao: 'Itens de pedido para reposição de estoque'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 21,
            nome: 'Tang - Bebida em Pó Sabor Laranja 25g',
            qtde_produto: 114,
            preco: 1.00,
            total: 114.00
        },
        {
            id_produto: 22,
            nome: 'Halls - Pastilha Sabor Menta 32g',
            qtde_produto: 122,
            preco: 2.00,
            total: 244.00
        },
        {
            id_produto: 23,
            nome: 'Lacta - Chocolate ao Leite 90g',
            qtde_produto: 246,
            preco: 4.5,
            total: 246.00
        },
        {
            id_produto: 24,
            nome: 'Trident - Chiclete Sabor Menta 14g',
            qtde_produto: 220,
            preco: 2.5,
            total: 220.00
        },
        {
            id_produto: 25,
            nome: 'Club Social - Biscoito Salgado 144g',
            qtde_produto: 218,
            preco: 3.5,
            total: 218.00
        },
        {
            id_produto: 26,
            nome: 'Sonho de Valsa - Bombom 20g',
            qtde_produto: 238,
            preco: 1.00,
            total: 238.00
        },
        {
            id_produto: 27,
            nome: 'Fresh - Pastilha Sabor Menta 15g',
            qtde_produto: 238,
            preco: 1.5,
            total: 238.00
        },
        {
            id_produto: 28,
            nome: 'Bis - Chocolate ao Leite 126g',
            qtde_produto: 161,
            preco: 4.5,
            total: 161.00
        },
        {
            id_produto: 29,
            nome: 'Clight - Bebida em Pó Sabor Laranja 8g',
            qtde_produto: 227,
            preco: 1.00,
            total: 227.00
        },
        {
            id_produto: 30,
            nome: 'Oreo - Biscoito de Morango 154g',
            qtde_produto: 169,
            preco: 6.5,
            total: 169.00
        }
        // Add more entries as needed
    ],
    subtotal: 1881.00, // Calculate the subtotal based on the new products
    pedido: 3, // Use a different order number if needed
    data: new Date('2023-11-29'),
    observacao: 'Itens de pedido variados'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 31,
            nome: 'Tang - Bebida em Pó Sabor Morango 25g',
            qtde_produto: 98,
            preco: 1.00,
            total: 98.00
        },
        {
            id_produto: 32,
            nome: 'Halls - Pastilha Sabor Morango 32g',
            qtde_produto: 215,
            preco: 2.00,
            total: 430.00
        },
        {
            id_produto: 33,
            nome: 'Lacta - Chocolate Branco 90g',
            qtde_produto: 200,
            preco: 4.5,
            total: 200.00
        },
        {
            id_produto: 34,
            nome: 'Trident - Chiclete Sabor Morango 14g',
            qtde_produto: 198,
            preco: 2.5,
            total: 198.00
        },
        {
            id_produto: 35,
            nome: 'Club Social - Biscoito Integral 144g',
            qtde_produto: 160,
            preco: 3.5,
            total: 160.00
        },
        {
            id_produto: 36,
            nome: 'Sonho de Valsa - Bombom de Avelã 20g',
            qtde_produto: 205,
            preco: 1.00,
            total: 205.00
        },
        {
            id_produto: 37,
            nome: 'Fresh - Pastilha Sabor Limão 15g',
            qtde_produto: 71,
            preco: 1.5,
            total: 71.00
        },
        {
            id_produto: 38,
            nome: 'Bis - Chocolate Branco 126g',
            qtde_produto: 120,
            preco: 4.5,
            total: 120.00
        },
        {
            id_produto: 39,
            nome: 'Clight - Bebida em Pó Sabor Morango 8g',
            qtde_produto: 54,
            preco: 1.00,
            total: 54.00
        },
        {
            id_produto: 40,
            nome: 'Red Bull Energy Drink - Caixa com 24 latas',
            qtde_produto: 36,
            preco: 120.00,
            total: 4320.00
        }
        // Add more entries as needed
    ],
    subtotal: 6546.00, // Calculate the subtotal based on the new products
    pedido: 4, // Use a different order number if needed
    data: new Date('2023-11-29'),
    observacao: 'Itens de pedido para reposição de estoque'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 41,
            nome: 'Red Bull Sugarfree - Caixa com 24 latas',
            qtde_produto: 6, // Reduced by 50%
            preco: 120.00,
            total: 720.00 // Updated total
        },
        {
            id_produto: 42,
            nome: 'Red Bull Zero - Caixa com 24 latas',
            qtde_produto: 15, // Reduced by 50%
            preco: 120.00,
            total: 1800.00 // Updated total
        },
        {
            id_produto: 43,
            nome: 'Red Bull Organics - Caixa com 24 latas',
            qtde_produto: 11.5, // Reduced by 50%
            preco: 120.00,
            total: 1380.00 // Updated total
        },
        {
            id_produto: 44,
            nome: 'Red Bull Pitaya Edition - Caixa com 24 latas',
            qtde_produto: 4, // Reduced by 50%
            preco: 120.00,
            total: 480.00 // Updated total
        },
        {
            id_produto: 45,
            nome: 'Red Bull Melancia Edition - Caixa com 24 latas',
            qtde_produto: 16.5, // Reduced by 50%
            preco: 120.00,
            total: 1980.00 // Updated total
        },
        {
            id_produto: 46,
            nome: 'Red Bull Açaí Edition - Caixa com 24 latas',
            qtde_produto: 21.5, // Reduced by 50%
            preco: 120.00,
            total: 2580.00 // Updated total
        },
        {
            id_produto: 47,
            nome: 'Red Bull Tropical Edition - Caixa com 24 latas',
            qtde_produto: 6.5, // Reduced by 50%
            preco: 120.00,
            total: 780.00 // Updated total
        },
        {
            id_produto: 48,
            nome: 'Red Bull Coco Edition - Caixa com 24 latas',
            qtde_produto: 5.5, // Reduced by 50%
            preco: 120.00,
            total: 660.00 // Updated total
        },
        {
            id_produto: 49,
            nome: 'Red Bull Winter Edition - Caixa com 24 latas',
            qtde_produto: 14, // Reduced by 50%
            preco: 120.00,
            total: 1680.00 // Updated total
        },
        {
            id_produto: 50,
            nome: 'Red Bull Energy Drink - Caixa com 24 latas',
            qtde_produto: 5.5, // Reduced by 50%
            preco: 120.00,
            total: 660.00 // Updated total
        }
        // Add more entries as needed
    ],
    subtotal: 14010.00, // Updated subtotal based on the new quantities
    pedido: 5, // Use a different order number if needed
    data: new Date('2023-11-29'),
    observacao: 'Pedido de bebidas energéticas com quantidades reduzidas'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 51,
            nome: 'Red Bull Sugarfree - Caixa com 24 latas',
            qtde_produto: 5,
            preco: 120.00,
            total: 600.00
        },
        {
            id_produto: 52,
            nome: 'Red Bull Zero - Caixa com 24 latas',
            qtde_produto: 3,
            preco: 120.00,
            total: 360.00
        },
        {
            id_produto: 53,
            nome: 'Red Bull Organics - Caixa com 24 latas',
            qtde_produto: 2,
            preco: 120.00,
            total: 240.00
        },
        {
            id_produto: 54,
            nome: 'Red Bull Pitaya Edition - Caixa com 24 latas',
            qtde_produto: 4,
            preco: 120.00,
            total: 480.00
        },
        {
            id_produto: 55,
            nome: 'Red Bull Melancia Edition - Caixa com 24 latas',
            qtde_produto: 4,
            preco: 120.00,
            total: 480.00
        },
        {
            id_produto: 56,
            nome: 'Red Bull Açaí Edition - Caixa com 24 latas',
            qtde_produto: 4,
            preco: 120.00,
            total: 480.00
        }
        // Add more entries as needed
    ],
    subtotal: 2640.00, // Updated subtotal based on the new quantities
    pedido: 6, // Use a different order number if needed
    data: new Date('2023-11-29'),
    observacao: 'Parte do Pedido 6'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 57,
            nome: 'Red Bull Tropical Edition - Caixa com 24 latas',
            qtde_produto: 5,
            preco: 120.00,
            total: 600.00
        },
        {
            id_produto: 58,
            nome: 'Red Bull Coco Edition - Caixa com 24 latas',
            qtde_produto: 3,
            preco: 120.00,
            total: 360.00
        },
        {
            id_produto: 59,
            nome: 'Red Bull Winter Edition - Caixa com 24 latas',
            qtde_produto: 3,
            preco: 120.00,
            total: 360.00
        },
        {
            id_produto: 60,
            nome: 'Ypê - Água Sanitária - Caixa com 12 unidades',
            qtde_produto: 5,
            preco: 36.00,
            total: 180.00
        }
        // Add more entries as needed
    ],
    subtotal: 1500.00, // Updated subtotal based on the new quantities
    pedido: 7, // Use a different order number if needed
    data: new Date('2023-11-29'),
    observacao: 'Parte do Pedido 6'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 60,
            nome: 'Ypê - Água Sanitária - Caixa com 12 unidades',
            qtde_produto: 10,
            preco: 36.00,
            total: 360.00
        },
        {
            id_produto: 61,
            nome: 'Ypê - Alvejante - Caixa com 12 unidades',
            qtde_produto: 10,
            preco: 36.00,
            total: 360.00
        },
        {
            id_produto: 62,
            nome: 'Ypê - Amaciante - Caixa com 12 unidades',
            qtde_produto: 6,
            preco: 36.00,
            total: 216.00
        },
        {
            id_produto: 63,
            nome: 'Ypê - Desinfetante - Caixa com 12 unidades',
            qtde_produto: 10,
            preco: 36.00,
            total: 360.00
        },
        {
            id_produto: 64,
            nome: 'Red Bull Pitaya Edition - Caixa com 24 latas',
            qtde_produto: 5,
            preco: 120.00,
            total: 600.00
        }
        // Add more entries as needed
    ],
    subtotal: 1896.00,
    pedido: 8,
    data: new Date('2023-11-29'),
    observacao: 'Produtos de limpeza e bebidas'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 65,
            nome: 'Ypê - Esponjas - Caixa com 50 unidades',
            qtde_produto: 5,
            preco: 75.00,
            total: 375.00
        },
        {
            id_produto: 66,
            nome: 'Ypê - Lenços Umedecidos - Caixa com 24 unidades',
            qtde_produto: 7,
            preco: 72.00,
            total: 504.00
        },
        {
            id_produto: 67,
            nome: 'Ypê - Limpador Multiuso - Caixa com 12 unidades',
            qtde_produto: 9,
            preco: 60.00,
            total: 540.00
        }
        // Add more entries as needed
    ],
    subtotal: 1419.00,
    pedido: 9,
    data: new Date('2023-11-29'),
    observacao: 'Produtos de limpeza diversos'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 68,
            nome: 'Ypê - Limpador Perfumado - Caixa com 12 unidades',
            qtde_produto: 8,
            preco: 60.00,
            total: 480.00
        },
        {
            id_produto: 69,
            nome: 'Ypê - Limpeza Pesada - Caixa com 12 unidades',
            qtde_produto: 5,
            preco: 72.00,
            total: 360.00
        },
        {
            id_produto: 70,
            nome: 'Ariel - Detergente - Caixa com 12 unidades',
            qtde_produto: 5,
            preco: 180.00,
            total: 900.00
        }
        // Add more entries as needed
    ],
    subtotal: 1740.00,
    pedido: 10,
    data: new Date('2023-11-29'),
    observacao: 'Produtos de limpeza e detergentes'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 71,
            nome: 'Always - Absorventes - Caixa com 24 unidades',
            qtde_produto: 6,
            preco: 144.00,
            total: 864.00
        },
        {
            id_produto: 72,
            nome: 'Bounty - Toalha de Papel - Caixa com 24 unidades',
            qtde_produto: 7,
            preco: 72.00,
            total: 504.00
        },
        {
            id_produto: 73,
            nome: 'Braun - Barbeador Elétrico',
            qtde_produto: 7,
            preco: 200.00,
            total: 1400.00
        },
        {
            id_produto: 74,
            nome: 'Charmin - Toalhas Úmidas - Caixa com 24 unidades',
            qtde_produto: 7,
            preco: 72.00,
            total: 504.00
        },
        {
            id_produto: 75,
            nome: 'Crest - Pasta de Dentes - Caixa com 24 unidades',
            qtde_produto: 10,
            preco: 72.00,
            total: 720.00
        }
        // Add more entries as needed
    ],
    subtotal: 3992.00,
    pedido: 11,
    data: new Date('2023-11-29'),
    observacao: 'Produtos de higiene pessoal e cuidados bucais'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 76,
            nome: 'Dawn - Detergente para Lavar Louças - Caixa com 24 unidades',
            qtde_produto: 6,
            preco: 72.00,
            total: 432.00
        },
        {
            id_produto: 77,
            nome: 'Gillette - Lâminas de Barbear - Caixa com 24 unidades',
            qtde_produto: 6,
            preco: 240.00,
            total: 1440.00
        },
        {
            id_produto: 78,
            nome: 'Head & Shoulders - Shampoo - Caixa com 24 unidades',
            qtde_produto: 8,
            preco: 240.00,
            total: 1920.00
        },
        {
            id_produto: 79,
            nome: 'Oral-B - Escovas de Dentes - Caixa com 24 unidades',
            qtde_produto: 5,
            preco: 120.00,
            total: 600.00
        }
        // Add more entries as needed
    ],
    subtotal: 4392.00,
    pedido: 12,
    data: new Date('2023-11-29'),
    observacao: 'Produtos de limpeza e cuidados pessoais'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 80,
            nome: 'Nestlé - Leite Moça - Caixa com 24 latas',
            qtde_produto: 7,
            preco: 120.00,
            total: 840.00
        }
        // Add more entries as needed
    ],
    subtotal: 840.00,
    pedido: 13,
    data: new Date('2023-11-29'),
    observacao: 'Produtos alimentícios'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 81,
            nome: 'Nestlé - Nescafé - Caixa com 24 unidades',
            qtde_produto: 10,
            preco: 144.00,
            total: 1440.00
        },
        {
            id_produto: 82,
            nome: 'Nestlé - Nesquik - Caixa com 24 unidades',
            qtde_produto: 5,
            preco: 72.00,
            total: 360.00
        },
        {
            id_produto: 83,
            nome: 'Nestlé - Neston - Caixa com 24 unidades',
            qtde_produto: 9,
            preco: 120.00,
            total: 1080.00
        },
        {
            id_produto: 84,
            nome: 'Nestlé - Chocolates - Caixa com 24 unidades',
            qtde_produto: 7,
            preco: 240.00,
            total: 1680.00
        }
        // Add more entries as needed
    ],
    subtotal: 4560.00,
    pedido: 14,
    data: new Date('2023-11-29'),
    observacao: 'Produtos diversos da Nestlé'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 85,
            nome: 'Nestlé - Sorvetes - Caixa com 24 unidades',
            qtde_produto: 8,
            preco: 240.00,
            total: 1920.00
        },
        {
            id_produto: 86,
            nome: 'Nestlé - Purina - Caixa com 24 unidades',
            qtde_produto: 7,
            preco: 240.00,
            total: 1680.00
        },
        {
            id_produto: 87,
            nome: 'Nestlé - Gerber - Caixa com 24 unidades',
            qtde_produto: 7,
            preco: 120.00,
            total: 840.00
        },
        {
            id_produto: 88,
            nome: 'Nestlé - Maggi - Caixa com 24 unidades',
            qtde_produto: 9,
            preco: 48.00,
            total: 432.00
        }
        // Add more entries as needed
    ],
    subtotal: 4872.00,
    pedido: 15,
    data: new Date('2023-11-29'),
    observacao: 'Mais produtos Nestlé'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 89,
            nome: 'Nestlé - Nesfit - Caixa com 24 unidades',
            qtde_produto: 9,
            preco: 120.00,
            total: 1080.00
        },
        {
            id_produto: 90,
            nome: 'Nestlé - Leite Moça - Caixa com 24 latas',
            qtde_produto: 5,
            preco: 120.00,
            total: 600.00
        }
        // Add more entries as needed
    ],
    subtotal: 1680.00,
    pedido: 16,
    data: new Date('2023-11-29'),
    observacao: 'Outros produtos Nestlé'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 81,
            nome: 'Nestlé - Nescafé - Caixa com 24 unidades',
            qtde_produto: 5,
            preco: 144.00,
            total: 720.00
        },
        {
            id_produto: 82,
            nome: 'Nestlé - Nesquik - Caixa com 24 unidades',
            qtde_produto: 3,
            preco: 72.00,
            total: 216.00
        },
        {
            id_produto: 83,
            nome: 'Nestlé - Neston - Caixa com 24 unidades',
            qtde_produto: 4,
            preco: 120.00,
            total: 480.00
        },
        {
            id_produto: 84,
            nome: 'Nestlé - Chocolates - Caixa com 24 unidades',
            qtde_produto: 3,
            preco: 240.00,
            total: 720.00
        }
        // Add more entries as needed
    ],
    subtotal: 2136.00,
    pedido: 17,
    data: new Date('2023-11-29'),
    observacao: 'Produtos diversos da Nestlé'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 91,
            nome: 'Nestlé - Nescafé - Caixa com 24 unidades',
            qtde_produto: 7,
            preco: 144.00,
            total: 1008.00
        },
        {
            id_produto: 92,
            nome: 'Nestlé - Nesquik - Caixa com 24 unidades',
            qtde_produto: 8,
            preco: 72.00,
            total: 576.00
        },
        {
            id_produto: 93,
            nome: 'Nestlé - Neston - Caixa com 24 unidades',
            qtde_produto: 5,
            preco: 120.00,
            total: 600.00
        },
        {
            id_produto: 94,
            nome: 'Nestlé - Chocolates - Caixa com 24 unidades',
            qtde_produto: 8,
            preco: 240.00,
            total: 1920.00
        }
        // Add more entries as needed
    ],
    subtotal: 4104.00,
    pedido: 18,
    data: new Date('2023-11-29'),
    observacao: 'Produtos Nestlé - Pedido 1'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 95,
            nome: 'Nestlé - Sorvetes - Caixa com 24 unidades',
            qtde_produto: 10,
            preco: 240.00,
            total: 2400.00
        },
        {
            id_produto: 96,
            nome: 'Nestlé - Purina - Caixa com 24 unidades',
            qtde_produto: 10,
            preco: 240.00,
            total: 2400.00
        },
        {
            id_produto: 97,
            nome: 'Nestlé - Gerber - Caixa com 24 unidades',
            qtde_produto: 10,
            preco: 120.00,
            total: 1200.00
        },
        {
            id_produto: 98,
            nome: 'Nestlé - Maggi - Caixa com 24 unidades',
            qtde_produto: 8,
            preco: 48.00,
            total: 384.00
        }
        // Add more entries as needed
    ],
    subtotal: 5384.00,
    pedido: 19,
    data: new Date('2023-11-29'),
    observacao: 'Produtos Nestlé - Pedido 2'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 99,
            nome: 'Nestlé - Nesfit - Caixa com 24 unidades',
            qtde_produto: 6,
            preco: 120.00,
            total: 720.00
        },
        {
            id_produto: 100,
            nome: 'Nestlé - Nescau - Caixa com 24 unidades',
            qtde_produto: 7,
            preco: 72.00,
            total: 504.00
        }
        // Add more entries as needed
    ],
    subtotal: 1224.00,
    pedido: 20,
    data: new Date('2023-11-29'),
    observacao: 'Produtos Nestlé - Pedido 3'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 101,
            nome: 'Nestlé - Ninho - Caixa com 24 unidades',
            qtde_produto: 8,
            preco: 240.00,
            total: 1920.00
        },
        {
            id_produto: 102,
            nome: 'Nestlé - Molico - Caixa com 24 unidades',
            qtde_produto: 5,
            preco: 240.00,
            total: 1200.00
        },
        {
            id_produto: 103,
            nome: 'Nestlé - Nesfit - Barras de Cereal - Caixa com 24 unidades',
            qtde_produto: 6,
            preco: 72.00,
            total: 432.00
        },
        {
            id_produto: 104,
            nome: 'Nestlé - KitKat - Caixa com 24 unidades',
            qtde_produto: 8,
            preco: 240.00,
            total: 1920.00
        }
        // Add more entries as needed
    ],
    subtotal: 4472.00,
    pedido: 21,
    data: new Date('2023-11-29'),
    observacao: 'Produtos Nestlé - Pedido 4'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 105,
            nome: 'Nestlé - Galak - Caixa com 24 unidades',
            qtde_produto: 7,
            preco: 240.00,
            total: 1680.00
        },
        {
            id_produto: 106,
            nome: 'Nestlé - Alpino - Caixa com 24 unidades',
            qtde_produto: 10,
            preco: 240.00,
            total: 2400.00
        },
        {
            id_produto: 107,
            nome: 'Nestlé - Nescafé Dolce Gusto - Caixa com 24 unidades',
            qtde_produto: 7,
            preco: 240.00,
            total: 1680.00
        },
        {
            id_produto: 108,
            nome: 'Nestlé - Nespresso - Caixa com 24 unidades',
            qtde_produto: 8,
            preco: 240.00,
            total: 1920.00
        }
        // Add more entries as needed
    ],
    subtotal: 7680.00,
    pedido: 22,
    data: new Date('2023-11-29'),
    observacao: 'Produtos Nestlé - Pedido 5'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 109,
            nome: 'Nestlé - Purina - Caixa com 24 unidades',
            qtde_produto: 10,
            preco: 240.00,
            total: 2400.00
        },
        {
            id_produto: 110,
            nome: 'Pepsi - Refrigerante - Caixa com 24 latas',
            qtde_produto: 9,
            preco: 72.00,
            total: 648.00
        }
        // Add more entries as needed
    ],
    subtotal: 3048.00,
    pedido: 23,
    data: new Date('2023-11-29'),
    observacao: 'Produtos Nestlé e Pepsi - Pedido 6'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 111,
            nome: 'Gatorade - Bebida Esportiva - Caixa com 24 unidades',
            qtde_produto: 10,
            preco: 72.00,
            total: 720.00
        },
        {
            id_produto: 112,
            nome: 'Quaker - Aveia - Caixa com 24 unidades',
            qtde_produto: 8,
            preco: 72.00,
            total: 576.00
        },
        {
            id_produto: 113,
            nome: 'Lay’s - Batatas Fritas - Caixa com 24 unidades',
            qtde_produto: 7,
            preco: 72.00,
            total: 504.00
        },
        {
            id_produto: 114,
            nome: 'Doritos - Salgadinho - Caixa com 24 unidades',
            qtde_produto: 8,
            preco: 72.00,
            total: 576.00
        }
        // Add more entries as needed
    ],
    subtotal: 2376.00,
    pedido: 24,
    data: new Date('2023-11-29'),
    observacao: 'Produtos Diversos - Pedido 7'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 115,
            nome: 'Ruffles - Batatas Fritas - Caixa com 24 unidades',
            qtde_produto: 8,
            preco: 72.00,
            total: 576.00
        },
        {
            id_produto: 116,
            nome: 'Cheetos - Salgadinho - Caixa com 24 unidades',
            qtde_produto: 9,
            preco: 72.00,
            total: 648.00
        },
        {
            id_produto: 117,
            nome: 'Kero Coco - Água de Coco - Caixa com 24 unidades',
            qtde_produto: 8,
            preco: 72.00,
            total: 576.00
        },
        {
            id_produto: 118,
            nome: 'H2OH! - Bebida Saborizada - Caixa com 24 unidades',
            qtde_produto: 10,
            preco: 72.00,
            total: 720.00
        }
        // Add more entries as needed
    ],
    subtotal: 2520.00,
    pedido: 25,
    data: new Date('2023-11-29'),
    observacao: 'Produtos Diversos - Pedido 8'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 119,
            nome: 'Toddy - Achocolatado - Caixa com 24 unidades',
            qtde_produto: 9,
            preco: 72.00,
            total: 648.00
        },
        {
            id_produto: 120,
            nome: 'Pepsi - Refrigerante Diet - Caixa com 24 latas',
            qtde_produto: 10,
            preco: 72.00,
            total: 720.00
        }
        // Add more entries as needed
    ],
    subtotal: 1368.00,
    pedido: 26,
    data: new Date('2023-11-29'),
    observacao: 'Produtos Diversos - Pedido 9'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 121,
            nome: 'Mountain Dew - Refrigerante - Caixa com 24 latas',
            qtde_produto: 6,
            preco: 72.00,
            total: 432.00
        },
        {
            id_produto: 122,
            nome: '7UP - Refrigerante - Caixa com 24 latas',
            qtde_produto: 6,
            preco: 72.00,
            total: 432.00
        },
        {
            id_produto: 123,
            nome: 'Mirinda - Refrigerante - Caixa com 24 latas',
            qtde_produto: 9,
            preco: 72.00,
            total: 648.00
        },
        {
            id_produto: 124,
            nome: 'Tropicana - Suco de Laranja - Caixa com 24 unidades',
            qtde_produto: 7,
            preco: 72.00,
            total: 504.00
        },
        {
            id_produto: 125,
            nome: 'Aquafina - Água Mineral - Caixa com 24 unidades',
            qtde_produto: 6,
            preco: 24.00,
            total: 144.00
        },
        {
            id_produto: 126,
            nome: 'Lay’s - Batatas Fritas Sabor Queijo - Caixa com 24 unidades',
            qtde_produto: 6,
            preco: 72.00,
            total: 432.00
        },
        {
            id_produto: 127,
            nome: 'Doritos - Salgadinho Sabor Queijo Picante - Caixa com 24 unidades',
            qtde_produto: 9,
            preco: 72.00,
            total: 648.00
        },
        {
            id_produto: 128,
            nome: 'Ruffles - Batatas Fritas Sabor Cebola - Caixa com 24 unidades',
            qtde_produto: 5,
            preco: 72.00,
            total: 360.00
        },
        {
            id_produto: 129,
            nome: 'Cheetos - Salgadinho Sabor Queijo Picante - Caixa com 24 unidades',
            qtde_produto: 7,
            preco: 72.00,
            total: 504.00
        },
        {
            id_produto: 130,
            nome: 'Wickbold - Pão de Forma Tradicional - Pacote com 10 unidades',
            qtde_produto: 8,
            preco: 30.00,
            total: 240.00
        }
        // Add more entries as needed
    ],
    subtotal: 4472.00,
    pedido: 27,
    data: new Date('2023-11-29'),
    observacao: 'Produtos Diversos - Pedido 10'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 131,
            nome: 'Wickbold - Pão de Forma Integral - Pacote com 10 unidades',
            qtde_produto: 5,
            preco: 35.00,
            total: 175.00
        },
        {
            id_produto: 132,
            nome: 'Wickbold - Pão de Forma Sem Casca - Pacote com 10 unidades',
            qtde_produto: 7,
            preco: 40.00,
            total: 280.00
        },
        {
            id_produto: 133,
            nome: 'Wickbold - Pão de Hambúrguer - Pacote com 10 unidades',
            qtde_produto: 6,
            preco: 35.00,
            total: 210.00
        },
        {
            id_produto: 134,
            nome: 'Wickbold - Pão de Hot Dog - Pacote com 10 unidades',
            qtde_produto: 8,
            preco: 35.00,
            total: 280.00
        },
        {
            id_produto: 135,
            nome: 'Wickbold - Pão de Forma Sem Glúten - Pacote com 10 unidades',
            qtde_produto: 10,
            preco: 50.00,
            total: 500.00
        }
        // Add more entries as needed
    ],
    subtotal: 1445.00,
    pedido: 28,
    data: new Date('2023-11-29'),
    observacao: 'Produtos de Padaria - Pedido 28'
});
db.itens_pedidos.insertOne({
    produtos: [
        {
            id_produto: 136,
            nome: 'Wickbold - Pão de Forma Light - Pacote com 10 unidades',
            qtde_produto: 5,
            preco: 35.00,
            total: 175.00
        },
        {
            id_produto: 137,
            nome: 'Wickbold - Pão de Forma Multigrãos - Pacote com 10 unidades',
            qtde_produto: 7,
            preco: 40.00,
            total: 280.00
        },
        {
            id_produto: 138,
            nome: 'Wickbold - Pão de Forma 100% Integral - Pacote com 10 unidades',
            qtde_produto: 7,
            preco: 40.00,
            total: 280.00
        },
        {
            id_produto: 139,
            nome: 'Wickbold - Pão de Forma Sem Lactose - Pacote com 10 unidades',
            qtde_produto: 9,
            preco: 50.00,
            total: 450.00
        }
        // Add more entries as needed
    ],
    subtotal: 1185.00,
    pedido: 29,
    data: new Date('2023-11-29'),
    observacao: 'Produtos de Padaria - Pedido 29'
});


 

db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 1,
            valor: 1896.00,
            fornecedores: [
                { nome: 'Heineken Brewery' },
                { nome: 'Schin Beverages' },
                // ... Repeat for other suppliers
            ]
        }
    ],
    dataentrega: new Date('2023-11-29')
});
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 2,
            valor: 543.00,
            fornecedores: [
                { nome: 'Schin Beverages' },
                // ... Repeat for other suppliers
            ]
        }
    ],
    dataentrega: new Date('2023-11-29')
});
db.recebimento.insertMany([
    {
        recebimentos: [
            {
                id_pedido: 3,
                valor: 1630.00,
                fornecedores: [
                    { nome: 'Supplier7' },
                    { nome: 'Supplier8' },
                    // ... Add more suppliers as needed
                ]
            }
        ],
        dataentrega: new Date('2023-11-25')
    },
    // Continue with the structure for the remaining pedidos
]);
db.recebimento.insertMany([
    {
        recebimentos: [
            {
                id_pedido: 3,
                valor: 1630.00,
                fornecedores: [
                    { nome: 'Nestlé' },
                    { nome: 'Unilever' },
                    // ... Add more suppliers as needed
                ]
            }
        ],
        dataentrega: new Date('2023-11-25')
    },
    // Continue with the structure for the remaining pedidos
]);
db.recebimento.insertMany([
    {
        recebimentos: [
            {
                id_pedido: 4,
                valor: 540.00,
                fornecedores: [
                    { nome: 'Ambev' },
                    { nome: 'Procter & Gamble' },
                    // ... Add more suppliers as needed
                ]
            }
        ],
        dataentrega: new Date('2023-11-30')
    },
    // Continue with the structure for the remaining pedidos
]);
// Pedido 5
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 5,
            valor: 10440.00,
            fornecedores: [
                { nome: 'Red Bull' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2023-12-05')
});

// Pedido 6
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 6,
            valor: 8024.00,
            fornecedores: [
                { nome: 'Red Bull' },
                { nome: 'Ypê' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2023-12-10')
});
// Pedido 7
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 7,
            valor: 1120.00,
            fornecedores: [
                { nome: 'Ypê' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2023-12-15')
});

// Pedido 8
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 8,
            valor: 356.00,
            fornecedores: [
                { nome: 'Heineken' },
                { nome: 'Schin' },
                { nome: 'Devassa' },
                { nome: 'Eisenbahn' },
                { nome: 'Schin Refrigerante' },
                { nome: 'Itubaína' },
                { nome: 'Hellmann’s' },
                { nome: 'Dove' },
                { nome: 'OMO' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2023-12-20')
});
// Pedido 9
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 9,
            valor: 2093.00,
            fornecedores: [
                { nome: 'Tang' },
                { nome: 'Halls' },
                { nome: 'Lacta' },
                { nome: 'Trident' },
                { nome: 'Club Social' },
                { nome: 'Sonho de Valsa' },
                { nome: 'Fresh' },
                { nome: 'Bis' },
                { nome: 'Clight' },
                { nome: 'Oreo' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2023-12-25')
});

// Pedido 10
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 10,
            valor: 1490.00,
            fornecedores: [
                { nome: 'Red Bull' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2023-12-30')
});
// Pedido 11
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 11,
            valor: 552.00,
            fornecedores: [
                { nome: 'Trento' },
                { nome: 'Blong' },
                { nome: 'Oreo' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-01-05')
});

// Pedido 12
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 12,
            valor: 1768.00,
            fornecedores: [
                { nome: 'Heineken' },
                { nome: 'Schin' },
                { nome: 'Devassa' },
                { nome: 'Eisenbahn' },
                { nome: 'Schin Refrigerante' },
                { nome: 'Itubaína' },
                { nome: 'Hellmann’s' },
                { nome: 'Dove' },
                { nome: 'OMO' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-01-10')
});

// Pedido 13
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 13,
            valor: 2144.00,
            fornecedores: [
                { nome: 'Tang' },
                { nome: 'Halls' },
                { nome: 'Lacta' },
                { nome: 'Trident' },
                { nome: 'Club Social' },
                { nome: 'Sonho de Valsa' },
                { nome: 'Fresh' },
                { nome: 'Bis' },
                { nome: 'Clight' },
                { nome: 'Oreo' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-01-15')
});
// Pedido 14
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 14,
            valor: 1194.00,
            fornecedores: [
                { nome: 'Trento' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-01-20')
});

// Pedido 15
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 15,
            valor: 1267.50,
            fornecedores: [
                { nome: 'Red Bull' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-01-25')
});

// Pedido 16
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 16,
            valor: 1886.00,
            fornecedores: [
                { nome: 'Red Bull' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-01-30')
});
// Pedido 17
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 17,
            valor: 180.00,
            fornecedores: [
                { nome: 'Ypê' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-02-05')
});

// Pedido 18
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 18,
            valor: 2092.80,
            fornecedores: [
                { nome: 'Always' },
                { nome: 'Bounty' },
                { nome: 'Braun' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-02-10')
});

// Pedido 19
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 19,
            valor: 4320.00,
            fornecedores: [
                { nome: 'Nestlé' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-02-15')
});
// Pedido 20
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 20,
            valor: 7104.00,
            fornecedores: [
                { nome: 'Nestlé' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-02-20')
});

// Pedido 21
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 21,
            valor: 2052.00,
            fornecedores: [
                { nome: 'Nestlé' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-02-25')
});

// Pedido 22
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 22,
            valor: 4224.00,
            fornecedores: [
                { nome: 'Nestlé' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-03-01')
});
// Pedido 23
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 23,
            valor: 306.00,
            fornecedores: [
                { nome: 'Unilever' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-03-05')
});

// Pedido 24
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 24,
            valor: 2688.00,
            fornecedores: [
                { nome: 'Coca-Cola' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-03-10')
});

// Pedido 25
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 25,
            valor: 4224.00,
            fornecedores: [
                { nome: 'Unilever' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-03-15')
});
// Pedido 26
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 26,
            valor: 2520.00,
            fornecedores: [
                { nome: 'Nestlé' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-03-20')
});

// Pedido 27
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 27,
            valor: 3600.00,
            fornecedores: [
                { nome: 'Coca-Cola' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-03-25')
});

// Pedido 28
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 28,
            valor: 4000.00,
            fornecedores: [
                { nome: 'Unilever' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-03-30')
});
// Pedido 29
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 29,
            valor: 5640.00,
            fornecedores: [
                { nome: 'Nestlé' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-04-05')
});

// Pedido 30
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 30,
            valor: 6960.00,
            fornecedores: [
                { nome: 'Coca-Cola' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-04-10')
});

// Pedido 31
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 31,
            valor: 8400.00,
            fornecedores: [
                { nome: 'Unilever' },
                // ... Add more suppliers as needed
            ]
        }
    ],
    dataentrega: new Date('2024-04-15')
});
