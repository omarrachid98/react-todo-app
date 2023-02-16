import Button from "./Button.tsx"

const Form = ({name, onNameChange, onClickButton}) => {
    return (
        <form onSubmit={onClickButton} className='input-group w-full'>
            <div className='flex flex-row w-full justify-between gap-4'>
                <input 
                    className='input-activity w-full' 
                    type="text" 
                    name='name' 
                    id='name' 
                    value={name} 
                    onChange={onNameChange} 
                    placeholder=" "
                />
                <label htmlFor="name" className="placeholder">Aggiungi..</label>
                <Button
                    bgColor='bg-sky-600'
                    textColor='text-white'
                    > Aggiungi 
                </Button>
            </div>
        </form>
    )
}

export default Form;