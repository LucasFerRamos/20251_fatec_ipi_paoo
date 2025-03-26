



// function calculoRapidinho(n){
//   return new Promise((resolve, reject) =>{
//     n < 0 ? 
//     reject('Use apenas números positivos!') : 
//     resolve((n / 2) * (n + 1))
//   })
// }
// calculoRapidinho(-10).then((res) => console.log(`Deu certo: ${res}`))
// .catch((err) => console.log(`Erro: ${err}`))


// function calculoRapidinho(n){
  
  
//   return n < 0 ? 
//     Promise.reject('Use apenas números positivos!') : 
//     Promise.resolve((n / 2) * (n + 1))
// }
//   calculoRapidinho(-10).then((res) => {
//     console.log(`Deu certo: ${res}`)
//   })
//   .catch((err) => console.log(`Erro: ${err}`))
// function calculoDemorado(n){
  //1 + 2 + ... + n-1 + n 
  //1 Construir um objeto do tipo Promise, entregando  para o construtor a função que representa a computação demorada
 
  //a função que representa a computação demorada, recebe duas funções como parâmetro. A primeira deve ser chamada quando a computação terminar com sucesso. A segunda, por outro lado, deve ser chamada quando a computação terminar com erro
//   const p = new Promise((resolve, reject) => {
//     let acumulador = 0
//     for ( let i = 1; i <= n; i++) 
//         acumulador += i
//     resolve(acumulador)

//   })
//   //2.Devolve a promise
//   return p
// }

// const promiseResultante = calculoDemorado(10)
// promiseResultante.then((res) => {
//   console.log(`Deu certo: ${res}`)
// })

//  //processamento síncrono(bloqueante) e processamento assíncrono
// const fs = require('fs')


// //callback hell
// const exibirConteudo = (erro, conteudo) => {
//     if(erro){
//         console.log(`Deu erro: ${erro}`)
//     }else{
//         console.log(`Funcionou: ${conteudo.toString()}`)
//         const dobro = Number(conteudo.toString()) * 2
//         const finalizar = (erro) => {
//             console.log(`${erro ? 'Deu erro: ' + erro : 'Dobro armazenado com sucesso. C' }`)
//         }
//         fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         console.log("A")
//     }
// }
// fs.readFile("arquivo.txt", exibirConteudo) //IO-BOUND
// console.log("B")
// // console.log("Script principal continua executando...")
// console.log("Script principal terminando...")

 // function dobro(n){
//     return 2* n
// }
// const res = dobro(5) //bloqueante
// console.log(res)
//IO-Bound


//objetos JSON: JAVASCRIPT OBJECT NOTATION


//objetos literais Javascript
// const calculadora = {
//     soma: function(a,b){
//         return a + b
//     },
//     subtracao:(a,b) => a - b
    
// }
// console.log(calculadora.soma(2,5))

// uma concessionária que tem cnpj e endereço(logradouro,numero e bairro). 
// Ela tem um estoque de veiculos. Cada veiculo  tem marca, modelo 
// e ano de fabricação. Em um determinado momento, 
// talvez o estoque esteja vazio. Noutro, talvez ele tenha 17 veiculos.

// const concessionaria = {
//     cnpj:'CNPJ',
//     endereco: {
//         logradouro: 'logradouro',
//         numero: 10,
//         bairro: {
//             nome: 'Vila J',
//             quantidadeMoradores: 500
//         }
//     },
//     veiculos: [
//         {
//             marca: 'Fiat',
//             modelo: 'Uno',
//             ano: 1990
//         },
//         {
//             marca: 'Honda',
//             modelo: 'Fit',
//             ano: 2010
//         }
//     ],
//     estoque: {
        
//         quantidade:[0,17]
//     }
    
    
// }
// for(let veiculo of concessionaria.veiculos){
//     console.log(veiculo.marca)
// }

// for(let i = 0; i < concessionaria.veiculo.length;i++){
// console.log(concessionaria.veiculo[i].marca)
// }
// console.log(concessionaria.veiculo[1].modelo)
// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco:{
//         logradouro: 'Rua B',
//         numero: 10
//     }
// }
// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa.endereco['numero'])
// //uma pessoa que se chama João e tem 17 anos 
// const pessoa = {
//     nome: 'João',
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])
// //operador de desestruturação de objeto
// const{nome, idade} = pessoa 
// console.log(nome, idade)

// const nome = pessoa.nome
// const idade = pessoa.idade
// console.log(nome, idade)
// const valores = [1, 2, 3, 4]
// const res = valores.reduce((ac, v) => ac + v)

