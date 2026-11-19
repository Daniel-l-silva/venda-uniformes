/* =========================================================
   MN UNIFORMES – Loja virtual
   Configure aqui os dados da loja
   ========================================================= */
const CONFIG = {
  loja: "MN Uniformes",
  pixChave: "SUA-CHAVE-PIX-AQUI",   // CPF, CNPJ, e-mail, telefone (+5516999999999) ou chave aleatória
  pixNome: "MN UNIFORMES",          // até 25 caracteres, sem acentos
  pixCidade: "SAO CARLOS",          // até 15 caracteres, sem acentos
  descontoPix: 0.05,                // 5%
  freteGratisAcima: 299,
  maxParcelas: 6,
  parcelaMinima: 30
};

/* ---------- Produtos ---------- */
const PRODUCTS = [
  { id: 1,  nome: "Camiseta Escolar Manga Curta", cat: "escolar", tipo: "camiseta", preco: 39.9,  antigo: 49.9, badge: "Mais vendido",
    desc: "Malha 100% algodão penteado, gola reforçada e estampa/bordado do colégio sob consulta.",
    tamanhos: ["2","4","6","8","10","12","14","16"], cores: { "Branco":"#ffffff", "Azul Marinho":"#0a2a6b" } },
  { id: 2,  nome: "Camiseta Escolar Manga Longa", cat: "escolar", tipo: "camiseta-longa", preco: 49.9,
    desc: "Ideal para dias frios. Tecido macio, não desbota e seca rápido.",
    tamanhos: ["2","4","6","8","10","12","14","16"], cores: { "Branco":"#ffffff", "Azul Marinho":"#0a2a6b" } },
  { id: 3,  nome: "Bermuda Escolar", cat: "escolar", tipo: "bermuda", preco: 44.9,
    desc: "Tactel leve com elástico e cordão. Confortável para o dia todo.",
    tamanhos: ["2","4","6","8","10","12","14","16"], cores: { "Azul Marinho":"#0a2a6b", "Preto":"#17171a" } },
  { id: 4,  nome: "Calça Escolar Helanca", cat: "escolar", tipo: "calca", preco: 59.9,
    desc: "Helanca resistente com cintura elástica e bolsos laterais.",
    tamanhos: ["2","4","6","8","10","12","14","16"], cores: { "Azul Marinho":"#0a2a6b", "Preto":"#17171a" } },
  { id: 5,  nome: "Jaqueta de Moletom Escolar", cat: "escolar", tipo: "moletom", preco: 99.9, antigo: 119.9, badge: "Oferta",
    desc: "Moletom flanelado com zíper inteiro e bolsos. Opção com bordado do colégio.",
    tamanhos: ["4","6","8","10","12","14","16","P","M"], cores: { "Azul Marinho":"#0a2a6b", "Cinza":"#9aa1ad" } },
  { id: 6,  nome: "Camisa Polo Profissional", cat: "profissional", tipo: "polo", preco: 69.9, badge: "Destaque",
    desc: "Piquet com elastano, ótimo caimento. Bordado do logo da sua empresa sob consulta.",
    tamanhos: ["P","M","G","GG","XG"], cores: { "Preto":"#17171a", "Branco":"#ffffff", "Azul Marinho":"#0a2a6b" } },
  { id: 7,  nome: "Camisa Social Feminina", cat: "profissional", tipo: "social", preco: 89.9,
    desc: "Tricoline com elastano, não amassa fácil. Perfeita para recepção e escritório.",
    tamanhos: ["P","M","G","GG"], cores: { "Branco":"#ffffff", "Azul Claro":"#8fb4ec" } },
  { id: 8,  nome: "Jaleco Profissional", cat: "profissional", tipo: "jaleco", preco: 119.9,
    desc: "Gabardine leve, bolsos frontais e manga longa. Saúde, estética e laboratório.",
    tamanhos: ["P","M","G","GG","XG"], cores: { "Branco":"#ffffff", "Azul Marinho":"#0a2a6b" } },
  { id: 9,  nome: "Avental Profissional", cat: "profissional", tipo: "avental", preco: 54.9,
    desc: "Brim resistente com bolso frontal e tiras ajustáveis. Cozinha, salão e oficina.",
    tamanhos: ["Único"], cores: { "Preto":"#17171a", "Azul Marinho":"#0a2a6b", "Bege":"#d9c7a3" } },
  { id: 10, nome: "Calça Profissional", cat: "profissional", tipo: "calca", preco: 79.9,
    desc: "Sarja com elastano, 5 bolsos e acabamento reforçado.",
    tamanhos: ["36","38","40","42","44","46","48"], cores: { "Preto":"#17171a", "Azul Marinho":"#0a2a6b" } },
  { id: 11, nome: "Colete Profissional", cat: "profissional", tipo: "colete", preco: 64.9,
    desc: "Colete com bolsos e fechamento frontal. Ideal para atendimento e logística.",
    tamanhos: ["P","M","G","GG"], cores: { "Preto":"#17171a", "Azul Marinho":"#0a2a6b" } },
  { id: 12, nome: "Boné Personalizado", cat: "profissional", tipo: "bone", preco: 29.9,
    desc: "Brim com regulagem traseira. Bordado do logo sob consulta.",
    tamanhos: ["Único"], cores: { "Preto":"#17171a", "Azul Marinho":"#0a2a6b", "Branco":"#ffffff" } }
];

