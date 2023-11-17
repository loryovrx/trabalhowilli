import logo from '../../assets/logo.png';

import shampoo from '../../assets/produtos/shampoo.png';
import creme from '../../assets/produtos/creme.png';
import secador from '../../assets/produtos/secador.png';
import oleo from '../../assets/produtos/oleo.png';
import escova from '../../assets/produtos/escova.png';

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    nome: "Cesta de Produtos",
    logoFazenda: logo,
    nomeFazenda: "Beauty Hair",
    descricao: "Uma cesta com os melhores produtos para seu cabelo",
    preco: "R$ 599,99",
    botao: "Compre aqui",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "shampoo",
        imagem: shampoo,
      },
      {
        nome: "Creme capilar",
        imagem: creme,
      },
      {
        nome: "Secador de cabelos",
        imagem: secador,
      },
      {
        nome: "Óleo capilar",
        imagem: oleo,
      },
      {
        nome: "Escova",
        imagem: escova,
      }
    ]
  }
}

export default cesta;