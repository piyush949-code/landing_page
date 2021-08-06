import Collapsible from 'react-collapsible';
import { Collapse } from './Collapse';
export const Syllabous = (props) => {
  return (
    <div id='Syllabous' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Syllabus</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
          {/* 01 */}
          <Collapse title="Introduction to AI/ML/Data Science">
          <div> <p>Content of Collapsible</p>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </Collapse>
   
   {/* 02 */}

        <Collapse title="Python Basics">
          <div> <p>Content of Collapsible</p>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </Collapse>

{/* 03 */}

<Collapse title="Supervised/Unsupervised ML">
          <div> <p>Content of Collapsible</p>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </Collapse>
{/* 04 */}
<Collapse title="Decision Tree Classification">
          <div> <p>Content of Collapsible</p>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </Collapse>
{/* 05 */}
<Collapse title="Random Forest Classification">
          <div> <p>Content of Collapsible</p>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </Collapse>
{/* 06 */}
<Collapse title="Linear Regression">
          <div> <p>Content of Collapsible</p>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </Collapse>
{/* 07 */}

<Collapse title="Stochastic Gradient Descent">
          <div> <p>Content of Collapsible</p>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </Collapse>
{/* 08 */}

<Collapse title="Random Forest Regression">
          <div> <p>Content of Collapsible</p>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </Collapse>

        </div>
     <div>

    
     </div>
      </div>
    </div>
  )
}
