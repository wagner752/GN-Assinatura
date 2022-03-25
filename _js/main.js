ctx = c.getContext("2d");

assinatura_custom = new Image();

assinatura_custom.onload = () => {
    c.width = 1080;
    c.height = 257;
    render();
};
assinatura_custom.crossOrigin = "anonymous"
assinatura_custom.src = "https://github.com/wagner752/Assinaturas-GN/blob/main/aaa.png?raw=true";

nome.oninput = setor.oninput = render;

function render() {
    let {nome, setor} = getFormData();
    setInitialImage();
    setText(nome, setor);
    setImage();
}


function getFormData() {
    return {
        nome: nome
            .value,
        setor: setor
            .value
    }
}

function setInitialImage() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(assinatura_custom, 0, 0, c.width, c.height);
}

function setClip() {
    ctx.globalCompositeOperation = "destination-in";
    ctx.globalCompositeOperation = "source-over";
    ctx.font = "bolder 30.76px  Montserrat, sans-serif";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
}

function setSetor(){
    ctx.globalCompositeOperation = "destination-in";
    ctx.globalCompositeOperation = "source-over";
    ctx.font = "30.76px Montserrat, sans-serif";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
}

function setImage() {
    const assinatura = document.getElementById('assinaturaTemplate')
    assinatura.src = c.toDataURL();
    c.style.display = "none";
}

function setText(text, setor) {
    setClip();
    ctx.textBaseline = "hanging";
    ctx.fillText(text, 270, 62);
    setSetor(setor);
    
}

function setSetor(setor){

    ctx.globalCompositeOperation = "destination-in";
    ctx.globalCompositeOperation = "source-over";
    ctx.font = "30.76px Montserrat, sans-serif";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
    ctx.textBaseline = "hanging";
    ctx.fillText(setor, 270, 100);
}

function saveImage() {
    
    let link = document.getElementById('link');
    link.setAttribute('download', 'assinaturaTemplate.png');
    link.setAttribute('href', c.toDataURL().replace("image/png", "image/octet-stream"));
    link.click();
    
    
    /*
    var download = document.getElementById('link');
    var image = document.getElementById('c').toDataURL("image/png").replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    
    /*
    var canvaID = document.getElementById("c");
    image = canvaID.toDataURL("image/png");
    var link = document.createElement('assinatura');
    link.origin = 'anonymous';
    link.download() = "assinatura.png";
    link.href = image;
    link.click();
    */

}
