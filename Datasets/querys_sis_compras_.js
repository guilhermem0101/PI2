db.total.find({}).count()

db.fornecedores.find()

db.produtos.find()

db.itens_pedidos.find()

db.itens_pedidos.find()

db.recebimento.find()

db.recebimento.drop();


//pedidos por data
db.itens_pedidos.find().sort({ "data": 1 })

//recebimentos por data
db.recebimento.find().sort({ "dataentrega": 1 })




//Entregas por fornecedor
db.recebimento.aggregate([
  { $unwind: "$recebimentos" },
  { $unwind: "$recebimentos.fornecedores" },
  {
    $group: {
      _id: "$recebimentos.fornecedores.nome",
      quantidadeEntregas: { $sum: 1 }
    }
  },
  { $sort: { quantidadeEntregas: -1 } }
])




//Consulta 2 - Encontrar Fornecedores com Menor Prazo Médio de Entrega:
db.itens_pedidos.aggregate([
 {
   $lookup: {
     from: "recebimento",
     localField: "pedido",
     foreignField: "recebimentos.id_pedido",
     as: "dados_entrega"
   }
 },
 {$unwind: "$dados_entrega"},
 {$unwind: "$dados_entrega.recebimentos"},
 {$unwind: "$dados_entrega.recebimentos.fornecedores"},
 {
   $project: {
     subtotal: 1,
     data: 1,
     "fornecedor": "$dados_entrega.recebimentos.fornecedores.nome",
     "entrega": "$dados_entrega.dataentrega",
     "dias": {
       $divide: [
         {
           $subtract: ["$dados_entrega.dataentrega", "$data"]
         },
         1000 * 60 * 60 * 24
       ]
     }
   },
 },
 {
  $group: {
    _id: "$fornecedor",
    avgDias: { $avg: "$dias" }
  }
 },
 {
    $project: {
    _id: 1,
    mediaDias: { $toInt: "$avgDias" }
    }
 },
 { $sort: { mediaDias: 1 } }

])







db.fornecedores.find({Nome: /.*Unilever.*/i})


//Consulta 3 - Encontrar Histórico de Pedido com Fornecedores:

//Consulta 4 - Fornecedores com Produtos Mais Baratos:
db.fornecedores.find().sort({ "ProdutosFornecidos.preco_uni": 1 }).limit(1)


//Consulta 5 - Fornecedores que Respeitaram o Prazo ou Tiveram Menos Atrasos:


//Consulta 6 - Encontrar Fornecedores pelos Produtos:


