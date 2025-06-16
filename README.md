# Social Connect 3D 🚀✨

**Social Connect 3D** é um componente de ícones de compartilhamento para redes sociais, desenvolvido para ser integrado em qualquer projeto web. Construído com **HTML5**, **CSS3** puro e **JavaScript** (Vanilla JS), ele oferece uma experiência de usuário rica e moderna.

A filosofia deste projeto é fornecer um componente visualmente impressionante e de alta performance que seja, ao mesmo tempo, modular e fácil de integrar, sem forçar estilos indesejados na sua página.

![Prévia da Animação dos Ícones](https://github.com/henriquetourinho/Social-Connect-3D/blob/main/media/captura.gif?raw=true)
> *Animação principal do componente em ação.*

---

## 🎨 Funcionalidades Principais

- 🧊 **Design 3D Interativo**: Efeito de perspectiva que projeta os ícones em um espaço tridimensional ao passar o mouse.
- ⚙️ **Animações em Camadas**: Efeito de paralaxe entre o fundo, o ícone e o brilho para uma sensação de profundidade real.
- 💡 **Tooltip Integrado**: O nome da rede social desliza suavemente, complementando a animação principal.
- 🚀 **Performance Otimizada**: Código leve e sem dependências externas de JavaScript. A animação é controlada por CSS para máxima fluidez.
- 🧩 **Componente Modular**: Estilos cuidadosamente separados para que o componente não interfira no design do seu site.
- 🔗 **Funcionalidade Real**: O JavaScript abre as janelas de compartilhamento corretas, usando o título e a URL da página dinamicamente.

---

## 🚀 Como Integrar em Seu Projeto (Guia Técnico)

Para garantir que você copie **apenas o código dos ícones** sem afetar o resto do seu site, o processo foi separado em 3 partes essenciais: HTML, CSS e JavaScript.

### 1. Estrutura HTML

Copie o bloco de código HTML abaixo para a área da sua página onde os ícones de compartilhamento devem aparecer.

<details>
<summary><strong>Clique para ver o código HTML do Componente</strong></summary>

```html
<div class="share-container">
    
    <div class="btn-wrapper">
        <a href="#" class="share-btn whatsapp">
            <i class="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
        </a>
    </div>

    <div class="btn-wrapper">
        <a href="#" class="share-btn facebook">
            <i class="fab fa-facebook-f"></i>
            <span>Facebook</span>
        </a>
    </div>

    </div>
```

</details>

### 2. Estilos CSS (O Essencial)

O código abaixo contém **APENAS** o necessário para que os ícones 3D e suas animações funcionem. Ele não irá modificar fontes, fundos ou outros elementos da sua página.

<details>
<summary><strong>Clique para ver o código CSS Essencial</strong></summary>

```css
/**
 * Social Connect 3D - Componente de Ícones de Compartilhamento
 * @author Henrique Tourinho
 * @license MIT
 * @version 1.1.0
 */

/* O container que alinha os wrappers dos botões */
.share-container {
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    gap: 25px; /* Espaço entre os botões */
}

/* O wrapper que cria o ambiente 3D para cada botão */
.btn-wrapper {
    perspective: 1000px;
}

/* O botão em si e sua preparação para animação 3D */
.share-btn {
    position: relative;
    display: grid; 
    place-items: center;
    width: 60px;
    height: 60px;
    border-radius: 15px;
    text-decoration: none;
    transform-style: preserve-3d;
    transform: translateZ(20px);
    transition: transform 0.5s cubic-bezier(0.2, 1, 0.8, 1), box-shadow 0.5s cubic-bezier(0.2, 1, 0.8, 1);
}

.btn-wrapper:hover .share-btn {
    transform: translateZ(50px) rotateX(20deg) rotateY(-25deg);
    box-shadow: -25px 25px 40px rgba(0, 0, 0, 0.5);
}

/* Camada 1: O Ícone (glifo do Font Awesome) */
.share-btn > i {
    font-size: 1.8rem;
    color: #fff;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    transform: translateZ(40px);
    pointer-events: none;
}

/* Camada 2: A Base Colorida */
.share-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    transform: translateZ(0);
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.4);
    transition: background-color 0.3s ease;
}

/* Camada 3: O Efeito de Brilho */
.share-btn::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%);
    opacity: 0;
    transform: translateZ(1px) scale(1.1);
    transition: opacity 0.5s ease;
}

.btn-wrapper:hover .share-btn::after {
    opacity: 1;
}

/* Camada 4: O Tooltip com o nome da rede */
.share-btn > span {
    position: absolute;
    bottom: -10px;
    background: #2c2c2e;
    color: #f0f0f0;
    padding: 3px 10px;
    border-radius: 5px;
    font-size: 0.7rem;
    font-weight: 600;
    opacity: 0;
    transform: translateY(20px);
    transition: transform 0.4s 0.1s cubic-bezier(0.2, 1, 0.8, 1), opacity 0.4s 0.1s;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    pointer-events: none;
}

.btn-wrapper:hover .share-btn > span {
    opacity: 1;
    transform: translateY(0px);
}

/* Cores específicas para cada rede social */
.share-btn.whatsapp::before { background-color: #25D366; }
.share-btn.facebook::before { background-color: #1877F2; }
.share-btn.linkedin::before { background-color: #0077B5; }
.share-btn.x-twitter::before { background-color: #000000; }
.share-btn.pinterest::before { background-color: #E60023; }
.share-btn.telegram::before { background-color: #26A5E4; }
.share-btn.email::before { background-color: #777777; }
.share-btn.reddit::before { background-color: #FF4500; }

```

</details>

### 3. Lógica JavaScript

Este script é autônomo e não depende de nenhuma biblioteca. Cole-o em seu arquivo `.js` ou no final do `<body>` da sua página.

<details>
<summary><strong>Clique para ver o código JavaScript</strong></summary>

```javascript
/**
 * Social Connect 3D - Lógica de Compartilhamento
 * @author Henrique Tourinho
 * @license MIT
 */
document.addEventListener('DOMContentLoaded', () => {
    const shareButtons = document.querySelectorAll('.share-btn');
    
    // Pega o título da página e a URL atual para compartilhar
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);

    shareButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            let shareUrl = '';
            const social = Array.from(button.classList).find(cls => cls !== 'share-btn');
            
            switch(social) {
                case 'whatsapp': shareUrl = `https://api.whatsapp.com/send?text=${pageTitle}%0A%0A${pageUrl}`; break;
                // Adicione outros cases aqui...
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400,noopener,noreferrer');
            }
        });
    });
});
```
</details>

### 4. Dependência (Font Awesome)
Não se esqueça de adicionar a linha abaixo no `<head>` do seu HTML para que os logotipos das redes sociais apareçam.
```html
<link rel="stylesheet" href="[https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css)" />
```

---

## 🛠️ Opções de Customização

| Elemento | Arquivo | Como Customizar |
| :--- | :--- | :--- |
| **Adicionar/Remover Ícones** | `HTML` | Adicione ou remova um bloco `<div class="btn-wrapper">...</div>`. Use a classe correta do Font Awesome (`fab fa-...`). |
| **Mudar Ordem** | `HTML` | Reordene os blocos `<div class="btn-wrapper">`. |
| **Mudar Cores** | `CSS` | No final do CSS essencial, edite ou adicione regras de cor. Ex: `.share-btn.suarede::before { background-color: #cor; }`.|
| **Título/URL**| `JavaScript` | Altere as constantes `pageUrl` e `pageTitle` para usar valores fixos em vez dos valores automáticos. |

---

## 💡 Filosofia do Projeto

> "Crio ferramentas de código aberto para que mais brasileiros possam construir e compartilhar suas próprias grandes ideias."

---

## 🙋‍♂️ Desenvolvido por

**Carlos Henrique Tourinho Santana**  
📍 Salvador - Bahia  
🔗 GitHub: [github.com/henriquetourinho](https://github.com/henriquetourinho)  
🔗 Wiki: [wiki.debian.org/henriquetourinho](https://wiki.debian.org/henriquetourinho)

---

📢 **Este é um projeto vivo — colaborações e sugestões são muito bem-vindas!**