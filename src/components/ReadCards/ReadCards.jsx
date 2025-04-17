import React, { use } from "react";
import SingleCard from "../SingleCard/SingleCard";

function ReadingCards({cardsPromise}) {

    const cards = use(cardsPromise);

    return(
        <div>
            <h1 className="text-center text-2xl">Number of Cards: {cards.length}</h1>
            <div className=" w-11/12 mx-auto my-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[70%]">
                    {
                        cards.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
                    }
                </div>
                <div className="w-[30%]"></div>
            </div>
        </div>
    )
}

export default ReadingCards;