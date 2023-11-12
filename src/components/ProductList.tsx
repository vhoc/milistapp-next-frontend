// import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { ICatalog, IProduct } from "@/app/lib/types";
import { fetchProducts } from "@/app/lib/data";
import CatalogItem from "./CatalogItem";

interface Props {
    catalog: ICatalog
}

const ProductList = async ({ catalog }: Props) => {

    const products = await fetchProducts( catalog.id )
    // console.log(`ProductList/products: `, products)

    return (
        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-7xl gap-6 mb-32'}>
        { catalog && products && products.length >= 1 ?
            products.map( (product: IProduct, index: number) => (
                <CatalogItem
                    key={ index }
                    product={ product }
                    catalog={ catalog }
                />
            ) )
        :
            null
        }
        </div>
        // <SimpleGrid
        //     // columns={[1, 2, 3, 4, 4]}
        //     minChildWidth={'256px'}
        //     spacing={6}
        //     w={'100%'}
        //     minW={256}
        //     maxW={1280}
        // >
        // { catalog && products && products.length >= 1 ?
        //     products.map( (product: IProduct, index: number) => {
        //         return (
        //             <CatalogItem
        //                 key={ index }
        //                 product={ product }
        //                 catalog={ catalog }
        //             />
        //         )
        //     } )
        // :
        //     // isBusyProducts ?
        //     //     <>
        //     //         <Skeleton borderRadius={'md'} /><Skeleton borderRadius={'md'} /><Skeleton borderRadius={'md'}/><Skeleton borderRadius={'md'}/>
        //     //     </>
        //     // :
        //         null
        // }
        // </SimpleGrid>
    )

}

export default ProductList