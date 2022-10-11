function Nome()
{
    var nome= document.getElementById("idnome");
    return nome;
};
function Telefone()
{
    var telefone= document.getElementById("idtel");
    return telefone;
};

function Email()
{
    var email= document.getElementById("idemail");
    return email;
};
function Mensagem()
{
    var mensagem= document.getElementById("idmsg");
    return mensagem;
};

function calcIdade(x,y,z) {
    var d = new Date,
        ano = d.getFullYear(),
        mes = d.getMonth() + 1,
        dia= d.getDate(),

        x= +x,
        y= +y,
        z= +z,

        quantos_anos =ano -x;

        if (mes < y || mes == y && dia < z) {
            quantos_anos--;
        }
        return quantos_anos < 0 ? 0 : quantos_anos;
  
};

function Idade()
{
    var idade= document.getElementById("ididade");
    var[ano,mes,dia] = idade.split('-');
    return calcIdade(ano,mes,dia);
};



function alerta()
{
    nome = Nome();
    telefone = Telefone();
    email= Email();
    idade=Idade();
    mensagem = Mensagem();
    alert("Olá " + nome.value + ", Seus dados foram salvos!"+
    "\nNome: " +nome.value+
    "\nTelefone: "+telefone.value
    +"\nEmail: "+email.value
    +"\nIdade: "+idade.value
    +"\nMensagem do Cliente: "+mensagem.value
    );
};
