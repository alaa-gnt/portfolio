type InfosIconsProps = {
    main : string;
    submain: string;

}


export default function InfosIcons({main , submain}: InfosIconsProps) { 
    return (
        <div className="border border-[#ee4848] w-full sm:w-auto rounded-lg py-3 sm:py-4 lg:py-5 px-3 sm:px-4 lg:px-5 items-center text-center
            transition-all duration-300 ease-in-out hover:scale-105
            hover:bg-gradient-to-br hover:from-[#ee4848]/20 hover:to-transparent">
                


            <h1 className="text-[#ee4848] text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 ease-in-out hover:scale-110 font-mono font-bold">{main}</h1>
            <h2 className="text-gray-400 font-medium text-xs sm:text-sm lg:text-base tracking-wide">{submain}</h2>
        </div>
    )
}
