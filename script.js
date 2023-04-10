function clock (){
    var img = document.getElementById('imagem')
    const areaDoRelogio = document.querySelector('.relogio');
    const horaAgora = new Date(); // tudo que se refere a tempo, graças a isso ele sabe a hora.
    const horas = horaAgora.getHours (); // vai pegar apenas a hora da constante horaAgora.
    const minutos = horaAgora.getMinutes(); // vai pegar apenas os minutos da constante horaAgora.
    const segundos = horaAgora.getSeconds(); // vai pegar apenas os segundos da constante horaAgora.
    const formatoHoras = horas.toString().padStart (2, '0'); //para definir o começo da string, quantos caracteres terá e por onde ela vai começar.
    const formatoMinutos = minutos.toString().padStart (2, '0');
    const formatoSegundos = segundos.toString().padStart (2, '0');

    areaDoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}`;  //a crase serve para usar placeholder(maneira mais fácil de concatenar).

    const frase = document.querySelector('.frase');

    dia = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'); //Array é um arranjo ou estrutura  de dados onde armazenamos uma coleção de elementos.

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date();

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, '0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`;

    if(formatoHoras >= 0 && formatoHoras <12){
        document.body.style.backgroundImage='url(https://external-preview.redd.it/nCYe7jnMSuyf-EuwuJ-hW3m6n9qBW0sukN1TqRQYUaI.jpg?auto=webp&s=4c1b9df96e937f39401af053bf96bcd5c205ceae)'
        document.body.style.backgroundSize='cover'
        document.body.style.backgroundPosition='0px -60px'
        img.src = 'https://j.gifs.com/mlVWba.gif'
    }

    else if(formatoHoras >=12 && formatoHoras <18){
        document.body.style.backgroundImage='url(https://www.retinadesgastada.com.br/images2/JogandoMinecraft_11DAC/MinecraftMyScreenshot19.jpg)'
        document.body.style.backgroundSize='cover'
        img.src = 'https://media1.giphy.com/media/1oKQqphQDlpb2rHUpZ/giphy.gif'
       
    }

    else{
        document.body.style.backgroundImage='url(https://www.retinadesgastada.com.br/images2/Jogando-Minecraft-Concluso_F7DC/Minecraft---My-Screenshot-53.jpg)'
        document.body.style.backgroundSize='cover'
        img.src ='https://64.media.tumblr.com/c1b585e3bbbcb11b61ece72b10a08377/03acd759f5a704c0-bb/s1280x1920/a59f3c753d209b28edb5ca3058ca8d05f4bbd401.gif'
    }
}

setInterval(clock, 1000);  //intervalo.
