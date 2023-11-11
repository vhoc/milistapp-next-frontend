import { Card, CardBody, CardFooter } from '@nextui-org/react';
import { CardProps } from '@nextui-org/react';
import Image from 'next/image';
import { ICatalog, IProduct, IContactMethod } from '../app/lib/types'
import { fetchProductImages, fetchContactMethods } from '@/app/lib/data';
import { toMoneyString } from '@/app/lib/formatters';
import ContactButton from './ContactButton';

export interface CatalogItemProps extends CardProps {
    product: IProduct
    catalog: ICatalog
}

const CatalogItem = async ({ product, catalog, ...props }:CatalogItemProps) => {

    const imgResponse = await fetchProductImages( product.id )
    const images = imgResponse.images
    const cmResponse = await fetchContactMethods( catalog.id )
    const contactMethods = cmResponse.contact_methods
    
    // console.log(`CatalogItem/contactMethods: `, contactMethods)

    return (
        <div className={'flex flex-col justify-start rounded-lg bg-white shadow-xl divide-y'}>
        { images && images.length >= 1 ?
            <div className={'aspect-square rounded-t-lg'}>
                <Image
                    className={'w-full rounded-t-lg'}
                    width={320}
                    height={320}
                    // fill
                    src={ images[0].url }
                    alt={ product.title }
                />
            </div>
        :
            null
        }
            <div className={'flex flex-col p-3 items-start bg-white text-black rounded-b-lg'}>
                <div className={'font-bold text-sky-900 text-2xl'}>{ product.title }</div>
                <div className={'text-sky-700 text-xl'}>{ toMoneyString( product.price || 0, "$" ) }</div>
                <p className={'text-slate-700'}>{ product.description ? <span>{ product.description }</span> : null }</p>
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
                                    catalog={catalog}
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