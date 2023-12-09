db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 1,
            valor: 1896.00,
            fornecedores: [
                { nome: 'Heineken Brewery' },
                { nome: 'Schin Beverages' },
                
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
                    
                ]
            }
        ],
        dataentrega: new Date('2023-11-25')
    },
    
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
                    
                ]
            }
        ],
        dataentrega: new Date('2023-11-25')
    },
    
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
                    
                ]
            }
        ],
        dataentrega: new Date('2023-11-30')
    },
    
]);
// Pedido 5
db.recebimento.insertOne({
    recebimentos: [
        {
            id_pedido: 5,
            valor: 10440.00,
            fornecedores: [
                { nome: 'Red Bull' },
                
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
                
            ]
        }
    ],
    dataentrega: new Date('2024-04-15')
});