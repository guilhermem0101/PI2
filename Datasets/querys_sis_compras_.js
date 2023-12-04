db.total.find({}).count()

db.fornecedores.find()

db.produtos.find()

db.itens_pedidos.find()

db.itens_pedidos.find()

db.recebimento.find()

db.recebimento.drop();


//pedidos por data
db.itens_pedidos.find({}, { data: 1, subtotal: 1,  _id: 0 }).sort({ "data": 1 })

//recebimentos por data
db.recebimento.find().sort({ "dataentrega": 1 })

db.produtos.find({}, { nome: 1, fornecedor: 1, _id: 0 })



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


//produtos mais pedidos (quantidade)
db.itens_pedidos.aggregate([
    {$unwind: "$produtos"},
    {
        $group: {
          _id: "$produtos.nome",
          quantidade: { $sum: "$produtos.qtde_produto" }
    }
  },
  
  { $sort: { quantidade: -1 } }
])






db.itens_pedidos.aggregate([
  { $unwind: "$produtos" },
  {
    $group: {
      _id: "$produtos.nome",
      quantidade: { $sum: "$produtos.qtde_produto" }
    }
  },
  {
    $bucket: {
      groupBy: "$quantidade",
      boundaries: [0, 100, 200, Infinity], // Defina os limites dos intervalos aqui
     
      output: {
        produtos: { $push: { nome: "$qnt", quantidade: "$quantidade" } }
      }
    }
  },
  { $sort: { qnt: 1 } } // Classifique os intervalos se desejar
])







db.itens_pedidos.aggregate([
    {$unwind: "$produtos"},
    {
        $group: {
          _id: "$produtos.nome",
          quantidade: { $sum: 1}
    }
  },
  { $sort: { quantidade: -1 } }
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
 ])






db.fornecedores.deleteOne({ _id: ObjectId('656b680946cd805da4f2e0c3') });

db.fornecedores.find({Nome: /.*ABC Distribuidora.*/i})


//Consulta 3 - Encontrar Histórico de Pedido com Fornecedores:

//Consulta 4 - Fornecedores com Produtos Mais Baratos:
db.fornecedores.find().sort({ "ProdutosFornecidos.preco_uni": 1 }).limit(1)


//Consulta 5 - Fornecedores que Respeitaram o Prazo ou Tiveram Menos Atrasos:


//Consulta 6 - Encontrar Fornecedores pelos Produtos:










var dataInicial = new Date('2023-09-20'); // Data inicial para simular as 10 semanas
var diasPorSemana = 7;

// Encontrar todos os pedidos
var pedidos = db.itens_pedidos.find();

// Iterar sobre os pedidos e atualizar as datas
pedidos.forEach(function (pedido) {
    // Adicionar um número de dias ao timestamp da data inicial
    var diasAAdicionar = Math.floor(Math.random() * 10 * diasPorSemana); // Adiciona até 10 semanas aleatórias
    var novaData = new Date(dataInicial);
    novaData.setDate(dataInicial.getDate() + diasAAdicionar);

    // Atualizar a data no documento do pedido
    db.itens_pedidos.update(
        { _id: pedido._id },
        { $set: { data: novaData } }
    );
});

