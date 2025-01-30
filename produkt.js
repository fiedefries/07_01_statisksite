const produktContainer = document.querySelector(".produktContainer");
console.log("produktContainer:", produktContainer);
const id = 1580;
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("Hentet data:", data);
    produktContainer.innerHTML = `
    <div class="produktside">
        <div>
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="badedragt" />
        </div>
        <div class="produkttekst">
          <h2>omen Cross-back Swimsuit</h2>
          <p class="produktPrice"><span >Pris:</span> ${data.price},-</p>
          <p class="grey">${data.gender}</p>
          <p>This single piece swimsuit is perfect for recreational swimmers looking for a getaway from their home and office chores, in the club or in the cool neighbourhood pool.</p>
          <a href="produkt.html">ADD TO BAG</a>
        </div>
      </div> 
      `;
  });
