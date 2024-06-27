function carouselData() {
  return {
    bestseller:[
      {name:"Paket Berdua",img:"paketberdua.jpg",price:35000,hargaasli:45000},
      {name: "Paket Golden Keluarga",img: "paketkeluarga.jpg",price:45000,hargaasli:60000},
      {name: "Paket Golden Spesial",img: "golden spesial.jpg",price:40000,hargaasli:50000},
    ],
    makanan:[
      {name:"Ayam Bakar Golden",img:'ayambakar.jpg',price:20000,hargaasli:27000},
      {name:"Ayam Golden Saus BBQ",img:'ayambbq.jpg',price:23000,hargaasli:28000},
      {name:"Ayam Geprek Golden",img:'ayamgeprek.jpg',price:18000,hargaasli:18000},
      {name:"Ayam Golden Saus Keju",img:'ayamkeju.jpg',price:20000,hargaasli:27000},
      {name:"Ayam Katsu Golden",img:'katsu.jpg',price:17000,hargaasli:25000},
      {name:"Ayam Katsu Jumbo Golden",img:'katsujumbo.jpg',price:25000,hargaasli:30000},
      {name:"Ayam Original Golden",img:'original.jpg',price:16000,hargaasli:20000},
      {name:"Ayam Golden Salted Egg",img:'saltedegg.jpg',price:24000,hargaasli:28000}
    ],
    minuman:[
      {name:"Es teh Manis",img:'esteh.jpg',price:4000,hargaasli:5000},
      {name:"Es Jeruk",img:'esjeruk.jpg',price:4000,hargaasli:6000},
      {name:"Es Lemon Tea",img:'lemontea.jpg',price:5000,hargaasli:7000},
      {name:"Jus Alpukat Golden",img:'jusalpukat.jpg',price:8000,hargaasli:11000},
      {name:"Es Cendol Golden",img:'cendol.jpg',price:9000,hargaasli:12000},
      {name:"Milkshake Coklat Golden",img:'milkshakecoklat.jpg',price:11000,hargaasli:15000},
      {name:"Milkshake Strawberry Golden",img:'milkshakestraw.jpg',price:11000,hargaasli:15000},
      {name:"Kopi Susu Golden",img:'kopisusu.jpg',price:7000,hargaasli:9000}
      
    ],
    paket: [
      {name:"Paket Berdua",img:"paketberdua.jpg",price:35000,hargaasli:45000},
      {name: "Paket Golden Spesial",img: "golden spesial.jpg",price:40000,hargaasli:50000},
      {name: "Paket Golden Keluarga",img: "paketkeluarga.jpg",price:45000,hargaasli:50000},
      {name: "Paket Kombo Golden",img: "paketkombo.jpg",price:50000,hargaasli:60000},
      {name: "Paket Western Golden",img: "paketwestern.jpg",price:36000,hargaasli:40000}      
    ],
    initCarousels() {
      this.$nextTick(() => {
        
        this.bestseller.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.className = 'item';
          itemElement.innerHTML = `
                      <div class="card">
                        <img src="./gambar/${item.img}" alt="">
                        <div class="card-body">
                            <h2 class="fs-5">${item.name}</h2>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the
                                card's
                                content.</p>
                            <h3>Rp. ${item.price.toLocaleString('id-ID')} <span>Rp ${item.hargaasli.toLocaleString('id-ID')}</span></h3>
                            <a class="btn mt-4 fw-bold fs-4 rounded-pill" href="#" role="button">Tambah <i
                                    class='bx bxs-cart-add'></i></a>
                        </div>
                    </div>
          `;
          document.querySelector('#bestseller').appendChild(itemElement);
        });

        
        this.makanan.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.className = 'item';
          itemElement.innerHTML = `
                        <div class="card">
                        <img src="./gambar/makanan/${item.img}" alt="">
                        <div class="card-body">
                            <h2 class="fs-5">${item.name}</h2>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the
                                card's
                                content.</p>
                            <h3>Rp ${item.price.toLocaleString('id-ID')} <span>Rp ${item.hargaasli.toLocaleString('id-ID')}</span></h3>
                            <a class="btn mt-4 fw-bold fs-4 rounded-pill" href="#" role="button">Tambah <i
                                    class='bx bxs-cart-add'></i></a>
                        </div>
                    </div>
          `;
          document.querySelector('#makanan').appendChild(itemElement);
        });

        this.minuman.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.className = 'item';
          itemElement.innerHTML = `
                <div class="item">
                    <div class="card">
                        <img src="./gambar/minuman/${item.img}" alt="">
                        <div class="card-body">
                            <h2 class="fs-5">${item.name}</h2>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the
                                card's
                                content.</p>
                            <h3>Rp ${item.price.toLocaleString('id-ID')} <span>Rp ${item.hargaasli.toLocaleString('id-ID')}</span></h3>
                            <a class="btn mt-4 fw-bold fs-4 rounded-pill" href="#" role="button">Tambah <i
                                    class='bx bxs-cart-add'></i></a>
                        </div>
                    </div>
          `;
          document.querySelector('#minuman').appendChild(itemElement);
        });

        this.paket.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.className = 'item';
          itemElement.innerHTML = `
               <div class="item">
                    <div class="card">
                        <img src="./gambar/${item.img}" alt="">
                        <div class="card-body">
                            <h2 class="fs-5">${item.name}</h2>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the
                                card's
                                content.</p>
                            <h3>Rp ${item.price.toLocaleString('id-ID')} <span>Rp ${item.hargaasli.toLocaleString('id-ID')}</span></h3>
                            <a class="btn mt-4 fw-bold fs-4 rounded-pill" href="#" role="button">Tambah <i
                                    class='bx bxs-cart-add'></i></a>
                        </div>
                    </div>
          `;
          document.querySelector('#paket').appendChild(itemElement);
        });

        // Initializing Owl Carousels
        $('#bestseller').owlCarousel({
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 2500,
          autoplayHoverPause: true,
          nav: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 3
            }
          }
        });
        $('#makanan').owlCarousel({
          loop: false,
          margin: 10,
          nav: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 3
            }
          }
        });
        $('#minuman').owlCarousel({
          loop: false,
          margin: 10,
          nav: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 3
            }
          }
        });

        $('#paket').owlCarousel({
          loop: false,
          margin: 10,
          nav: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 3
            }
          }
        });
      });
    }
  };
}
