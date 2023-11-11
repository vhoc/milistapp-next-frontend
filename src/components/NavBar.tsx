import { Button, Link } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import ShareIcons from "./ShareIcons"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
    catalogId: string
    productTitle: string
}

const NavBar = ({ catalogId, productTitle, ...props }: Props) => {

    const url = process.env.CONF_FRONTEND_DOMAIN

    return (
        <div className={'flex flex-3 justify-between items-center bg-white w-full max-w-7xl p-4 shadow-md gap-2 fixed top-0'} {...props}>
            <div className="flex-1">
                <Button
                    as={ Link }
                    className={'min-w-0 w-1/4 sm:w-auto'}
                    color={'primary'}
                    href={ `https://${ url }/${ catalogId }` }
                >
                    <FontAwesomeIcon icon={faCaretLeft} />
                    <span className={'hidden sm:block'}>Volver al catálogo</span>
                </Button>
            </div>

            <div className={'text-slate-800 font-bold flex-1 text-center text-2xl truncate'}>{ productTitle }</div>

            <ShareIcons />
            
        </div>
    )

}

export default NavBar