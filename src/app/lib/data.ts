export const fetchCatalogData = async ( catalogHexId: string ) => {
    try {
        const response = await fetch(`https://api.milist.app/api/mla/catalog/${ catalogHexId }`)
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
        const response = await fetch(`https://api.milist.app/api/mla/catalogOptions/${ catalogId }`, { cache: 'no-store' })
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
        const response = await fetch(`https://api.milist.app/api/mla/user/${ catalogId }/products`, { cache: 'no-store' })
        const json = await response.json()
        return json        
    } catch (error) {
        console.error(error)
        return null
    }
}

export const fetchProduct = async ( productHexId: string ) => {
    try {
        const response = await fetch(`https://api.milist.app/api/mla/products/${ productHexId }`, { cache: 'no-store' })
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return null
    }
}

export const fetchProductImages = async ( productId: string ) => {
    try {
        const response = await fetch(`https://api.milist.app/api/mla/products/${ productId }/images`, { cache: 'no-store' })
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return null
    }
}

export const fetchContactMethods = async ( catalogId: string ) => {
    try {
        const response = await fetch(`https://api.milist.app/api/mla/contactMethods/${ catalogId }`, { cache: 'no-store' })
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return null
    }
}