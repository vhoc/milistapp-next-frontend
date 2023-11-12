"use client"

import { IProduct } from "@/app/lib/types"
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, FacebookMessengerShareButton, FacebookMessengerIcon } from "next-share"

interface Props {
    url: string
    productId: string
}

const ShareIcons = ( { url, productId }: Props ) => {

    const currentUrl = `https://${ url }/products/${ productId}`
    // console.log(currentUrl)
    
    return (
        <div className="flex flex-1 w-full justify-end gap-2">
            <FacebookShareButton
                url={ currentUrl }
                quote={'next-share is a social share buttons for your next React apps.'}
                hashtag={'#MiListApp'}
            >
                <FacebookIcon size={48} round />
            </FacebookShareButton>

            <WhatsappShareButton
                url={ currentUrl }
            >
                <WhatsappIcon size={48} round />
            </WhatsappShareButton>

            <FacebookMessengerShareButton
                appId={'asdasdasd'}
                url={ currentUrl }
            >
                <FacebookMessengerIcon size={48} round />
            </FacebookMessengerShareButton>
        </div>
    )

}

export default ShareIcons