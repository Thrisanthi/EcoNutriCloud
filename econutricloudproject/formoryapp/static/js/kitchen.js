const PRODUCTS = [
  {
    id: 'biryani-01',
    name: 'Hyderabadi Chicken Biryani',
    price: 299,
    tag: 'biryani',
    img: 'https://images.pexels.com/photos/12842725/pexels-photo-12842725.jpeg'
  },
  {
    id: 'biryani-02',
    name: 'Veg Dum Biryani',
    price: 249,
    tag: 'biryani',
    img: 'https://images.pexels.com/photos/16125319/pexels-photo-16125319.jpeg'
  },
  {
    id: 'pizza-01',
    name: 'Margherita Stone-Baked Pizza',
    price: 349,
    tag: 'pizza',
    rating: 4.5,
    img: 'https://images.pexels.com/photos/15968807/pexels-photo-15968807.jpeg'
  },
  {
    id: 'pizza-02',
    name: 'BBQ Chicken Pizza',
    price: 399,
    tag: 'pizza',
    img: 'https://images.pexels.com/photos/5908258/pexels-photo-5908258.jpeg'
  },
  {
    id: 'bowl-01',
    name: 'Korean Bulgogi Rice Bowl',
    price: 329,
    tag: 'bowl',
    img: 'https://images.pexels.com/photos/19545282/pexels-photo-19545282.jpeg'
  },
  {
    id: 'salad-01',
    name: 'Mediterranean Chickpea Salad',
    price: 219,
    tag: 'salad',
    img: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg'
  },
  {
    id: 'dessert-01',
    name: 'Chocolate Lava Cake',
    price: 179,
    tag: 'dessert',
    img: 'https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg'
  },
  {
    id: 'beverage-01',
    name: 'Virgin Mojito',
    price: 129,
    tag: 'beverage',
    img: 'https://images.pexels.com/photos/4946412/pexels-photo-4946412.jpeg'
  },
  {
    id: 'bowl-02',
    name: 'Paneer Tikka Power Bowl',
    price: 309,
    tag: 'bowl',
    img: 'https://images.pexels.com/photos/15738565/pexels-photo-15738565.jpeg'
  },
  {
    id: 'salad-02',
    name: 'Caesar Salad',
    price: 229,
    tag: 'salad',
    img: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg'
  },
  {
    id: 'dessert-02',
    name: 'Biscoff Cheesecake',
    price: 199,
    tag: 'dessert',
    img: 'https://images.pexels.com/photos/14107/pexels-photo-14107.jpeg'
  },
  {
    id: 'beverage-02',
    name: 'Cold Brew Coffee',
    price: 149,
    tag: 'beverage',
    img: 'https://images.pexels.com/photos/1170598/pexels-photo-1170598.jpeg'
  },
];
    let state = {
      filter: 'all',
      sort: 'popular',
      query: '',
      cart: {}, // id -> { product, qty }
    };
 
    // ---------- Helpers ----------
    const fmt = (n) => `₹${n}`;
 
    function renderProducts() {
      let items = PRODUCTS.filter(p => state.filter === 'all' || p.tag === state.filter);
      if (state.query) {
        const q = state.query.toLowerCase();
        items = items.filter(p => p.name.toLowerCase().includes(q));
      }
      if (state.sort === 'price-asc') items.sort((a,b) => a.price - b.price);
      if (state.sort === 'price-desc') items.sort((a,b) => b.price - a.price);
      // 'popular' -> keep original order
 
      const grid = document.getElementById('menu-grid');
      grid.innerHTML = items.map(p => cardHTML(p)).join('');
      lucide.createIcons();
      attachAddButtons();
    }
 
    function cardHTML(p){
      return `
        <div class="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition fade-in">
          <div class="relative">
            <img alt="${p.name}" class="h-44 w-full object-cover" src="${p.img}"/>
            <div class="absolute top-2 left-2 bg-white/90 text-[11px] px-2 py-1 rounded-full flex items-center gap-1"><i data-lucide="star" class="w-3.5 h-3.5 text-amber-500"></i> ${p.rating}</div>
          </div>
          <div class="p-4">
            <div class="font-semibold leading-snug">${p.name}</div>
            <div class="mt-1 text-sm text-gray-500 capitalize">${p.tag}</div>
            <div class="mt-3 flex items-center justify-between">
              <div class="text-lg font-bold">${fmt(p.price)}</div>
              <div class="flex items-center gap-2">
                <button class="qty-btn hidden p-2 rounded-lg border" data-action="dec" data-id="${p.id}"><i data-lucide="minus" class="w-4 h-4"></i></button>
                <span class="qty-label hidden" data-id="${p.id}">1</span>
                <button class="add-btn px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm" data-id="${p.id}">Add</button>
              </div>
            </div>
          </div>
        </div>`
    }
 
    function attachAddButtons(){
      document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', () => addToCart(btn.dataset.id));
      });
      document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          const act = btn.dataset.action;
          if (act === 'dec') updateQty(id, (state.cart[id]?.qty || 1) - 1);
        });
      });
    }
 
    // ---------- Cart ----------
    function addToCart(id){
      const product = PRODUCTS.find(p => p.id === id);
      if (!state.cart[id]) state.cart[id] = { product, qty: 0 };
      state.cart[id].qty++;
      updateCartUI();
      // Show qty controls inline
      const lbl = document.querySelector(`.qty-label[data-id="${id}"]`);
      const dec = document.querySelector(`.qty-btn[data-id="${id}"]`);
      const add = document.querySelector(`.add-btn[data-id="${id}"]`);
      if (lbl && dec && add) { lbl.classList.remove('hidden'); dec.classList.remove('hidden'); add.textContent = 'Add +'; }
    }
 
    function updateQty(id, qty){
      if (qty <= 0) delete state.cart[id]; else state.cart[id].qty = qty;
      updateCartUI();
    }
 
    function removeFromCart(id){
      delete state.cart[id];
      updateCartUI();
    }
 
    function cartTotals(){
      const subtotal = Object.values(state.cart).reduce((s, {product, qty}) => s + product.price * qty, 0);
      const delivery = subtotal > 0 ? 39 : 0;
      return { subtotal, delivery, total: subtotal + delivery };
    }
 
    function updateCartUI(){
      const itemsEl = document.getElementById('cart-items');
      const count = Object.values(state.cart).reduce((s, x) => s + x.qty, 0);
      document.getElementById('cart-count').textContent = count;
      document.getElementById('cart-count-mobile').textContent = count;
 
      if (count === 0) {
        itemsEl.innerHTML = `<div class="text-center text-gray-500 py-16">
          <i data-lucide="shopping-bag" class="w-8 h-8 mx-auto mb-2"></i>
          Your cart is empty
        </div>`;
      } else {
        itemsEl.innerHTML = Object.values(state.cart).map(({product, qty}) => `
          <div class="flex gap-3 py-3 border-b">
            <img class="w-16 h-16 rounded-lg object-cover" src="${product.img}" alt="${product.name}">
            <div class="flex-1">
              <div class="font-semibold">${product.name}</div>
              <div class="text-sm text-gray-500">${product.tag}</div>
              <div class="mt-2 flex items-center gap-2">
                <button class="p-2 rounded-lg border" onclick="updateQty('${product.id}', ${qty-1})"><i data-lucide="minus" class="w-4 h-4"></i></button>
                <span class="min-w-[2ch] text-center">${qty}</span>
                <button class="p-2 rounded-lg border" onclick="updateQty('${product.id}', ${qty+1})"><i data-lucide="plus" class="w-4 h-4"></i></button>
                <button class="ml-auto p-2 rounded-lg hover:bg-gray-100" onclick="removeFromCart('${product.id}')"><i data-lucide="trash" class="w-4 h-4"></i></button>
              </div>
            </div>
            <div class="font-semibold">${fmt(product.price * qty)}</div>
          </div>`).join('');
      }
 
      const {subtotal, delivery, total} = cartTotals();
      document.getElementById('subtotal').textContent = fmt(subtotal);
      document.getElementById('delivery').textContent = fmt(delivery);
      document.getElementById('total').textContent = fmt(total);
      lucide.createIcons();
    }
 
    // ---------- UI Events ----------
    function setFilter(tag){ state.filter = tag; renderProducts(); }
 
    document.querySelectorAll('.chip').forEach(chip => {
      chip.classList.add('px-4','py-2','rounded-full','border','border-gray-300','bg-white','text-sm','hover:border-gray-400','whitespace-nowrap');
      chip.addEventListener('click', () => {
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('ring-2','ring-emerald-500','border-emerald-500'));
        chip.classList.add('ring-2','ring-emerald-500','border-emerald-500');
        setFilter(chip.dataset.filter);
      });
    });
 
    document.getElementById('sort').addEventListener('change', (e) => {
      state.sort = e.target.value; renderProducts();
    });
 
    const search = document.getElementById('search');
    if (search) search.addEventListener('input', (e) => { state.query = e.target.value; renderProducts(); });
 
    // Drawer controls
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-backdrop');
    function openCart(){ drawer.classList.remove('translate-x-full'); backdrop.classList.remove('hidden'); }
    function closeCart(){ drawer.classList.add('translate-x-full'); backdrop.classList.add('hidden'); }
    document.getElementById('btn-cart').addEventListener('click', openCart);
    document.getElementById('btn-cart-mobile').addEventListener('click', openCart);
    document.getElementById('close-cart').addEventListener('click', closeCart);
    backdrop.addEventListener('click', closeCart);
 
    document.getElementById('clear-cart').addEventListener('click', () => { state.cart = {}; updateCartUI(); });
 
    document.getElementById('checkout').addEventListener('click', () => {
      alert('Checkout flow not implemented in demo.');
    });
 
    document.getElementById('btn-explore').addEventListener('click', () => {
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
 
    document.getElementById('year').textContent = new Date().getFullYear();
 
    // Init
    renderProducts();
    updateCartUI();
    lucide.createIcons();