/* ---------- Utilidades ---------- */
const $  = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const brl = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const onlyDigits = s => (s || "").replace(/\D/g, "");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove("show"), 2400);
}

function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) + amt, g = ((n >> 8) & 255) + amt, b = (n & 255) + amt;
  r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/* ---------- Ilustrações das peças (SVG) ---------- */
function art(tipo, cor = "#0a2a6b") {
  const dark = shade(cor, -35), light = shade(cor, 30);
  const trim = (cor.toLowerCase() === "#ffffff" || cor.toLowerCase() === "#d9c7a3") ? "#0a2a6b" : "#d4a937";
  const stroke = `stroke="${dark}" stroke-width="2.5" stroke-linejoin="round"`;
  const logo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><circle r="9" fill="#000" stroke="#d4a937" stroke-width="1.6"/><text y="3.6" text-anchor="middle" font-size="9" font-weight="700" font-family="Georgia,serif" fill="#d4a937">MN</text></g>`;
  let body = "";
  switch (tipo) {
    case "camiseta":
      body = `<path d="M62 30 L88 20 Q100 38 112 20 L138 30 L176 62 L155 88 L140 74 L140 172 L60 172 L60 74 L45 88 L24 62 Z" fill="${cor}" ${stroke}/>
              <path d="M88 20 Q100 38 112 20" fill="none" stroke="${trim}" stroke-width="4"/>${logo(122, 62, .9)}`;
      break;
    case "camiseta-longa":
      body = `<path d="M62 30 L88 20 Q100 38 112 20 L138 30 L184 140 L162 148 L140 90 L140 172 L60 172 L60 90 L38 148 L16 140 L62 30Z" fill="${cor}" ${stroke}/>
              <path d="M88 20 Q100 38 112 20" fill="none" stroke="${trim}" stroke-width="4"/>${logo(122, 62, .9)}
              <path d="M16 140 L38 148 M184 140 L162 148" stroke="${trim}" stroke-width="5"/>`;
      break;
    case "polo":
      body = `<path d="M62 30 L88 20 L100 40 L112 20 L138 30 L176 62 L155 88 L140 74 L140 172 L60 172 L60 74 L45 88 L24 62 Z" fill="${cor}" ${stroke}/>
              <path d="M88 20 L100 44 L112 20 L124 26 L100 56 L76 26 Z" fill="${light}" ${stroke}/>
              <path d="M100 44 V86" stroke="${dark}" stroke-width="2.5"/><circle cx="96" cy="60" r="2" fill="${trim}"/><circle cx="96" cy="74" r="2" fill="${trim}"/>
              <path d="M24 62 L45 88 M176 62 L155 88" stroke="${trim}" stroke-width="5"/>${logo(122, 70, .8)}`;
      break;
    case "social":
      body = `<path d="M60 30 L86 20 L100 36 L114 20 L140 30 L180 140 L158 146 L140 84 L140 176 L60 176 L60 84 L42 146 L20 140 Z" fill="${cor}" ${stroke}/>
              <path d="M86 20 L100 50 L114 20 L124 28 L100 62 L76 28Z" fill="${light}" ${stroke}/>
              <path d="M100 50 V176" stroke="${dark}" stroke-width="2"/>
              <circle cx="104" cy="80" r="2" fill="${dark}"/><circle cx="104" cy="104" r="2" fill="${dark}"/><circle cx="104" cy="128" r="2" fill="${dark}"/>${logo(122, 74, .7)}`;
      break;
    case "jaleco":
      body = `<path d="M58 28 L86 18 L100 44 L114 18 L142 28 L184 150 L160 158 L142 92 L146 186 L54 186 L58 92 L40 158 L16 150 Z" fill="${cor}" ${stroke}/>
              <path d="M86 18 L100 44 L114 18 L126 26 L100 66 L74 26Z" fill="${light}" ${stroke}/>
              <path d="M100 66 V186" stroke="${dark}" stroke-width="2"/>
              <rect x="64" y="124" width="26" height="24" rx="3" fill="none" stroke="${dark}" stroke-width="2"/>
              <rect x="110" y="124" width="26" height="24" rx="3" fill="none" stroke="${dark}" stroke-width="2"/>${logo(122, 84, .7)}`;
      break;
    case "moletom":
      body = `<path d="M60 34 L86 22 Q100 44 114 22 L140 34 L186 148 L162 156 L142 96 L142 176 L58 176 L58 96 L38 156 L14 148 Z" fill="${cor}" ${stroke}/>
              <path d="M86 22 Q100 52 114 22 Q100 8 86 22Z" fill="${light}" ${stroke}/>
              <path d="M100 48 V176" stroke="${trim}" stroke-width="3"/>
              <path d="M58 168 H142" stroke="${dark}" stroke-width="6"/>
              <path d="M72 128 Q100 112 128 128 V148 H72Z" fill="${light}" opacity=".6"/>${logo(122, 80, .8)}`;
      break;
    case "colete":
      body = `<path d="M64 24 L88 20 L100 48 L112 20 L136 24 L148 60 L142 176 L58 176 L52 60 Z" fill="${cor}" ${stroke}/>
              <path d="M100 48 V176" stroke="${trim}" stroke-width="3"/>
              <rect x="66" y="124" width="26" height="30" rx="3" fill="none" stroke="${dark}" stroke-width="2"/>
              <rect x="108" y="124" width="26" height="30" rx="3" fill="none" stroke="${dark}" stroke-width="2"/>${logo(122, 74, .7)}`;
      break;
    case "avental":
      body = `<path d="M78 18 Q100 8 122 18 L126 62 L152 70 L146 182 L54 182 L48 70 L74 62 Z" fill="${cor}" ${stroke}/>
              <path d="M78 18 Q60 8 42 14 M122 18 Q140 8 158 14" fill="none" stroke="${dark}" stroke-width="3"/>
              <rect x="72" y="118" width="56" height="34" rx="4" fill="${light}" ${stroke}/>${logo(100, 92, 1)}`;
      break;
    case "calca":
      body = `<path d="M52 20 H148 L156 182 H110 L100 78 L90 182 H44 Z" fill="${cor}" ${stroke}/>
              <path d="M52 34 H148" stroke="${dark}" stroke-width="5"/><path d="M100 34 V78" stroke="${dark}" stroke-width="2"/>
              <path d="M62 50 Q72 62 72 74" fill="none" stroke="${dark}" stroke-width="2"/><path d="M138 50 Q128 62 128 74" fill="none" stroke="${dark}" stroke-width="2"/>`;
      break;
    case "bermuda":
      body = `<path d="M52 36 H148 L158 128 H110 L100 84 L90 128 H42 Z" fill="${cor}" ${stroke}/>
              <path d="M52 48 H148" stroke="${trim}" stroke-width="6"/><path d="M92 48 Q100 64 108 48" fill="none" stroke="${dark}" stroke-width="2"/>
              <path d="M84 62 Q100 84 116 62" fill="none" stroke="${dark}" stroke-width="2"/>${logo(130, 84, .75)}`;
      break;
    case "bone":
      body = `<path d="M40 112 Q40 50 100 50 Q160 50 160 112 Z" fill="${cor}" ${stroke}/>
              <path d="M40 112 Q100 128 190 118 Q180 100 160 112 Z" fill="${dark}" ${stroke}/>
              <circle cx="100" cy="54" r="5" fill="${dark}"/>${logo(100, 88, 1)}`;
      break;
  }
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${tipo}">${body}</svg>`;
}

