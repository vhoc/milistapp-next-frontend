// CatalogPage

import { fetchCatalog, fetchCatalogData, fetchProducts } from "../lib/data"
// import { fetchCatalogProducts, fetchCatalogOptions } from "../lib/data"
import Hero from "@/components/Hero"
import ProductList from "@/components/ProductList"
import { titilliumRegular } from "../ui/fonts"
import NotFoundPage from "@/components/404"
import Footer from "@/components/Footer"
import { Metadata, ResolvingMetadata } from "next"

type Props = {
    params: { catalogXid: string },
}

export const generateMetadata = async ( { params }: Props, parent: ResolvingMetadata ): Promise<Metadata | null> => {
    const  catalogXid = params.catalogXid
    const catalogData = await fetchCatalogData( catalogXid )
    // const catalogProducts = await fetchCatalogProducts( catalogXid )
    const catalogOptions = catalogData && catalogData.catalog && catalogData.catalog.id ? await fetchCatalog( catalogData.catalog.id ) : null

    if ( catalogOptions ) {
        return {
            title: catalogOptions.custom_title ? catalogOptions.custom_title : catalogData.catalog.name ? catalogData.catalog.name : "Catálogo en línea",
            description: catalogOptions.custom_subtitle ? catalogOptions.custom_subtitle : "Catálogo de productos y servicios",
            openGraph: {
                images: [
                    catalogOptions.heading_image_url ? catalogOptions.heading_image_url : 'https://mrgazjmksfzheungnvqd.supabase.co/storage/v1/object/public/common/mi-catalogo.png'
                ]
            }
        }
    }
   
    return null

}

const CatalogPage = async ({ params, }: {
    params: { catalogXid: string }
}) => {

    const catalogId = parseInt( params.catalogXid, 36 )
    const catalogData = await fetchCatalogData( params.catalogXid )
    // const catalogOptions = catalogData && catalogData.catalog && catalogData.catalog.id ? await fetchCatalogOptions( catalogData.catalog.id ) : null
    const catalog = await fetchCatalog( catalogId )
    // console.log(`catalog/page/catalog: `, catalog )

    const products = await fetchProducts( catalogId )

    // if ( !catalogData.catalog ) {
    //     return (
    //         <NotFoundPage />
    //     )
    // }

    if ( catalog )
    {
        return (
            <div
                className={`${titilliumRegular.className} antialiased flex flex-col items-center justify-center px-10 max-[360px]:px-0`}
                style={{
                    width: '100%',
                    // height: isBusyCatalog ? '100vh' : 'auto',
                    background: `${ catalog.background_gradient_shape }(${ catalog.background_gradient_shape === 'radial-gradient' ? "circle," : '' } ${ catalog.background_color_1 } ${ catalog.background_gradient_shape === 'radial-gradient' ? '0%' : '' }, ${ catalog.background_color_2 } ${ catalog.background_gradient_shape === 'radial-gradient' ? '100%' : '' }) fixed`,
                    // backgroundAttachment: 'fixed',
                    // backgroundRepeat: 'no-repeat',
                    // backgroundSize: 'cover',
                    paddingBottom: '2rem',
                    // paddingInline:'2rem',
                    position: 'relative',
                    zIndex: 1,
                    gap: 20,
                    // border: `3px solid red`
                }}
            >
                <Hero catalogOptions={catalog} />
    
            { products && products.length >= 1 ?
                <ProductList products={ products } catalogId={ catalogId } />
            :
                null
            }
    
                <Footer />
    
            </div>
        )
    }

    return (
        <NotFoundPage />
    )

    

}


export default CatalogPage