// const nomes = ['Ana Paula', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
//produzir um novo vetor contendo a letra inicial de cada nome
// const peloMenosUmComecaComA = nomes.some(n => n.toLowerCase().startsWith('a'))
// console.log(peloMenosUmComecaComA)
// const todosComecamComA = nomes.every(nome => nome.startsWith("A") || nome.startsWith("a"))
// console.log(todosComecamComA)
//['A', 'A', 'R', 'A', 'C']
// const resultante = nomes.map(nome => nome.charAt(0))
// console.log(resultante)
// const resultante = []
// for(let i = 0; i < nomes.length; i++){
//     resultante.push(nomes[i].charAt(0))
// }
// console.log(resultante)

//produza um novo vetor contendo somente os nomes que começam com A
// const resultante = nomes.filter(function(nome){ return nome[0] === 'A' || nome[0] === 'a'})
// console.log(resultante)
// const resultante = []
// for (let i = 0; i < nomes.length; i++){
//     if(nomes[i][0] === 'A' || nomes[i][0] == 'a')
//         resultante.push(nomes[i])
// }
// console.log(resultante)
//closure
// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     cont++
//     return {f1, f2}
// }

// const resultadoDaEAgora = eAgora()
// resultadoDaEAgora.f1()
// resultadoDaEAgora.f2()

// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }

// const olaJoao = saudacoesFactory('Olá', 'João')
// olaJoao()

// function ola(){
//     let nome = "João"
//     return function(){
//         console.log('Olá, ' + nome)
//     }
// }
// const resultadoDaOla = ola()
// resultadoDaOla()

// function f(){
//     let nome = 'João'
//     function g(){
//         let a
//         console.log(nome)
//     }
//     g()
// }
// f()

// function f(funcao){ //highest order function
//     funcao()
// }

// function g(){ //highest order function
//     //1. Definir a função
//     function outraFuncao(){
//         console.log("Fui criada por g")
//     }
//     //2. Devolver a funcao outraFuncao
//     return outraFuncao
// }
//f(g())
// f(g)()



// const resultadoDaG = g()
// resultadoDaG()

//como chamar a outraFuncao sem guardar o resultado da g em uma constante nem em uma variavel)
// g()()()



// f(function(){
//     console.log("Sendo passada para f")
// })

// const umaFuncao = function(){
//     console.log("Fui armazenada em uma constante")
// }
// umaFuncao()

// public class Pessoa{
//     public void andar(){
//         System.out.println("Andando")
//     }

//     public void teste(){
//         var metodoAndar = andar;    
//     }
// }

//funções regulares: function
//arrow function: () => {}
// const ehPar = (n) => {
//     console.log(n)
//     return n % 2 === 0
// }
// console.log(ehPar(7))
// const dobro = valor => valor * 2
// console.log(dobro(7))
// const t3 = () => {return 2 + 2}
// console.log(t3())
// const t2 = a => console.log('Sou a t2 exibindo o valor ' + a)
// t2(1)
// const t1 = n => {console.log(n)}
// t1(1)

// const triplo = function(n = 5){
//     return n * 3    
// }
// console.log(triplo())
// console.log(triplo(4))
// console.log(triplo(null))
// console.log(Number(null))
// console.log(triplo(2, 78, 2, 2, 2, 2, 2))
// const dobro = function(n){
//     return n * 2
// }
// console.log(dobro(5))
// function soma(a, b){
//     console.log(`a: ${a}`)
//     console.log(`b: ${b}`)
//     return a + b
// }
// const res = soma(2, 3)
// console.log(res)
// console.log(soma(1))    

//funções, código 1.6.1
//definição
// function hello(){
//     console.log('oi')
// }
// //chamada da função
// hello()
// //É O MESMO QUE DIZER 
// //hello(undefined)

// function hello(nome){
//     console.log('Oi, ' + nome)
// }
// hello('Pedro')

//vetores
//declaração
// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)
// v1[2] = "abc"
// console.log(v1.length)

// console.log(v1)

// for (let i = 0; i < v1.length; i++ )
// {
//     console.log(v1[i])
// }

//comparação com == e ===
// console.log([] == [])
// console.log([] == false)
// console.log(null = undefined)
// console.log(null == null)
// console.log(1 == [1])
// console.log(true == '2')
// console.log(true == '1')
// console.log(true == 1)
// console.log(1 === 1)
// console.log(1 === '1')

// console.log(1 == 1)
// console.log(1 == '1')


// //coerção
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)
// const n4 = n1 + Number(n2)
// console.log(n4)


// pq nao usar o var
// var idade = 18
// console.log('Oi,' + nome)
// //iça,emtp (hoist)
// if(idade >= 18){
//     var nome = 'João'
//     console.log('Parabéns,' + nome + ', Você pode dirigir')
// }
// console.log ("Até mais," + nome)

//declarando constantes

// var a = 2
// console.log(a)
// a = 3
// console.log(a)

// let b 
// console.log(b)


// let a = 2
// console.log(a)
// a = 3
// console.log(a)



// const idade = 27 

//java: String nome = "José";
// const nome = 'José'
// console.log(nome)
