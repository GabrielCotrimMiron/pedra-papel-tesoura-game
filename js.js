function jogar() 
{

let idadeusuario = prompt("Quantos anos você tem?");

if (idadeusuario < 18) 
    {
  alert("Você não está autorizado a jogar");
    } 

else 
{
  alert("Você está autorizado a jogar");
  var nomeusuario = prompt("Digite seu nome: ");
  alert("Seja bem vindo! " + nomeusuario);
  alert ("Vamos começar o jogo!");

  let escolhausuario = prompt(
    "Digite 1 - Pedra , Digite 2 - Papel , Digite 3 - Tesoura");
  
  let escolhacomputador = Math.floor(Math.random() * 3) + 1;

  //Escolha usuário pedra
  if (escolhausuario == escolhacomputador) 
    {
    alert("Deu Empate!");
    } 
  
    else if (escolhausuario == 1 && escolhacomputador == 2) 
    {
    alert("Você Perdeu, tente novamente " + nomeusuario + " Não desanime!");
    } 
  
  else if (escolhausuario == 1 && escolhacomputador == 3) 
    {
    alert("Você Venceu " + nomeusuario + " Meus parabéns!");
    }

  //Separação

  //Escolha usuário papel
  else if (escolhausuario == 2 && escolhacomputador == 1) 
    {
        alert("Você Venceu " + nomeusuario + " Meus parabéns!");
    } 
  else if (escolhausuario == 2 && escolhacomputador == 3) 
    {
        alert("Você Perdeu, tente novamente " + nomeusuario + " Não desanime!");
    }

  //Separação

  // Escolha usuário Tesoura
  else if (escolhausuario == 3 && escolhacomputador == 1) 
    {
        alert("Você Perdeu, tente novamente " + nomeusuario + " Não desanime!");
    } 
  
    else if (escolhausuario == 3 && escolhacomputador == 2) 
    {
    alert("Você Venceu " + nomeusuario + " Meus parabéns!");
    }

  alert("A escolha do Computador foi: " + escolhacomputador);
}
}