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
        const response = await fetch(`https://api.milist.app/api/mla/catalogOptions/${ catalogId }`)
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
        const response = await fetch(`https://api.milist.app/api/mla/user/${ catalogId }/products`)
        const json = await response.json()
        return json        
    } catch (error) {
        console.error(error)
        return null
    }
}

export const fetchProduct = async ( productHexId: string ) => {
    try {
        const response = await fetch(`https://api.milist.app/api/mla/products/${ productHexId }`)
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return null
    }
}

export const fetchProductImages = async ( productId: string ) => {
    try {
        const response = await fetch(`https://api.milist.app/api/mla/products/${ productId }/images`)
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return null
    }
}

export const fetchContactMethods = async ( catalogId: string ) => {
    try {
        const response = await fetch(`https://api.milist.app/api/mla/contactMethods/${ catalogId }`)
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return null
    }
}