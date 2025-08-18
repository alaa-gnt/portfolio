import InfosIcons from "./InfosIcons";

export default function Infos() { 
    return  ( 
        <div className="flex gap-10 items-center justify-center">
            <InfosIcons main="Junior" submain="Professional Level" />
            <InfosIcons main="5+" submain="Project Completed" />
            <InfosIcons main="0" submain="client HAppy" />
            <InfosIcons main="1" submain="Country reached" />
        </div>
    )
}