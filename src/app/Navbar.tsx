import Link from "next/link";

import logo from "@/assets/logo.png";
import Image from "next/image";
import { getCard } from "@/wix-api/card"


async function Navbar() {
  const cart = await getCard();

  const totalQuantity =
    cart?.lineItems.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;
  return (
    <header className="bg-background shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 p-5">
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} alt="Flow shop logo" width={40} height={40} />
          <span className="text-xl font-bold">Flow Shop</span>
        </Link>
        {totalQuantity} items in your cart
      </div>
    </header>
  );
}

export default Navbar;
