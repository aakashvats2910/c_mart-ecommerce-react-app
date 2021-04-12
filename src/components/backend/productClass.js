class Product {
  constructor(
    name,
    category,
    description,
    price,
    discountPercentage,
    imageThousand,
    otherImages
  ) {
    this.name = name;
    this.category = category;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.imageThousand = imageThousand;
    this.otherImages = otherImages;
  }
}

export default Product;
