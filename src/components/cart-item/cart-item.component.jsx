import React from 'react';

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailContainer,
  CartItemName,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailContainer>
      <CartItemName className="name">{name}</CartItemName>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailContainer>
  </CartItemContainer>
);

export default CartItem;
