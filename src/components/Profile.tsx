import styles from "../styles/components/Profile.module.css";

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Ca-byte.png" alt="Caroline Vieira"/>
            <div>
              <strong>Caroline Vieira</strong>
              <p>
                 <img src="icons/level.svg" alt="Level"/> 
                  level 1
                </p>
            </div>
        </div>   
    );
}