import { useEffect, useRef } from "react";
import styles from "./Navbar.module.scss";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { BsChatRightDots } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";



export default function Navbar(){
  return(
    <div className={styles.NavbarContainer}>
        <AiFillHome />
        <FaSearch />
        <div className={styles.PlusButtonContainer}>
            <div className={styles.PlusButtonLeft}></div>
            <div className={styles.PlusButtonCenter}>
                <FaPlus className={styles.Plus}/>
            </div>
            <div className={styles.PlusButtonRight}></div>
        </div>
        <BsChatRightDots />
        <LuUser2 />
    </div>
  );
}
