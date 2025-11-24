window.addEventListener('DOMContentLoaded', () => {
    const pagina = window.location.pathname;

    const botoes = document.querySelectorAll('button');
    botoes.forEach(botao => {
        botao.style.cursor = 'pointer';
    });

    if (pagina.includes("index.html") || pagina.endsWith("/")) {
        eventosIndex();
    }
    else if (pagina.includes("blog.html")) {
        eventosBlog();
    }
});

function eventosIndex() {
    const body = document.body;
    const botoes = document.querySelectorAll('button');
    const botaoMudarFundo = document.getElementById('mudarFundo');

    // remover/ativar fundo
    botaoMudarFundo.addEventListener('click', () => {
        const fundoAtual = window.getComputedStyle(body).backgroundImage;

        if (fundoAtual.includes('background.jpg')) {
            body.style.backgroundImage = 'none';
            botaoMudarFundo.innerText = 'ativar fundo!';
            
            botoes.forEach(botao => {
                botao.classList.remove('tema-quente');
                botao.classList.add('tema-frio');
            });

        } else {
            body.style.backgroundImage = 'url("medias/background.jpg")';
            botaoMudarFundo.innerText = 'remover fundo!';

            botoes.forEach(botao => {
                botao.classList.remove('tema-frio');
                botao.classList.add('tema-quente');
            });
        }
    });

    // enviar e-mail
    const form = document.getElementById('formContato');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // evita que a pagina recarregue

        const nome = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('message').value;

        const destinatario = "marinacanal2@gmail.com"; 
        const assunto = encodeURIComponent("formulário de contato - meu blog");
        const corpo = encodeURIComponent(`nome: ${nome}\nemail: ${email}\nmensagem:\n${mensagem}`);

        window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
    });
    
    // mover fundo
    let posicao = 0;

    function moverFundo() {
        posicao -= 0.3;
        body.style.backgroundPosition = `${posicao}px 0`;
        requestAnimationFrame(moverFundo);
    }

    moverFundo();
}

function eventosBlog() {
    let scrollTip = document.createElement('div');
    scrollTip.id = 'scroll-tip';
    scrollTip.textContent = 'tente scrollar!';
    document.body.appendChild(scrollTip);

    const header = document.querySelector('header');
    const artigos = document.querySelectorAll('article');

    window.addEventListener('scroll', () => {
        // exemplo de uso, novo foreach:
        // array.forEach(element => { 
        // });
        
        scrollTip.style.opacity = 0;
        header.style.alignItems = 'center';

        artigos.forEach((artigo) => {
            const posicao = artigo.getBoundingClientRect().top;
            const alturaTela = window.innerHeight;

            if (posicao < alturaTela - 100) {
                // classList é utilizado para manipular classes
                artigo.classList.add('visivel'); 
            }
        });        
    });           
}
