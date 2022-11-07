
import styles from "./index.module.scss";
import Header from "../Header";
import Contacts from "../Contacts";
import Footer from "../Footer";

const Main = () => {
    return (
        <div className={styles.background}>
            <Header />
            <Contacts />
            <Footer/>
        </div>
    )
}

export default Main