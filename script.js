window.addEventListener('DOMContentLoaded', () => {

    const pagina = window.location.pathname;

    // garante que todos os botoes mostrem "pointer"
    const botoes = document.querySelectorAll('button');
    botoes.forEach(botao => {
        botao.style.cursor = 'pointer';
    });

    // detecta automaticamente qual pagina esta aberta e ativa os eventos adequados
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

    // altera o fundo do site
    botaoMudarFundo.addEventListener('click', () => {

        // le qual fundo esta aplicado
        const fundoAtual = window.getComputedStyle(body).backgroundImage;

        if (fundoAtual.includes('background.jpg')) {
            // remove imagem de background
            body.style.backgroundImage = 'none';
            botaoMudarFundo.innerText = 'ativar fundo!';
            
            // troca o tema dos botoes
            botoes.forEach(botao => {
                botao.classList.remove('tema-quente');
                botao.classList.add('tema-frio');
            });

        } else {
            // ativa imagem de background
            body.style.backgroundImage = 'url("medias/background.jpg")';
            botaoMudarFundo.innerText = 'remover fundo!';

            botoes.forEach(botao => {
                botao.classList.remove('tema-frio');
                botao.classList.add('tema-quente');
            });
        }
    });

    // envia e-mail pelo formulario de contato
    const form = document.getElementById('formContato');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // evita que a pagina recarregue

        const nome = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('message').value;

        // monta e abre o link mailto
        const destinatario = "marinacanal2@gmail.com"; 
        const assunto = encodeURIComponent("formulário de contato - meu blog");
        const corpo = encodeURIComponent(`nome: ${nome}\nemail: ${email}\nmensagem:\n${mensagem}`);

        window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
    });
    
    // animacao para mover o fundo
    let posicao = 0;

    function moverFundo() {
        posicao -= 0.3; // velocidade do movimento
        body.style.backgroundPosition = `${posicao}px 0`;
        requestAnimationFrame(moverFundo);
    }

    moverFundo();
}

function eventosBlog() {
    // adiciona elemento de dica visual, para usuario scrollar
    let scrollTip = document.createElement('div');
    scrollTip.id = 'scroll-tip';
    scrollTip.textContent = 'tente scrollar!';
    document.body.appendChild(scrollTip);

    const header = document.querySelector('header');
    const artigos = document.querySelectorAll('article');

    // efeito ao scrollar
    window.addEventListener('scroll', () => {  
        scrollTip.style.opacity = 0; // oculta dica
        header.style.alignItems = 'center';

        artigos.forEach((artigo) => {
            const posicao = artigo.getBoundingClientRect().top;
            const alturaTela = window.innerHeight;

            // quando artigo chegar a area visivel, torna-o visivel
            if (posicao < alturaTela - 100) {
                artigo.classList.add('visivel'); 
            }
        });        
    });           
}
