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
      <div className="fixed bottom-0 left-0 w-full bg-gray-300 p-4">
        <p>This website uses cookies. Do you accept?</p>
        <button
          onClick={handleAccept}
          className="mr-2 rounded bg-green-500 px-4 py-2 text-white"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          Reject
        </button>
      </div>
    )
  );
};

export default CookieBanner;
