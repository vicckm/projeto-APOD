let data = document.querySelector("#data");
let imagem = document.querySelector("#imagem");
let descricao = document.querySelector("#descricao");
let form = document.querySelector("#form");
let video = document.querySelector("#video");
let titulo = document.querySelector("#titulo");
let copyright = document.querySelector("#copyrightAPI")


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
        let tituloJSON = reqJSON.title;
        let copyrightJSON = reqJSON.copyright;

        titulo.textContent = tituloJSON;
        data.textContent = dataJSON;
        descricao.textContent = descricaoJSON;
        copyright.textContent = `Copyright: ${copyrightJSON}`;

        if(reqJSON.media_type == "image"){  
            video.classList.add("tiraDisplay"); 
            imagem.src = imagemJSON;
            imagem.classList.add("imagem");
            
        } else { 
            imagem.classList.add("tiraDisplay");
            video.src = videoJSON;
            video.classList.add("video");   
        }      
    } else {
        document.write("error")
    }
}

reqAPI.send();



