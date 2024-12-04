const tituloH1 = document.getElementById("titulo");

tituloH1.innerText = "Este é o texto do Titulo pelo JS";

const link = document.querySelector("a");

link.innerText = "Clique aqui para ir a outra página, feito em JS";

const listaNaoOrdenada = document.querySelector("ul");

listaNaoOrdenada.innerHTML = `
<li>Primeiro elemento da Lista não Ordenada</li>
<li>Segundo elemento da Lista não Ordenada</li>
<li>Terceiro elemento da Lista não Ordenada</li>
`;

const listaOrdenada = document.getElementById("lista-ordenada");

listaOrdenada.innerHTML = `
<li><a href="https://github.com/kevinhiratakaze">Este é o Primeiro link<a></li>
<li><a href="https://www.linkedin.com/in/kevin-hirata-b3a10770/">Este é o Segundo link<a></li>
<li><a href="https://www.twitch.tv/kazehirata">Este é o Terceiro link<a></li>
`;