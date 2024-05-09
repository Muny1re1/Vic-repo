// importing the necessary component from react.
import React from 'react';


// declaring the YourBotArmy component which is to be exported as default and accepts the props army and set army which have been passed down from botCollection from app
/*
The function does the following things:
1. Primarily the function renders the army component by mapping through each bots component.
2. There is a button at the top of every bot in the army which when clicked triggeres the dischargeButton function.
This function removes the selected bot from the army and also sends a delete request to the server deleting the bot from the backend.
3. The image of the bot has an onClick property that removes the selected bot from the army.
*/
function YourBotArmy({ army, setArmy }) {

function removeFromArmy(selectedId){
    const updatedArmy = army.filter(bot => bot.id !== selectedId);
    setArmy(updatedArmy);
}

    function dischargeButton(selectedId) {
        const updatedArmy = army.filter(bot => bot.id !== selectedId);
        setArmy(updatedArmy);

        fetch(`http://localhost:3000/bots/${selectedId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(r => {
            if (!r.ok) {
                console.error("Failed to delete bot");
            }
        });
    }

    return (
        <div className='army-container'>
            <p>Army</p>
            <div className='bot-container'>
            {army.map(bot => (
                <div key={bot.id} className="bot">
                    <button onClick={() => dischargeButton(bot.id)}>X</button>
                    <div className="bot-image" onClick={()=>removeFromArmy(bot.id)}>
                        <img src={bot.avatar_url} alt={bot.avatar_url} />
                    </div>
                    <div className="bot-info">
                        <h3>{bot.name}</h3>
                        <p>{bot.catchphrase}</p>
                        <p>Health: {bot.health} Damage: {bot.damage} Armor: {bot.armor}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default YourBotArmy;