import ProductList from "@modules/products/components/product-list";
import Image from 'next/image';
import FeaturedProducts from "../featured-products";
import { getRegion } from "@lib/data/regions";

const Hero = async () => {
  const region = (await getRegion("in") || undefined);
  return (<div>
    <div className="w-full md:aspect-auto aspect-square relative bg-slate-300">
      <img className="w-full h-full object-cover hidden lg:block" src="/in/images/banner_lg.svg" />
      <img className="w-full h-full object-cover lg:hidden" src="/in/images/banner_mobile.svg" />
    </div>
    
  <ProductList countryCode="in" />
  </div >
  

  )
}

export default Hero
