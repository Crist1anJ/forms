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




function calcIdade(data) {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),
        split = data.split('/'),
        novadata = split[1] + "/" +split[0]+"/"+split[2],
        data_americana = new Date(novadata),
        vAno = data_americana.getFullYear(),
        vMes = data_americana.getMonth() + 1,
        vDia = data_americana.getDate(),
        ano_aniversario = +vAno,
        mes_aniversario = +vMes,
        dia_aniversario = +vDia,
        quantos_anos = ano_atual - ano_aniversario;
    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }
    return quantos_anos < 0 ? 0 : quantos_anos;
};





function alerta()
{
    nome = Nome();
    telefone = Telefone();
    email= Email();
    idade=Idade();
    vidade=calcIdade(data);
    mensagem = Mensagem();
    alert("Olá " + nome.value + ", Seus dados foram salvos!"+
    "\nNome: " +nome.value+
    "\nTelefone: "+telefone.value
    +"\nEmail: "+email.value
    +"\nIdade: "+idade.value
    +"\nMensagem do Cliente: "+mensagem.value
    +"\nIdade calculada: "+vidade.value
    );
};