/* ---------- Estado ---------- */
const state = {
  filter: "todos",
  search: "",
  sort: "rel",
  cart: JSON.parse(localStorage.getItem("mn_cart") || "[]"),
  frete: JSON.parse(localStorage.getItem("mn_frete") || "null"),   // { cep, uf, cidade, opcoes:[], escolhido }
  pay: "pix",
  modal: { p: null, size: null, color: null, qty: 1 }
};
const saveCart  = () => localStorage.setItem("mn_cart", JSON.stringify(state.cart));
const saveFrete = () => localStorage.setItem("mn_frete", JSON.stringify(state.frete));

/* ---------- Galeria ---------- */
function renderGrid() {
  let list = PRODUCTS.filter(p =>
    (state.filter === "todos" || p.cat === state.filter) &&
    p.nome.toLowerCase().includes(state.search.toLowerCase())
  );
  if (state.sort === "menor") list.sort((a, b) => a.preco - b.preco);
  if (state.sort === "maior") list.sort((a, b) => b.preco - a.preco);
  if (state.sort === "nome")  list.sort((a, b) => a.nome.localeCompare(b.nome));

  $("#grid").innerHTML = list.map(p => {
    const cor = Object.values(p.cores)[0];
    return `<article class="card">
      <div class="card__img" data-open="${p.id}" tabindex="0" role="button" aria-label="Ver ${esc(p.nome)}">
        ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}
        ${art(p.tipo, cor)}
      </div>
      <div class="card__body">
        <span class="tag">${p.cat}</span>
        <h3>${esc(p.nome)}</h3>
        <div class="price">${brl(p.preco)}${p.antigo ? `<s>${brl(p.antigo)}</s>` : ""}</div>
        <span class="muted">${parcelaTexto(p.preco)}</span>
        <button class="btn btn--navy" data-open="${p.id}">Ver detalhes</button>
      </div>
    </article>`;
  }).join("");
  $("#empty").hidden = list.length > 0;
  $$(".chip").forEach(c => c.classList.toggle("is-active", c.dataset.filter === state.filter));
}

function parcelaTexto(v) {
  const n = Math.max(1, Math.min(CONFIG.maxParcelas, Math.floor(v / CONFIG.parcelaMinima)));
  return n > 1 ? `ou ${n}x de ${brl(v / n)} sem juros` : `ou 1x no cartão`;
}

