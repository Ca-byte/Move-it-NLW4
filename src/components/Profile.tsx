import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
    const { level } = useContext(ChallengesContext);


    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Ca-byte.png" alt="Caroline Vieira"/>
            <div>
              <strong>Caroline Vieira</strong>
              <p>
                 <img src="icons/level.svg" alt="Level"/> 
                  level {level}
                </p>
            </div>
        </div>   
    );
}