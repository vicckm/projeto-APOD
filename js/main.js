let data = document.querySelector("#data");
let imagem = document.querySelector("#imagem");
let descricao = document.querySelector("#descricao");
let form = document.querySelector("#form");
let video = document.querySelector("#video");


// requisição API

let reqAPI = new XMLHttpRequest();
let urlAPI = "https://api.nasa.gov/planetary/apod?api_key=Ybsgh0M67YWj8jz90WZHMAHc2eLtGBSrRal69AB5";

form.addEventListener("submit", function(event){
    event.preventDefault();

    let urlComData = `https://api.nasa.gov/planetary/apod?api_key=Ybsgh0M67YWj8jz90WZHMAHc2eLtGBSrRal69AB5&date=${this.elements.inputData.value}`;
    
    reqAPI.open("GET", urlComData);

    reqAPI.send();
});

reqAPI.open("GET", urlAPI);

reqAPI.onload = function(){

    if(reqAPI.status == 200){
        let reqJSON = JSON.parse(reqAPI.responseText)
       
        let videoJSON = reqJSON.url;
        let dataJSON = reqJSON.date;
        let imagemJSON = reqJSON.url;
        let descricaoJSON = reqJSON.explanation;

        data.textContent = dataJSON;
        descricao.textContent = descricaoJSON;

        if(reqJSON.media_type == "image"){   
            imagem.src = imagemJSON;
            imagem.classList.add("imagem");
            video.classList.add("tiraDisplay");
           
        } else { 
            video.src = videoJSON;
            video.classList.add("video");
            imagem.classList.add("tiraDisplay");
        }

        
        
        
    }

   

}

reqAPI.send();

// reqImagem.addEventListener('load', function(){

//     // fazer o formulario pra adicionar a data e o botao enviar
//     // voce teve um insight sobre colocar variável data2 junto com a requisicao convertida pra texto,
//     // nisso voce vai pensar em algo pra adicionar o valor do input quando enviar pra url da api
//     // lembra da propriedade .date

//     let reqImagemParse = JSON.parse(reqImagem.responseText);
//     let data2 = reqImagemParse.date
//     let responseData = reqImagemParse.date;
//     let responseImagem = reqImagemParse.url;
//     let responseDescricao = reqImagemParse.explanation;

//     data.textContent = responseData;
//     descricao.textContent = responseDescricao;
//     imagem.src = responseImagem;

// })

// reqImagem.send();