/* ---------- Modal do produto ---------- */
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === +id);
  if (!p) return;
  const cores = Object.keys(p.cores);
  state.modal = { p, size: p.tamanhos.length === 1 ? p.tamanhos[0] : null, color: cores[0], qty: 1 };

  $("#pCat").textContent = p.cat;
  $("#pTitle").textContent = p.nome;
  $("#pDesc").textContent = p.desc;
  $("#pPrice").innerHTML = brl(p.preco) + (p.antigo ? `<s>${brl(p.antigo)}</s>` : "");
  $("#pParcel").textContent = parcelaTexto(p.preco) + " • " + brl(p.preco * (1 - CONFIG.descontoPix)) + " no Pix";
  $("#pQty").textContent = 1;
  $("#pError").textContent = "";

  $("#pSizes").innerHTML = p.tamanhos.map(t =>
    `<button type="button" class="opt ${state.modal.size === t ? "is-active" : ""}" data-size="${t}">${t}</button>`).join("");
  $("#pColors").innerHTML = cores.map((c, i) =>
    `<button type="button" class="swatch ${i === 0 ? "is-active" : ""}" data-color="${esc(c)}" style="background:${p.cores[c]}" title="${esc(c)}" aria-label="${esc(c)}"></button>`).join("");
  updateModalImg();
  openOverlay("#productOverlay");
}

function updateModalImg() {
  const { p, color } = state.modal;
  $("#pImg").innerHTML = art(p.tipo, p.cores[color]);
}

/* ---------- Carrinho ---------- */
function addToCart(p, size, color, qty) {
  const key = `${p.id}|${size}|${color}`;
  const found = state.cart.find(i => i.key === key);
  if (found) found.qty += qty;
  else state.cart.push({ key, id: p.id, size, color, qty });
  saveCart();
  renderCart();
  const b = $("#cartCount"); b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump");
}

const subtotal = () => state.cart.reduce((s, i) => s + PRODUCTS.find(p => p.id === i.id).preco * i.qty, 0);
const totalQty = () => state.cart.reduce((s, i) => s + i.qty, 0);

function shippingValue() {
  if (!state.frete || !state.frete.escolhido) return null;
  const o = state.frete.opcoes.find(x => x.id === state.frete.escolhido);
  if (!o) return null;
  return subtotal() >= CONFIG.freteGratisAcima && o.id === "pac" ? 0 : o.valor;
}

function renderCart() {
  $("#cartCount").textContent = totalQty();
  const wrap = $("#cartItems");
  const foot = $("#cartFoot");

  if (!state.cart.length) {
    wrap.innerHTML = `<div class="cart-empty"><span>🛒</span><p>Seu carrinho está vazio.</p></div>`;
    foot.hidden = true;
    return;
  }
  foot.hidden = false;

  wrap.innerHTML = state.cart.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return `<div class="item" data-key="${esc(i.key)}">
      <div class="item__img">${art(p.tipo, p.cores[i.color])}</div>
      <div>
        <div class="item__name">${esc(p.nome)}</div>
        <div class="item__meta">Tam. ${esc(i.size)} • ${esc(i.color)}</div>
        <div class="qty">
          <button data-act="minus" aria-label="Diminuir">−</button><span>${i.qty}</span><button data-act="plus" aria-label="Aumentar">+</button>
        </div>
      </div>
      <div class="item__right">
        <div class="item__price">${brl(p.preco * i.qty)}</div>
        <button class="item__rm" data-act="rm">Remover</button>
      </div>
    </div>`;
  }).join("");

  renderCepResult();
  renderTotals();
}

function renderTotals() {
  const sub = subtotal();
  const ship = shippingValue();
  $("#tSub").textContent = brl(sub);
  $("#tShip").innerHTML = ship === null ? "—" : ship === 0 ? `<span style="color:var(--ok)">Grátis</span>` : brl(ship);
  const total = sub + (ship || 0);
  $("#tTotal").textContent = brl(total);
  $("#tPix").textContent = brl(sub * (1 - CONFIG.descontoPix) + (ship || 0));
}

/* ---------- CEP / Frete ---------- */
function maskCep(v) { v = onlyDigits(v).slice(0, 8); return v.length > 5 ? v.slice(0, 5) + "-" + v.slice(5) : v; }

async function buscaCep(cep) {
  cep = onlyDigits(cep);
  if (cep.length !== 8) throw new Error("CEP inválido");
  const r = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  if (!r.ok) throw new Error("Não foi possível consultar o CEP");
  const d = await r.json();
  if (d.erro) throw new Error("CEP não encontrado");
  return d;
}

