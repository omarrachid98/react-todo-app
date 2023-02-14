import { useState } from "react";
import trash from '../svg/trash.svg'

const Items = ({lists, onRemoveItem}) => {
    const [checkboxes, setCheckboxes] = useState(lists.map(() => false));
    
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

    //we  need to update the status state to an array of statuses for each item, which is initially set to an array of the first status:
    const [status, setStatus] = useState(lists.map(() => ArrayStatus[0].key));

    const colorSelect = {
        completato: 'bg-green-600',
        in_corso: 'bg-yellow-400'
    }

    const handleCheckboxClick = (isChecked, index) => {
        setCheckboxes((prevChecked) => {
            const updateChecked = [...prevChecked];
            updateChecked[index] = isChecked;
            return updateChecked;
        })

        setStatus((prevStatus) => {
            const updatedStatus = [...prevStatus];
            updatedStatus[index] = isChecked ? 'completato' : 'in_corso';
            return updatedStatus;
        });
    }

    const onSelectChange = (e, index) => {
        const selectedStatus = e.target.value;
        setStatus((prevStatus) => {
            const updatedStatus = [...prevStatus];
            updatedStatus[index] = selectedStatus;
            return updatedStatus;
        });
      };

    return (
        <div className='flex flex-col items-center justify-center w-full gap-4 border-2 rounded-md border-black p-4'>
            {lists.map((list, index) => {
                return (
                    <div key={index} className='pb-4 w-full border-b-2 last:border-b-0 rounded-0 text-black'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <input 
                                type="checkbox" 
                                name="checkbox" 
                                id="checkbox" 
                                checked={checkboxes[index] || status[index] === 'completato'} 
                                onChange={(e) => handleCheckboxClick(e.target.checked, index)} 
                                className='cursor-pointer' 
                            />
                            <p className={(checkboxes[index] || status[index] === 'completato') ? 'line-through' : ''}>{list}</p>
                            <div className='flex flex-row items-end justify-end ml-auto gap-6'>
                                <div className='flex flex-col'>
                                    <label htmlFor={`status-${list}`}> Stato attività </label>
                                    <select 
                                        name={`${list}`} 
                                        onChange={(e) => onSelectChange(e, index)} 
                                        id={`status-${list}`} 
                                        className={`rounded-md p-1 border-2 border-black cursor-pointer ${colorSelect[status[index]]}`}
                                        value={status[index]}
                                    >
                                    {ArrayStatus.map((stato, index) => {
                                        return (
                                            <option key={index} value={stato.key}> {stato.value} </option>
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
                                    onClick={() => onRemoveItem(list)}
                                />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Items;