import { getHomePageProducts, getProductsList } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import Product from "../product-preview"

type RelatedProductsProps = {
  countryCode: string
}

export default async function ProductList({
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }
  const queryParams: HttpTypes.StoreProductParams = {}
  if (region?.id) {
    queryParams.region_id = region.id
  }
  
  queryParams.is_giftcard = false

  const products = await getHomePageProducts({countryCode}).then(({ response }) => {
    return response.products
  })

  if (!products.length) {
    return null
  }

  return (
    <div className="product-page-constraint px-5 lg:px-10">
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-2xl-regular text-ui-fg-base max-w-lg">
          Our Latest Collections
        </p>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {products.map((product) => (
          <li key={product.id}>
            <Product region={region} product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}
