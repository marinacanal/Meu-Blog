window.addEventListener('DOMContentLoaded', () => {
    const pagina = window.location.pathname;

    if (pagina.includes("index.html") || pagina.endsWith("/")) {
        const body = document.body;
        const botoes = document.querySelectorAll('button');
        const botaoMudarFundo = document.getElementById('mudarFundo');

        window.addEventListener('load', () => {
            alert('bem-vindo ao meu site!');
            deuBoasVindas = true;
        });

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

        let posicao = 0;

        function moverFundo() {
            posicao -= 0.3;
            body.style.backgroundPosition = `${posicao}px 0`;
            requestAnimationFrame(moverFundo);
        }

        moverFundo();
    }

    if (pagina.includes("blog.html")) {
        let scrollTip = document.createElement('div');
        scrollTip.id = 'scroll-tip';
        scrollTip.textContent = 'tente scrollar!';
        document.body.appendChild(scrollTip);

        const header = document.querySelector('header');
        const artigos = document.querySelectorAll('article');

        window.addEventListener('scroll', () => {
            // array.forEach(element => { 
            // });
            
            scrollTip.style.opacity = 0;
            header.style.alignItems = 'center';

            artigos.forEach((artigo) => {
                const posicao = artigo.getBoundingClientRect().top;
                const alturaTela = window.innerHeight;

                if (posicao < alturaTela - 100) {
                    // classList é utilizado para manipular classes. Adicionar, remover, etc.
                    artigo.classList.add('visivel'); 
                }
            });        
       });                   
    }
});