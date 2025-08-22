type Props = { 
    name:string;
}

export default function Skills({name}:Props) { 
    return(
        <div className="inline-block bg-[#160d0d] px-3 py-1.5 sm:px-4 sm:py-2 text-white rounded-3xl hover:bg-[#231111] text-sm sm:text-base">
            {name}
        </div>

    )
}