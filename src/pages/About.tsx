import Background from '../assets/abt-background-img.jpg'



function About() {
  return (
    <div 
    style={{ backgroundImage:  `url(${ Background })`}} 
    className='flex flex-row mx-auto bg-cover bg-fixed'>
      <div className=''>
        <div className='flex flecx-col place-items-start h-screen'>
          <h1 id='navbar' className='p-12 bg-white bg-opacity-50 text-4xl rounded'>
              Collection / Selection <br/><br/>As an avid collector what some may consider junk, I love finding new things for my collection out in the wild....
               <br/><br/>So I created Reel Bazaar, a place to index movie collections and help you decide if the
              box of VHS tapes you're combing through has anything worth buying (that you don't already have). <br/><br/> It's simple, just sign-up and start adding your wierd
              stuff.. if you find something you're not familiar with, throw it in the search bar and see if it's worth your time.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default About
