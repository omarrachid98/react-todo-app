const Filters = ({setFilter}) => {
    const handleChangeFilter = (filterType) => {
        setFilter(filterType)
    }
    return (
        <div className='flex flex-col'>
            <h2 className='text-black text-center'> Filtra per: </h2>
            <div className='flex flex-row items-start justify-start gap-4'>
                <p className="cursor-pointer" onClick={() => handleChangeFilter('all')}> Tutti </p>
                <p className='cursor-pointer' onClick={() => handleChangeFilter('completato')}> Completato </p>
                <p className='cursor-pointer' onClick={() => handleChangeFilter('in_corso')}> In corso </p>
                <p className='cursor-pointer' onClick={() => handleChangeFilter('no_status')}> Nessuno stato </p>
            </div>
        </div>
    )
}

export default Filters;