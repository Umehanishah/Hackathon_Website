import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Navigation() {
    return ( 
        <section>
           <div className="lg:w[1920] h[full]">
             
             
                {/* header */}
                <div className="lg:flex lg:w[1321] lg:h[32] mx-10 lg:mx-52 bg-gray-100 rounded-3xl pt-1 pb-1 items-center justify-around lg:px-10 py-20">
                  
                    <div>
                    <p className="text-gray-600 rounded-md pt-10 text-xs font-light px-5 md:px-0">
                            WELCOME TO CHAIRY
                    </p>
                    <p className="font-semibold text-3xl md:text-4xl lg:text-5xl pt-5 px-5 md:px-0">
                        Best Furniture Collection For Your Interior.
                    </p>
                    <Button className="flex bg-teal-500 mt-5 mx-5 md:mx-0">
                        <Link href="/shop">
                        Shop Now </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                        </Button>
                        </div>


                    <div>
                        <Image src="/img-1.png" alt="chair" width={434} height={584} className="py-10 px-20 md:px-0"/>
                     </div>

            </div>

            </div>
        </section>
    )
}