// CatalogPage

import { fetchCatalogData, fetchCatalogOptions } from "../lib/data"
import Hero from "@/components/Hero"
import ProductList from "@/components/ProductList"
import { titilliumRegular } from "../ui/fonts"

const CatalogPage = async ({ params, }: {
    params: { catalogXid: string }
}) => {

    const catalogData = await fetchCatalogData( params.catalogXid )
    const catalogOptions = await fetchCatalogOptions( catalogData.catalog.id )

    // console.log(`catalogOptions`, catalogOptions)

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

        </div>
    )

}

export default CatalogPage