import React from "react";
import Button from "./Button";

const ButtonList = ()=>{
    const list = ['All', 'Music', 'Songs', 'News', 'Cricket', 'Football', "Games", "World Cup", "Coding", "Laptop"]
    return (
        <div className="flex flex-row">
            {list.map((e) => {
                return(
                    <div>
                        <Button key={e} name={e} />
                    </div>
                )
            })}
        </div>
    )
}

export default ButtonList;