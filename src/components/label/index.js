import React from "react";
import PropTypes from "prop-types";
import { plural } from "../../utils";
import { cn as bem } from "@bem-react/classname";
import "./style.css";

function Label({ number, sum }) {
  const cn = bem("Label");
  return (
    <div className={cn()}>
      <p>
        В корзине:{" "}
        {number === 0 ? (
          <span className={cn("span")}>пyсто</span>
        ) : (
          <span className={cn("span")}>
            {number}{" "}
            {plural(number, {
              one: "товар",
              few: "товара",
              many: "товаров",
            })}{" "}
            / {sum} ₽
          </span>
        )}{" "}
      </p>
    </div>
  );
}

Label.propTypes = {
  number: PropTypes.number,
  sum: PropTypes.number,
};

export default React.memo(Label);
