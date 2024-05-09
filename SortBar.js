import React from 'react';

function SortBar({ bots, setBots, definate }) {

    function onlyDisplay(event) {
        const selectedValue = event.target.value;
        setBots(definate);
        
        if (selectedValue === 'All') {
            setBots(bots);
        } else {
            const displayed = bots.filter(bot => bot.bot_class === selectedValue);
            setBots(displayed);
        }
    }

    function filterFunction(event) {
        const propertyToSortBy = event.target.value;
        const sortedBots = [...bots].sort((a, b) => {
            if (a[propertyToSortBy] < b[propertyToSortBy]) return -1;
            if (a[propertyToSortBy] > b[propertyToSortBy]) return 1;
            return 0;
        });
        setBots(sortedBots);
    }

    return (
        <div className='filter-element'>
            <select onChange={onlyDisplay}>
                <option value="All">All</option>
                <option value="Captain">Captain</option>
                <option value="Support">Support</option>
                <option value="Witch">Witch</option>
                <option value="Defender">Defender</option>
                <option value="Assault">Assault</option>
                <option value="Medic">Medic</option>
            </select>
            <select className='bot-filter' onChange={filterFunction}>
                <option value="id">id</option>
                <option value="health">Health</option>
                <option value="damage">Damage</option>
                <option value="armor">Armor</option>
            </select>
        </div>
    );
}

export default SortBar;