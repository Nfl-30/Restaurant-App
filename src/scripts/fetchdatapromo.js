import data from '../DATAPROMOTION.json';
let html = "";
  data.voucher.forEach((promo) => {
    html += `
        <article class="voucher-item">
          <div class="flip-box-inner">
              <img class="voucher-item-thumbnail"
              src="${promo.pictureId}"
              alt="Gambar voucher restoran ${promo.name}, sebesar ${promo.nominal}, yang berkode ${promo.code}" 
              tabindex="0" 
              />
              <div class="voucher-item-content">
                <h1 class="voucher-item-title"><a href="#">Voucher ${promo.name} ${promo.nominal}</a></h1>
                <p class="voucher-item-description text-justify-interword" tabindex="0" >${promo.description}</p>
              </div>
              <div class="container-bottom-voucher">
                <p class="voucher-item-tag" tabindex="0" >
                Kode: <span class="voucher-item-code">${promo.code}</span>
                </p>
                <p class="voucher-item-tag" tabindex="0" >
                Expires:  <span class="voucher-item-expired">${promo.expired}</span>
                </p>
              </div>
          </div>
        </article>
    `;
    document.getElementById("vouchers").innerHTML = html;
  });