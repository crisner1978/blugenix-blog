import { MouseEventHandler } from "react";

interface Props {
  description: string
  style_1: string
  style_2: string
  onClick: MouseEventHandler
}

const FreeButton = ({description, style_1, style_2, onClick}: Props) => {
  return (
    <div className={style_1}>
      <button className={style_2} onClick={onClick}>
        {description}
      </button>
    </div>
  );
};

export default FreeButton;
