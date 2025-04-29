import Link from "next/link"
import { siteConfig } from "@/config/site"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"
import { buttonVariants } from "../ui/button";
import { useTranslation } from 'react-i18next';

export function SiteHero() {
  const { t } = useTranslation();

  const textarray = [
    {
      text: "EXODUS: Domination",
      color: "text-red-500",
      src: "/cover-landing.gif"
    },
    {
      text: "Counter-Strike 1.3",
      color: "text-red-500",
      src: "/cover-landing.gif"
    },
    {
      text: "Counter-Strike 1.4",
      color: "text-red-500",
      src: "/cover-landing.gif"
    },
  ];

  const cheattags = [
    { text: "Undetected!" },
    { text: "Private Access" },
    { text: "Rank Booster" },
    { text: "Silent Aim" },
    { text: "Stream Safe" },
    { text: "Elite Delivery" },
  ];

  const [text, setText] = useState(textarray[0].text);
  const [color, setColor] = useState(textarray[0].color);
  const [src, setSrc] = useState(textarray[0].src);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="dark:bg-accent/25 relative overflow-hidden rounded-lg mt-5 bg-black/25 p-3 sm:p-10 mx-4 sm:mx-0">
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-full text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gray-900 truncate dark:text-white !z-10">
              {text}
            </h1>
            <p className="text-gray-600 dark:text-gray-500 my-6 text-sm">
              {t('cheats.description')}
            </p>

            <div className="flex flex-wrap gap-1">
              {cheattags.map((tag, index) => (
                <div key={index} className="bg-accent/25 dark:bg-accent rounded-full px-2 py-1 text-xs text-gray-600 dark:text-gray-200">
                  <Icons.hash className="h-3 w-3 inline-block mr-1" /> {tag.text}
                </div>
              ))}
            </div>

            {/* 🔥 Replace Buy Button with scarcity flex */}
            <p className="mt-4 text-xs font-bold text-red-500 uppercase tracking-wide">
              [5/15 SLOTS LEFT] — Once it’s gone, it’s gone.
            </p>
          </div>

          {/* 🔥 GIF instead of YouTube */}
          <div className="w-1/2 hidden md:block ml-10">
            <div className="w-[27rem] h-80 p-2 rounded-lg overflow-hidden border border-white/10">
              <img
                src="/cover-landing.gif"
                alt="EXODUS Cheat Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 h-64 -z-10 w-64 bg-accent/50 rounded-full -m-40 -mb-56 dark:bg-accent-dark"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 bg-accent/50 rounded-full -m-32 -mb-48 dark:bg-accent-dark"></div>
      </div>
    </>
  );
}
