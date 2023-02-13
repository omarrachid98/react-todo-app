import { useState } from "react";
import trash from '../svg/trash.svg'

const Items = ({lists, onRemoveItem}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [status, setStatus] = useState('no_status');
    
    const ArrayStatus = [
        {
            key: 'no_status',
            value: 'Nessuno stato'
        },
        {
            key: 'in_corso',
            value: 'In corso'
        },
        {
            key: 'completato',
            value: 'Completato'
        }
    ]

    const colorSelect = {
        completato: 'bg-green-600',
        in_corso: 'bg-yellow-400',
        no_status : 'bg-slate-400'
    }

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked)
    }

    const onSelectChange = (e) => {
        setStatus(e.target.value);
    }

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
                                checked={isChecked} 
                                onChange={handleCheckboxClick} 
                                className='cursor-pointer' 
                            />
                            <p className={isChecked ? 'line-through' : ''}>{list}</p>
                            <div className='flex flex-row items-start justify-start ml-auto gap-6'>
                                <div className='flex flex-col'>
                                    <label htmlFor="status"> Stato attività </label>
                                    <select name="status" onChange={onSelectChange} id="status" className={`rounded-md p-1 border-2 border-black cursor-pointer ${colorSelect[status]}`}>
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