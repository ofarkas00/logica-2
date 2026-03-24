const vendasRaw = [
    { produto: 'Teclado', preco: 150 },
    { produto: 'Mouse', preco: 80 },
    { produto: 'Teclado', preco: 150 }, // Duplicado
    { produto: 'Monitor', preco: 900 },
    { produto: 'Mouse', preco: 80 },    // Duplicado
    { produto: 'Mousepad', preco: 30 }
];
const produtosUnicos = new Set(vendasRaw.map(item => item.produto));

console.log([...produtosUnicos]);
// ['Teclado', 'Mouse', 'Monitor', 'Mousepad']
const mapaProdutos = new Map();

vendasRaw.forEach(item => {
    mapaProdutos.set(item.produto, item.preco);
});

console.log(mapaProdutos);
// Map {
//   'Teclado' => 150,
//   'Mouse' => 80,
//   'Monitor' => 900,
//   'Mousepad' => 30
// }
let total = 0;

for (const item of vendasRaw) {
    total += item.preco;
}

console.log(total);
// 1160