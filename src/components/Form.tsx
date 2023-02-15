import Button from "./Button.tsx"

const Form = ({name, onNameChange, onClickButton}) => {
    return (
        <div className='flex flex-row w-full justify-between gap-4'>
            <div className='input-group w-full'>
                <input 
                    className='input-activity w-full' 
                    type="text" 
                    name='name' 
                    id='name' 
                    value={name} 
                    onChange={onNameChange} 
                    placeholder=" "
                />
                <label htmlFor="name" className="placeholder">Aggiungi attività</label>
            </div>
            <Button
                bgColor='bg-sky-600'
                textColor='text-red'
                onClickButton={onClickButton}
            > Aggiungi </Button>
        </div>
    )
}

export default Form;