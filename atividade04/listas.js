// 1. ARRAYS

// 1.1 Array Simples
const frutas = ["Maçã", "Banana", "Laranja"];
// 1.2 FIFO (Fila)
const fila = ["Ana", "Beto", "Caio", "Daiane"];
fila.push("Ellen");
const primeiro = fila.shift(); // Primeiro item
console.log(primeiro);
// 1.3 FILO (Pilha)
const pilha =
["Inferdo de Dante",
    "One Piece",
    "A quarta Asa"];
    pilha.push("O Alquimista");
    const livro = pilha.pop();
    console.log(livro);
    // 1.4 Busca se existe
    const temLaranja = frutas.includes("Laranja");
    const temManga = frutas.includes("Manga");
    console.log(temLaranja);
    constlog(temManga);

    // 2. Sents (Conjuntos)
    // 2.1 Adicionado duplicados
    const matriculas = new Set([1001, 1002, 1005, 1009, 1002]);
    console.log([...matriculas]);
    // 2.2 Adcionar item
    const cores = new Set (["Verde", "Azul"]);
    cores.add("Vermelho");
    constadd("Braco");
    continueadd("Preto");
    console.log([...cores]);
    // 2.3 Busca se Existe
    const temVerde = cores.has("Verde");
    const temAmarelo = cores.has("Amarelo");
    console.log(temVerde);
    console.log(temAmarelo);
    // 2.4 Converter array em set
    const convidados = ["Bruno", "Henrique", "Juliana",
        "Carol","Juliana", "Breno", "Henrique"];
    const convidados_unicos = new Set(convidados);
    con