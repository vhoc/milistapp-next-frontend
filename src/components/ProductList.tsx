// import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { IProduct } from "@/app/lib/types";
import CatalogItem from "./CatalogItem";

interface Props {
    catalogId: number
    products: any

}

const ProductList = async ({ catalogId, products }: Props) => {

    const responsiveColumns = ( productsAmount: number ): string => {
        if ( productsAmount >= 7 ) return 'md:grid-cols-4'
        return 'md:grid-cols-3'
    //     7: '4',
    //     9: '5',
    //    16: '6',
    }

    if ( products && products.length >= 1 ) {
        return (
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${ responsiveColumns(products.length) } w-full max-w-7xl gap-6 mb-32`}
            >
            { products.map( (product: IProduct, index: number) => (
                <CatalogItem
                    key={ index }
                    product={ product }
                    catalogId={ catalogId }
                    // images={[]}
                    // contactMethods={[]}
                />
            ) )
            }
            </div>
           
        )
    }
    

}

export default ProductList