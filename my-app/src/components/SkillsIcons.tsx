type Props = { 
    name:string;
}

export default function Skills({name}:Props) { 
    return(
        <div className="inline-block bg-[#160d0d] px-4 py-2 text-white rounded-3xl hover:bg-[#231111]">
            {name}
        </div>

    )
}