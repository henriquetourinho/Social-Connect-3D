/**
 * Social Connect 3D - Lógica de Compartilhamento
 * @author Henrique Tourinho
 * @license MIT
 * @version 1.0.0
 * @link https://github.com/henriquetourinho/Social-Connect-3D (Exemplo de link)
 */

document.addEventListener('DOMContentLoaded', () => {
    const shareButtons = document.querySelectorAll('.share-btn');
    
    // Pega o título da página e a URL atual para compartilhar
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.querySelector('h1').textContent);

    shareButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            let shareUrl = '';
            // Extrai a classe da rede social (ex: 'whatsapp') do botão clicado
            const social = Array.from(button.classList).find(cls => cls !== 'share-btn');
            
            switch(social) {
                case 'whatsapp': 
                    shareUrl = `https://api.whatsapp.com/send?text=${title}%0A%0A${url}`; 
                    break;
                case 'facebook': 
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`; 
                    break;
                case 'linkedin': 
                    shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`; 
                    break;
                case 'x-twitter': 
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`; 
                    break;
                case 'pinterest': 
                    // Lembre-se de substituir pela URL de uma imagem real para o Pinterest funcionar
                    const imageUrl = encodeURIComponent('URL_DA_IMAGEM_AQUI');
                    shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&media=${imageUrl}&description=${title}`; 
                    break;
                case 'telegram': 
                    shareUrl = `https://t.me/share/url?url=${url}&text=${title}`; 
                    break;
                case 'email': 
                    shareUrl = `mailto:?subject=${title}&body=${url}`; 
                    break;
                case 'reddit': 
                    shareUrl = `https://www.reddit.com/submit?url=${url}&title=${title}`; 
                    break;
            }

            // Abre o link de compartilhamento em uma nova janela pop-up
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400,noopener,noreferrer');
            }
        });
    });
});