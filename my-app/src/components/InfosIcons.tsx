type InfosIconsProps = {
    main : string;
    submain: string;

}


export default function InfosIcons({main , submain}: InfosIconsProps) { 
    return (
        <div className="border border-[#ee4848] w-1/7 rounded-lg py-5 px-5 items-center
            transition-all duration-300 ease-in-out hover:scale-105
            hover:bg-gradient-to-br hover:from-[#ee4848]/20 hover:to-transparent">
                


            <h1 className="text-[#ee4848] text-4xl transition-transform duration-300 ease-in-out hover:scale-110">{main}</h1>
            <h2 className="text-gray-400 font-bold">{submain}</h2>
        </div>
    )
}
