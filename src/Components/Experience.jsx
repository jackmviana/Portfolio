import { motion as m } from "framer-motion"

export default function Experience () {
    
    return (
        <m.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.3, ease: "easeOut" }}
                exit={{ opacity: 1 }}>
        <div className=" bg-neutral-700 h-screen">
            
        </div>
        </m.div>
    )
}