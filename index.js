console.log("siden vises", document);

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(data) {
  console.log("mine data er", data);
  const markup = data
    .map(
      (element) => `
<a href="produktliste.html?category=${element.category}"> ${element.category} </a>
  `
    )
    .join("");
  console.log("min markup er", markup);
  document.querySelector(".category_list_container").innerHTML = markup;
}
