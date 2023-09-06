function mascaraTele(tel){  
    var v = tel.value
    if(isNaN(v[v.length-1])){
        tel.value = v.substring(0, v.length-1)
        return
    }       
    
    tel.setAttribute("maxlength", "13")
    if(v.length == 8) tel.value += "-"
    if(v.length == 1) tel.value = "(" + tel.value
    if(v.length == 3) tel.value += ")"
}

function mascaraCelu(cel){  
    var v = cel.value
    if(isNaN(v[v.length-1])){
        cel.value = v.substring(0, v.length-1)
        return
    }       
    
    cel.setAttribute("maxlength", "14")
    if(v.length == 9) cel.value += "-"
    if(v.length == 1) cel.value = "(" + cel.value
    if(v.length == 3) cel.value += ")"
}

function mascaraCpf(cpf){
    var v = cpf.value
    if(isNaN(v[v.length-1])){
        cpf.value = v.substring(0, v.length-1)
        return
    }       
    
    cpf.setAttribute("maxlength", "14")
    if(v.length == 3 || v.length == 7) cpf.value += "."
    if(v.length == 11) cpf.value += "-"
}

function mascaraRg(rg){
    var v = rg.value  
    
    rg.setAttribute("maxlength", "12")
    if(v.length == 2 || v.length == 6) rg.value += "."
    if(v.length == 10) rg.value += "-"
}

function mascaraCep(cep){
    var v = cep.value  
    
    cep.setAttribute("maxlength", "9")
    if(v.length == 5) cep.value += "-"
}

$("#cep").blur(function(){

    var cep = this.value.replace(/[^0-9]/, "");
    
    if(cep.length != 8){
        return false;
    }
    
    
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    
    
    $.getJSON(url, function(dadosRetorno){
        
            
            $("#endereco").val(dadosRetorno.endereco);
            $("#bairro").val(dadosRetorno.bairro);
            $("#cidade").val(dadosRetorno.estado);
            $("#estado").val(dadosRetorno.uf);

    });
});

function validarCpf(strCpf) {
    var Som;
    var Res;
    Som = 0;
    if (strCpf == "00000000000") return false;

    for (i=1; i<=9; i++) Som = Som + parseInt(strCpf.substring(i-1, i)) * (11 - i);
    Res = (Som * 10) % 11;

    if ((Res == 10) || (Resto == 11))  Resto = 0;
    if (Res != parseInt(strCpf.substring(9, 10)) ) return false;

    Som = 0;
    for (i = 1; i <= 10; i++) Som = Som + parseInt(strCpf.substring(i-1, i)) * (12 - i);
    Res = (Som * 10) % 11;

    if ((Res == 10) || (Res == 11))  Res = 0;
    if (Res != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function validarFor()
{
    var nome = document.getElementById('nome').value
    var endereco = document.getElementById('endereco').value
    var bairro = document.getElementById('bairro').value
    var cep = document.getElementById('cep').value.replace(/[^0-9]/, "")
    var cidade = document.getElementById('cidade').value
    var estado = document.getElementById('estado').value
    var telefone = document.getElementById('telefone').value
    var celular = document.getElementById('celular').value
    var rg = document.getElementById('rg').value.replace(/\.|\-/g, "")
    var cpf = document.getElementById('cpf').value.replace(/\.|\-/g, "")

    
  
    var url = "https://viacep.com.br/ws/"+cep+"/json/";

    console.log(cpf)

    if(nome != "")
    {
        console.log('Nome Validado!')
    }else{
        console.log('Preencha a lacuna \'Nome\'')
    }

    if(telefone != "")
    {
        console.log('Telefone Validado!')
    }else{
        console.log('Preencha a lacuna \'Telefone\'')
    }

    if(celular != "")
    {
        console.log('Celular Validado!')
    }else{
        console.log('Preencha a lacuna \'Celular\'')
    }

    if(rg != "")
    {
        console.log('RG Validado!')
    }else{
        console.log('Preencha a lacuna \'RG\'')
    }

    if(cpf != "")
    {
        if(validarCPF(cpf)){
            console.log('CPF Validado!')
        }else{
            console.log('CPF inválidado!')
        }
            
    }else{
        console.log('Preencha a lacuna \'CPF\'')
    }

    if(cep.length == 8)
    {
        $.getJSON(url, function(dadosRetorno){
            try{
                if(typeof dadosRetorno.complemento != "undefined"){
                    console.log('CEP Validado!')
                }else{
                    console.log('CEP não encontrado ou inexistente!')
                }
            }catch(ex){}
        });
    }else{
        console.log('Lacuna \'CEP\' está vázia')
        return false
    }

    if(endereco != "")
    {
        $.getJSON(url, function(dadosRetorno){
            if(endereco == dadosRetorno.estado){
                console.log('Endereço Validado!')
            }else{
                console.log('Endereço não está batendo com o CEP!')
            }
        });
    }else{
        console.log('Preencha a lacuna \'Endereço\'')
    }

    if(bairro != "")
    {
        $.getJSON(url, function(dadosRetorno){
            if(bairro == dadosRetorno.bairro){
                console.log('Bairro Validado!')
            }else{
                console.log('Bairro não está batendo com o CEP!')
            }
        });
    }else{
        console.log('Preencha a lacuna \'Bairro\'')
    }

    if(cidade != "")
    {
        $.getJSON(url, function(dadosRetorno){
            if(cidade == dadosRetorno.localidade){
                console.log('Cidade Validada!')
            }else{
                console.log('Cidade não está batendo com o CEP!')
            }
        });
    }else{
        console.log('Preencha a lacuna \'Cidade\'')
    }

    if(estado != "")
    {
        $.getJSON(url, function(dadosRetorno){
            if(estado == dadosRetorno.uf){
                console.log('Estado Validado!')
            }else{
                console.log('Estado não está batendo com o CEP!')
            }
        });
    }else{
        console.log('Preencha a lacuna \'Estado\'')
    }
}