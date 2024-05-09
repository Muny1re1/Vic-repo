// importing every neccessary component and hook.
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


/*
declaring a BotSpecs function that receives  the props bots and setArmy . The function does the following:
1. The function uses the useNavigate hook from react router dom to navigate the user to the home page while also adding the bot to the army.
This is triggered by clicking on the enlist button.
2. ALso renders the specs of the bot.
3. There is a go back button that takes your back to the hom page.
*/
function BotSpecs({ bots, setArmy }) {
    const navigate = useNavigate();
    const bot = bots.find(bot => bot.id === bot.id);

    function enlist() {
        if (bot) {
            console.log(bot);
            setArmy(prevArmy => (prevArmy ? [...prevArmy, bot] : [bot]));
            navigate('/');
        } else {
            console.error("Bot not found.");
        }
    }

    if (!bot) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='specs-container'>
                <div className="bot-specs">
                    <h2>{bot.name}</h2>
                    <h3>Bot Specs</h3>
                    <img src={bot.avatar_url} alt={bot.name} />
                    <p>Class: {bot.class}</p>
                    <p>Health: {bot.health}</p>
                    <p>Damage: {bot.damage}</p>
                    <p>Armor: {bot.armor}</p>
                </div>
                <Link to="/">
                    <button>Go back</button>
                </Link>
                <button onClick={enlist}>Enlist</button>
            </div>
        </>
    )
}

export default BotSpecs;