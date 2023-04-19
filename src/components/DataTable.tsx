import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    { field: 'unit_name', headerName: 'Name', flex: 1},
    { field: 'unit_year', headerName: 'Year', flex: 1},
    { field: 'unit_tone', headerName: 'Tone', flex: 1},
    { field: 'unit_rating', headerName: 'Rating', flex: 1},
    { field: 'unit_genre', headerName: 'Genre', flex: 1},
    { field: 'unit_format', headerName: 'Format', flex: 1},
    { field: 'unit_description', headerName: 'Description', flex: 1},
    { field: 'key_actors', headerName: 'Key Actors', flex: 1},

]



function DataTable() {

    const [open, setOpen ] = useState(false);
    const {EntertainmentUnitData, getData} = useGetData();
    const [selectionModel, setSelectionModel] = useState<string[]>([]); 


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection Model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500);
    }

    const [description, setDescription] = useState([])
    const [search, setSearch] = useState<string | null>(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        async function fetchData() {
        setLoading(true);

            const data = await fetch(`https://search.imdbot.workers.dev/?q=${search}`)
            .then((res) => res.json())
            setDescription(data.description[0])
            console.log(data)
            setLoading(false)
        }
        fetchData();
    }, [search])

  return (
        <>
            <Modal 
                open={open}
                onClose={handleClose}
            />
            <div id="navbar" className=' bg-slate-600 flex flex-row p-5 justify-between shadow-xl'>
                <div className='flex flex-row'>
                    <div>
                        <button className='p-3 m-2 bg-slate-600 rounded hover:bg-slate-800 hover:text-white' onClick={handleOpen}>
                            Document New E.U.
                        </button>
                    </div>
                    <div>
                        <button onClick={handleOpen} className='p-3 m-2 bg-slate-600 rounded hover:bg-slate-800 hover:text-white'>
                        Ammend E.U.
                        </button>
                    </div>
                    <div>
                        <button onClick={deleteData} className='p-3 m-2 bg-slate-600 rounded hover:bg-slate-800 hover:text-white'>
                        Exile E.U.
                        </button>
                    </div>
                </div>
                <div className="justify-end">
                    <input className="rounded p-3 m-2" type="search" placeholder="IMdb Search" onChange={(e) => setSearch(e.target.value)} />
                </div> 
            </div>
            <div id="navbar" className='flex flex-row justify-between p-3 m-5'>
                    <div className='flex flex-row bg-white rounded'>
                        <h1>{JSON.stringify(description['#TITLE'])}</h1>
                    </div>
                    <div className='flex flex-row bg-white rounded'>
                        <h1>{JSON.stringify(description['#YEAR'])}</h1>
                    </div>
                    <div className='flex flex-row bg-white rounded'>
                        <h1>{JSON.stringify(description['#ACTORS'])}</h1>
                    </div>
                    <div className='flex flex-row bg-white rounded'>
                        <h1>{JSON.stringify(description['#RANK'])}</h1>
                    </div>
                </div> 
            
        
            <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
                style={{ height: 400, width: '100%' }}
                >
                    <h2 id="navbar" className="p-3 bg-slate-300 my-2 rounded justify-center align-center">Your Bazaar</h2>
                    <DataGrid rows={EntertainmentUnitData} columns={columns} rowsPerPageOptions={[8]}
                    checkboxSelection={true} 
                    onSelectionModelChange={ (item:any) => {
                        setSelectionModel(item);
                    }
                }/>
            </div>

        </>
  )
}

export default DataTable
