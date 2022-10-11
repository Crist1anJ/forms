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
function Idade()
{
    var idade= document.getElementById("ididade");
    return idade;
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
