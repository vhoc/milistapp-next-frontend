// ProductPage

import { fetchCatalogData, fetchCatalogOptions, fetchContactMethods, fetchProduct, fetchProductImages } from "@/app/lib/data";
import { titilliumRegular } from "../../ui/fonts"
import NavBar from "@/components/NavBar";
import { toMoneyString } from "@/app/lib/formatters";
import ContactButton from "@/components/ContactButton";
import { IContactMethod } from "@/app/lib/types";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next"

type Props = {
    params: { productXid: string },
}
export const generateMetadata = async ( { params }: Props, parent: ResolvingMetadata ): Promise<Metadata> => {
    const  productXid = params.productXid
    const product = await fetchProduct( productXid )
    const productImages = await fetchProductImages( product.id )

    return {
        title: product.title || "Producto",
        description: product.description || "",
        openGraph: {
            images: [
                productImages.images[0].url || 'https://api.milist.app/og-image.png'
            ]
        }
    }

}

const ProductPage = async ( { params }: {
    params: { productXid: string }
} ) => {

    const product = await fetchProduct( params.productXid )

    // console.log(product.user_id)
    const catalogData = await fetchCatalogData( product.user_id )
    // console.log(catalogData)
    const catalogOptions = await fetchCatalogOptions( catalogData.catalog.id )
    // console.log(catalogOptions)
    const productImages = await fetchProductImages( product.id )
    // console.log(productImages.images)
    const contactMethods = await fetchContactMethods( catalogData.catalog.id )
    // console.log(contactMethods.contact_methods)

    return (
        <div
            className={`${titilliumRegular.className} antialiased flex flex-col items-center justify-center px-10 max-[360px]:px-0`}
            style={{
                width: '100%',
                background: `${ catalogOptions?.background_gradient_shape }(${ catalogOptions?.background_gradient_shape === 'radial-gradient' ? "circle," : '' } ${ catalogOptions?.background_color_1 } ${ catalogOptions?.background_gradient_shape === 'radial-gradient' ? '0%' : '' }, ${ catalogOptions?.background_color_2 } ${ catalogOptions?.background_gradient_shape === 'radial-gradient' ? '100%' : '' }) fixed`,
                paddingBottom: '2rem',
                position: 'relative',
                zIndex: 1,
            }}
        >
            {/* <Head>
                <title>{ product.title }</title>
                <meta property="og:title" content={ product.title } key={ product.title } />
                <meta property="og:description" content={ product.description } key={ product.description } />
                <meta property="og:image" content={ productImages.images[0].url } key={ 'Product Image' } />
            </Head> */}
           <NavBar catalogId={ catalogData.catalog.id } productTitle={ product.title } productId={ product.id }/>

           <div className={'mt-28 flex flex-col bg-white w-full max-w-7xl text-slate-800 p-4 mt-1 rounded-lg gap-4 divide-y-2 mb-32'}>

                <div className="flex flex-wrap w-full max-w-7xl gap-4">

                    <div>
                        <h1 className="text-slate-800 font-bold text-2xl truncate">{ product.title }</h1>
                        <h2 className="text-sky-700 text-xl truncate">{ toMoneyString( product.price || 0, "$" ) }</h2>
                        <h3 className="text-slate-800 text-lg truncate">Descripción:</h3>
                        <p className="text-slate-700">
                            { product.description }
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-slate-800 font-bold text-xl truncate">¿Te gusta? contáctame:</h1>
                        <div className="flex gap-2">
                        { contactMethods.contact_methods && contactMethods.contact_methods.length >= 1 ?
                            contactMethods.contact_methods.map( (method: IContactMethod, index: number) => {
                                if ( method && method.value && method.value.length >= 1 ) {
                                    return (
                                        <ContactButton
                                            key={ index }
                                            catalog={ catalogData.catalog }
                                            product={ product }
                                            contactMethod={ method }
                                        />
                                    )
                                }
                            } )
                        :
                            null
                        }
                        </div>           
                    </div>

                </div>

                { productImages && productImages.images && productImages.images.length >= 1 ?

                    <div className="w-full pt-4">
                        <a href={ productImages.images[0].url } target="_blank">
                            <Image
                                src={ productImages.images[0].url }
                                className={'w-full rounded-t-lg'}
                                width={320}
                                height={320}
                                alt={ product.title }
                            />
                        </a>
                        
                    </div>
                :
                    null
                }                
                
            </div>

            <Footer />

        </div>
    )

}

export default ProductPage