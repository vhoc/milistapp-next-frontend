import Image from "next/image"
import imgIsoLogo from '../assets/milistapp-sm-logo.png'
const Footer = () => {

    return (
        <div className={'flex flex-col bg-white justify-center fixed bottom-0 h-32 w-full text-slate-800 items-center'}>
            
            <div className="flex flex-wrap justify-center gap-2 p-2">

                <h3 className="text-center">¿Quieres un catálogo como éste?</h3>
                <div className={'text-sky-600 font-bold text-center'}>
                    <a href="https://milist.app" target="_blank">
                        ¡Visítanos y descarga la app!
                    </a>
                </div>

            </div>

            <a href="https://milist.app" target="_blank">
                <Image
                    src={imgIsoLogo}
                    width={160}
                    height={34}
                    alt={'MiListApp'}
                />
            </a>


        </div>
    )

}

export default Footer