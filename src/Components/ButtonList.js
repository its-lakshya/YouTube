import React from "react";
import Button from "./Button";

const ButtonList = ()=>{
    const list = ['All', 'Music', 'Songs', 'News', 'Cricket', 'Football', "Games", "World Cup"]
    return (
        <div className="flex justify-center w-full overflow-x-hidden gap-x-5 mt-2 ">
            {list.map((e) => {
                return(
                    <div key={e}>
                        <Button  name={e} />
                    </div>
                )
            })}
        </div>
    )
}

export default ButtonList;