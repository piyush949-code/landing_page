import Collapsible from 'react-collapsible';
import { Collapse } from './Collapse';
export const Syllabous = (props) => {
  return (
    <div id='Syllabous' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Syllabous</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
          <Collapse title="Datascience">
          <div> <p>Content of Collapsible</p>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</p>
          
          </div>
        </Collapse>
        </div>
     <div>

    
     </div>
      </div>
    </div>
  )
}
