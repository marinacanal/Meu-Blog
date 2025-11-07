window.addEventListener('DOMContentLoaded', () => {
    const pagina = window.location.pathname;

    if (pagina.includes("index.html")) {
        const body = document.body;
        let posicao = 0;

        function moverFundo() {
            posicao -= 0.3;
            body.style.backgroundPosition = `${posicao}px 0`;
            requestAnimationFrame(moverFundo);
        }

        moverFundo();
    }

    if (pagina.includes("blog.html")) {
        var scrollTip = document.createElement('div');
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