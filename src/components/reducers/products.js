const initialState = [
  {
    id: 1,
    name: "Iphone 7 plus",
    image:
      "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    description: "Sản phẩm của apple",
    price: 500,
    inventory: 10,
    rating: 4,
  },
  {
    id: 2,
    name: "SamSung Galaxy",
    image:
      "https://img.global.news.samsung.com/vn/wp-content/uploads/2019/03/Galaxy-A50-Mat-truoc-3.jpg",
    description: "Sản phẩm của SamSung",
    price: 400,
    inventory: 10,
    rating: 5,
  },
  {
    id: 3,
    name: "Iphone 8 plus",
    image:
      "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    description: "Sản phẩm của apple",
    price: 600,
    inventory: 5,
    rating: 4,
  },
];

const product = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default product;
