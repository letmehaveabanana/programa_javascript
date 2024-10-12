document.write("A pessoa é: ");

let idade = parseInt(prompt("Qual é a sua idade?"));

console.log(idade);

if (idade > 0 && idade <= 12) {
    console.log("A pessoa é uma criança.");
}
else if (idade > 12 && idade <= 18) {
    console.log("A pessoa é um adolecente.");
}
else if (idade > 18 && idade <= 60) {
    console.log("A pessoa é um adulto.");
}
else {
    console.log("A pessoa é um idoso.");
}