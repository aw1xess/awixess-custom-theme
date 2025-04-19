class CustomFeaturedProduct extends HTMLElement {
  connectedCallback() {
    this.render();
    this.querySelector(".custom-product__add-button");
  }

  render() {
    const wrapper = document.createElement("article");
    wrapper.setAttribute("class", "custom-product");

    const productLink = document.createElement("a");
    productLink.setAttribute("class", "custom-product__link");
    productLink.setAttribute("href", this.dataset.url);

    const productImage = document.createElement("img");
    productImage.setAttribute("class", "custom-product__image");
    productImage.setAttribute("src", this.dataset.image);
    productImage.setAttribute("alt", this.dataset.image);

    const productTitle = document.createElement("h3");
    productTitle.setAttribute("class", "custom-product__title");
    productTitle.textContent = this.dataset.title;

    const productAddButton = document.createElement("button");
    productAddButton.setAttribute("class", "custom-product__add-button");
    productAddButton.setAttribute("type", "button");
    productAddButton.textContent = `Add to cart – ${this.dataset.price}`;

    wrapper.append(productLink, productAddButton);
    productLink.append(productImage, productTitle);

    this.appendChild(wrapper);
  }
}

customElements.define("custom-featured-product", CustomFeaturedProduct);
