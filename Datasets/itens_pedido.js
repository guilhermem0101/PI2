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
db.itens_pedidos.find()
