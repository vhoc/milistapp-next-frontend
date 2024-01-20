'use client';
import styles from './page.module.css'
import Image from 'next/image'
import imgLogo from '../../assets/milistapp-sm-logo.png'
import imgPlayButton from '../../assets/google-play-badge.png'
import { titilliumRegular } from '../ui/fonts'
import { motion } from 'framer-motion'

const ThankYouPage = () => {

   return (
      <div className={ `${ titilliumRegular.className } ${ styles.container }` }>

         <motion.div
            className={ styles.box }
            initial={{ width: 0, }}
            animate={{ width: 'fit-content' }}
         >
            <motion.div
               initial={{ opacity: 0, }}
               transition={{ delay: 0.2, }}
               animate={{ opacity: 1, }}
            >
               <Image
                  src={ imgLogo }
                  width={ 160 }
                  height={ 34 }
                  alt={ 'MiListApp logo' }
               />
            </motion.div>

            <motion.h1
               className={ styles.h1 }
               initial={{ opacity: 0, top: -30, }}
               animate={{ opacity: 1, top: 0, }}
               transition={{ delay: 0.3, }}
            >
               ¡Gracias por registrarte!
            </motion.h1>

            <motion.div
               className={ styles.messageContainer }
               initial={{ opacity: 0, }}
               animate={{ opacity: 1, }}
               transition={{ delay: 0.3, }}
            >

               <p className={ styles.p }>
                  Ahora puedes abrir la app en tu teléfono y comenzar a dar de alta tus productos
                  o servicios. Si aún no la tienes, descárgala desde éste botón.
               </p>

            </motion.div>

            <motion.a
               href="https://play.google.com/store/apps/details?id=com.vhoc.milistapp"
               target="_blank"
               initial={{ opacity: 0, marginBottom: -50 }}
               animate={{ opacity: 1, marginBottom: 0 }}
               transition={{ delay: 1, }}
            >
               <Image
                  src={ imgPlayButton }
                  width={ 200 }  
                  // height={ 'auto' }
                  alt={ 'MiListApp logo' }
               />
            </motion.a>

         </motion.div>
         
      </div>
   )

}

export default ThankYouPage