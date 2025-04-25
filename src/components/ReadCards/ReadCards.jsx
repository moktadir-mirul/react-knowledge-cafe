import React, { use, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

function ReadingCards({cardsPromise}) {
    const [readItems, setReadItems] = useState([]);

    const handleAdd = (item) => {
        const newReadItems = [...readItems, item];
        setReadItems(newReadItems);
    }
console.log(readItems);

    const cards = use(cardsPromise);

    return(
        <div>
            <h1 className="text-center text-2xl">Number of Cards: {cards.length}</h1>
            <div className="w-11/12 mx-auto my-5 flex gap-5">
                <div className="grid grid-cols-1 gap-5 w-[60%]">
                    {
                        cards.map(card => <SingleCard handleAdd={handleAdd} key={card.id} card={card}></SingleCard>)
                    }
                </div>
                <div className="w-[40%] h-32 border-2 border-red-500 rounded-xl">

                </div>
            </div>
        </div>
    )
}

export default ReadingCards;