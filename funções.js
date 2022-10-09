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

function alerta()
{
    nome = Nome()
    telefone = Telefone()
    email= Email()
    mensagem = Mensagem()
    alert("Olá " + nome + ", Seus dados foram salvos!"
    +nome
    +telefone
    +email
    +mensagem
    );
};
