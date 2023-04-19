import Background from '../assets/background-img.jpg'

function Home() {
  return (
    <div 
    style={{ backgroundImage:  `url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
      <div className='mt-12'>
        <div className='flex place-items-start mt-12 h-screen'>
          <h1 id='navbar' className='p-5 bg-white bg-opacity-50 mt-12 text-4xl rounded'>
              Bizarre things are gathered here.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Home
