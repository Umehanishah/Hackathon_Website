import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from "next/link";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {Menu} from "lucide-react";

export default function Navigation() {
    return ( 
        <section>
            <div className="w[1920] h[full]">

                {/* headline */}
                <div className="flex w[1321] h[32] bg-indigo-950 pt-1 pb-1 items-center justify-around">
                    <p className="flex gap-2 text-gray-300 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Free Shipping On All Orders OVer $50
                    </p>
                    <div className="hidden md:block">
                        <div className="flex gap-5 items-center">
                    <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-white text-xs font-thin">Eng</AccordionTrigger>
                    <AccordionContent className="text-white hover:bg-white hover:text-black text-center hover:rounded-md pt-0 md:pt-1 lg:pt-2 text-xs">
                    Urdu
                    </AccordionContent>
                    <AccordionContent className="text-white hover:bg-white hover:text-black text-center hover:rounded-md pt-0 md:pt-1 lg:pt-2 text-xs">
                    French
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
                
                <p className="text-white font-thin text-xs">
                    <Link href="/faqs">Faqs</Link></p>
                <p className="flex gap-2 items-center text-white font-thin text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <Link href="/help"> Need Help</Link></p>
                </div>
                </div>

                <Sheet>
<SheetTrigger className="lg:hidden">
<Menu/>
</SheetTrigger>
<SheetContent>
<div className="pt-10">
    <form className="max-w-md mx-auto">   
    <label form="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search..." required />
        </div>
        </form>
        </div>

        
        <div className="items-center pt-5">
                    <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-black pt-3 text-xs">Eng</AccordionTrigger>
                    <AccordionContent className=" text-black hover:bg-teal-500 hover:text-black text-center hover:rounded-md pt-3 md:pt-1 lg:pt-2 text-xs">
                    Urdu
                    </AccordionContent>
                    <AccordionContent className="text-black hover:bg-teal-500 hover:text-black text-center hover:rounded-md pt-3 md:pt-1 lg:pt-2 text-xs">
                    French
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
                
                <p className="text-black pt-5 text-xs">
                    <Link href="/faqs">Faqs</Link></p>
                <p className="flex gap-2 items-center text-black pt-5 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <Link href="/contact"> Need Help</Link></p>
                </div>
</SheetContent>
</Sheet>

                </div>


            {/* logo */}
                <div className="flex gap-20 md:gap-40 w[1920] h[84] bg-gray-100 pt-1 pb-1 items-center justify-around">
                    <div className="py-4 opacity-70 mx-10 md:mx-0">
                        <Image src="/logo.png" alt="logo" width={166} height={40}/>
                    </div>

                    <div className="flex gap-2 bg-gray-50 px-5 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    <p className="pt-2 lg:pt-0 text-xs lg:text-base">
                        <Link href="/cart">Cart</Link></p>
                    <p className="bg-teal-600 rounded-full px-2 text-white">2</p>
                    </div>
                </div>


                {/* nav bar  */}
                    <div className="w[1920] h[84] pt-5 pb-5 items-center justify-around">
                        <div className="hidden lg:block">
                            <div className="flex gap-5 justify-between mx-48">

                        <ul className="flex gap-5">
                            <li className="text-sm text-gray-500 hover:text-teal-800 hover:font-semibold">
                                <Link href="/">Home</Link>
                                </li>
                            <li className="text-sm text-gray-500 hover:text-teal-800 hover:font-semibold">
                            <Link href="/shop">Shop</Link>
                            </li>
                            <li className="text-sm text-gray-500 hover:text-teal-800 hover:font-semibold">
                            <Link href="/products">Products</Link>
                            </li>
                            <li className="text-sm text-gray-500 hover:text-teal-800 hover:font-semibold">
                            <Link href="/pages">Pages</Link>
                            </li>
                            <li className="text-sm text-gray-500 hover:text-teal-800 hover:font-semibold">
                            <Link href="/about">About</Link>
                            </li>
                        </ul>
                       

                        <div>
                            <p className="text-sm text-gray-500">
                                 <Link href="/contact"> Contact: 
                            <span className="text-black px-2">
                                (808) 555-0111
                            </span></Link></p>
                        </div>
                    </div>
                    </div>
                    </div>
            </div>
       

<Sheet>
<SheetTrigger className="lg:hidden px-10">
<Menu/>
</SheetTrigger>
<SheetContent>
<div className="pt-5">
    <form className="max-w-md mx-auto">   
    <label form="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search..." required />
        </div>
        </form>
        </div>

        
         <ul className="pt-10">
                            <li className="text-sm text-gray-500 hover:text-teal-800 hover:font-semibold">
                                <Link href="/">Home</Link>
                                </li>
                            <li className="pt-3 text-sm text-gray-500 hover:text-teal-800 hover:font-semibold">
                            <Link href="/shop">Shop</Link>
                            </li>
                            <li className="pt-3 text-sm text-gray-500 hover:text-teal-800 hover:font-semibold">
                            <Link href="/products">Products</Link>
                            </li>
                            <li className="pt-3 text-sm text-gray-500 hover:text-teal-800 hover:font-semibold">
                            <Link href="/pages">Pages</Link>
                            </li>
                            <li className="pt-3 text-sm text-gray-500 hover:text-teal-800 hover:font-semibold">
                            <Link href="/about">About</Link>
                            </li>
                        </ul>

                        <div>
                            <p className="pt-3 text-sm text-gray-500">
                                 <Link href="/contact"> Contact: 
                            <span className="text-black px-2">
                                (808) 555-0111
                            </span></Link></p>
                        </div>
    
</SheetContent>
</Sheet>
<hr/>
</section>

    );
}