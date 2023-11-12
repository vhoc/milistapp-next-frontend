// import { VStack, Heading } from "@chakra-ui/react"
import { ICatalogOptions } from "@/app/lib/types"
import { titilliumBlack, titilliumBold } from "@/app/ui/fonts"

interface Props {
    catalogOptions: ICatalogOptions
    // title?: string | undefined
    // titleColor?: string | undefined
    // subtitle?: string | undefined
    // subtitleColor?: string | undefined
    // image?: string | undefined
}

const Hero = ({ catalogOptions }: Props): JSX.Element => {

    // console.log(`Hero/catalogOptions: `, catalogOptions)

    return (
    
        <div
            className={'flex flex-col justify-center items-center h-96 w-full max-w-7xl gap-2'}
            style={{
                // background: !catalogOptions.heading_image_url ? 'rgba(0, 0, 0, 0.5)' : 'unset',
                backgroundColor: !catalogOptions.heading_image_url ? `rgba(0, 0, 0, 0.5)` : 'unset',
                backgroundImage: `url(${ catalogOptions.heading_image_url })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
            }}
        >
            <h1
                className={`${ titilliumBold.className } antialiased text-center text-5xl font-bold text-shadow shadow-black line-clamp-3 p-1`}
                style={{ color: catalogOptions?.color_title }}
            >
                { catalogOptions?.custom_title }
            </h1>

            <h2
                className={`text-center text-3xl font-bold text-shadow shadow-black line-clamp-3`}
                style={{ color: catalogOptions.color_subtitle }}
            >
                { catalogOptions.custom_subtitle }
            </h2>
        </div>
    )

}

export default Hero