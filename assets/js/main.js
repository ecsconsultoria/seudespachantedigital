
// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

// Consulta mock (reutilizável nas páginas com formulário)
const btn = document.getElementById('btn-consultar');
const result = document.getElementById('consulta-resultado');
if (btn && result) {
  btn.addEventListener('click', () => {
    const placa = (document.getElementById('placa').value || '').toUpperCase();
    const estado = document.getElementById('estado').value;
    const email = document.getElementById('email').value;
    if (!placa || !estado || !email) return;
    result.hidden = false;
    result.innerHTML = `
      <div class="result-item"><strong>Placa:</strong> ${placa} | <strong>UF:</strong> ${estado}</div>
      <div class="result-item"><span>IPVA:</span> <span class="badge badge-danger">Em aberto</span> — R$ 1.250,40</div>
      <div class="result-item"><span>Licenciamento:</span> <span class="badge badge-warning">Pendente</span> — R$ 168,80</div>
      <div class="result-item"><span>Multas:</span> <span class="badge badge-success">Nenhuma</span></div>
      <div class="result-actions">
        <a class="btn btn-primary" href="checkout.html">Pagar em até 12x</a>
        <a class="btn btn-outline" href="checkout.html#pix">Pagar com Pix</a>
      </div>
      <p class="disclaimer">*Valores ilustrativos para fins de prototipagem.</p>`;
  });
}

// Ano atual no footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
