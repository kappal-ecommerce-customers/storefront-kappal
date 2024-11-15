import ProductList from "@modules/products/components/product-list";
import Image from 'next/image';
import FeaturedProducts from "../featured-products";
import { getRegion } from "@lib/data/regions";

const Hero = async () => {
  const region = (await getRegion("in") || undefined); // Fallback object
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 lg:p40 gap-6">

        <Image
          src="/in/images/Banner_1.svg" // Path to your image
          alt="Store Banner"
          layout="fill"       // Makes the image fill the container
          objectFit="cover"   // Ensures the image covers the container
          priority            // Optional: for faster loading
        />
      </div>
     <ProductList countryCode="in"/>
    </div>
  )
}

export default Hero
