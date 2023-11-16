import React from "react";
import Card from "./Card";

const CardList = ({employees})=>{
    return(
        <div>
            {
                employees.map((employee)=>{
                    return(
                        <Card
                            key={employee.id}
                            id={employee.id}
                            fullName={employee.first_name+" "+employee.last_name}
                            image={employee.avatar}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;