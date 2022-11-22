import React, { useState } from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle, AiFillLinkedin } from "react-icons/ai";
import { FaDog, FaGithubSquare } from "react-icons/fa";

const ourTeamContent = [
  {
    name: "Robert Kaniuth",
    linkLI: "https://www.linkedin.com/",
    linkGH: "https://github.com/RobertKaniuth",
  },
  {
    name: "Ahmed Elbehary",
    linkLI: "https://www.linkedin.com/",
    linkGH: "https://github.com/elbehary01",
  },
  {
    name: "Valeria Kurylko",
    linkLI: "https://www.linkedin.com/",
    linkGH: "https://github.com/kurylko",
  },
  {
    name: "Vladyslava Klovak",
    linkLI: "https://www.linkedin.com/in/vladyslavaklovak",
    linkGH: "https://github.com/vladka-kl",
  },
];

export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Link onClick={toggleModal} className={styles.btnModal}>
        Our Team
      </Link>
      {modal && (
        <div className={modal ? styles.activeModal : styles.closeModal}>
          <div className={styles.overlay}></div>
          <div className={styles.modalContent}>
            {ourTeamContent.map((person, i) => {
              return (
                <div className={styles.prCard}>
                  <i>
                    <FaDog size="24" className={styles.iconDog} />
                  </i>
                  <h3 key={i}>{person.name}</h3>
                  <div className={styles.links}>
                    <a
                      className={styles.iconPersonal}
                      href={person.linkLI}
                      target="_blank"
                    >
                      <i>
                        <AiFillLinkedin
                          size="24"
                          classname={styles.iconPersonal}
                        />
                      </i>
                    </a>
                    <a
                      className={styles.iconPersonal}
                      href={person.linkGH}
                      target="_blank"
                    >
                      <i>
                        <FaGithubSquare
                          size="24"
                          classname={styles.iconPersonal}
                        />
                      </i>
                    </a>
                  </div>
                </div>
              );
            })}

            <button onClick={toggleModal} className={styles.btnModal}>
              <span classname={styles.iconClose}>
                <AiOutlineCloseCircle />
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
