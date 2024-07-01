document.addEventListener('alpine:init', () => {
  Alpine.store('cart', {
    items: [],
    total: 0,
    jumlah: 0,
    showInvoice: false,
    addItem(newitem) {
      // cek
      const cartmenuitem=this.items.find((item)=> item.id === newitem.id)

      if(!cartmenuitem){
        this.items.push({...newitem,jumlah:1,total:newitem.price});
        this.jumlah++;
        this.total += newitem.price;
      }else{
        this.items=this.items.map((item)=>{
          if(item.id !== newitem.id){
            return item;
          }else{
            item.jumlah++;
            item.total = item.price * item.jumlah;
            this.jumlah++;
            this.total += item.price;
            return item;
          }
        })
      }
    },
    removeItem(id){
        const cartmenuitem=this.items.find((item)=> item.id === id)
        if(cartmenuitem.jumlah>1){
          this.items = this.items.map((item)=>{
            if(item.id !== id){
              return item;
            }else{
              item.jumlah--;
              item.total = item.price * item.jumlah;
              this.jumlah--;
              this.total -= item.price;
              return item;
            }
          })
        }else if(cartmenuitem.jumlah===1){ //jika barangnya sisa satu
          this.items = this.items.filter((item)=> item.id != id)
          this.jumlah--;
          this.total -= cartmenuitem.price;
        }
    },
    clearAll() {
      this.items = [];
      this.total = 0;
      this.jumlah = 0;
    },
    removeSelectedItem(id) {
    const cartmenuitem = this.items.find((item) => item.id === id);
      if (cartmenuitem) {
        this.items = this.items.filter((item) => item.id !== id);
        this.jumlah -= cartmenuitem.jumlah;
        this.total -= cartmenuitem.total;
      }
    }
  });
});



