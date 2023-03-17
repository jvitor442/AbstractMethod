$(document).ready(function(){
  $("#lanches").hide();
  class Lanchonete{
    constructor(){
        this.lanches = {};
    }
    
    adicionarPao(pao){
        this.lanches.pao = pao;
        return this;
    }

    adicionarCarne(carne){
        this.lanches.carne = carne;
        return this;
    }

    adicionarVegetais(vegetais){
        this.lanches.vegetais = vegetais;
        return this;
    }

    adicionarQueijo(queijo){
        this.lanches.queijo = queijo;
        return this;
    }

    adicionarAcompanhamento(acompanhamento){
      this.lanches.acompanhamento = acompanhamento;
      return this;
    }

    adicionarMolho(molho){
      this.lanches.molho=molho;
      return this;
    }

    build(){
        return this.lanches;
    }
}

$('#Pedido').click(function (){
if(document.getElementById('r2').checked ||
document.getElementById('r3').checked ||
document.getElementById('r1').checked){


var vegetais=' ';
var queijo=' ';
var pao=' ';
var carne=' ';
var molho=' ';
var acompanhamento=' ';

  var msn=document.getElementById('mensagem')
  if(document.getElementById('r1').checked){
   pao='Brioche';
  }else if(document.getElementById('r2').checked){
    pao='Parmesão';
  }else if(document.getElementById('r3').checked){
    pao='Francês';
  }
  if(document.getElementById('checkbox-2').checked){
     carne= carne + 'Frango';
  }
  if(document.getElementById('checkbox-3').checked){
    carne= carne + 'Linguiça';
  }
  if(document.getElementById('checkbox-4').checked){
  carne= carne + 'Vegetariano';
  }
  if(document.getElementById('checkbox-1').checked){
  carne= carne + 'Carne';
  }
  if(document.getElementById('checkbox-5').checked){
    queijo= queijo + 'Cheddar';
  }
  if(document.getElementById('checkbox-6').checked){
    queijo= queijo + 'Suiço';
  }
  if(document.getElementById('checkbox-7').checked){
    queijo= queijo + 'Muçarela';
  }
  if(document.getElementById('checkbox-8').checked){
    molho= molho + 'Barbecue';
  }
  if(document.getElementById('checkbox-9').checked){
    molho= molho + 'Maionese Verde';
  }
  if(document.getElementById('checkbox-10').checked){
    molho= molho + 'Tártaro';
  }
  if(document.getElementById('checkbox-11').checked){
    vegetais= vegetais + 'Azeitona';
  }
  if(document.getElementById('checkbox-12').checked){
    vegetais= vegetais + 'Alface';
  }
  if(document.getElementById('checkbox-13').checked){
    vegetais= vegetais + 'Tomate';
  }
  if(document.getElementById('checkbox-11').checked){
    acompanhamento= acompanhamento + 'Batata';
  }
  if(document.getElementById('checkbox-12').checked){
    acompanhamento= acompanhamento + 'Sorvete';
  }
  if(document.getElementById('checkbox-13').checked){
    acompanhamento= acompanhamento + 'Iogurte';
  }

 const burger = new Lanchonete().adicionarPao(pao).adicionarCarne(carne)
 .adicionarQueijo(queijo).adicionarVegetais(vegetais)
 .adicionarMolho(molho).adicionarAcompanhamento.build();

msn.textContent="seu pedido: "+ JSON.stringify(burger);
}
$('#cancelamento').click(function(){
  document.getElementById('r1').checked=false;
  document.getElementById('r2').checked=false;
  document.getElementById('r3').checked=false;
  document.getElementById('box1').checked=false;
  document.getElementById('box2').checked=false;
  document.getElementById('box3').checked=false;
  document.getElementById('box4').checked=false;
  document.getElementById('box5').checked=false;
  document.getElementById('box6').checked=false;
  document.getElementById('box7').checked=false;
  document.getElementById('box8').checked=false;
  document.getElementById('box9').checked=false;
  document.getElementById('box10').checked=false;
  document.getElementById('box11').checked=false;
  document.getElementById('box12').checked=false;
  document.getElementById('box13').checked=false;
  document.getElementById('box14').checked=false;
  document.getElementById('box15').checked=false;
  document.getElementById('box16').checked=false;
}); 
});
});

class Pessoa {
  constructor() {
    this.nome = "";
    this.cargo = "";
    this.cod = "";
  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getCargo() {
    return this.cargo;
  }

  setCargo(cargo) {
    this.cargo = cargo;
  }

  getCod() {
    return this.cod;
  }

  setCod(cod) {
    this.cod = cod;
  }

  categoria() {
    throw new Error("O método categoria() precisa de implemento");
  }
}

class Administrativo extends Pessoa {
  categoria() {
      var nome = document.getElementById("SeuNome").value;
      var consulta = document.getElementById("consulta");
      consulta.textContent = nome + ", você se registrou na categoria Admistrativo da instituição";
      $('#lanches').show();
  }
}

class Aluno extends Pessoa {
  categoria() {
      var nome = document.getElementById("SeuNome").value;
      var consulta = document.getElementById("consulta");
      consulta.textContent = nome + ", você se registrou na categoria Aluno da instituição";
      $('#lanches').show();
  }
}

class Coordenador extends Pessoa {
  categoria() {
      var nome = document.getElementById("SeuNome").value;
      var consulta = document.getElementById("consulta");
      consulta.textContent = nome + ", você se registrou na categoria Coordenador da instituição";
      $('#lanches').show();
  }
}

class Diretor extends Pessoa {
  categoria() {
      var nome = document.getElementById("SeuNome").value;
      var consulta = document.getElementById("consulta");
      consulta.textContent = nome +  ", você se registrou na categoria Diretor da instituição";
      $('#lanches').show();
  }
}

class Professor extends Pessoa {
  categoria() {
      var nome = document.getElementById("SeuNome").value;
      var consulta = document.getElementById("consulta");
      consulta.textContent = nome + ", você se registrou na categoria Professor da instituição";
      $('#lanches').show();
  }
}

function validacao() {
      var categoria = document.getElementById("repre").value;
      var consul = document.getElementById("consulta");
      var nome = document.getElementById("SeuNome").value;
    if (categoria === "administrador") {
      const adm = new Administrativo();
      return adm.categoria();
    } else if (categoria === "aluno") {
      const aluno = new Aluno();
      return aluno.categoria();
    } else if (categoria === "coordenador") {
      const coord = new Coordenador();
      return coord.categoria();
    } else if (categoria === "diretor") {
      const diretor = new Diretor();
      return diretor.categoria();
    } else if (categoria === "professor") {
      const prof = new Professor();
      return prof.categoria();
    }
  }