function calcFrete(uf) {
  // Valores de demonstração. Para frete real, integre com Correios/Melhor Envio/Frenet.
  const regioes = {
    SP: [19.9, 3, 28.9, 1],
    RJ: [24.9, 4, 34.9, 2], MG: [24.9, 4, 34.9, 2], ES: [24.9, 4, 34.9, 2],
    PR: [27.9, 5, 38.9, 2], SC: [27.9, 5, 38.9, 2], RS: [27.9, 5, 38.9, 2],
    GO: [32.9, 6, 44.9, 3], DF: [32.9, 6, 44.9, 3], MT: [32.9, 6, 44.9, 3], MS: [32.9, 6, 44.9, 3]
  };
  const [pac, dpac, sedex, dsedex] = regioes[uf] || [42.9, 9, 59.9, 4];
  return [
    { id: "pac",   nome: "PAC (econômico)", valor: pac,   prazo: `${dpac} a ${dpac + 3} dias úteis` },
    { id: "sedex", nome: "SEDEX (expresso)", valor: sedex, prazo: `${dsedex} a ${dsedex + 1} dias úteis` }
  ];
}

async function calcularCep(cep, silent) {
  const btn = $("#cepBtn");
  const res = $("#cepResult");
  btn.disabled = true; btn.textContent = "...";
  try {
    const d = await buscaCep(cep);
    state.frete = { cep: onlyDigits(cep), uf: d.uf, cidade: d.localidade, rua: d.logradouro, bairro: d.bairro,
                    opcoes: calcFrete(d.uf), escolhido: "pac" };
    saveFrete();
    renderCepResult();
    renderTotals();
    return d;
  } catch (e) {
    if (!silent) res.innerHTML = `<span class="err">${esc(e.message)}</span>`;
    throw e;
  } finally {
    btn.disabled = false; btn.textContent = "Calcular";
  }
}

function renderCepResult() {
  const res = $("#cepResult");
  const f = state.frete;
  if (!f) { res.innerHTML = ""; return; }
  if (!$("#cepInput").value) $("#cepInput").value = maskCep(f.cep);
  const gratis = subtotal() >= CONFIG.freteGratisAcima;
  res.innerHTML = `<div class="muted">Entrega para <b>${esc(f.cidade)}/${esc(f.uf)}</b></div>` +
    f.opcoes.map(o => {
      const v = gratis && o.id === "pac" ? 0 : o.valor;
      return `<div class="ship-opt"><label><input type="radio" name="ship" value="${o.id}" ${f.escolhido === o.id ? "checked" : ""}>
        <span>${o.nome}<small>${o.prazo}</small></span></label>
        <b class="${v === 0 ? "free" : ""}">${v === 0 ? "Grátis" : brl(v)}</b></div>`;
    }).join("");
}

/* ---------- Abrir / fechar overlays ---------- */
function openOverlay(sel) {
  $(sel).hidden = false;
  document.body.style.overflow = "hidden";
}
function closeOverlay(el) {
  el.hidden = true;
  if (!$$(".overlay").some(o => !o.hidden)) document.body.style.overflow = "";
}

/* ---------- Checkout ---------- */
function openCheckout() {
  if (!state.cart.length) return;
  $("#result").hidden = true;
  $("#checkoutForm").hidden = false;
  $("#coTitle").textContent = "Finalizar compra";
  $("#coError").textContent = "";

  if (state.frete) {
    $("#coCep").value = maskCep(state.frete.cep);
    $("#coRua").value = state.frete.rua || "";
    $("#coBairro").value = state.frete.bairro || "";
    $("#coCidade").value = state.frete.cidade || "";
    $("#coUf").value = state.frete.uf || "";
  }
  renderCheckoutSummary();
  renderCheckoutShip();
  renderInstallments();
  $("#cartOverlay").hidden = true;
  openOverlay("#checkoutOverlay");
}

function renderCheckoutShip() {
  const box = $("#coShip");
  const f = state.frete;
  if (!f) { box.innerHTML = `<p class="muted" style="margin-top:10px">Informe o CEP para calcular o frete.</p>`; return; }
  const gratis = subtotal() >= CONFIG.freteGratisAcima;
  box.innerHTML = f.opcoes.map(o => {
    const v = gratis && o.id === "pac" ? 0 : o.valor;
    return `<div class="ship-opt"><label><input type="radio" name="coship" value="${o.id}" ${f.escolhido === o.id ? "checked" : ""}>
      <span>${o.nome}<small>${o.prazo}</small></span></label><b class="${v === 0 ? "free" : ""}">${v === 0 ? "Grátis" : brl(v)}</b></div>`;
  }).join("");
}

function orderTotals() {
  const sub = subtotal();
  const ship = shippingValue() || 0;
  const disc = state.pay === "pix" ? sub * CONFIG.descontoPix : 0;
  return { sub, ship, disc, total: sub + ship - disc };
}

function renderCheckoutSummary() {
  $("#coItems").innerHTML = state.cart.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return `<div class="co-item"><span>${i.qty}× ${esc(p.nome)}<br><small class="muted">Tam. ${esc(i.size)} • ${esc(i.color)}</small></span><b>${brl(p.preco * i.qty)}</b></div>`;
  }).join("");
  const t = orderTotals();
  const ship = shippingValue();
  $("#coSub").textContent = brl(t.sub);
  $("#coShipVal").textContent = ship === null ? "Calcule o CEP" : ship === 0 ? "Grátis" : brl(ship);
  $("#coDiscRow").hidden = t.disc === 0;
  $("#coDisc").textContent = "− " + brl(t.disc);
  $("#coTotal").textContent = brl(t.total);
  renderInstallments();
}

