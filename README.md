# projeto-ingresso
<h1 align="center"> Sistema de Compra de Ingressos </h1>

<h2 align="center">1. Recuperando elementos do formulário. </h2>

* Objetivo: Função de Compra.

* Vamos criar uma função chamada comprar para processar os dados de um formulário de compra. Vamos recuperar os elementos do formulário, que são os campos para o tipo de ingresso e a quantidade, e exibir esses dados em alertas para verificar se estão corretos.

* Recuperar os Elementos do Formulário: Vamos pegar os valores preenchidos nos campos de tipo de ingresso e quantidade, usando o método getElementById do JavaScript.

* Chamar a Função comprar: A função será acionada quando o usuário enviar o formulário ou realizar alguma ação.

* Criar Variáveis: Vamos armazenar os valores dos campos em variáveis para poder manipulá-los facilmente.

* Exibir Alertas: Vamos usar alert para mostrar os valores preenchidos nos campos e garantir que os dados estão corretos antes de seguir com o processo.

**Código:**

```function comprar() {```

```let tipo = document.getElementById('tipo-ingresso');```

```let quantidade = document.getElementById('qtd');```

```alert(tipo.value);```

```alert(quantidade.value)};```

<h2 align="center">2. Usando condicionais para realizar a compra dos ingresso da pista. </h2>

* O código verifica a disponibilidade de ingressos de diferentes tipos e permite ao usuário selecionar a quantidade de ingressos desejada. Caso a quantidade de ingressos disponível seja insuficiente, o sistema informa o usuário e impede a compra.

**Código:**

* `Função comprar()`

