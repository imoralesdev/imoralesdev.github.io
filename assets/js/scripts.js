const username = 'nixcko';
const blogSection = document.getElementById("blog-post");

const articles = fetch(`https://dev.to/api/articles?username=${username}`)
.then((res) => res.json())
.then((data) => {
  // Call a function to populate the blog cards with fetched data
  populateBlogCards(data);
  console.log(data)
})
.catch((err) => console.error("Error fetching articles:", err));

function populateBlogCards(articles) {
    let blogCardContainer = blogSection.querySelector(".blog-post__list");
  
    // If the container doesn't exist, create it
    if (!blogCardContainer) {
      blogCardContainer = document.createElement("ul");
      blogCardContainer.classList.add("blog-post__list");
      blogSection.appendChild(blogCardContainer);
    }
  
    // Clear existing content
    blogCardContainer.innerHTML = "";
  
    // Loop through each article and create blog card elements
    articles.forEach((article) => {
      const listItem = document.createElement("li");
      listItem.classList.add("blog-post__item");
  
      const cardLink = document.createElement("a");
      cardLink.href = article.url;
      cardLink.target = "_blank";
      cardLink.classList.add("blog-post__card");
      cardLink.innerHTML = `
        <h3 class="blog-post__name">${article.title}</h3>
        <p class="blog-post__description">
          ${article.description ? article.description : "No description available"}
        </p>
      `;
  
      listItem.appendChild(cardLink);
      blogCardContainer.appendChild(listItem);
    });
  }