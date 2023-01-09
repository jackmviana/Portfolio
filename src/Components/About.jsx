import { motion as m } from "framer-motion"

export default function About () {
    
    return (
        <m.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.75, ease: "easeOut" }}
                exit={{ opacity: 1 }}>
            <div className=" bg-neutral-800 h-screen pt-40 px-8 md:p-40">
                <m.div
                animate={{ x: "0%" }}
                initial={{ x: "-200%" }}
                transition={{ delay: .5, duration: 0.5}}
                className=" w-fit mb-4 border-bottom">
                <p className=" text-white text-center red-color">
                    About Me</p>
                </m.div>
                <div>
                <m.h1
                    animate={{ y: 0 }}
                    initial={{ y: "600%" }}
                    transition={{ delay: .7, duration: 0.5}} className=" text-left font-semibold mb-8 name-info">
                    Hi! I'm Jack, a software engineer based in the greater Boston area. I create full-stack applications, websites, and also love making my wesbite designs in Figma, come to life with CSS. </m.h1>
                </div>
                <div>
                <m.h1
                    animate={{ y: 0 }}
                    initial={{ y: "600%" }}
                    transition={{ delay: .7, duration: 0.5}} className=" text-left font-semibold mb-8 name-info">
                    My day-to-day consists of buidling my own challenging full-stack applications to increase my skills, learning new languages like Swift & C++, and contributing to open-source projects on Github.</m.h1>
                </div>
                <m.div
                animate={{ x: "0%" }}
                initial={{ x: "-200%" }}
                transition={{ delay: .5, duration: 0.5}}
                className=" w-fit border-bottom">
                    <p className=" text-left red-color">
                    Technologies I use :</p>
                </m.div>
                </div>
        </m.div>
    )
}