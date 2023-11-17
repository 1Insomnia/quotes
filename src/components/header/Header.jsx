import React from "react";
import headerImg from "./header.jpg";

function Header() {
  return (
    <div>
      <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-center">
        Sois toi même pour réussir
      </h2>
      <img src={headerImg} alt="Header" className="w-full pt-12" />
      <p className="text-xs md:text-2xl pt-5">
        Ce site à pour but de t’aider à avancer dans la vie, franchir les
        obstacles, te surpasser, pour réussir et vivre heureux. Chaque citation
        proposée te permettra de construire ta feuille de route
      </p>
    </div>
  );
}

export default Header;
