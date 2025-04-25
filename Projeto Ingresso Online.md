# 🎟️ Sistema de Compra de Ingressos em JavaScript

## 📌 Etapa 1: Capturar valores do formulário

```js
function comprar() {
  let tipo = document.getElementById('tipo-ingresso');
  let quantidade = document.getElementById('qtd');
  alert(tipo.value);
  alert(quantidade.value);
}
```

## 🛒 Etapa 2: Validar tipo "Pista" e realizar compra

```js
function comprar() {
  let tipo = document.getElementById('tipo-ingresso');
  let qtd = parseInt(document.getElementById('qtd').value);

  if (tipo.value == 'pista') {
    comprarPista(qtd);
  }
}

function comprarPista(qtd) {
  let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

  if (qtd > qtdPista) {
    alert('❌ Quantidade indisponível!');
  } else {
    qtdPista -= qtd;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert('✅ Compra realizada com sucesso!');
  }
}
```

## 🎟️ Etapa 3: Suporte aos três tipos de ingresso

```js
function comprar() {
  let tipo = document.getElementById('tipo-ingresso');
  let qtd = parseInt(document.getElementById('qtd').value);

  if (isNaN(qtd) || qtd <= 0) {
    alert('⚠️ Insira uma quantidade válida e positiva.');
    return;
  }

  if (tipo.value === 'pista') {
    comprarPista(qtd);
  } else if (tipo.value === 'superior') {
    comprarSuperior(qtd);
  } else {
    comprarInferior(qtd);
  }
}

function comprarPista(qtd) {
  let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

  if (qtd > qtdPista) {
    alert('❌ Quantidade indisponível!');
  } else {
    qtdPista -= qtd;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert('✅ Compra realizada com sucesso!');
  }
}

function comprarSuperior(qtd) {
  let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

  if (qtd > qtdSuperior) {
    alert('❌ Quantidade indisponível!');
  } else {
    qtdSuperior -= qtd;
    document.getElementById('qtd-superior').textContent = qtdSuperior;
    alert('✅ Compra realizada com sucesso!');
  }
}

function comprarInferior(qtd) {
  let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

  if (qtd > qtdInferior) {
    alert('❌ Quantidade indisponível!');
  } else {
    qtdInferior -= qtd;
    document.getElementById('qtd-inferior').textContent = qtdInferior;
    alert('✅ Compra realizada com sucesso!');
  }
}
```

## 🧠 Desafios Extras

### ✅ 1. Validar quantidade

```js
if (isNaN(qtd) || qtd <= 0) {
  alert('⚠️ Insira uma quantidade válida e positiva.');
  return;
}
```

### 🔢 2. Converter string em número

```js
function converterString(str) {
  return parseInt(str);
}

console.log(converterString('13')); // 13
```

### 🧮 3. Calculadora simples

```js
function adicionar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) {
  return b === 0 ? '❌ Divisão por zero!' : a / b;
}

function calculadora(num1, num2, operador) {
  if (operador === '+') return adicionar(num1, num2);
  else if (operador === '-') return subtrair(num1, num2);
  else if (operador === '*') return multiplicar(num1, num2);
  else if (operador === '/') return dividir(num1, num2);
  else return '❌ Operação inválida!';
}

console.log(calculadora(28, 13, '+')); // 41
```

### ⚖️ 4. Verificar par ou ímpar

```js
function parOuImpar(numero) {
  return numero % 2 === 0 ? `🔵 ${numero} é par.` : `🟠 ${numero} é ímpar.`;
}

console.log(parOuImpar(6)); // 🔵 6 é par.
```

### 🌡️ 5. Conversor de temperatura

```js
function converterTemperatura(temp, escala) {
  if (escala === 'F') {
    return `${temp}ºC = ${(temp * 9/5 + 32).toFixed(2)}ºF`;
  } else if (escala === 'C') {
    return `${temp}ºF = ${((temp - 32) * 5/9).toFixed(2)}ºC`;
  } else {
    return '❌ Escala inválida (use "C" ou "F")';
  }
}

console.log(converterTemperatura(25, 'F')); // 25ºC = 77.00ºF
```
