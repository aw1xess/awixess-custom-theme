class CustomFeaturedProduct extends HTMLElement {
  connectedCallback() {
    this.render();
    this.querySelector(".custom-product__add-button").addEventListener("click", () => this.addToCart());
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

  async addToCart() {
    try {
      const response = await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [{ id: this.dataset.variantId, quantity: 1 }],
          sections: ["cart-notification-product", "cart-icon-bubble", this.dataset.sectionId],
        }),
      });

      const result = await response.json();

      document.getElementById("cart-notification-product").innerHTML = result.sections["cart-notification-product"];
      document.getElementById("cart-icon-bubble").innerHTML = result.sections["cart-icon-bubble"];
      document.getElementById("custom-featured-products").innerHTML = result.sections[this.dataset.sectionId];

      const cartNotification = document.querySelector("cart-notification");

      if (cartNotification) {
        cartNotification.open();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

customElements.define("custom-featured-product", CustomFeaturedProduct);
