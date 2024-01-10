import { ICatalog, IProduct, IContactMethod } from "@/app/lib/types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"

export interface ContactButtonProps {
    // type: "whatsapp" | "facebook" | "phone" | "email"
    catalogId: number
    product: IProduct
    contactMethod: IContactMethod
}

const domain = process.env.CONF_FRONTEND_DOMAIN

const ContactButton = ({ catalogId, product, contactMethod }: ContactButtonProps) => {

    // console.log(`ContactButton/catalog: `, catalog)

    const typeBackgroundColors: { [key:string]: string } = {
        "whatsapp" : "#25D366",
        "facebook" : "#4267B2",
        "phone" : "white",
        "email" : "#000000"
    }

    const typeTextColors: { [key:string]: string } = {
        "whatsapp" : "#FFFFFF",
        "facebook" : "#FFFFF",
        "phone" : "#000000",
        "email" : "#FFFFFF"
    }
    
    const typeIcons: { [key:string]: IconDefinition } = {
        "whatsapp" : faWhatsapp,
        "facebook" : faFacebook,
        "phone" : faPhone,
        "email" : faEnvelope
    }

    const typeLinks: { [key:string]: string } = {
        // "whatsapp" : catalog && catalog.contact_methods ? `https://wa.me/52${ catalog.contact_methods.filter( (whatsapp) => whatsapp.type === "whatsapp" ) }?text=%C2%A1Hola%21%20Te%20contacto%20porque%20me%20interesa%20tu%20producto%20publicado%20en%20tu%20cat%C3%A1logo%3A%20https%3A%2F%2F127.0.0.1%3A5173%2F${ catalog.slug }%2F${ product.id }` : '',
        "whatsapp" : catalogId && product.alphanumId ? `https://wa.me/52${ contactMethod.value }?text=%C2%A1Hola%21%20Vi%20tu%20cat%C3%A1logo%20y%20me%20interesa%20%C3%A9ste%20producto%3A%20https%3A%2F%2F${ domain }%2Fproducts%2F${ product.alphanumId }` : '',
        "facebook" : catalogId && product.alphanumId ? `http://m.me/${ contactMethod.value }?text=%C2%A1Hola%21%20Vi%20tu%20cat%C3%A1logo%20y%20me%20interesa%20%C3%A9ste%20producto%3A%20https%3A%2F%2F${ domain }%2Fproducts%2F${ product.alphanumId }` : '',
        "phone" : `tel:${contactMethod.value}`,
        "email" : `mailto:${contactMethod.value}`,
    }

    return (
        <a href={ typeLinks[contactMethod.type] } target="_blank">
            <div
                style={{
                    borderRadius: 8,
                    width: 64,
                    height: 64,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: typeBackgroundColors[contactMethod.type],
                    color: 'white',
                }}
            >
                <FontAwesomeIcon size={'2x'} icon={ typeIcons[contactMethod.type] } color={ typeTextColors[contactMethod.type] } />
            </div>
        </a>
    )



}

export default ContactButton