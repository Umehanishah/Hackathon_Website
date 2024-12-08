import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"


export default function Products(){
  return(
    <div>
      <Navigation/>

      <section>
            <div className="w[1920] h[full]">

                    <div className="w[1321px] h[44] items-center pt-10 mx-10 sm:mx-20 md:mx-32 lg:mx-40">
                    <h2 className="text-xl font-semibold pl-10">All Products</h2>
                    </div>
                

            <div className="w[1321px] h[139] pt-5 pb-20 px-10 sm:px-20 md:px32 lg:px-48">
              <div className="hidden md:block">
              <div className="grid grid-cols-4 gap-5 pt-5">
                <div>
                <Image src="/img-2.png" alt="img" width={200} height={200}/>
                <div className="flex justify-between px-2">
                    <p className="text-xs text-teal-700 pt-2"><Link href="/item">Library Steel chair</Link><br/>
                    <span className="text-xs pt-2 pb-2">$20</span></p>
                    <Link href="/cart" className="pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </Link></div>
                    </div>
                    
                    <div>
                <Image src="/img-3.png" alt="img" width={200} height={200}/>
                <div className="flex justify-between px-2">
                    <p className="text-xs text-teal-700 pt-2"><Link href="/item">Library Steel chair</Link><br/>
                    <span className="text-xs pt-2 pb-2">$20</span> 
                    <span className="text-gray-300 pl-2">$30</span></p>
                    <Link href="/cart" className="pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </Link></div>
                    </div>

                    <div>
                <Image src="/img-4.png" alt="img" width={200} height={200}/>
                <div className="flex justify-between px-2">
                    <p className="text-xs text-teal-700 pt-2"><Link href="/item">Library Steel chair</Link><br/>
                    <span className="text-xs pt-2 pb-2">$20</span></p>
                    <Link href="/cart" className="pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                   </Link></div>
                    </div>

                    <div>
                <Image src="/img-5.png" alt="img" width={200} height={200}/>
                <div className="flex justify-between px-2">
                    <p className="text-xs text-teal-700 pt-2"><Link href="/item">Library Steel chair</Link><br/>
                    <span className="text-xs pt-2 pb-2">$20</span></p>
                    <Link href="/cart" className="pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </Link></div>
                    </div>

                <div className="pt-5">
                <Image src="/img-6.png" alt="img" width={200} height={200}/>
                <div className="flex justify-between px-2">
                    <p className="text-xs text-teal-700 pt-2"><Link href="/item">Library Steel chair</Link><br/>
                    <span className="text-xs pt-2 pb-2">$20</span></p>
                    <Link href="/cart" className="pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </Link></div>
                    </div>
                    
                    <div className="pt-5">
                <Image src="/img-10.png" alt="img" width={200} height={200}/>
                <div className="flex justify-between px-2">
                    <p className="text-xs text-teal-700 pt-2"><Link href="/item">Library Steel chair</Link><br/>
                    <span className="text-xs pt-2 pb-2">$20</span> 
                    <span className="text-gray-300 pl-2">$30</span></p>
                    <Link href="/cart" className="pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </Link></div>
                    </div>

                    <div className="pt-5">
                <Image src="/img-12.png" alt="img" width={200} height={200}/>
                <div className="flex justify-between px-2">
                    <p className="text-xs text-teal-700 pt-2"><Link href="/item">Library Steel chair</Link><br/>
                    <span className="text-xs pt-2 pb-2">$20</span></p>
                    <Link href="/cart" className="pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                   </Link></div>
                    </div>

                    <div className="pt-5">
                <Image src="/img-5.png" alt="img" width={200} height={200}/>
                <div className="flex justify-between px-2">
                    <p className="text-xs text-teal-700 pt-2"><Link href="/item">Library Steel chair</Link><br/>
                    <span className="text-xs pt-2 pb-2">$20</span></p>
                    <Link href="/cart" className="pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </Link></div>
                    </div>

                    <div className="pt-5">
                <Image src="/img-6.png" alt="img" width={200} height={200}/>
                <div className="flex justify-between px-2">
                    <p className="text-xs text-teal-700 pt-2"><Link href="/item">Library Steel chair</Link><br/>
                    <span className="text-xs pt-2 pb-2">$20</span></p>
                    <Link href="/cart" className="pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </Link></div>
                    </div>

                    <div className="pt-5">
                <Image src="/img-3.png" alt="img" width={200} height={200}/>
                <div className="flex justify-between px-2">
                    <p className="text-xs text-teal-700 pt-2"><Link href="/item">Library Steel chair</Link><br/>
                    <span className="text-xs pt-2 pb-2">$20</span></p>
                    <Link href="/cart" className="pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </Link></div>
                    </div>

                    <div className="pt-5">
                <Image src="/img-4.png" alt="img" width={200} height={200}/>
                <div className="flex justify-between px-2">
                    <p className="text-xs text-teal-700 pt-2"><Link href="/item">Library Steel chair</Link><br/>
                    <span className="text-xs pt-2 pb-2">$20</span></p>
                    <Link href="/cart" className="pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </Link></div>
                    </div>

                    <div className="pt-5">
                <Image src="/img-8.png" alt="img" width={200} height={200}/>
                <div className="flex justify-between px-2">
                    <p className="text-xs text-teal-700 pt-2"><Link href="/item">Library Steel chair</Link><br/>
                    <span className="text-xs pt-2 pb-2">$20</span></p>
                    <Link href="/cart" className="pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </Link></div>
                    </div>
                    
                    </div>
              </div>
             
          
          
           <div className="block md:hidden px-10">
            <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full"
        >
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex p-1 bg-transparent border-none">
                    <Image 
                        src={`/img-${index + 2}.png`} 
                        alt={`Image ${index + 1}`} 
                        width={500} 
                        height={100} 
                        
                      />  
                    </CardContent>
                  <div className="flex justify-between px-2">
                    <div>
                    <p className="text-xs text-teal-700 pt-2"><Link href="/item">Library Steel chair</Link></p>
                    <p className="text-xs pt-2 pb-2">$20</p>
                    </div>
                    <div className="items-center pt-4">
                      <Link href="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart bg-teal-600 hover:bg-black rounded-sm p-1"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </Link></div>
            </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>

      </div>

            </div>
        </section>
 
          {/* Subscribe */}
              <section>
                <div className="w[1920] h[full] bg-gray-100">
                        <div className="w[1924] h[754] text-center items-center pt-10 pb-10 mx-10 sm:mx-20 md:mx-32 lg:mx-40">
                        <h2 className="text-xl md:text-2xl font-semibold">
                          Or Subscribe To The Newsletter
                        </h2>

                        <div className="flex gap-3">
                                <Input type="email" placeholder="Email Address..." className="mt-3 text-xs"/>
                                <Button className="bg-transparent text-black hover:bg-teal-500 hover:text-white mt-3">Submit</Button>
                          </div>

                        <h2 className="text-xl md:text-2xl font-semibold pt-10">
                          Follow Products And Discounts On Instagram
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5 pt-10">
                        <Image src="/img-7.png" alt="img" width={200} height={200}/>
                        <Image src="/img-6.png" alt="img" width={200} height={200}/>
                        <Image src="/img-3.png" alt="img" width={200} height={200}/>
                        <Image src="/img-2.png" alt="img" width={200} height={200}/>
                        <Image src="/img-4.png" alt="img" width={200} height={200}/>
                        <Image src="/img-8.png" alt="img" width={200} height={200}/>
                         </div>
  
                        </div>
                </div>
              </section>
      
      <Footer/>
    </div>
  )
}