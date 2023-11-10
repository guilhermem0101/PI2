db.fornecedores.insertMany([
    {
        CNPJ: '12.345.678/0001-01',
        Nome: 'Nestlé',
        Email: 'nestle@example.com',
        Telefone: '(11) 1234-5678',
        ProdutosFornecidos: [
            { id_produto: 1, nome_produto: 'Chocolate' },
            { id_produto: 2, nome_produto: 'Café' },
            { id_produto: 3, nome_produto: 'Cereais' },
            { id_produto: 4, nome_produto: 'Leite Condensado' },
            { id_produto: 5, nome_produto: 'Produtos para Bebês' }
        ]
    },
    {
        CNPJ: '98.765.432/0001-02',
        Nome: 'Unilever',
        Email: 'unilever@example.com',
        Telefone: '(21) 9876-5432',
        ProdutosFornecidos: [
            { id_produto: 6, nome_produto: 'Maionese' },
            { id_produto: 7, nome_produto: 'Molhos' },
            { id_produto: 8, nome_produto: 'Sabonetes' },
            { id_produto: 9, nome_produto: 'Sabão em Pó' },
            { id_produto: 10, nome_produto: 'Alimentos' }
        ]
    },
    {
        CNPJ: '76.543.210/0001-03',
        Nome: 'Coca-Cola',
        Email: 'cocacola@example.com',
        Telefone: '(31) 6543-2101',
        ProdutosFornecidos: [
            { id_produto: 11, nome_produto: 'Refrigerantes' },
            { id_produto: 12, nome_produto: 'Suco' },
            { id_produto: 13, nome_produto: 'Água' }
        ]
    },
    {
        CNPJ: '34.567.890/0001-04',
        Nome: 'Pepsico',
        Email: 'pepsico@example.com',
        Telefone: '(41) 3456-7890',
        ProdutosFornecidos: [
            { id_produto: 14, nome_produto: 'Salgadinhos' },
            { id_produto: 15, nome_produto: 'Refrigerantes' },
            { id_produto: 16, nome_produto: 'Suco' },
            { id_produto: 17, nome_produto: 'Produtos Alimentícios' }
        ]
    },
    {
        CNPJ: '21.432.109/0001-05',
        Nome: 'Bunge',
        Email: 'bunge@example.com',
        Telefone: '(51) 4321-0987',
        ProdutosFornecidos: [
            { id_produto: 18, nome_produto: 'Óleos' },
            { id_produto: 19, nome_produto: 'Farinhas' },
            { id_produto: 20, nome_produto: 'Produtos de Panificação' }
        ]
    },
    {
        CNPJ: '45.678.901/0001-06',
        Nome: 'Ambev',
        Email: 'ambev@example.com',
        Telefone: '(61) 5678-9012',
        ProdutosFornecidos: [
            { id_produto: 21, nome_produto: 'Cerveja' },
            { id_produto: 22, nome_produto: 'Refrigerantes' },
            { id_produto: 23, nome_produto: 'Água' }
        ]
    },
    {
        CNPJ: '23.456.789/0001-07',
        Nome: 'JBS',
        Email: 'jbs@example.com',
        Telefone: '(71) 2345-6789',
        ProdutosFornecidos: [
            { id_produto: 24, nome_produto: 'Carne Bovina' },
            { id_produto: 25, nome_produto: 'Carne Suína' },
            { id_produto: 26, nome_produto: 'Carne de Frango' }
        ]
    },
    {
        CNPJ: '67.890.123/0001-08',
        Nome: 'Mars',
        Email: 'mars@example.com',
        Telefone: '(81) 6789-0123',
        ProdutosFornecidos: [
            { id_produto: 27, nome_produto: 'Chocolates' },
            { id_produto: 28, nome_produto: 'Petiscos' },
            { id_produto: 29, nome_produto: 'Alimentos para Animais de Estimação' }
        ]
    },
    {
        CNPJ: '12.345.678/0001-09',
        Nome: 'Mondelez International',
        Email: 'mondelez@example.com',
        Telefone: '(91) 2345-6789',
        ProdutosFornecidos: [
            { id_produto: 30, nome_produto: 'Biscoitos' },
            { id_produto: 31, nome_produto: 'Confeitaria' },
            { id_produto: 32, nome_produto: 'Lanches' }
        ]
    },
    {
        CNPJ: '98.765.432/0001-10',
        Nome: 'Perdigão',
        Email: 'perdigao@example.com',
        Telefone: '(92) 9876-5432',
        ProdutosFornecidos: [
            { id_produto: 33, nome_produto: 'Carne de Frango' },
            { id_produto: 34, nome_produto: 'Peru' },
            { id_produto: 35, nome_produto: 'Alimentos Processados' }
        ]
    },
    {
        CNPJ: '34.567.890/0001-11',
        Nome: 'BR Foods',
        Email: 'brfoods@example.com',
        Telefone: '(98) 3456-7890',
        ProdutosFornecidos: [
            { id_produto: 36, nome_produto: 'Carne de Frango' },
            { id_produto: 37, nome_produto: 'Carne Suína' },
            { id_produto: 38, nome_produto: 'Alimentos Processados' }
        ]
    },
    {
        CNPJ: '21.432.109/0001-12',
        Nome: 'Bauducco',
        Email: 'bauducco@example.com',
        Telefone: '(99) 4321-0987',
        ProdutosFornecidos: [
            { id_produto: 39, nome_produto: 'Biscoitos' },
            { id_produto: 40, nome_produto: 'Panettones' },
            { id_produto: 41, nome_produto: 'Produtos de Panificação' }
        ]
    },
    {
        CNPJ: '45.678.901/0001-13',
        Nome: 'Nestlé Purina',
        Email: 'nestlepurina@example.com',
        Telefone: '(10) 5678-9012',
        ProdutosFornecidos: [
            { id_produto: 42, nome_produto: 'Ração para Animais de Estimação' }
        ]
    },
    {
        CNPJ: '23.456.789/0001-14',
        Nome: 'M. Dias Branco',
        Email: 'mdiasbranco@example.com',
        Telefone: '(11) 2345-6789',
        ProdutosFornecidos: [
            { id_produto: 43, nome_produto: 'Massas' },
            { id_produto: 44, nome_produto: 'Biscoitos' },
            { id_produto: 45, nome_produto: 'Produtos de Panificação' }
        ]
    },
    {
        CNPJ: '67.890.123/0001-15',
        Nome: 'Danone',
        Email: 'danone@example.com',
        Telefone: '(12) 6789-0123',
        ProdutosFornecidos: [
            { id_produto: 46, nome_produto: 'Iogurtes' },
            { id_produto: 47, nome_produto: 'Sobremesas Lácteas' }
        ]
    },
    {
        CNPJ: '12.345.678/0001-16',
        Nome: 'Kimberly-Clark',
        Email: 'kimberlyclark@example.com',
        Telefone: '(13) 2345-6789',
        ProdutosFornecidos: [
            { id_produto: 48, nome_produto: 'Produtos de Higiene Pessoal' },
            { id_produto: 49, nome_produto: 'Fraldas' },
            { id_produto: 50, nome_produto: 'Papel Higiênico' }
        ]
    },
    {
        CNPJ: '98.765.432/0001-17',
        Nome: 'Heinz',
        Email: 'heinz@example.com',
        Telefone: '(14) 9876-5432',
        ProdutosFornecidos: [
            { id_produto: 51, nome_produto: 'Ketchup' },
            { id_produto: 52, nome_produto: 'Molhos' },
            { id_produto: 53, nome_produto: 'Maionese' },
            { id_produto: 54, nome_produto: 'Produtos Alimentícios' }
        ]
    },
    {
        CNPJ: '34.567.890/0001-18',
        Nome: 'Kellogg\'s',
        Email: 'kelloggs@example.com',
        Telefone: '(15) 3456-7890',
        ProdutosFornecidos: [
            { id_produto: 55, nome_produto: 'Cereais' },
            { id_produto: 56, nome_produto: 'Barras de Cereais' },
            { id_produto: 57, nome_produto: 'Biscoitos' }
        ]
    },
    {
        CNPJ: '21.432.109/0001-19',
        Nome: 'McCain',
        Email: 'mccain@example.com',
        Telefone: '(16) 4321-0987',
        ProdutosFornecidos: [
            { id_produto: 58, nome_produto: 'Batatas Pré-Fritas' },
            { id_produto: 59, nome_produto: 'Produtos de Batata' }
        ]
    },
    {
        CNPJ: '45.678.901/0001-20',
        Nome: 'Seara',
        Email: 'seara@example.com',
        Telefone: '(17) 5678-9012',
        ProdutosFornecidos: [
            { id_produto: 60, nome_produto: 'Produtos de Carne' },
            { id_produto: 61, nome_produto: 'Congelados' },
            { id_produto: 62, nome_produto: 'Produtos Processados' }
        ]
    },
    {
        CNPJ: '23.456.789/0001-21',
        Nome: 'Parmalat',
        Email: 'parmalat@example.com',
        Telefone: '(18) 2345-6789',
        ProdutosFornecidos: [
            { id_produto: 63, nome_produto: 'Leite' }
             ]
    },
    // Criando e populando a tabela pedidos 
]);
 
 
db.pedidos.insertMany([
    {
        id_produto: 8,
        nome: 'Refrigerante Coca-Cola',
        descricao: 'Refrigerante de Cola',
        preço_unitário: 2.49,
        fornecedor: 'Coca-Cola',
        categoria: 'Bebidas',
        estoque_minimo: 20,
        estoque_maximo: 200
    },
    {
        id_produto: 9,
        nome: 'Salgadinho Cheetos',
        descricao: 'Salgadinho de Queijo',
        preço_unitário: 1.99,
        fornecedor: 'Pepsico',
        categoria: 'Snacks',
        estoque_minimo: 15,
        estoque_maximo: 150
    },
    {
        id_produto: 10,
        nome: 'Óleo de Soja',
        descricao: 'Óleo de Soja Refinado',
        preço_unitário: 4.49,
        fornecedor: 'Bunge',
        categoria: 'Alimentos',
        estoque_minimo: 25,
        estoque_maximo: 250
    },
    {
        id_produto: 11,
        nome: 'Cerveja Skol',
        descricao: 'Cerveja Lager',
        preço_unitário: 2.99,
        fornecedor: 'Ambev',
        categoria: 'Bebidas Alcoólicas',
        estoque_minimo: 30,
        estoque_maximo: 300
    },
    {
        id_produto: 12,
        nome: 'Carne Bovina',
        descricao: 'Carne Bovina de Primeira Qualidade',
        preço_unitário: 9.99,
        fornecedor: 'JBS',
        categoria: 'Carnes',
        estoque_minimo: 10,
        estoque_maximo: 100
    },
    {
        id_produto: 13,
        nome: 'Ração para Gatos',
        descricao: 'Ração Premium para Gatos',
        preço_unitário: 3.49,
        fornecedor: 'Nestlé Purina',
        categoria: 'Animais de Estimação',
        estoque_minimo: 40,
        estoque_maximo: 400
    },
    {
        id_produto: 14,
        nome: 'Biscoitos Oreo',
        descricao: 'Biscoitos Recheados',
        preço_unitário: 2.79,
        fornecedor: 'Mondelez International',
        categoria: 'Snacks',
        estoque_minimo: 18,
        estoque_maximo: 180
    },
    {
        id_produto: 15,
        nome: 'Frango Processado',
        descricao: 'Frango em Peças Congelado',
        preço_unitário: 7.99,
        fornecedor: 'Perdigão',
        categoria: 'Carnes',
        estoque_minimo: 12,
        estoque_maximo: 120
    },
    {
        id_produto: 16,
        nome: 'Leite Longa Vida',
        descricao: 'Leite UHT Integral',
        preço_unitário: 2.29,
        fornecedor: 'BR Foods',
        categoria: 'Laticínios',
        estoque_minimo: 25,
        estoque_maximo: 250
    },
    {
        id_produto: 17,
        nome: 'Utensílios de Cozinha',
        descricao: 'Conjunto de Utensílios',
        preço_unitário: 19.99,
        fornecedor: 'Sanremo',
        categoria: 'Cozinha',
        estoque_minimo: 8,
        estoque_maximo: 80
    },
    {
        id_produto: 18,
        nome: 'Margarina Qualy',
        descricao: 'Margarina para Passar no Pão',
        preço_unitário: 3.29,
        fornecedor: 'Qualy',
        categoria: 'Laticínios',
        estoque_minimo: 15,
        estoque_maximo: 150
    },
    {
        id_produto: 19,
        nome: 'Massa de Macarrão',
        descricao: 'Macarrão Penne',
        preço_unitário: 1.49,
        fornecedor: 'Santa Amália',
        categoria: 'Alimentos',
        estoque_minimo: 20,
        estoque_maximo: 200
    },
    {
        id_produto: 20,
        nome: 'Tempero Ajinomoto',
        descricao: 'Tempero para Realçar o Sabor',
        preço_unitário: 0.99,
        fornecedor: 'Ajinomoto',
        categoria: 'Temperos',
        estoque_minimo: 30,
        estoque_maximo: 300
    },
    {
        id_produto: 21,
        nome: 'Carnes Variadas',
        descricao: 'Cortes de Carne de Qualidade',
        preço_unitário: 8.49,
        fornecedor: 'Aurora',
        categoria: 'Carnes',
        estoque_minimo: 10,
        estoque_maximo: 100
    },
    {
        id_produto: 22,
        nome: 'Barra de Chocolate Lacta',
        descricao: 'Chocolate ao Leite',
        preço_unitário: 1.99,
        fornecedor: 'Lacta',
        categoria: 'Alimentos',
        estoque_minimo: 12,
        estoque_maximo: 120
    },
    {
        id_produto: 23,
        nome: 'Frango Congelado Seara',
        descricao: 'Frango em Pedaços Congelado',
        preço_unitário: 6.49,
        fornecedor: 'Seara',
        categoria: 'Carnes',
        estoque_minimo: 10,
        estoque_maximo: 100
    },
    {
        id_produto: 24,
        nome: 'Suco de Laranja Maguary',
        descricao: 'Suco de Laranja Natural',
        preço_unitário: 4.29,
        fornecedor: 'Maguary',
        categoria: 'Bebidas',
        estoque_minimo: 15,
        estoque_maximo: 150
    },
    
]);