function renderInstallments() {
  const sel = $("#installments");
  const total = orderTotals().total;
  const cur = sel.value;
  const max = Math.max(1, Math.min(CONFIG.maxParcelas, Math.floor(total / CONFIG.parcelaMinima)));
  sel.innerHTML = Array.from({ length: max }, (_, i) => {
    const n = i + 1;
    return `<option value="${n}">${n}x de ${brl(total / n)} sem juros</option>`;
  }).join("");
  if (cur && +cur <= max) sel.value = cur;
  $("#installWrap").hidden = state.pay !== "credito";
}

/* ---------- Validações ---------- */
function validCpf(c) {
  c = onlyDigits(c);
  if (c.length !== 11 || /^(\d)\1+$/.test(c)) return false;
  const calc = n => {
    let s = 0;
    for (let i = 0; i < n; i++) s += +c[i] * (n + 1 - i);
    const r = (s * 10) % 11;
    return r === 10 ? 0 : r;
  };
  return calc(9) === +c[9] && calc(10) === +c[10];
}
function luhn(num) {
  num = onlyDigits(num);
  if (num.length < 13) return false;
  let sum = 0, alt = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let n = +num[i];
    if (alt) { n *= 2; if (n > 9) n -= 9; }
    sum += n; alt = !alt;
  }
  return sum % 10 === 0;
}
function validExp(v) {
  const m = /^(\d{2})\/(\d{2})$/.exec(v);
  if (!m) return false;
  const mm = +m[1], yy = 2000 + +m[2];
  if (mm < 1 || mm > 12) return false;
  const end = new Date(yy, mm, 1);
  return end > new Date();
}
function cardBrand(n) {
  n = onlyDigits(n);
  if (/^4/.test(n)) return "Visa";
  if (/^(5[1-5]|2[2-7])/.test(n)) return "Mastercard";
  if (/^3[47]/.test(n)) return "Amex";
  if (/^(636368|438935|504175|451416|509|5067|4576|4011)/.test(n)) return "Elo";
  if (/^606282|^3841/.test(n)) return "Hipercard";
  return "Cartão";
}

/* ---------- PIX (BR Code copia e cola) ---------- */
function tlv(id, value) { return id + String(value.length).padStart(2, "0") + value; }
function crc16(str) {
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) & 0xFFFF : (crc << 1) & 0xFFFF;
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}
function semAcento(s) { return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Za-z0-9 ]/g, "").toUpperCase(); }
function gerarPix(valor, txid) {
  const conta = tlv("00", "br.gov.bcb.pix") + tlv("01", CONFIG.pixChave);
  let p = tlv("00", "01") + tlv("26", conta) + tlv("52", "0000") + tlv("53", "986") +
          tlv("54", valor.toFixed(2)) + tlv("58", "BR") +
          tlv("59", semAcento(CONFIG.pixNome).slice(0, 25)) +
          tlv("60", semAcento(CONFIG.pixCidade).slice(0, 15)) +
          tlv("62", tlv("05", (txid || "***").replace(/[^A-Za-z0-9]/g, "").slice(0, 25) || "***"));
  p += "6304";
  return p + crc16(p);
}

/* ---------- Finalizar pedido ---------- */
function setInvalid(el, bad) { el.classList.toggle("invalid", !!bad); return !bad; }

function validateCheckout(f) {
  const err = [];
  const need = n => { const el = f.elements[n]; const ok = setInvalid(el, !el.value.trim()); if (!ok) err.push(n); return ok; };
  ["nome", "email", "tel", "cep", "numero", "rua", "bairro", "cidade", "uf"].forEach(need);

  if (!setInvalid(f.elements.email, !/^\S+@\S+\.\S+$/.test(f.elements.email.value))) err.push("email");
  if (!setInvalid(f.elements.cpf, !validCpf(f.elements.cpf.value))) err.push("cpf");
  if (!setInvalid(f.elements.cep, onlyDigits(f.elements.cep.value).length !== 8)) err.push("cep");
  if (!setInvalid(f.elements.tel, onlyDigits(f.elements.tel.value).length < 10)) err.push("tel");

  if (err.length) return "Confira os campos destacados em vermelho.";
  if (!state.frete || !state.frete.escolhido) return "Calcule o frete informando o CEP.";

  if (state.pay !== "pix") {
    const okNum = setInvalid($("#cardNum"), !luhn($("#cardNum").value));
    const okName = setInvalid($("#cardName"), $("#cardName").value.trim().length < 3);
    const okExp = setInvalid($("#cardExp"), !validExp($("#cardExp").value));
    const okCvv = setInvalid($("#cardCvv"), onlyDigits($("#cardCvv").value).length < 3);
    if (!(okNum && okName && okExp && okCvv)) return "Confira os dados do cartão.";
  }
  return "";
}

