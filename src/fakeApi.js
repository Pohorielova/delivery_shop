const db = {
  shops: [
    {
      href: 'shop_1',
      text: 'Shop_1',
    },
    {
      href: 'shop_2',
      text: 'Shop_2',
    },
    {
      href: 'shop_3',
      text: 'Shop_3',
    },
    {
      href: 'shop_4',
      text: 'Shop_4',
    },
  ],
  products: [
    { id: 208, price: 10, name: 'Cola', shop: 'shop_4' },
    { id: 290, price: 12, name: 'Fanta', shop: 'shop_4' },
    { id: 20, price: 25, name: 'Cake', shop: 'shop_3' },
    { id: 270, price: 96, name: 'Rose', shop: 'shop_2' },
    { id: 60, price: 56, name: 'Sandvich', shop: 'shop_1' },
    { id: 30, price: 216, name: 'Chicken', shop: 'shop_1' },
    { id: 8690, price: 166, name: 'Salad', shop: 'shop_1' },
    { id: 38520, price: 8, name: 'Carrot', shop: 'shop_1' },
  ],
};

export const getProducts = () => {
  return Promise.resolve(db.products);
};

export const getShops = () => {
  return Promise.resolve(db.shops);
};
