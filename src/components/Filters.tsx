const Filters = ({setFilter, filters}) => {
    const handleChangeFilter = (filterType) => {
        setFilter(filterType)
    }

    const mapFilters = {
        all: 'Tutti',
        no_status: 'Nessuno stato',
        in_corso: 'In corso',
        completato: 'Completato'
    }

    return (
        <div className='flex flex-col'>
            <h2 className='text-black text-center mb-4'> Filtra per: {mapFilters[filters]} </h2>
            <ul className='flex flex-row items-start justify-start gap-4'>
                <li className="after:bg-sky-600 cursor-pointer" onClick={() => handleChangeFilter('all')}> Tutti </li>
                <li className='after:bg-sky-600 cursor-pointer' onClick={() => handleChangeFilter('completato')}> Completato </li>
                <li className='after:bg-sky-600 cursor-pointer' onClick={() => handleChangeFilter('in_corso')}> In corso </li>
                <li className='after:bg-sky-600 cursor-pointer' onClick={() => handleChangeFilter('no_status')}> Nessuno stato </li>
            </ul>
        </div>
    )
}

export default Filters;