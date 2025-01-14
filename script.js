/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.

2. Verificação de Par ou Ímpar
Descrição:
Peça ao usuário um número e diga se ele é par ou ímpar.
Tarefas:
Crie uma função que receba um número.
Verifique se o número é divisível por 2.
Exiba no console "O número é par" ou "O número é ímpar".

3. Contagem de Números
Descrição:
Exiba os números de 1 a 10 usando um loop.
Tarefas:
Utilize um loop for para imprimir os números no console.
Modifique o exercício para usar um while.

4. Tabuada de um Número
Descrição:
Crie uma tabuada para um número informado pelo usuário.
Tarefas:
Peça ao usuário um número.
Use um loop for para multiplicar o número de 1 a 10.
Exiba o resultado no console.

5. Encontrar o Maior Número em uma Lista
Descrição:
Dado um array de números, encontre o maior valor.
Tarefas:
Crie um array como [3, 7, 2, 9, 5].
Use um loop para comparar os números e encontrar o maior.
Exiba o maior número no console.

6. Inverter uma Palavra
Descrição:
Peça ao usuário uma palavra e exiba-a invertida.
Tarefas:
Crie uma função que receba uma string.
Converta a string para um array com o método split.
Inverta a ordem com o método reverse e transforme novamente em string com join.

7. Soma de Elementos de um Array
Descrição:
Calcule a soma dos elementos de um array.
Tarefas:
Crie um array como [1, 2, 3, 4, 5].
Use um loop ou o método reduce para somar os valores.
Exiba o resultado no console.

8. Número Primo
Descrição:
Verifique se um número informado pelo usuário é primo.
Tarefas:
Crie uma função que receba um número.
Verifique se ele é divisível apenas por 1 e por ele mesmo.
Exiba "É primo" ou "Não é primo".

9. Fatorial de um Número
Descrição:
Calcule o fatorial de um número informado pelo usuário.
Tarefas:
Crie uma função que receba um número.
Use um loop para multiplicar os números de 1 até o número informado.
Exiba o resultado no console.

10. Verificar Palíndromo
Descrição:
Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
Tarefas:
Crie uma função que receba uma string.
Inverta a string e compare com o original.
Exiba no console se a palavra é ou não um palíndromo.

11. Contar Vogais em uma Frase
Descrição:
Dada uma frase, conte o número de vogais.
Tarefas:
Peça ao usuário uma frase.
Use um loop para verificar cada caractere.
Conte as vogais (a, e, i, o, u) e exiba o total.

12. Gerar Números Aleatórios
Descrição:
Gere um número aleatório entre 1 e 100.
Tarefas:
Use a função Math.random e ajuste o intervalo para 1 a 100.
Exiba o número gerado no console.

13. Substituir Números Negativos por Zero
Descrição:
Dado um array de números, substitua todos os números negativos por zero.
Tarefas:
Crie um array como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o array no console.

14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.

15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um array e exiba-o no console.
*/

function primeiro() {
  const x = window.prompt("Insira o primeiro numero:");
  const y = window.prompt("Insira o segundo numero:");
  const soma = Number(x) + Number(y);
  console.log(soma)
}

function segundo() {
  const num = Number(window.prompt("Insira o número para verificarmos se é par ou impar"));
  if (num % 2 == 0) {
    console.log(`O número ${num} é par`);
  }
  else {
    console.log(`O número ${num} é impar`);
  }
}

function terceiro() {
  for(let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function terceiroWhile() {
  let i = 1;
  while (i<= 10) {
    console.log(i);
    i++;
  }
}

function quarto() {
  let i = 1;
  const num = Number(window.prompt("Insira o número para gerar a tabuada")); 
  while (i <= 10) {
    res = num * i;
    console.log(`${num} x ${i} = ${res}`);
    i++
  }
}

function quinto() {
  const array = [3, 7, 2, 9, 5];
  let maior = array[0];
  array.forEach(x => {
    if (x > maior) {
      maior = x;
    }
  });
  console.log(`O maior número do array: ${array} é ${maior}`);
}

function sexto() {
  let palavra = window.prompt("Informe a palavra que deseja inverter");
  let array = palavra.split("");
  const arrayInv = inv(array);
  console.log(`A palavra ${palavra} inversa será: ${arrayInv}`);
}

function inv(array) {
  const arrayInv = array.reverse();
  const palavraInv = arrayInv.join("");
  return palavraInv;
}

function setimo() {
  let soma = 0;
  const array = [1, 2, 3, 4, 5];
  array.forEach(x => {
    soma += Number(x);
  });
  console.log(soma);
}

function oitavo() {
  let num = Number(window.prompt("Insira o número para verificarmos se é primo"));
  primo(num);
}

function primo(num) {
  let i = 2;
  if (num == 2) {
    console.log(`O numero ${num} é primo`);
  }
  else {
    let count = 0;
    for(i; i < num; i++){
      div = num % i;
      if (div > 1) {
        count++;
      }
    }
    if (count > 1) {
      console.log(`O número ${num} não é primo`);
    }
    else {
      console.log(`O número ${num} é primo`);
    }
  }
}

function nono() {
  const num = Number(window.prompt('Insira o numero que deseja fatorar'));
  fatorial(num);
}

function fatorial(num) {
  let i = 1;
  let numFat = 1
  let array = [];
  for(i; i <= num; i++) {
    array.push(i)
  }
  array.forEach(x => {
    numFat *= x
  });
  console.log(`!${num} = ${numFat}`)
}

function decimo() {
  let palavra = window.prompt('Insira a palavra');
  palindromo(palavra);
}

function palindromo(palavra) {
  let array = palavra.split("");
  array = array.reverse();
  let palavraInv = array.join("");
  if (palavra == palavraInv) {
    console.log(`A palavra ${palavra} é um palindromo`);
  }
  else {
    console.log(`A palavra ${palavra} não é um palindromo`);
  }
}

function onze() {
  let frase = window.prompt('Insira a frase');
  vogalChecker(frase);
}

function vogalChecker(frase) {
  let count = 0;
  const vogais = ['a','e','i','o','u'];
  array = frase.split("")
  array.forEach(palavra => {
    vogais.forEach(vogal => {
      if (palavra == vogal) {
        count++;
      }
    });
  });
  console.log(`O total de vogais na frase é ${count}`)
}

function doze() {
  let random = Math.floor(Math.random() * 101);
  console.log(random);
}

function treze() {
  const array =  [4, -3, 2, -1, 0];
  array.forEach(num => {
    if (num < 0) {
      let id = array.indexOf(num);
      console.log(id)
      array.splice(id, 1, 0);
    }
  });
  console.log(array)
}

function quartorze() {
  const ilegal = ['palavra1', 'palavra2'];
  const frase = window.prompt('Insira a frase que deseja');
  const array = frase.split(" ");
  array.forEach(palavra => {
    ilegal.forEach(palavraIlegal => {
      if (palavra == palavraIlegal) {
        window.alert('Palavra ilegal detectada');
      }
    });
  });
}

function quinze() {
  let i = 0;
  let array = [];
  for(i; i <= 20; i++) {
    if (i % 2 == 0) {
      array.push(i);
    }
  }
  console.log(array);
}