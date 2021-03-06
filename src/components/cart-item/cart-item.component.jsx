import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-price">
          {quantity} &times; ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
