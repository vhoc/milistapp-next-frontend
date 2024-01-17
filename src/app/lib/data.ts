// const baseUrl = `https://api.milist.app/api/mla/catalog`
import { createClient } from "@supabase/supabase-js"
import { IProduct } from "./types"
const baseKey = process.env.CONF_SUPABASE_KEY
const supabase = createClient( `https://mrgazjmksfzheungnvqd.supabase.co`, baseKey as string )

export const fetchCatalogData = async ( catalogHexId: string ) => {
    try {
        const response = await fetch(`https://api.milist.app/api/mla/catalog/${ catalogHexId }`, { next: { revalidate: 600 } })
        const json = await response.json()
        // console.log(json)
        return json
    } catch (error) {
        console.error(error)
        return null
    }
}

// export const fetchCatalogData = async ( catalogHexId: string ) => {
//     try {
//         const { data, error } = supabase
//         .from(`user_catalogs`)
//         .select(`*`)
//     } catch (error) {
//         console.error(error)
//         return null
//     }
// }

// export const fetchCatalogOptions = async ( catalogId: string ) => {
//     try {
//         const response = await fetch(`https://api.milist.app/api/mla/catalogOptions/${ catalogId }`, { next: { revalidate: 60 } })
//         const json = await response.json()
//         // console.log(json)
//         return json
//     } catch (error) {
//         console.error(error)
//         return null
//     }
// }

export const fetchCatalog = async (catalogId: number) => {
    // Convert alphanumeric id to numeric:
    // const catalogId = parseInt( catalogAlphanumId, 36 )
    // console.log(`catalogId: `, catalogId)
    try {
        const { data, error } = await supabase
        .from( `user_catalogs` ).select().eq( `id`, catalogId ).single()

        if (error) {
            console.error(error.message)
            return null
        }
        console.log(`fetchCatalog/data: `, data)
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

export const fetchProducts = async ( catalogId: number ) => {
    // console.log(`catalogId: `, catalogId)
    try {
        const { data, error } = await supabase
        .from('user_products')
        .select()
        .eq('catalog_id', catalogId)

        if (error) {
            console.error(error.message)
            return null
        }
        // console.log(`data:`, data)
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

// export const fetchProduct = async ( productHexId: string ) => {
//     try {
//         const response = await fetch(`https://api.milist.app/api/mla/products/${ productHexId }`, { next: { revalidate: 60 } })
//         const json = await response.json()
//         return json
//     } catch (error) {
//         console.error(error)
//         return null
//     }
// }

export const fetchProduct = async ( productAlphanumId: string ) => {
    try {
        const { data, error } = await supabase
        .from(`user_products`)
        .select(`id, catalog_id, alphanumId, user_id, title, price, description`)
        .eq(`alphanumId`, productAlphanumId)
        .limit(1)
        .single()

        if ( error ) {
            console.error(`Error fetching product ${ productAlphanumId }: `, error.message)
            return null
        }
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

export const fetchProductImages = async ( productId: number ) => {
    // console.log(userId)
    try {
        const { data, error } = await supabase
        .from('product_images')
        .select('id, product_id, url')
        .eq('product_id', productId)

        // console.log(data)
        if ( error ) {
            console.error(`Error fetching product ${ productId } images: `, error.message)
            return null
        }
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

// export const fetchContactMethods = async ( catalogId: string ) => {
//     try {
//         const response = await fetch(`https://api.milist.app/api/mla/contactMethods/${ catalogId }`, { next: { revalidate: 60 } })
//         const json = await response.json()
//         return json
//     } catch (error) {
//         console.error(error)
//         return null
//     }
// }

export const fetchContactMethods = async ( catalogId: number ) => {
    try {
        const { data, error } = await supabase
        .from('user_contact_methods')
        .select(`type, value, catalog_id, user_id`)
        .eq(`catalog_id`, catalogId)

        if ( error ) {
            console.error(`Error fetching contact methods.`, error.message)
            return null
        }
        // console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}