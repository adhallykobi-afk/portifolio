/**
 * PORTFÓLIO DEV - ADHALLY KOBI
 * Script JavaScript Vanilla para interatividade e manipulação do DOM.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
        1. ALTERNADOR DE TEMA (DARK / LIGHT MODE)
       ========================================================================== */
    const botaoTema = document.getElementById('alternador-tema');
    const iconeTema = document.getElementById('icone-tema');
    const corpoPagina = document.body;

    function alternarTema() {
        corpoPagina.classList.toggle('modo-claro');
        const eModoClaro = corpoPagina.classList.contains('modo-claro');

        // Altera o ícone do Bootstrap conforme o tema
        if (eModoClaro) {
            iconeTema.classList.remove('bi-sun-fill');
            iconeTema.classList.add('bi-moon-fill');
        } else {
            iconeTema.classList.remove('bi-moon-fill');
            iconeTema.classList.add('bi-sun-fill');
        }
    }

    botaoTema.addEventListener('click', alternarTema);

    /* ==========================================================================
        2. MENU HAMBÚRGUER MOBILE
       ========================================================================== */
    const botaoMenuMobile = document.getElementById('botao-menu-mobile');
    const menuNavegacao = document.getElementById('menu-navegacao');

    botaoMenuMobile.addEventListener('click', () => {
        menuNavegacao.classList.toggle('ativo');
    });

    // Fecha o menu mobile ao clicar em qualquer link
    document.querySelectorAll('.link-menu').forEach(link => {
        link.addEventListener('click', () => {
            menuNavegacao.classList.remove('ativo');
        });
    });

    /* ==========================================================================
        3. EFEITO MÁQUINA DE ESCREVER (TYPING EFFECT)
       ========================================================================== */
    const elementoTexto = document.getElementById('texto-maquina-escrever');
    const frases = [
        'Estudante de Desenvolvimento Full Stack',
        'Desenvolvedor Front-end em Formação',
        'Entusiasta de Tecnologia e Design'
    ];

    let indiceFrase = 0;
    let indiceCaractere = 0;
    let estaApagando = false;

    function digitarEfeito() {
        const fraseAtual = frases[indiceFrase];

        if (estaApagando) {
            elementoTexto.textContent = fraseAtual.substring(0, indiceCaractere - 1);
            indiceCaractere--;
        } else {
            elementoTexto.textContent = fraseAtual.substring(0, indiceCaractere + 1);
            indiceCaractere++;
        }

        let velocidadeDigitacao = estaApagando ? 50 : 100;

        if (!estaApagando && indiceCaractere === fraseAtual.length) {
            velocidadeDigitacao = 2000; // Pausa no final da palavra
            estaApagando = true;
        } else if (estaApagando && indiceCaractere === 0) {
            estaApagando = false;
            indiceFrase = (indiceFrase + 1) % frases.length;
            velocidadeDigitacao = 500;
        }

        setTimeout(digitarEfeito, velocidadeDigitacao);
    }

    digitarEfeito();

    /* ==========================================================================
        4. BOTÃO FLUTUANTE "VOLTAR AO TOPO" E REVELAÇÃO NO SCROLL
       ========================================================================== */
    const botaoTopo = document.getElementById('botao-topo');
    const elementosRevelacao = document.querySelectorAll('.revelacao-scroll');

    window.addEventListener('scroll', () => {
        // Exibe ou oculta o botão de voltar ao topo
        if (window.scrollY > 300) {
            botaoTopo.classList.add('visivel');
        } else {
            botaoTopo.classList.remove('visivel');
        }

        // Animação de entrada dos elementos conforme o scroll
        elementosRevelacao.forEach(elemento => {
            const posicaoTopoElemento = elemento.getBoundingClientRect().top;
            const alturaTela = window.innerHeight;

            if (posicaoTopoElemento < alturaTela - 100) {
                elemento.classList.add('ativo');
            }
        });
    });

    botaoTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* ==========================================================================
        5. ANO DINÂMICO NO RODAPÉ
       ========================================================================== */
    const campoAno = document.getElementById('ano-atual');
    if (campoAno) {
        campoAno.textContent = new Date().getFullYear();
    }
});