``function comprar() {``

```// Recupera o valor selecionado no campo 'tipo-ingresso'```

```let tipo = document.getElementById('tipo-ingresso');```

```// Recupera o valor preenchido no campo 'qtd'```

```let qtd = parseInt(document.getElementById('qtd').value);```

```if (tipo.value == 'pista') {```

```comprarPista(qtd);```
```}```

```}```

**Explicação:**

* Esta função é chamada quando o usuário tenta realizar a compra. Ela realiza as seguintes operações:

* Recupera o tipo de ingresso selecionado pelo usuário.

* Recupera a quantidade de ingressos solicitada.

* Se o tipo de ingresso for 'pista', chama a função `comprarPista()` para tratar a compra.

**Código:**

```function comprarPista(qtd) {```

```let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);```

```if (qtd > qtdPista) {```

```alert('Não foi possível realizar a compra, quantidade indisponível para compra.');```

```} else {```

```qtdPista = qtdPista - qtd;```

```document.getElementById('qtd-pista').textContent = qtdPista;```

```alert('Compra realizada com sucesso!');```

```}```

```}```

* Esta função trata a compra do tipo de ingresso 'pista'. Ela faz a verificação da disponibilidade de ingressos e atualiza a quantidade de ingressos disponíveis. Se a quantidade solicitada for maior que a quantidade disponível, um alerta de erro é exibido.

**Como funciona:**

* O usuário seleciona o tipo de ingresso desejado no campo 'tipo-ingresso'.

* O usuário preenche a quantidade de ingressos que deseja comprar no campo 'qtd'.

* Quando o botão de compra é acionado, o sistema verifica se o tipo de ingresso é 'pista'.

* Se o tipo de ingresso for 'pista', a `função comprarPista()` é chamada.

* Dentro da `função comprarPista()`, é verificada a quantidade de ingressos disponíveis. Se a quantidade solicitada for maior que a quantidade disponível, um alerta é exibido informando que a compra não pode ser realizada.

* Caso contrário, a quantidade de ingressos disponíveis é atualizada e a compra é realizada com sucesso, com um alerta de confirmação.

<h2 align="center">3. Realizando a compra para outros tipos de ingresso. </h2>

* Agora, a `função comprar()` verifica qual tipo de ingresso foi selecionado e chama a função correspondente para cada tipo de ingresso: `comprarPista()`, `comprarSuperior()` ou `comprarInferior()`.

**Código:**

```function comprar() {```

```// Recupera o valor selecionado no campo 'tipo-ingresso'```

```let tipo = document.getElementById('tipo-ingresso');```

```// Recupera o valor preenchido no campo 'qtd'```

```let qtd = parseInt(document.getElementById('qtd').value);```

```if (tipo.value == 'pista') {```

```comprarPista(qtd);```

```} else if (tipo.value == 'superior') {```

```comprarSuperior(qtd);```

```} else {```

```comprarInferior(qtd);```

```}```

```}```

* Função `comprarPista(qtd)`.

A função `comprarPista()` é chamada quando o tipo de ingresso selecionado é "Pista". Ela verifica se a quantidade solicitada é maior do que a quantidade disponível para o tipo "Pista" e, em seguida, realiza a compra ou exibe um erro.

**Código:**

```function comprarPista(qtd) {```

```let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);```

```if (qtd > qtdPista) {```

```alert('Não foi possível realizar a compra, quantidade indisponível!');```

```} else {```

```qtdPista = qtdPista - qtd;```

```document.getElementById('qtd-pista').textContent = qtdPista;```

```alert('Compra realizada com sucesso!');```

```}```

```}```

* Função `comprarSuperior(qtd)`.

A função `comprarSuperior()` é chamada quando o tipo de ingresso selecionado é "Superior". Ela funciona da mesma forma que a função comprarPista(), mas para o tipo de ingresso "Superior".

**Código:**

```function comprarSuperior(qtd) {```

```let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);```

```if (qtd > qtdSuperior) {```

```alert('Não foi possível realizar a compra, quantidade indisponível!');```

```} else {```

```qtdSuperior = qtdSuperior - qtd;```

```document.getElementById('qtd-superior').textContent = qtdSuperior;```

```alert('Compra realizada com sucesso!');```

```}```

```}```

* Função `comprarInferior(qtd).`

A função `comprarInferior()` é chamada quando o tipo de ingresso selecionado é "Inferior". Assim como as outras funções, ela verifica a quantidade disponível e realiza a compra, se possível.

**Código:**

```function comprarInferior(qtd) {```

```let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);```

```if (qtd > qtdInferior) {```

```alert('Não foi possível realizar a compra, quantidade indisponível!');```

```} else {```

```qtdInferior = qtdInferior - qtd;```

```document.getElementById('qtd-inferior').textContent = qtdInferior;```

```alert('Compra realizada com sucesso!');```

```}```

```}```

O código foi atualizado para permitir a compra de ingressos de três tipos diferentes: Pista, Superior e Inferior. O sistema agora verifica o tipo de ingresso selecionado e realiza a compra de acordo com a quantidade disponível para cada tipo.*

**Explicação do código:**

Este código implementa uma lógica para realizar compras de ingressos para um evento. Ele permite ao usuário selecionar o tipo de ingresso e a quantidade desejada, e verifica se a quantidade disponível de ingressos é suficiente para atender à solicitação. Se a compra for possível, a quantidade disponível é atualizada. Caso contrário, um alerta é mostrado ao usuário.

1. `Função comprar()`:

* Recupera o tipo de ingresso selecionado pelo usuário `('tipo-ingresso')` e a quantidade solicitada `('qtd')`.

* Dependendo do tipo de ingresso selecionado (pista, superior ou inferior), a função chama a respectiva função de compra: `comprarPista()`, `comprarSuperior()` ou `comprarInferior()`.

2. Função `comprarPista(qtd)`:

* Verifica se a quantidade solicitada de ingressos para o tipo pista é maior do que a quantidade disponível `('qtd-pista')`.

* Se a quantidade solicitada for maior, um alerta de erro é exibido.

* Se a quantidade for suficiente, a quantidade de ingressos disponíveis é atualizada, subtraindo a quantidade comprada, e um alerta de sucesso é exibido.

3. Função `comprarSuperior(qtd)`:

* Funciona da mesma forma que a `comprarPista()`, mas para ingressos do tipo superior.

* A quantidade disponível de ingressos para o tipo superior é verificada `('qtd-superior')`, e a lógica de compra é a mesma.

4. Função `comprarInferior(qtd)`:

* Similar às outras funções, mas para o tipo de ingresso inferior.

* A quantidade de ingressos disponíveis para o tipo inferior é verificada `('qtd-inferior')`, e a compra é realizada ou um erro é exibido, dependendo da disponibilidade.

<h3 align="center">4. Fluxo do código. </h3>

* O usuário seleciona o tipo de ingresso e insere a quantidade desejada.

* Ao clicar no botão de compra, a `função comprar()` é chamada.

* Dependendo do tipo de ingresso selecionado, a função correspondente `(comprarPista()`, `comprarSuperior()`, `comprarInferior()` é executada.

* A quantidade de ingressos disponíveis é verificada. Se a quantidade solicitada for maior que a quantidade disponível, o usuário é informado de que não há ingressos suficientes. Caso contrário, a quantidade disponível é atualizada e a compra é confirmada com um alerta.

<h4 align="center">5. Desafios. </h4>

* 1. Adicione uma verificação para garantir que a quantidade inserida pelo usuário seja um número positivo. Se o valor não for válido, exiba uma mensagem de erro adequada.

**Código adicional para o desafio:**

```// Verifica se a quantidade é um número positivo```

```if (isNaN(qtd) || qtd <= 0) {```

```alert('Por favor, insira uma quantidade válida e positiva.');```

```return; // Impede a execução do resto da função se a quantidade for inválida```

```}```

Verificação de quantidade válida: Após capturar o valor da quantidade (qtd), foi adicionada uma verificação para garantir que o valor seja um número positivo.

Se o valor não for um número `(isNaN(qtd))` ou for menor ou igual a zero `(qtd <= 0),` exibe uma mensagem de erro `(alert)` e impede a execução da `função comprar()` usando `return`.


* 2. Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.


```function converterString(str) {```

```    // Usa parseInt para converter a string em número inteiro```

```    const numero = parseInt(str);```

```    return numero;```
```}```

```console.log(converterString('13'));```

* 3. Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.

```// Funções para cada operação```

```function adicionar(a, b) {```

```    return a + b;```

```}```

```function subtrair(c, d) {```

``` return c - d;```

```}```

```function multiplicar(e, f) {```

```    return e * f;```

```}```

```function dividir(g, h) {```

```    if(h === 0) {```

```        return 'Erro: divisão por zero!';```

```    }```

```    return g / h;```

```}```

```function calculadora(num1, num2, operador) {```

```    let resultado;```

```    // Bloco condicional com if...else```

```if (operador === '+') {```

```   resultado = adicionar(num1, num2);```

```} else if (operador === '-') {```

```    resultado = subtrair(num1, num2);```

```} else if (operador === '*') {```

```    resultado = multiplicar(num1, num2);```

```} else if (operador === '/') {```

```    resultado = dividir(num1, num2);```
    
```} else {```

```    resultado = 'Operação inválida!';```

```}```

```return resultado;```

```}```

```console.log(calculadora(28, 13, '+'));```

```console.log(calculadora(28, 13, '-'));```

```console.log(calculadora(13, 7, '*'));```

```console.log(calculadora(28, 4, '/'));```

```console.log(calculadora(28, 0, '/'));```

```console.log(calculadora(28, 13, '%'));```

* 4. Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.

```function parOuImpar(numero) {```

```    if (numero % 2 === 0) {```

```        return `O número ${numero} é par.`; ```

```    } else {```

```        return `O número ${numero} é ímpar.`; ```

```    }```

```}```

```console.log(parOuImpar(6));```

```console.log(parOuImpar(9));```

* 5. Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar

```function converterTemperatura(temperatura, escala) {```

```    let resultado;```
    
```    if (escala === 'F') {```

```       // Celsius para Fahrenheit```

```        resultado = (temperatura * 9/5) + 32;```
        
```        return `${temperatura} ºC é igual a ${resultado.toFixed(2)}ºF`;```

```    } else if (escala === 'C') {```

```        // Fahrenheit para Celsius```

```        resultado = (temperatura - 32) * 5/9;```

```        return `${temperatura}ºF é igual a ${resultado.toFixed(2)}ºC`;```

```    } else {```

```        return 'Escala inválida. Use "C" para Celcius ou "F" para Fahrenheit.'```

```    }```
    
```}```

```console.log(converterTemperatura(25, "F")); // 25°C é igual a 77.00°F```

```console.log(converterTemperatura(77, "C")); // 77°F é igual a 25.00°C```

```console.log(converterTemperatura(30, "X")); // Escala inválida...```