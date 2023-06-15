import React from "react";
import appleLogo from "../../assets/logo/apple-logo.svg";
import googlePlayLogo from "../../assets/logo/googleplay-logo.svg";
import instagramLogo from "../../assets/logo/instagram.svg";
import telegramLogo from "../../assets/logo/telegram.svg";
import youtubeLogo from "../../assets/logo/youtube.svg";
import facebookLogo from "../../assets/logo/facebook.svg";

import "./Footer.css";

function Footer() {
  return (
    <div className="container footer">
      <div className="footer__top">
        <div className="block__1">
          <p className="fw-b">Biz haqimizda</p>
          <a href="#" className="footer__link mb-19">
            Topshirish punktlari
          </a>
          <a href="#" className="footer__link">
            Vakansiyalar
          </a>
        </div>
        <div className="block__2">
          <p className="fw-b">Foydalanuvchilarga</p>
          <a href="#" className="footer__link mb-19">
            Biz bilan bogʻlanish
          </a>
          <a href="#" className="footer__link">
            Savol-Javob
          </a>
        </div>
        <div className="block__3">
          <p className="fw-b">Tadbirkorlarga</p>
          <a href="#" className="footer__link mb-19">
            Uzumda soting
          </a>
          <a href="#" className="footer__link">
            Sotuvchi kabinetiga kirish
          </a>
        </div>
        <div className="block__4">
          <div className="block__4-top">
            <p className="fw-b">Ilovani yuklab olish</p>
            <a href="#" className="footer__link mb-19">
              <img src={appleLogo} alt="" />
              <p>AppStore</p>
            </a>
            <a href="#" className="footer__link">
              <img src={googlePlayLogo} alt="" />
              <p>Google Play</p>
            </a>
          </div>
          <div className="block__4-bottom">
            <p className="fw-b">Uzum ijtimoiy tarmoqlarda</p>
            <div className="block__4-bottom-links">
              <a href="https://www.instagram.com/uzum.market/" target="__blank">
                <img src={instagramLogo} alt="Instagram Logo" />
              </a>
              <a href="https://t.me/uzum_market" target="__blank">
                <img src={telegramLogo} alt="Telegram Logo" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA"
                target="__blank"
              >
                <img src={youtubeLogo} alt="Youtube Logo" />
              </a>
              <a href="https://www.facebook.com/uzummarket" target="__blank">
                <img src={facebookLogo} alt="Facebook Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-links">
          <a href="#" className="fw-b">
            Соглашение о конфиденциальности
          </a>
          <a href="#" className="fw-b">
            Пользовательское соглашение
          </a>
        </div>
        <p>
          «2023&copy; ИП ООО «UZUM MARKET». ИНН 309376127. Все права защищены»
        </p>
      </div>
    </div>
  );
}

export default Footer;
