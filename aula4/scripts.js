// Q1
// var num = 1;

// while(num < 11){
// console.log(`${num}`)
// num++
// }

// Q2
// var num;
// var resultado = 0;

// while(true){
//     num = prompt("Digite um numero para somar: ")
//     if(isNaN(num)){
//         console.log("Programa encerrado")
//         break
//     }
//     else{
//         num = Number(num)
//         resultado = resultado + num
//     }
    
// }

// console.log(`O resultado final é de ${resultado}`)

// Q3
// let min = 1;
// let max = 10;
// let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
// while(true){
//     num = Number(prompt("Tente adivinhar o numero: "))
//     if(num === numeroAleatorio){
//         console.log(`Parabens você acertou o numero é ${numeroAleatorio}`)
//         break
//     }
//     else{
//         continue
//     }
// }

// Q4
var saldo = 0

while(true){
    var opcao = Number(prompt("Digite 1 para ver o saldo \nDigite 2 para depositar \nDigite 3 para sacar \nDigite 0 para sair"))
    if(opcao === 1){
        console.log(`Seu saldo é de ${saldo}`)
    }
    else if(opcao === 2){
        var deposito = Number(prompt("Digite o valor a ser depositado"))
        saldo = saldo + deposito
    } 
    else if(opcao === 3){
        var saque = Number(prompt("Digite o valor que gostaria de sacar"))
        if (saque > saldo){
            console.log("Saldo indisponivel")
        }
        else{
            saldo = saldo - saque
            console.log("Saque realizado com sucesso")
        }
    }
    else{
        console.log("Programa encerrado")
        break
    }
    
}