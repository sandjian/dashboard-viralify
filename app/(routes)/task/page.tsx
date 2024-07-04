import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { Calendar } from "./components/Calendar"
import { redirect } from "next/navigation"





export default async function TasksPage(){
    const{userId}= auth()
    if (!userId){
        return redirect("/")
    }
    const companies = await db.company.findMany({
        where:{
            userId
        },
        orderBy: {
            createdAt:"desc"
        }
    })
    const events=await db.event.findMany({
        orderBy:{
            createdAt:"desc"
        }
    })
    console.log(events)
    
    return (
        <div>
            <Calendar companies={companies} events={events}/>
        </div>
    )
}