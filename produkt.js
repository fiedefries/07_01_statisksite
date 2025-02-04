console.log("siden vises");
const productId = new URLSearchParams(window.location.search).get("id");
console.log("produktet", productId);
const produktContainer = document.querySelector(".produktContainer");
console.log("produktContainer:", produktContainer);

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())

  .then((showProducts); 
    
    function showProducts(product){
    const markup =  `
        <div class="produktside">
        <div>
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="badedragt" />
        </div>
        <div class="produkttekst">
          <h2>${product.productdisplayname}</h2>
          <p class="produktPrice"><span >Pris:</span> ${product.price},-</p>
          <p class="grey">${product.gender}</p>
          <p>This single piece swimsuit is perfect for recreational swimmers looking for a getaway from their home and office chores, in the club or in the cool neighbourhood pool.</p>
          <a href="produkt.html">ADD TO BAG</a>
        </div>
      </div> 
  `;

    produktContainer.innerHTML = markup;
  });
