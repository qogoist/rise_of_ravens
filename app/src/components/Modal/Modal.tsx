import React, { useEffect, useRef } from "react";
import { FocusOn } from "react-focus-on";
import Button from "../Button";
import Card from "../Card";
import CloseIcon from "../CloseIcon";
import styles from "./Modal.module.css";

type Props = {
  className?: string;
  title?: string;
  show: boolean;
  onClose: () => void;
};

const name: React.FC<Props> = ({ children, show, title = "", onClose, className }) => {
  return (
    <div className={styles.backdrop} data-show={show}>
      <FocusOn enabled={show} onEscapeKey={onClose} onClickOutside={onClose}>
        <Card className={`${styles.modal} ${className ? className : ""}`} type="lighter">
          <h3>{title}</h3>
          <Button btnType="link" onClick={onClose}>
            <CloseIcon />
          </Button>
          <div className={styles.content}>{children}</div>
        </Card>
      </FocusOn>
    </div>
  );
};

export default name;
