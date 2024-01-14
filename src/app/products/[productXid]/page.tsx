// ProductPage

import { fetchCatalog, fetchContactMethods, fetchProduct, fetchProductImages } from "@/app/lib/data";
import { titilliumRegular } from "../../ui/fonts"
import NavBar from "@/components/NavBar";
import { toMoneyString } from "@/app/lib/formatters";
import ContactButton from "@/components/ContactButton";
import { IContactMethod, IProduct } from "@/app/lib/types";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next"

type Props = {
    params: { productXid: string },
}
export const generateMetadata = async ( { params }: Props, parent: ResolvingMetadata ): Promise<Metadata | undefined> => {
    const productXid = params.productXid
    
    if (productXid) {
        const product = await fetchProduct( productXid )
        if ( product ) {
            const productImages = await fetchProductImages( Number(product.id) )

            if ( productImages ) {
                return {
                    title: product.title || "Producto",
                    description: product.description || "",
                    openGraph: {
                        images: [
                            productImages[0].url || 'https://mrgazjmksfzheungnvqd.supabase.co/storage/v1/object/public/common/mi-catalogo.png'
                        ]
                    }
                }
            }
        }
    }

    

}

const ProductPage = async ( { params }: {
    params: { productXid: string }
} ) => {

    const product = await fetchProduct( params.productXid )

    const catalog = await fetchCatalog( product?.catalog_id )

    const productImages = await fetchProductImages( product?.id )

    const contactMethods = await fetchContactMethods( product?.catalog_id )

    if ( product ) {

        return (
            <div
                className={`${titilliumRegular.className} antialiased flex flex-col items-center justify-center px-10 max-[360px]:px-0`}
                style={{
                    width: '100%',
                    background: `${ catalog.background_gradient_shape }(${ catalog.background_gradient_shape === 'radial-gradient' ? "circle," : '' } ${ catalog.background_color_1 } ${ catalog.background_gradient_shape === 'radial-gradient' ? '0%' : '' }, ${ catalog.background_color_2 } ${ catalog.background_gradient_shape === 'radial-gradient' ? '100%' : '' }) fixed`,
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
                { product && product.catalog_id ?
                    <NavBar catalogId={ product.catalog_id.toString(36) } productTitle={ product.title } productId={ product.id }/>
                    :
                    null
                }
    
               <div className={'mt-28 flex flex-col bg-white w-full max-w-7xl text-slate-800 p-4 mt-1 rounded-lg gap-4 divide-y-2 mb-32'}>
    
                    <div className="flex flex-wrap w-full max-w-7xl gap-4">
    
                        <div className="flex-1">
                            <h1 className="text-slate-800 font-bold text-2xl truncate">{ product.title }</h1>
                            <h2 className="text-sky-700 text-xl truncate">{ toMoneyString( product.price || 0, "$" ) }</h2>
                            <h3 className="text-slate-800 text-lg truncate">Descripción:</h3>
                            <p className="text-slate-700">
                                { product.description }
                            </p>
                        </div>
    
                        <div className="flex flex-col flex-1">
                            <h1 className="text-slate-800 font-bold text-xl truncate">¿Te gusta? contáctame:</h1>
                            <div className="flex gap-2 mt-2">
                            { contactMethods && contactMethods.length >= 1 ?
                                contactMethods.map( (method: IContactMethod, index: number) => {
                                    if ( method && method.value && method.value.length >= 1 ) {
                                        return (
                                            <ContactButton
                                                key={ index }
                                                catalogId={ product.catalog_id }
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
    
                    { productImages && productImages && productImages.length >= 1 ?
    
                        <div className="w-full pt-4">
                            <a href={ productImages[0].url } target="_blank">
                                <Image
                                    src={ productImages[0].url }
                                    className={'w-full rounded-t-lg'}
                                    width={768}
                                    height={768}
                                    quality={90}
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

    

}

export default ProductPage