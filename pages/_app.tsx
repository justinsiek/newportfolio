import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { StarsBackground } from "@/components/ui/stars-background";
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
    <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
    <AnimatePresence mode="wait">
        <motion.div key={router.route}>
          <Component {...pageProps} />
          <motion.div
            className='absolute lg:left-[16.6%] lg:top-[12.5%] lg:w-2/3 lg:h-3/4 bg-white mix-blend-difference origin-bottom border-black border-2
              sm:w-full sm:h-screen sm:top-0 sm:left-0 sm:border-0' 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className='absolute lg:left-[16.6%] lg:top-[12.5%] lg:w-2/3 lg:h-3/4 bg-black origin-top border-black border-2 
            sm:w-full sm:h-screen sm:top-0 sm:left-0 sm:border-0'
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
    </AnimatePresence>
    </>
  );
}