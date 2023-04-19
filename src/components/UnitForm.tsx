import Input from './Input'

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import { chooseUnitName, chooseUnitYear, chooseUnitTone, chooseUnitRating, chooseUnitGenre, chooseUnitFormat, chooseUnitDescription, chooseKeyActors } from '../redux/slices/RootSlice'


interface UnitFormProps {
    id?: string;
    data?: {}


}

const UnitForm = (props: UnitFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${props.id}`);
        if (props.id) {
            server_calls.update(props.id, data)
            console.log(`Data: ${data} Props: ${props.id}`)
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            dispatch(chooseUnitName(data.unit_name));
            dispatch(chooseUnitYear(data.unit_year));
            dispatch(chooseUnitTone(data.unit_tone));
            dispatch(chooseUnitRating(data.unit_rating));
            dispatch(chooseUnitGenre(data.unit_genre));
            dispatch(chooseUnitFormat(data.unit_format));
            dispatch(chooseUnitDescription(data.unit_description));
            dispatch(chooseKeyActors(data.key_actors));
            
            server_calls.create(store.getState())
            setTimeout( () => {window.location.reload()}, 1000)

        }
    }

    return (

    <div className="">
     <form className="flex flex-wrap" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-1/4 p-2">
            <label className='block text-gray-700 font-bold mb-2' htmlFor='unit_name'>Name</label>
            <Input {...register('unit_name')} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='unit_name' placeholder='Unit Name'/>
        </div>
        <div className="w-1/4 p-2">
            <label className='block text-gray-700 font-bold mb-2' htmlFor='unit_tone'>Tone</label>
            <Input {...register('unit_tone')} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='unit_tone' placeholder='Unit Tone'/>
        </div>
        <div className="w-1/4 p-2">
            <label className='block text-gray-700 font-bold mb-2' htmlFor='unit_rating'>Rating</label>
            <Input {...register('unit_rating')} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='unit_rating' placeholder='Unit Rating'/>
        </div>
        <div className="w-1/4 p-2">
            <label className='block text-gray-700 font-bold mb-2' htmlFor='unit_genre'>Genre</label>
            <Input {...register('unit_genre')} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='unit_genre' placeholder='Unit Genre'/>
        </div>
        <div className="w-1/4 p-2">
            <label className='block text-gray-700 font-bold mb-2' htmlFor='unit_year'>Year</label>
            <Input {...register('unit_year')} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='unit_year' placeholder='Unit Year'/>
        </div>
        <div className="w-1/4 p-2">
            <label className='block text-gray-700 font-bold mb-2' htmlFor='unit_format'>Format</label>
            <Input {...register('unit_format')} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='unit_format' placeholder='Unit Format'/>
        </div>
        <div className="w-1/4 p-2">
            <label className='block text-gray-700 font-bold mb-2' htmlFor='unit_description'>Description</label>
            <Input {...register('unit_description')} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='unit_description' placeholder='Unit Description'/>
        </div>
        <div className="w-1/4 p-2">
            <label className='block text-gray-700 font-bold mb-2' htmlFor='key_actors'>Key Actors</label>
            <Input {...register('key_actors')} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='key_actors' placeholder='Key Actors'/>
        </div>
        <div className="flex p-1">
            <button
                className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
                Sub and mit
            </button>

        </div>
     </form>
    </div>
  )
}

export default UnitForm

