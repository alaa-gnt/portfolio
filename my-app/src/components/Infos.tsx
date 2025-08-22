import InfosIcons from "./InfosIcons";

export default function Infos() { 
    return  ( 
        <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10 items-center justify-center px-4 sm:px-6 lg:px-8">
            <InfosIcons main="Junior" submain="Professional Level" />
            <InfosIcons main="5+" submain="Project Completed" />
            <InfosIcons main="0" submain="client HAppy" />
            <InfosIcons main="1" submain="Country reached" />
        </div>
    )
}