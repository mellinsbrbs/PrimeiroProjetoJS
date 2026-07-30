Soma + 10 + 5 = 15
Subtração - 10 - 3 +7
Multiplicação * 4 * 5 = 20
Divisão / 10 / 5 = 2
Resto (Modulo) 10 % 3 = 1
Potência ** 2 ** 3 = 2 * 2 * 2 = 8

// Se n % 2 == 0 => Par

// > Maior que 
// < Menor que
// >= Maior ou igual 
// <= Menor ou igual 
// != Diferente
// == Igual
// === Estritamente igual (valor e tipo)
// !== Estritamente diferente (valor e tipo)

console.log(10 == "10") // true
console.log("----------------")
console.log(10 === "10") // false

let botao = true;

console.log(typeof botao); // verifica o tipo da variável

console.log(18 >= 18); // true

let perfil = "admin";
let categoria = 1 

if (perfil === "admin") && (categoria === 2) {  //true por que perfil é igual a "admin"
    console.log("Bem Vindo, Admin!");
}else{
    console.log("Acesso negado.");
}

// && AND
Condição A Comdição B    A && B
true      true          true
true      false         false
false     true          false
false     false         false
// || OR
Condição A Comdição B    A || B
true      true          true
true      false         true
false     true          true
false     false         false

// NOT - inversão dos valores

let ativo = true;

console.log(!ativo); // false

console.log(!false); // true
