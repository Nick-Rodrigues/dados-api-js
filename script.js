async function buscaEndereco(){
    var consultaCEP = await fetch('https://viacep.com.br/ws/09060140/json/')
    var consultaCEPConvertida = await consultaCEP.json();
    console.log(consultaCEPConvertida);
}

buscaEndereco();