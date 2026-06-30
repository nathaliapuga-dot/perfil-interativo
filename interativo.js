function criarSakura() {
    for (let i = 0; i < 25; i++) {
        let flor = document.createElement("div");
        flor.classList.add("sakura");
        flor.innerHTML = "🌸";
        
        // Define uma posição horizontal aleatória
        flor.style.left = Math.random() * window.innerWidth + "px";
        
        // Define um tempo de queda aleatório entre 3 e 6 segundos
        flor.style.animationDuration = (Math.random() * 3 + 3) + "s";
        
        // Define um tamanho aleatório para as flores
        flor.style.fontSize = (Math.random() * 20 + 15) + "px";
        
        document.body.appendChild(flor);
        
        // Remove a flor da tela após 6 segundos para não travar a página
        setTimeout(() => {
            flor.remove();
        }, 6000);
    }
}
