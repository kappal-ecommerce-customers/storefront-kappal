import ProductList from "@modules/products/components/product-list";
import Image from 'next/image';
import FeaturedProducts from "../featured-products";
import { getRegion } from "@lib/data/regions";

const Hero = async () => {
  const region = (await getRegion("in") || undefined); // Fallback object
  return (<div>
    {/* Overlay Content */}
    <div className="w-full md:aspect-auto aspect-square relative bg-slate-300">
      <img className="w-full h-full object-cover hidden lg:block" src="/in/images/banner.svg" />
      <img className="w-full h-full object-cover lg:hidden" src="/in/images/banner_mobile.svg" />
    </div>
    {/* Default image for larger screens */}
    {/* <Image
      src="/in/images/banner.svg"
      alt="Store Banner"
      layout="fill"
      objectFit="contain"   // Ensures the image covers the container, cropping if needed
      priority
      className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto hidden md:block"   // Hide for smaller screens
    /> */}
    <div>
    {/* Mobile-specific image */}
    {/* <Image
      src="/in/images/banner_mobile.svg"
      alt="Store Banner Mobile"
      layout="fill"
      objectFit="contain"  // Ensures the image covers the container, cropping if needed
      priority
      className="sm:hidden"  // Only show on small screens
    /> */}
  </div>
  
    {/* Product List */ }
  <ProductList countryCode="in" />
  </div >
  

  )
}

export default Hero
