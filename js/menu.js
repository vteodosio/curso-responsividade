//script de criação de menu responsivo: alterações do documento (inclusão e remoção de classes)

document.querySelector('.menu-abrir').onclick = function (){
    document.documentElement.classList.add('menu-ativo');
};

document.querySelector('.menu-fechar').onclick = function (){
    document.documentElement.classList.remove('menu-ativo');
};

//fechar o menu responsivel quando clicar na página "fora do menu"
document.documentElement.onclick = function(event){
    if(event.target === document.documentElement){
        document.documentElement.classList.remove('menu-ativo');
    }
};