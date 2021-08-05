import ProfileCard from "./ProfileCard"
export const Instructor = (props) => {
  return (
    <div id='Instructor' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Instructor</h2>
        </div>
        <div className='row'>
        <ProfileCard
				name="Rita Correia"
				age="32"
				city="London"
				followers="80K"
				likes="803K"
				photos="1.4K"
			></ProfileCard>



        </div>
      </div>
    </div>
  )
}