function carouselData() {
  return {
    bestseller: [
      { id:'b001',name: "Paket Berdua", img: "paketberdua.jpg", price: 35000, hargaasli: 45000 ,source:"paket"},
      { id:'b002',name: "Paket Golden Keluarga", img: "paketkeluarga.jpg", price: 45000, hargaasli: 60000 ,source:"bestseller"},
      { id:'b003',name: "Paket Golden Spesial", img: "golden spesial.jpg", price: 40000, hargaasli: 50000 ,source:"bestseller"},
    ],
    makanan: [
      { id:'ma01',name: "Ayam Bakar Golden", img: 'ayambakar.jpg', price: 20000, hargaasli: 27000  ,source:"makanan"},
      { id:'ma02',name: "Ayam Golden Saus BBQ", img: 'ayambbq.jpg', price: 23000, hargaasli: 28000 ,source:"makanan"},
      { id:'ma03', name: "Ayam Geprek Golden", img: 'ayamgeprek.jpg', price: 18000, hargaasli: 18000 ,source:"makanan"},
      { id:'ma04',name: "Ayam Golden Saus Keju", img: 'ayamkeju.jpg', price: 20000, hargaasli: 27000 ,source:"makanan"},
      { id:'ma05',name: "Ayam Katsu Golden", img: 'katsu.jpg', price: 17000, hargaasli: 25000 ,source:"makanan"},
      { id:'ma06',name: "Ayam Katsu Jumbo Golden", img: 'katsujumbo.jpg', price: 25000, hargaasli: 30000 ,source:"makanan"},
      { id:'ma07',name: "Ayam Original Golden", img: 'original.jpg', price: 16000, hargaasli: 20000 ,source:"makanan"},
      { id:'ma08',name: "Ayam Golden Salted Egg", img: 'saltedegg.jpg', price: 24000, hargaasli: 28000 ,source:"makanan"}
    ],
    minuman: [
      { id:12,name: "Es teh Golden", img: 'esteh.jpg', price: 4000, hargaasli: 5000 ,source:"minuman"},
      { id:13,name: "Es Jeruk Golden", img: 'esjeruk.jpg', price: 4000, hargaasli: 6000 ,source:"minuman"},
      { id:14,name: "Es Lemon Tea", img: 'lemontea.jpg', price: 5000, hargaasli: 7000 ,source:"minuman"},
      { id:15,name: "Jus Alpukat Golden", img: 'jusalpukat.jpg', price: 8000, hargaasli: 11000 ,source:"minuman"},
      { id:16,name: "Es Cendol Golden", img: 'cendol.jpg', price: 9000, hargaasli: 12000 ,source:"minuman"},
      { id:17,name: "Milkshake Coklat Golden", img: 'milkshakecoklat.jpg', price: 11000, hargaasli: 15000 ,source:"minuman"},
      { id:18,name: "Milkshake Strawberry Golden", img: 'milkshakestraw.jpg', price: 11000, hargaasli: 15000 ,source:"minuman"},
      { id:19,name: "Kopi Susu Golden", img: 'kopisusu.jpg', price: 7000, hargaasli: 9000 ,source:"minuman"}
    ],
    paket: [
      { id:0o1,name: "Paket Berdua", img: "paketberdua.jpg", price: 35000, hargaasli: 45000 ,source:"paket"},
      { id:3,name: "Paket Golden Spesial", img: "golden spesial.jpg", price: 40000, hargaasli: 50000 ,source:"paket"},
      { id:2,name: "Paket Golden Keluarga", img: "paketkeluarga.jpg", price: 45000, hargaasli: 50000 ,source:"paket"},
      { id:20,name: "Paket Kombo Golden", img: "paketkombo.jpg", price: 50000, hargaasli: 60000 ,source:"paket"},
      { id:21,name: "Paket Western Golden", img: "paketwestern.jpg", price: 36000, hargaasli: 40000 ,source:"paket"}
    ],
    
    initCarousels() {
      this.$nextTick(() => {
        const createItemElement = (item, category, index) => {
          const buttonId = `btn-${category}-${index}`;
          return `
            <div class="item">
              <div class="card">
                <img src="./gambar/${category}/${item.img}" alt="">
                <div class="card-body">
                  <h2 class="fs-5">${item.name}</h2>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <h3>Rp ${item.price.toLocaleString('id-ID')} <span>Rp ${item.hargaasli.toLocaleString('id-ID')}</span></h3>
                  <a id="${buttonId}" class="btn mt-4 fw-bold fs-4 rounded-pill" href="" role="button">Tambah <i class='bx bxs-cart-add'></i></a>
                </div>
              </div>
            </div>`;
        };

        const appendItemsToCarousel = (items, category, containerId) => {
          items.forEach((item, index) => {
            const itemHtml = createItemElement(item, category, index);
            document.querySelector(`#${containerId}`).insertAdjacentHTML('beforeend', itemHtml);
            const button = document.getElementById(`btn-${category}-${index}`);
            button.addEventListener('click', (event) => {
              event.preventDefault();
              Alpine.store('cart').addItem(item);
            });
          });
        };

        appendItemsToCarousel(this.bestseller, 'bestseller', 'bestseller');
        appendItemsToCarousel(this.makanan, 'makanan', 'makanan');
        appendItemsToCarousel(this.minuman, 'minuman', 'minuman');
        appendItemsToCarousel(this.paket, 'paket', 'paket');

        const initializeOwlCarousel = (containerId, loop,autoplay = false) => {
          $(`#${containerId}`).owlCarousel({
            loop: loop,
            margin: 10,
            nav: true,
            autoplay: autoplay, 
            autoplayTimeout: 3000, 
            autoplayHoverPause: true,
            responsive: {
              0: { items: 1 },
              600: { items: 3 },
              1000: { items: 3 }
            }
          });
        };

        initializeOwlCarousel('bestseller', true,true);
        initializeOwlCarousel('makanan', false);
        initializeOwlCarousel('minuman', false);
        initializeOwlCarousel('paket', false);

        
      });
    }
  };
}

