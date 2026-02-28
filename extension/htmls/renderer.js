import { agregarEventoClick } from './events.js';

function extraerDominio(url) {
    try {
        const urlObj = new URL(url.startsWith('http') ? url : 'https://' + url);
        return urlObj.hostname;
    } catch {
        return url;
    }
}

export function renderizarObjetos(lista, contenedor) {
    lista.forEach(obj => {
        const div = document.createElement("div");
        div.classList.add("card");
        
        const dominio = extraerDominio(obj.url || obj.website);
        const logoUrl = `https://www.google.com/s2/favicons?domain=${dominio}&sz=64`;
        
        const img = document.createElement("img");
        img.src = logoUrl;
        img.alt = "logo";
        img.style.cssText = "width: 24px; height: 24px; border-radius: 4px; flex-shrink: 0;";
        img.onerror = function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Crect fill=%22%23ddd%22 width=%2224%22 height=%2224%22/%3E%3C/svg%3E';
        };
        
        const span = document.createElement("span");
        span.textContent = obj.url || obj.website;
        span.style.cssText = "text-align: left; flex: 1;";
        
        const wrapper = document.createElement("div");
        wrapper.style.cssText = "display: flex; align-items: center; gap: 10px;";
        wrapper.appendChild(img);
        wrapper.appendChild(span);
        
        div.appendChild(wrapper);
        agregarEventoClick(div, obj);

        contenedor.appendChild(div);
    });
}
