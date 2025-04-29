import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useTranslation } from 'react-i18next';

export function SiteCard() {

  return (
    <>
      <div className="mt-5 flex justify-center items-center" id="cheats">
        <span className="text-3xl font-semibold dark:text-white text-black">EXODUS: Domination</span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mx-4 sm:mx-0">

{/* BASIC - $30 */}
<div className="flex flex-col justify-between h-full p-6 rounded-lg bg-accent/25 text-black dark:text-white ring-2 shadow">
  <div>
    <h3 className="text-2xl font-bold mb-1">EXODUS Basic</h3>
    <p className="text-sm text-gray-500">Lifetime Access</p>
    <p className="text-lg font-semibold text-green-500 mb-2">$30</p>
    <ul className="space-y-2 text-sm text-gray-500">
      <li>✔ Standard Colorbot Aimbot</li>
      <li>✔ Customizable FOV/Sensivity</li>
      <li>✔ Lightweight and smooth performance</li>
      <li>✔ Easy to install and use</li>
    </ul>
    <p className="mt-4 text-xs text-muted-foreground">
      Built for solo grinders who want control, not handholding.
    </p>
  </div>
  <div className="mt-6">
    <Button size="lg" variant="ghost" className="w-full bg-accent/30 ring-2 ring-violet-300" asChild>
      <a href="http://t.me/send?start=IV2ah6ajr0Rb" target="_blank" rel="noopener noreferrer">
        <Icons.shoppingCart className="h-5 w-5 mr-2" /> Buy Now
      </a>
    </Button>
  </div>
</div>

{/* DOMINATOR - $50 (Most Popular) */}
<div className="relative flex flex-col justify-between h-full p-6 rounded-lg bg-accent/25 text-black dark:text-white ring-2 shadow">
  <span className="absolute -top-3 left-2 bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-bold">
  Best Value
  </span>
  <div>
    <h3 className="text-2xl font-bold mb-1">EXODUS Plus</h3>
    <p className="text-sm text-gray-500">Lifetime Access</p>
    <p className="text-lg font-semibold text-green-500 mb-2">$50</p>
    <ul className="space-y-2 text-sm text-gray-500">
      <li>✔ Advanced Colorbot Aimbot</li>
      <li>✔ Stream-safe setup</li>
      <li>✔ Improved performance and accuracy</li>
      <li>✔ Easy installation and user-friendly interface</li>
    </ul>
    <p className="mt-4 text-xs text-muted-foreground">
      Price goes up next drop. This is the one most people start with.
    </p>
  </div>
  <div className="mt-6">
    <Button size="lg" variant="ghost" className="w-full bg-accent/30 ring-2 ring-violet-300" asChild>
      <a href="http://t.me/send?start=IVciLFwsFKTO" target="_blank" rel="noopener noreferrer">
        <Icons.shoppingCart className="h-5 w-5 mr-2" /> Buy Now
      </a>
    </Button>
  </div>
</div>

{/* PRIVATE VIP - $90 */}
<div className="flex flex-col justify-between h-full p-6 rounded-lg bg-accent/25 text-black dark:text-white ring-2 shadow">
  <div>
    <h3 className="text-2xl font-bold mb-1">EXODUS Private</h3>
    <p className="text-sm text-gray-500">Lifetime Access</p>
    <p className="text-lg font-semibold text-green-500 mb-2">$90</p>
    <ul className="space-y-2 text-sm text-gray-500">
      <li>✔ Premium Colorbot Aimbot</li>
      <li>✔ Unlimited customization options</li>
      <li>✔ Top-tier performance and undetectability</li>
      <li>✔ Private, secure, and exclusive access</li>
    </ul>
    <p className="mt-4 text-xs text-muted-foreground">
      Only 10 slots per wave. You’re buying entry into the top 0.1%.
    </p>
  </div>
  <div className="mt-6">
    <Button size="lg" variant="ghost" className="w-full bg-accent/30 ring-2 ring-violet-300" asChild>
      <a href="http://t.me/send?start=IVjByl3Qgj4P" target="_blank" rel="noopener noreferrer">
        <Icons.shoppingCart className="h-5 w-5 mr-2" /> Buy Now
      </a>
    </Button>
  </div>
</div>

</div>
    </>
  );
}