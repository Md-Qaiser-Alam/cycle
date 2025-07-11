"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

// import * as rdd from "react-device-detect";

const clientsData = [
  {
    name: "Beacons",
    img: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f4526b13eef9d7404ab1bb_658315a8cc8cc05b4a90af40_BeaconsLogoBlack.svg",
  },
  {
    name: "Trovatrip",
    img: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f4522d3add29cae90e4b5a_logotrovatrip.svg",
  },
  {
    name: "TrustLayer",
    img: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f4564a3234c2812bb11618_trustlayer.png",
  },
  {
    name: "Zipline",
    img: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f45300ba094aade8aa1eaa_zipline.svg",
  },
  {
    name: "Strapi",
    img: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f453cadd0c46889122220c_Strapi.full.logo.dark.svg",
  },
  {
    name: "Choose",
    img: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65e7975fc6a080541d2222ee_choose-logo.svg",
  },
  {
    name: "MokaCare",
    img: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f455c6ba094aade8acbdd0_mokacare.svg",
  },
  {
    name: "Fabriq",
    img: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f451c5d51d114d00417a16_fabriq-logo.svg",
  },
  {
    name: "Noona",
    img: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f45761c185cb6eeacc38a6_noona.svg",
  },
  {
    name: "Meo",
    img: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f4534923e695f211db411f_meo.svg",
  },
  {
    name: "Passionfroot",
    img: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f44f9e6356e70fa620b49d_passionfroot.svg",
  },
  {
    name: "Noona",
    img: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f45761c185cb6eeacc38a6_noona.svg",
  },
];

export default function MarqueSection() {
  return (
    <div className="relative flex items-center flex-col gap-5 z-40">
      <h3
        className={
          "font-semibold text-[1rem] text-[#36363b] text-center text-xl flex flex-col gap-3"
        }
      >
        Loved by product folks at
      </h3>

      <div className="relative flex max-w-[100vw] overflow-hidden py-5 ">
        <Marquee>
          {[...clientsData].map((item, index) => (
            <div key={index} className="h-full px-4">
              <div className="flex justify-center items-center aspect-[162/112] p-2 border border-[#efefef] rounded-lg">
                <div
                  className={
                    "md:text-xl text-md text-center [font-family:var(--font-montserrat)] font-medium"
                  }
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={110}
                    height={110}
                    style={{ filter: "grayscale()" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
