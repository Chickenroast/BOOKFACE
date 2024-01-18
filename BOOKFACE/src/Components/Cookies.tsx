import React, { useState } from "react";
import { getCookie, setCookie, removeCookie } from "typescript-cookie";

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(!getCookie("cookieConsent"));

  const handleAccept = () => {
    setCookie("cookieConsent", "accepted", { expires: 365 });
    setShowBanner(false);
  };

  const handleReject = () => {
    // Supprimer tous les cookies, par exemple, si l'utilisateur rejette les cookies.
    // Notez que c'est une approche simplifiée et pourrait ne pas être adaptée à toutes les situations.
    // Vous voudrez peut-être supprimer uniquement certains cookies.
    removeCookie("cookieConsent");
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="absolute top-[40%] mx-5 flex h-[30%] w-[100] flex-col rounded-xl bg-beiged p-4 shadow-md md:top-[60%] md:h-[23%] md:w-[45%]">
        <img
          src="cookie.svg"
          alt=""
          className="bounce-slow absolute mr-[-10%] mt-[-30%] w-36 self-end md:mr-5 md:w-2/4 lg:ml-2"
        />
        <div className="mb-2 mt-[15%] lg:mt-2">
          <p className="font-quicksand text-xl ">This website uses cookies.</p>
          <p className="ml-1 font-quicksand text-brownl">
            Do you want cookies in your coffee ?
          </p>
        </div>
        <div className="mt-3">
          <button
            onClick={handleAccept}
            className="mr-3 rounded-xl bg-brownl px-4 py-2 text-white hover:bg-brownd"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className=" rounded-xl bg-brownl px-4 py-2 text-white hover:bg-brownd"
          >
            Reject
          </button>
          <div className="absolute bottom-0 left-0 h-[20%] w-full rounded-b-xl bg-brownl"></div>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
