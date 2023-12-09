

db.fornecedor.find()
//Consulta 1 - Encontrar Fornecedores pelo Nome:
db.fornecedor.find({Nome:/hein.*/i})
//Consulta 2 - Encontrar Fornecedores com Menor Prazo de Entrega:
db.fornecedor.find([
  { $unwind: "$categoria" },
  { $match: { "categoria": /.*/i } },
  { $sort: { "prazo_entrega": 1 }
 
])
//Consulta 3 - Encontrar Histórico de Pedido com Fornecedores:
db.itens_pedidos.find({fornecedor: /.*hein.*/i })
//Consulta 4 - Fornecedores com Produtos Mais Baratos por categoria:
db.fornecedor.find().sort({ "ProdutosFornecidos.preco_uni": 1 }).limit(1)


//Consulta 5 - Fornecedores que Respeitaram o Prazo ou Tiveram Menos Atrasos:

db.itens_pedidos.find({prazo: true, atraso: {$gt:0}})

//Consulta 6 - Encontrar Fornecedores pelos Produtos:

db.fornecedor.find({ "produtos.nome" : "Brahma Chopp - Garrafa de vidro de 290 ml (retornável)" })
