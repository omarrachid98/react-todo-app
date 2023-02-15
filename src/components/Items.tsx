import { useState } from "react";
import trash from '../svg/trash.svg'

const Items = ({lists, onRemoveItem, setLists, filter}) => {
    const ArrayStatus = [
        {
            id: 0,
            key: 'no_status',
            value: 'Nessuno stato'
        },
        {
            id: 1,
            key: 'in_corso',
            value: 'In corso'
        },
        {
            id: 2,
            key: 'completato',
            value: 'Completato'
        }
    ]

    const colorSelect = {
        completato: 'bg-green-600',
        in_corso: 'bg-yellow-400'
    }

    const handleCheckboxClick = (isChecked, index) => {
        const updatedLists = [...lists];
        updatedLists[index] = {
          ...updatedLists[index],
          status: isChecked ? 'completato' : 'no_status',
          checked: isChecked
        };
        setLists(updatedLists);
    }

    const onSelectChange = (e, index) => {
        const {value} = e.target;
        const updatedLists = [...lists];
        updatedLists[index] = {
          ...updatedLists[index],
          status: e.target.value,
          checked: value === 'completato' ? true : false
        };
        setLists(updatedLists);
    };

    const filteredArray = lists.filter((list) => {
        if(filter === 'all') {
            return list;
        }
        return list.status === filter
    })

    return (
        <div className='flex flex-col items-center justify-center w-full gap-4 border-2 rounded-md border-black p-4'>
            {filteredArray.length > 0 ?
                filteredArray.map((list, index) => {
                return (
                    <div key={index} className='pb-4 w-full border-b-2 last:border-b-0 rounded-0 text-black'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <label className='label-checkbox' htmlFor="checkbox">
                                <input 
                                    type="checkbox" 
                                    name="checkbox" 
                                    id="checkbox" 
                                    checked={list.checked} 
                                    onChange={(e) => handleCheckboxClick(e.target.checked, index)} 
                                    className='checkbox cursor-pointer' 
                                />
                                <span className='checkbox'></span>
                            </label>
                            <p className={list.checked ? 'line-through' : ''}>{list.name}</p>
                            <div className='flex flex-row items-end justify-end ml-auto gap-6'>
                                <div className='flex flex-col'>
                                    <label htmlFor={`status-${list}`}> Stato attività </label>
                                    <select 
                                        name={`${list.name}`} 
                                        onChange={(e) => onSelectChange(e, index)} 
                                        id={`status-${list.name}`} 
                                        className={`rounded-md p-1 border-2 border-black cursor-pointer ${colorSelect[list.status]}`}
                                    >
                                    {ArrayStatus.map((stato, index) => {
                                        return (
                                            <option key={index} value={stato.key} selected={list.checked}> {stato.value} </option>
                                        )
                                    })}
                                    </select>
                                </div>
                                <img 
                                    src={trash} 
                                    alt="trash" 
                                    width='40' 
                                    height='40' 
                                    className='cursor-pointer' 
                                    onClick={() => onRemoveItem(list.name)}
                                />
                            </div>
                        </div>
                    </div>
                )
            }) :
            <p> Nessuno elemento trovato </p>
            }
        </div>
    )
}

export default Items;