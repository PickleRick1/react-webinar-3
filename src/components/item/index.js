import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Controls from "../controls";
import { cn as bem } from "@bem-react/classname";
function Item({ onClickButton, item, textButton }) {
  const callbacks = {
    onAction: (item) => {
      onClickButton(item);
    },
  };
  const cn = bem("Item");
  return (
    <div className={cn()}>
      <div className={cn("code")}>{item.code}</div>
      <div className={cn("title")}>{item.title}</div>
      <div className={cn("price")}>
        {item.price}&nbsp;<span>₽</span>
      </div>
      {item.count ? (
        <p className={cn("count")}>
          {item.count}&nbsp;<span>шт</span>
        </p>
      ) : null}
      <Controls
        actionFunc={() => callbacks.onAction(item)}
        title={textButton}
      ></Controls>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number,
  }).isRequired,
  onClickButton: PropTypes.func,
};

Item.defaultProps = {
  onClickButton: () => {},
};

export default React.memo(Item);
