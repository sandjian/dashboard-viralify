import { Dispatch, SetStateAction } from "react"
import { Company } from "@prisma/client";
export type FormEventProps={
    setNewEvent: Dispatch<
    SetStateAction<{
        eventName:string;
        companieSelected:{name:string;id:string};
    }>
    >;
    setOpen:Dispatch<SetStateAction<boolean>>;
    companies:Company[];
    setOnSaveNewEvent:Dispatch<SetStateAction<boolean>>;
}