import React from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";
import "./style.css";
import Head from "../head";
import Controls from "../controls";
import Item from "../item";
import { countTotalPrice } from "../../utils";

function Cart({ onClose, cart, onDeleteCartItem }) {
  const cn = bem("Cart");
  const callbacks = {
    onDeleteItem: (item) => {
      onDeleteCartItem(item);
    },
  };
  return (
    <div className={cn()}>
      <div className={cn("window")}>
        <div className={cn("row")}>
          <Head title="Корзина" />
          <Controls actionFunc={onClose} title="Закрыть" />
        </div>
        {cart.length ? (
          <div className={cn("body")}>
            {cart.map((item) => (
              <div key={item.code} className={cn("item")}>
                <Item
                  item={item}
                  onClickButton={callbacks.onDeleteItem}
                  textButton="Удалить"
                />
              </div>
            ))}
            <div className={cn("result")}>
              {" "}
              Итого: <p className={cn("sum")}>{countTotalPrice(cart)} ₽</p>
            </div>
          </div>
        ) : (
          <h3>Корзина пyста</h3>
        )}
      </div>
      <div className="overlay"></div>
    </div>
  );
}
Cart.propTypes = {
  onClose: PropTypes.func,
  onDeleteCartItem: PropTypes.func,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    })
  ).isRequired,
};

Cart.defaultProps = {
  onClose: () => {},
  onDeleteCartItem: () => {},
};
export default React.memo(Cart);
