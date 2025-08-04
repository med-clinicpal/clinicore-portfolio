'use client'
import { useState, useEffect } from "react";

import LanguageSwitcher from "../components/LanguageSwitcher";


export default function Home({ pricingData, lang }) {







  return (

    <>
      <div className="w-full  flex p-[30px] bg-primary items-center">

        <LanguageSwitcher lang={lang} />
        <h1 className="text-4xl text-gold font-bold mx-[20px]">{lang == 'en' ? "Hello" : "مرحبًا"}</h1>
      </div>

    </>


  );
}
