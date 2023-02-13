import Button from "./Button.tsx"

const Form = ({name, onNameChange, onClickButton}) => {
    return (
        <div className='flex flex-row w-full justify-between gap-4'>
            <form className='w-full'>
                <input 
                    className='rounded-lg border-2 border-black p-2 outline-none w-full text-black' 
                    type="text" 
                    name='name' 
                    id='name' 
                    value={name} 
                    onChange={onNameChange} 
                    placeholder='Aggiungi attività' 
                />
            </form>
            <Button
                bgColor='bg-sky-600'
                textColor='text-red'
                onClickButton={onClickButton}
            > Aggiungi </Button>
        </div>
    )
}

export default Form;