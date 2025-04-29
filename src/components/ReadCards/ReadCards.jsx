import React, { use, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import ReadCol from "../ReadCol/ReadCol";

function ReadingCards({cardsPromise}) {
    const [readItems, setReadItems] = useState([]);

    const handleAdd = (item) => {
        const newReadItems = [...readItems, item];
        setReadItems(newReadItems);
    }

    const cards = use(cardsPromise);

    return(
        <div>
            <h1 className="text-center text-2xl">Number of Cards: {cards.length}</h1>
            <div className="w-11/12 mx-auto my-5 flex gap-5 items-start">
                <div className="grid grid-cols-1 gap-5 w-[60%]">
                    {
                        cards.map(card => <SingleCard handleAdd={handleAdd} key={card.id} card={card}></SingleCard>)
                    }
                </div>
                <div className="w-[40%] border-2 border-red-500 rounded-xl p-3">
                    {
                        readItems.map((item, index) => <ReadCol key={index} item={item}></ReadCol>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ReadingCards;