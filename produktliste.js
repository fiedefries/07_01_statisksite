const listContainer

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));
console.log("Hentet data:", data);
  
function showList(products){
console.log(products);
productContainer.map((product) => {

    '<h2>Sporting goods</h2>
      <div class="produktliste">
        <div class="box">
          <div class="imgcontainer">
            <img src="badehætte2.webp" alt="dame mad badehætte" />
            <p class="soldout">sold out</p>
          </div>
          <h3>Unisex Black Silicone Swimming Cap</h3>
          <p class="grey">Swimwear</p>
          <p>119</p>
          <a href="produkt.html">Add to bag</a>
        </div>
        <div class="box">
          <img src="badehætte.webp" alt="dame med badehætte" />
          <h3>Unisex Black Silicone Swimming Cap</h3>
          <p class="grey">Swimwear</p>
          <p>119</p>
          <a href="produkt.html">Add to bag</a>
        </div>
        <div class="box">
          <img src="badedragt.webp" alt="dame med badedragt" />
          <h3>Omen Cross-back Swimsuit</h3>
          <p class="grey">Swimwear</p>
          <p>999</p>
          <a href="produkt.html">Add to bag</a>
        </div>
        <div class="box">
          <img src="badebukser.webp" alt="billede af badedragt" />
          <h3>Training shorts</h3>
          <p class="grey">Bottomwear</p>
          <p>999</p>
          <a href="produkt.html">Add to bag</a>
        </div>
        <div class="box">
          <img src="badehætte2.webp" alt="dame mad badehætte" />
          <h3>Unisex Black Silicone Swimming Cap</h3>
          <p class="grey">Swimwear</p>
          <p>119</p>
          <a href="produkt.html">Add to bag</a>
        </div>
        <div class="box">
          <img src="badehætte.webp" alt="dame med badehætte" />
          <h3>Unisex Black Silicone Swimming Cap</h3>
          <p class="grey">Swimwear</p>
          <p>119</p>
          <a href="produkt.html">Add to bag</a>
        </div>
        <div class="box">
          <img src="badedragt.webp" alt="dame med badedragt" />
          <h3>Omen Cross-back Swimsuit</h3>
          <p class="grey">Swimwear</p>
          <p>999</p>
          <a href="produkt.html">Add to bag</a>
        </div>
        <div class="box">
          <img src="badebukser.webp" alt="billede af badedragt" />
          <h3>Training shorts</h3>
          <p class="grey">Bottomwear</p>
          <p>999</p>
          <a href="produkt.html">Add to bag</a>
        </div>
      </div>'
});
  }
    
