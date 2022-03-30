import React from "react";
import styles from "./InviteModal.module.css";
import Button from "../Button";
import FormInput from "../FormInput";
import Modal from "../Modal";

type Props = {
  show: boolean;
  onClose: () => void;
};

const InviteModal: React.FC<Props> = ({ show, onClose }) => {
  return (
    <Modal title="Einladen" show={show} onClose={onClose}>
      <div className={styles.container}>
        <FormInput
          id="invite-link"
          name="link"
          type="text"
          placeholder="Some Text"
          value="Some Text"
          disabled={true}
        />
        <Button
          onClick={() => {
            let text: HTMLInputElement = document.querySelector("input[type='text']#invite-link")!;
            text.select();
            navigator.clipboard.writeText(text.value);
            onClose();
          }}
        >
          Kopieren
        </Button>
      </div>
    </Modal>
  );
};

export default InviteModal;
