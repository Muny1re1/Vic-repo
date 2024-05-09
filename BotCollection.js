// importing the necessary components from their respective files.
import React from 'react';
import { Link } from 'react-router-dom';
import YourBotArmy from './YourBotArmy.js';

// declaring a BtCollection function that receives the props bots, army and setArmy from its parent App.js.
/*
This function does the following things : 1. has an addToArmy function that sets the value of army to that of the selected bot
2. The addToArmy function also checks whether army already contains a bot of the selected bots class and if it does alerts the user if not the bot is added to the army.
3 Usingthe army and set army props the function renders the Your Army component and also renders the bot collection.
This is achieved by mapping through every bot.
4, It also calls to the Link component from react router dom so that when the info of the bot is clicked the user is navigated to the botSpecs component.
*/
function BotCollection({ bots, army, setArmy }) {

    function addToArmy(bot) {
        if (!army.some(existingBot => existingBot.bot_class === bot.bot_class)) {
            setArmy(prevArmy => [...prevArmy, bot]);
        } else {
            alert(`A bot of class ${bot.bot_class} is already in the army. Select a bot from another class.`);
        }
    }

    return (
        <>
        <YourBotArmy army={army} setArmy={setArmy} />
            <div className='bot-container'>
                {bots.map(bot => (
                    <div key={bot.id} className='bot'>
                        <div className="bot-image" onClick={() => addToArmy(bot)}>
                            <img className="avatar-image" src={bot.avatar_url} alt={bot.avatar_url} />
                        </div>
                        <Link to={`/botSpecs/${bot.id}`}>
                            <div className="bot-info">
                                <h3>{bot.name}</h3>
                                <p>{bot.catchphrase}</p>
                                <p>Health: {bot.health} Damage: {bot.damage} Armor: {bot.armor}</p>
                            </div>
                        </Link>
                    </div>
                ))}
                
            </div>
            
        </>
    );
}

export default BotCollection;