async function submitOrder(e) {
  e.preventDefault();
  const f = e.target;
  const msg = validateCheckout(f);
  $("#coError").textContent = msg;
  if (msg) { const bad = $(".invalid", f); if (bad) bad.scrollIntoView({ behavior: "smooth", block: "center" }); return; }

  const btn = $("#coSubmit");
  btn.disabled = true; btn.textContent = "Processando...";
  await new Promise(r => setTimeout(r, 900)); // simula processamento

  const t = orderTotals();
  const pedido = "MN" + Date.now().toString().slice(-8);
  const nome = f.elements.nome.value.trim().split(" ")[0];
  const entrega = state.frete.opcoes.find(o => o.id === state.frete.escolhido);

  f.hidden = true;
  const box = $("#result");
  box.hidden = false;
  $("#coTitle").textContent = "";

  if (state.pay === "pix") {
    const code = gerarPix(t.total, pedido);
    box.innerHTML = `
      <div class="ok-icon">⚡</div>
      <h3>Quase lá, ${esc(nome)}! Pague com Pix</h3>
      <span class="order-no">Pedido ${pedido}</span>
      <p class="muted">Valor: <b>${brl(t.total)}</b> • O pedido é confirmado após o pagamento.</p>
      <div class="pix-box">
        <div id="qrcode"></div>
        <textarea class="pix-code" id="pixCode" readonly>${code}</textarea>
        <button class="btn btn--gold btn--block" id="copyPix" style="margin-top:10px">Copiar código Pix</button>
        <p class="muted small" style="margin-top:10px">Abra o app do seu banco, escolha Pix → Pix Copia e Cola (ou leia o QR Code).</p>
      </div>
      <button class="btn btn--navy" id="finish" style="margin-top:18px">Concluir</button>`;
    if (window.QRCode) {
      new QRCode($("#qrcode"), { text: code, width: 200, height: 200, correctLevel: QRCode.CorrectLevel.M });
    }
    $("#copyPix").onclick = async () => {
      try { await navigator.clipboard.writeText(code); }
      catch { $("#pixCode").select(); document.execCommand("copy"); }
      toast("Código Pix copiado!");
    };
  } else {
    const n = state.pay === "credito" ? +$("#installments").value : 1;
    const bandeira = cardBrand($("#cardNum").value);
    const final4 = onlyDigits($("#cardNum").value).slice(-4);
    box.innerHTML = `
      <div class="ok-icon">✓</div>
      <h3>Pedido confirmado, ${esc(nome)}!</h3>
      <span class="order-no">Pedido ${pedido}</span>
      <p class="muted">${state.pay === "credito" ? `Crédito em ${n}x de ${brl(t.total / n)}` : "Débito à vista"} • ${bandeira} final ${final4}</p>
      <p style="margin-top:8px">Total: <b>${brl(t.total)}</b></p>
      <p class="muted" style="margin-top:6px">Entrega ${entrega.nome} em ${entrega.prazo}.</p>
      <p class="muted small" style="margin-top:12px">Modo demonstração: nenhuma cobrança real foi feita.</p>
      <button class="btn btn--navy" id="finish" style="margin-top:18px">Concluir</button>`;
  }

  $("#finish").onclick = () => {
    state.cart = []; saveCart(); renderCart();
    closeOverlay($("#checkoutOverlay"));
    f.reset(); f.hidden = false; box.hidden = true;
    $("#coTitle").textContent = "Finalizar compra";
  };

  btn.disabled = false; btn.textContent = "Confirmar pedido";
}

