let data = document.querySelector('#data');
let imagem = document.querySelector('#imagem');
let descricao = document.querySelector('#descricao');

// requisição API

let reqImagem = new XMLHttpRequest();

reqImagem.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=Ybsgh0M67YWj8jz90WZHMAHc2eLtGBSrRal69AB5');

reqImagem.send();

reqImagem.addEventListener('load', function(){

    let reqImagemParse = JSON.parse(reqImagem.responseText);
    let responseData = reqImagemParse.date;
    let responseImagem = reqImagemParse.url;
    let responseDescricao = reqImagemParse.explanation;


    data.textContent = responseData;
    descricao.textContent = responseDescricao;
    imagem.src = responseImagem;
})



