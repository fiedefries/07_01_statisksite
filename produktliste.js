const produktListe = document.querySelector(".produktliste");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";

  products
    .map((product) => {
      markup += `
       
        <div class="box">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="dame med badedragt" />
          <h3>${product.productdisplayname}</h3>
          <p class="grey">Swimwear</p>
          <p>${product.price}</p>
          <a href="produkt.html">Add to bag</a>
        </div>
      `;
    })
    .join("");
  console.log(markup);
  produktListe.innerHTML = markup;
}
