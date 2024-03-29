import { CardProps } from '@nextui-org/react';
import Image from 'next/image';
import { IProduct, IContactMethod } from '../app/lib/types'
import { fetchProductImages, fetchContactMethods } from '@/app/lib/data';
import { toMoneyString } from '@/app/lib/formatters';
import ContactButton from './ContactButton';

export interface CatalogItemProps extends CardProps {
    product: IProduct
    catalogId: number
    // images: string[]
    // contactMethods: IContactMethod[]
}

const CatalogItem = async ({ product, catalogId, ...props }:CatalogItemProps) => {

    const images = await fetchProductImages( Number(product.id) )
    const contactMethods = await fetchContactMethods( catalogId )

    return (
        <div className={'flex flex-col justify-start rounded-lg bg-white shadow-xl divide-y'}>
        { images && images.length >= 1 ?
            <div className={'aspect-square rounded-t-lg'}>
                <a href={`products/${ product.alphanumId }`}>
                    <Image
                        className={'w-full rounded-t-lg'}
                        width={320}
                        height={320}
                        // fill
                        src={ images[0].url }
                        alt={ product.title }
                    />
                </a>
            </div>
        :
            null
        }
            <div className={'flex flex-col p-3 items-start bg-white text-black rounded-b-lg'}>
                <div className={'font-bold text-sky-900 text-2xl md:text-xl lg:text-2xl'}>{ product.title }</div>
                <div className={'text-sky-700 text-xl md:text-lg lg:text-xl'}>{ toMoneyString( product.price || 0, "$" ) }</div>
                <p className={'text-slate-700 text-md md:text-sm lg:text-lg'}>{ product.description ? <span>{ product.description }</span> : null }</p>
            </div>

            <div className={'flex flex-col justify-end gap-2 p-2 h-full'} >
                <div className='text-slate-700 font-bold'>¿Te gusta? ¡Contáctame! 👇</div>
                <div className={'flex gap-2'}>
                { contactMethods && contactMethods.length >= 1 ?
                    contactMethods.map( (method: IContactMethod, index: number) => {
                        if ( method && method.value && method.value.length >= 1 ) {
                            return (
                                <ContactButton
                                    key={index}
                                    catalogId={catalogId}
                                    product={product}
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
        
    )

}

export default CatalogItem