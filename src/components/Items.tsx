import { useState } from "react";
import trash from '../svg/trash.svg'

const Items = ({lists, onRemoveItem}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div className='flex flex-col items-center justify-center w-full gap-4'>
            {lists.map((list, index) => {
                return (
                    <div key={index} className='bg-gray-300 p-2 rounded-md w-full text-black'>
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
                            <div className='ml-auto'>
                                <img 
                                    src={trash} 
                                    alt="trash" 
                                    width='20' 
                                    height='20' 
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