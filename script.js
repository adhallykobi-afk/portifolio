/* ==========================================================================
    PORTFÓLIO DEV - JAVASCRIPT VANILLA
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. ALTERNÂNCIA DE TEMA (DARK / LIGHT MODE)
    const botaoAlternarTema = document.getElementById('botao-alternar-tema');
    const corpoPagina = document.body;

    botaoAlternarTema.addEventListener('click', () => {
        corpoPagina.classList.toggle('tema-escuro');
        corpoPagina.classList.toggle('tema-claro');
    });

    // 2. MENU MOBILE (HAMBÚRGUER)
    const botaoMenu = document.getElementById('botao-menu');
    const navegacaoPrincipal = document.getElementById('navegacao-principal');
    const linksNav = document.querySelectorAll('.link-nav');

    botaoMenu.addEventListener('click', () => {
        navegacaoPrincipal.classList.toggle('ativa');
    });

    // Fecha o menu ao clicar em qualquer link
    linksNav.forEach(link => {
        link.addEventListener('click', () => {
            navegacaoPrincipal.classList.remove('ativa');
        });
    });

    // 3. EFEITO MÁQUINA DE ESCREVER (TYPING EFFECT)
    const elementoTexto = document.getElementById('texto-maquina-escrever');
    const textosParaDigitar = [
        "Estudante de Desenvol. Full Stack",
        "Especializando em Front-end",
        "HTML5 • CSS3 • JavaScript"
    ];

    let indiceTexto = 0;
    let indiceCaractere = 0;
    let estaDeletando = false;

    function digitarEfeito() {
        const textoAtual = textosParaDigitar[indiceTexto];

        if (estaDeletando) {
            elementoTexto.textContent = textoAtual.substring(0, indiceCaractere - 1);
            indiceCaractere--;
        } else {
            elementoTexto.textContent = textoAtual.substring(0, indiceCaractere + 1);
            indiceCaractere++;
        }

        let velocidadeDigitacao = estaDeletando ? 50 : 100;

        if (!estaDeletando && indiceCaractere === textoAtual.length) {
            velocidadeDigitacao = 2000; // Pausa no final do texto
            estaDeletando = true;
        } else if (estaDeletando && indiceCaractere === 0) {
            estaDeletando = false;
            indiceTexto = (indiceTexto + 1) % textosParaDigitar.length;
            velocidadeDigitacao = 500;
        }

        setTimeout(digitarEfeito, velocidadeDigitacao);
    }

    digitarEfeito();

    // 4. BOTÃO VOLTAR AO TOPO
    const botaoTopo = document.getElementById('botao-topo');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            botaoTopo.classList.add('visivel');
        } else {
            botaoTopo.classList.remove('visivel');
        }
    });

    botaoTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 5. ANO DINÂMICO NO RODAPÉ
    const elementoAno = document.getElementById('ano-atual');
    if (elementoAno) {
        elementoAno.textContent = new Date().getFullYear();
    }
});