import styles from "../project/ProjectCard.module.css";

import {BsFillTrashFill} from 'react-icons/bs'

import { useState, useEffect } from "react";

function ServiceCard({ id, name, cost, description, handleRemove }) {

    const [message, setMessage] = useState();

    const remove = (e) => {
        //setMessage("")

        e.preventDefault()
        handleRemove(id, cost)
    }

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo do serviço:</span> R${cost}
      </p>
      <p>{description}</p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
            <BsFillTrashFill />
            Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
