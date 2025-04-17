import { useTranslation } from "react-i18next"
import { Icons } from "@/components/icons"
import { useRouter } from "next/router"

export const siteConfig = {
  name: "EXODUS",
  discord: {
    Id: "243101949606625281",
  },
  mainNav: [
    {
      title: "Homepage",
      trans: "navbar.home",
      href: "/",
    },
    {
      title: "Buy Cheats",
      trans: "navbar.cheats",
      href: "#cheats",
    },
    {
      title: "Discord",
      trans: "navbar.discord",
      href: "https://discord.gg/BBuqvE73",
    }
  
  ],
  links: {
    discord: "https://discord.gg/BBuqvE73",
  },
}
