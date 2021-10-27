import React from "react"
import './notes.css'
import StickyNote from "../../components/stickyNote/stickyNote"


const Notes = () => {

    const temporalData=[
        {
            id: 1,
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            id: 2,
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            id: 3,
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            id: 4,
            title: "Comida",
            content: "leche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            id: 5,
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            id: 6,
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            id: 7,
            title: "Comida",
            content: "leche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            id: 8,
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            id: 9,
            title: "Comida",
            content: "leche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            id: 10,
            title: "Comida",
            content: "leche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cerealleche, cereal",
            date: "20/07/2021 3:25"
        },
        {
            id: 11,
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
                            <StickyNote id={element.id} title={element.title} content={element.content} date={element.date} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Notes