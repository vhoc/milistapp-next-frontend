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

export const fetchCatalogOptions = async ( catalogId: string ) => {
    try {
        const response = await fetch(`https://api.milist.app/api/mla/catalogOptions/${ catalogId }`, { next: { revalidate: 60 } })
        const json = await response.json()
        // console.log(json)
        return json
    } catch (error) {
        console.error(error)
        return null
    }
}

export const fetchProducts = async ( catalogId: string ) => {
    try {
        const response = await fetch(`https://api.milist.app/api/mla/user/${ catalogId }/products`, { next: { revalidate: 60 } })
        const json = await response.json()
        return json        
    } catch (error) {
        console.error(error)
        return null
    }
}

export const fetchProduct = async ( productHexId: string ) => {
    try {
        const response = await fetch(`https://api.milist.app/api/mla/products/${ productHexId }`, { next: { revalidate: 60 } })
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return null
    }
}

export const fetchProductImages = async ( productId: string ) => {
    try {
        const response = await fetch(`https://api.milist.app/api/mla/products/${ productId }/images`, { next: { revalidate: 60 } })
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return null
    }
}

export const fetchContactMethods = async ( catalogId: string ) => {
    try {
        const response = await fetch(`https://api.milist.app/api/mla/contactMethods/${ catalogId }`, { next: { revalidate: 60 } })
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return null
    }
}