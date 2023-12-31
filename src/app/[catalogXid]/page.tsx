// CatalogPage

import { fetchCatalogData, fetchCatalogOptions } from "../lib/data"
import Hero from "@/components/Hero"
import ProductList from "@/components/ProductList"
import { titilliumRegular } from "../ui/fonts"
import NotFoundPage from "@/components/404"
import Footer from "@/components/Footer"
import { Metadata, ResolvingMetadata } from "next"

type Props = {
    params: { catalogXid: string },
}

export const generateMetadata = async ( { params }: Props, parent: ResolvingMetadata ): Promise<Metadata> => {
    const  catalogXid = params.catalogXid
    const catalogData = await fetchCatalogData( catalogXid )
    const catalogOptions = catalogData && catalogData.catalog && catalogData.catalog.id ? await fetchCatalogOptions( catalogData.catalog.id ) : null

    return {
        title: catalogOptions.custom_title ? catalogOptions.custom_title : catalogData.catalog.name ? catalogData.catalog.name : "Catálogo en línea",
        description: catalogOptions.custom_subtitle ? catalogOptions.custom_subtitle : "Catálogo de productos y servicios",
        openGraph: {
            images: [
                catalogOptions.heading_image_url ? catalogOptions.heading_image_url : 'https://api.milist.app/og-image.png'
            ]
        }
    }

}

const CatalogPage = async ({ params, }: {
    params: { catalogXid: string }
}) => {

    const catalogData = await fetchCatalogData( params.catalogXid )
    const catalogOptions = catalogData && catalogData.catalog && catalogData.catalog.id ? await fetchCatalogOptions( catalogData.catalog.id ) : null

    // console.log(catalogData.catalog)

    if ( !catalogData.catalog ) {
        return (
            <NotFoundPage />
        )
    }

    return (
        <div
            className={`${titilliumRegular.className} antialiased flex flex-col items-center justify-center px-10 max-[360px]:px-0`}
            style={{
                width: '100%',
                // height: isBusyCatalog ? '100vh' : 'auto',
                background: `${ catalogOptions?.background_gradient_shape }(${ catalogOptions?.background_gradient_shape === 'radial-gradient' ? "circle," : '' } ${ catalogOptions?.background_color_1 } ${ catalogOptions?.background_gradient_shape === 'radial-gradient' ? '0%' : '' }, ${ catalogOptions?.background_color_2 } ${ catalogOptions?.background_gradient_shape === 'radial-gradient' ? '100%' : '' }) fixed`,
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
            <Hero catalogOptions={catalogOptions} />

        { catalogData ?
            <ProductList catalog={catalogData.catalog} />
        :
            null
        }

            <Footer />

        </div>
    )

}


export default CatalogPage