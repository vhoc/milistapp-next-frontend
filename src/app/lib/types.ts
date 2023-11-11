export interface IContactMethod {
    type: "facebook" | "whatsapp" | "phone" | "contact_email"
    value: string
}

export interface IProduct {
    id: string
    hexId: string
    user_id: number
    title: string
    price?: number | undefined
    description?: string | undefined
    images?: Array<string>
}

export interface ICatalog {
    id: string
    slug: string// hexId
    name: string
}

export interface ICatalogOptions {
    user_id: string
    heading_image_url?: string | undefined
    background_color_1: string
    background_color_2: string
    background_gradient_shape?: string | undefined
    custom_title?: string | undefined
    custom_subtitle?: string | undefined
    color_title?: string | undefined
    color_subtitle?: string | undefined 
}