import data from '../DATA.json';
let html = "";
  data.restaurants.forEach((resto) => {
    html += `
        <article class="post-item">
          <img class="post-item-thumbnail"
            src="${resto.pictureId}"
            alt="Gambar suasana restoran ${resto.name} yang berada di ${resto.city}"
            tabindex="0"  
          />
          <div class="city">
            <p class="post-item-city" tabindex="0" >${resto.city}</p>
          </div>
          <div class="post-item-content">
            <p class="post-item-rating" tabindex="0" >
              Rating <span class="post-item-rating-value">${resto.rating}</span>
            </p>
            <h1 class="post-item-title"><a href="#">${resto.name}</a></h1>
            <p class="post-item-description text-justify-interword" tabindex="0" >${resto.description}</p>
          </div>
        </article>
    `;
    document.getElementById("posts").innerHTML = html;
  });