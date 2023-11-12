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
            className={'flex flex-col justify-center items-center h-96 w-full max-w-7xl'}
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
                className={`${ titilliumBold.className } antialiased text-center text-5xl font-bold text-shadow shadow-black line-clamp-3`}
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
    //     <VStack
    //         width={'100%'}
    //         height={400}
    //         minHeight={200}
    //         justifyContent={'center'}
    //         alignItems={'center'}
    //         maxW={1280}
    //         // style={{ border: `3px dashed white` }}
    //         background={ !catalogOptions?.heading_image_url ? 'rgba(0, 0, 0, 0.5)' : 'unset' }
    //         backgroundImage={catalogOptions?.heading_image_url}
    //         backgroundSize={'cover'}
    //         backgroundPosition={'center'}
    //         backgroundRepeat={'no-repeat'}
    //         borderBottomRadius={10}
    //     >

    //         <Heading textAlign={'center'} size={'xl'} color={catalogOptions?.color_title} textShadow={'1px 1px 3px #000'}>
    //             { catalogOptions?.custom_title }
    //         </Heading>

    //         <Heading textAlign={'center'} size={'md'} color={catalogOptions?.color_subtitle} textShadow={'1px 1px 3px #000'}>
    //             { catalogOptions?.custom_subtitle }
    //         </Heading>

    //     </VStack>
    )

}

export default Hero