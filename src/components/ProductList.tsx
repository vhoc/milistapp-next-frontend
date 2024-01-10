// import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { IProduct } from "@/app/lib/types";
import CatalogItem from "./CatalogItem";

interface Props {
    catalogId: number
    products: any

}

const ProductList = async ({ catalogId, products }: Props) => {

    // const products = await fetchProducts( catalog.id )
    // console.log(`ProductList/products: `, products)

    return (
        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-7xl gap-6 mb-32'}>
        { products && products.length >= 1 ?
            products.map( (product: IProduct, index: number) => (
                <CatalogItem
                    key={ index }
                    product={ product }
                    catalogId={ catalogId }
                    // images={[]}
                    // contactMethods={[]}
                />
            ) )
        :
            null
        }
        </div>
       
    )

}

export default ProductList