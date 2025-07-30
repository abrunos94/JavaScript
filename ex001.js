//  Exemplo de uso de var, let e const em javascript

const externo = "Olá, eu sou uma constante global!";

// Declaração de uma variavel usando var
function exemplovar(){
     if (true){
        var mensagem = " Olá faculdade descomplica, eu sou uma var..."
     }
     console.log(mensagem);
}

// Chamando a função exemplovar
exemplovar();