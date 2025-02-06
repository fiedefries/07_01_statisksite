const productId = new URLSearchParams(window.location.search).get("id");
const produktContainer = document.querySelector(".produktContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    produktContainer.innerHTML = `
       
    <div class="image_container ${data.soldout ? "soldOut" : ""}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="produkt" />
           <span class="saleLabel ${data.discount && "saleOn_product"}">sale : ${data.discount} % </span>
          <span class="soldOutLabel ${data.soldout && "soldOut_product"}">Sold out</span>
          </div>
        <div class="produkttekst">
       <h2 class="product-title">${data.productdisplayname}</h2>
        
          
          <h4 class="brand"> ${data.brandname}</h4>
          <h4 class="produktPrice">
  <span>Pris:</span> 
  ${data.discount ? `<span class="dashed">${data.price},-</span> <span class="new-price">${(data.price * (1 - data.discount / 100)).toFixed(2)},-</span>` : `${data.price},-`}
</h4>
           
              <div class="size_container">
         <label for="size">Vælg en størrelse:</label>
      <select name="size" id="size">
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
      </select>
      </div>

       <button class="add-to-bag" ${data.soldout ? "disabled" : ""}>ADD TO BAG</button>
          </div>
            
       
          </div>
         
  
      
  `;
  });
