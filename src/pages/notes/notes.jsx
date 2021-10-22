import React from "react"
import './notes.css'
import StickyNote from "../../components/stickyNote/stickyNote"


const Notes = () => {

    const temporalData=[
        {
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            title: "Comida",
            content: "leche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            title: "Comida",
            content: "leche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            title: "Comida",
            content: "leche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },

    ]
    return (
        <div className="notes-general-div">
            <h1 className="notes-title">Tus notas</h1>
            <div className="notes-scroll-div">
                {temporalData.map((element)=>{
                    return (
                        <div style={{margin:"20px 0px",width:"100%"}}>
                            <StickyNote title={element.title} content={element.content} date={element.date} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Notes