/* ---------- Eventos ---------- */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  $("#heroArt").innerHTML = art("polo", "#17171a") + art("camiseta", "#ffffff");

  renderGrid();
  renderCart();

  // Menu mobile
  $("#menuBtn").onclick = () => $("#nav").classList.toggle("open");
  $$("#nav a").forEach(a => a.addEventListener("click", () => {
    $("#nav").classList.remove("open");
    if (a.dataset.filter) { state.filter = a.dataset.filter; renderGrid(); }
  }));

  // Filtros
  $("#chips").addEventListener("click", e => {
    const c = e.target.closest(".chip"); if (!c) return;
    state.filter = c.dataset.filter; renderGrid();
  });
  $("#search").addEventListener("input", e => { state.search = e.target.value; renderGrid(); });
  $("#sort").addEventListener("change", e => { state.sort = e.target.value; renderGrid(); });

  // Abrir produto
  $("#grid").addEventListener("click", e => {
    const t = e.target.closest("[data-open]"); if (t) openProduct(t.dataset.open);
  });
  $("#grid").addEventListener("keydown", e => {
    if (e.key === "Enter") { const t = e.target.closest("[data-open]"); if (t) openProduct(t.dataset.open); }
  });

  // Modal produto
  $("#pSizes").addEventListener("click", e => {
    const b = e.target.closest(".opt"); if (!b) return;
    state.modal.size = b.dataset.size;
    $$("#pSizes .opt").forEach(x => x.classList.toggle("is-active", x === b));
    $("#pError").textContent = "";
  });
  $("#pColors").addEventListener("click", e => {
    const b = e.target.closest(".swatch"); if (!b) return;
    state.modal.color = b.dataset.color;
    $$("#pColors .swatch").forEach(x => x.classList.toggle("is-active", x === b));
    updateModalImg();
  });
  $("#pMinus").onclick = () => { state.modal.qty = Math.max(1, state.modal.qty - 1); $("#pQty").textContent = state.modal.qty; };
  $("#pPlus").onclick  = () => { state.modal.qty = Math.min(20, state.modal.qty + 1); $("#pQty").textContent = state.modal.qty; };
  $("#pAdd").onclick = () => {
    const { p, size, color, qty } = state.modal;
    if (!size) { $("#pError").textContent = "Selecione o tamanho."; return; }
    addToCart(p, size, color, qty);
    closeOverlay($("#productOverlay"));
    toast("Adicionado ao carrinho ✓");
  };

  // Carrinho
  $("#cartBtn").onclick = () => { renderCart(); openOverlay("#cartOverlay"); };
  $("#cartItems").addEventListener("click", e => {
    const row = e.target.closest(".item"); const act = e.target.dataset.act;
    if (!row || !act) return;
    const it = state.cart.find(i => i.key === row.dataset.key);
    if (!it) return;
    if (act === "plus") it.qty = Math.min(20, it.qty + 1);
    if (act === "minus") it.qty = Math.max(1, it.qty - 1);
    if (act === "rm") state.cart = state.cart.filter(i => i !== it);
    saveCart(); renderCart();
  });
  $("#clearBtn").onclick = () => { if (confirm("Esvaziar o carrinho?")) { state.cart = []; saveCart(); renderCart(); } };

  // CEP no carrinho
  $("#cepInput").addEventListener("input", e => { e.target.value = maskCep(e.target.value); });
  $("#cepBtn").onclick = () => calcularCep($("#cepInput").value).catch(() => {});
  $("#cepInput").addEventListener("keydown", e => { if (e.key === "Enter") $("#cepBtn").click(); });
  $("#cepResult").addEventListener("change", e => {
    if (e.target.name === "ship") { state.frete.escolhido = e.target.value; saveFrete(); renderCepResult(); renderTotals(); }
  });

  // Checkout
  $("#checkoutBtn").onclick = () => {
    if (!state.frete) { $("#cepResult").innerHTML = `<span class="err">Informe o CEP para calcular o frete.</span>`; $("#cepInput").focus(); return; }
    openCheckout();
  };
  $("#checkoutForm").addEventListener("submit", submitOrder);
  $("#checkoutForm").addEventListener("input", e => e.target.classList.remove("invalid"));

  // Máscaras
  $("#checkoutForm").elements.cpf.addEventListener("input", e => {
    let v = onlyDigits(e.target.value).slice(0, 11);
    v = v.replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = v;
  });
  $("#checkoutForm").elements.tel.addEventListener("input", e => {
    let v = onlyDigits(e.target.value).slice(0, 11);
    v = v.length > 10 ? v.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3") : v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    e.target.value = v.replace(/[-\s(]+$/, "");
  });
  $("#cardNum").addEventListener("input", e => {
    e.target.value = onlyDigits(e.target.value).slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
  });
  $("#cardExp").addEventListener("input", e => {
    let v = onlyDigits(e.target.value).slice(0, 4);
    e.target.value = v.length > 2 ? v.slice(0, 2) + "/" + v.slice(2) : v;
  });
  $("#cardCvv").addEventListener("input", e => { e.target.value = onlyDigits(e.target.value).slice(0, 4); });

  // CEP no checkout: preenche endereço
  $("#coCep").addEventListener("input", async e => {
    e.target.value = maskCep(e.target.value);
    if (onlyDigits(e.target.value).length === 8) {
      try {
        $("#cepInput").value = e.target.value;
        const d = await calcularCep(e.target.value, true);
        $("#coRua").value = d.logradouro || $("#coRua").value;
        $("#coBairro").value = d.bairro || $("#coBairro").value;
        $("#coCidade").value = d.localidade;
        $("#coUf").value = d.uf;
        renderCheckoutShip(); renderCheckoutSummary();
        e.target.classList.remove("invalid");
      } catch { e.target.classList.add("invalid"); }
    }
  });
  $("#coShip").addEventListener("change", e => {
    if (e.target.name === "coship") {
      state.frete.escolhido = e.target.value; saveFrete();
      renderCheckoutSummary(); renderTotals();
    }
  });

  // Abas de pagamento
  $$(".tab").forEach(t => t.addEventListener("click", () => {
    state.pay = t.dataset.pay;
    $$(".tab").forEach(x => x.classList.toggle("is-active", x === t));
    $("#payPix").hidden = state.pay !== "pix";
    $("#payCard").hidden = state.pay === "pix";
    renderCheckoutSummary();
  }));

  // Fechar overlays
  $$(".overlay").forEach(o => {
    o.addEventListener("click", e => { if (e.target === o || e.target.closest("[data-close]")) closeOverlay(o); });
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") $$(".overlay").filter(o => !o.hidden).forEach(closeOverlay);
  });
});