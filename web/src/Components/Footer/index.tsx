import styles from "./index.module.scss";

import { ReactComponent as FacebookIcon } from "../../Images/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../Images/instagram.svg";
import { ReactComponent as TelegramIcon } from "../../Images/telegram.svg";
import { ReactComponent as TwitterIcon } from "../../Images/twitter.svg";
import { ReactComponent as VkontakteIcon } from "../../Images/vkontakte.svg";

const Footer = () => {

  return (
    <div className={styles.main}>
      <a href={"https://ru-ru.facebook.com/"}><FacebookIcon className={styles.icon} /></a>
      <a href={"https://www.instagram.com//"}><InstagramIcon className={styles.icon} /></a>
      <a href={"https://telegram.org/"}> <TelegramIcon className={styles.icon} /></a>
      <a href={"https://twitter.com/?lang=en"}> <TwitterIcon className={styles.icon} /></a>
      <a href={"https://vk.com/"}><VkontakteIcon className={styles.icon} /></a>
    </div>
  )
}

export default Footer