//criado e populando a tabea itens_pedido


db.itens_pedidos.insertMany([
    {
        produtos: [
            { 
                id_produto: 1,
                nome: 'Chocolate', 
                qtde_produto: 5,
                preço: 2.99
            },
            { 
                id_produto: 2,
                nome: 'Café', 
                qtde_produto: 2,
                preço: 5.99
            },
            { 
                id_produto: 3,
                nome: 'Cereais', 
                qtde_produto: 3,
                preço: 3.49
            }
        ],
        subtotal: 39.90,
        pedido: 1,
        data: new Date('2023-10-31'),
        observacao: 'Itens de pedido para festa'
    },
    {
        produtos: [
            { 
                id_produto: 4,
                nome: 'Leite Condensado', 
                qtde_produto: 10,
                preço: 4.79
            }
        ],
        subtotal: 19.90,
        pedido: 1,
        data: new Date('2023-10-31'),
        observacao: 'Pedido para estoque de inverno'
    },
    {
        produtos: [
            { 
                id_produto: 5,
                nome: 'Cereais', 
                qtde_produto: 5,
                preço: 3.49
            },
            { 
                id_produto: 6,
                nome: 'Leite Condensado', 
                qtde_produto: 8,
                preço: 4.79
            }
        ],
        subtotal: 47.35,
        pedido: 2,
        data: new Date('2023-11-01'),
        observacao: 'Pedido para café da manhã'
    },
    // Criando e populando a tabela recebimentos
]);


db.recebimento.insertMany([
    {
        recebimentos: [
            { 
                id_pedido: 1,
                valor: 99.90
            },
            { 
                id_pedido: 2,
                valor: 59.90
            }
        ],
        fornecedor: 'Nestlé',
        dataentrega: new Date('2023-11-10')
    },
    {
        recebimentos: [
            { 
                id_pedido: 3,
                valor: 47.35
            }
        ],
        fornecedor: 'Unilever',
        dataentrega: new Date('2023-11-15')
    },
    {
        recebimentos: [
            { 
                id_pedido: 4,
                valor: 19.90
            },
            { 
                id_pedido: 5,
                valor: 39.90
            }
        ],
        fornecedor: 'Coca-Cola',
        dataentrega: new Date('2023-11-20')
    },
    
]);
