const produktListe = document.querySelector(".produktliste");

const getString = window.location.search;
const getSearch = new URLSearchParams(getString);
const category = getSearch.get("category");

let gemData;
const filterSelecter = document.querySelector("#filter");
let filter = "all";

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=50`)
  .then((response) => response.json())
  .then((dataJSON) => {
    gemData = dataJSON;
    showList(gemData);
  });

function showList(data) {
  const filteredData = data.filter((product) => {
    if (filter === "all") {
      return true;
    } else if (filter === "saleLabel") {
      return product.discount;
    } else if (filter == "soldOutLabel") {
      return !product.soldout;
    }
  });
  const markup = filteredData

    .map(
      (product) => `
      <section class="box ${product.discount ? "OnSale" : ""}">
  <a href="produkt.html?id=${product.id}">
    <div class="image_container">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" 
           alt="${product.productdisplayname}" 
           style="${product.soldout ? "opacity: 0.4;" : ""}"/>

      <!-- UDSOLGT Label -->
       <span class="saleLabel ${product.discount && "saleOn_img"}">sale : ${product.discount} % </span>
          <span class="soldOutLabel ${product.soldout && "soldOut_img"}">Sold out</span>
    </div>
  </a>

  <p class="brand">${product.brandname}</p>
  <h2>${product.productdisplayname}</h2>
 <p>
  ${product.discount ? `<span class="dashed">${product.price},00 DKK</span> <span class="new-price">${(product.price * (1 - product.discount / 100)).toFixed(2)},00 DKK</span>` : `${product.price},00 DKK`}
</p>

  <a href="produkt.html?id=${product.id}" class="add_to_bag">
    <p>ADD TO BAG</p>
  </a>
</section>
      `
    )
    .join("");

  produktListe.innerHTML = markup;
}

filterSelecter.addEventListener("change", (event) => {
  filter = filterSelecter.value;
  console.log("filter", filter);
  showList(gemData);
});
