import { Collapse } from './Collapse';
import Button from '@material-ui/core/Button';
export const Syllabous = (props) => {
  return (
    <div id='Syllabous' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Syllabus</h2>
          <p>
          <Button variant="contained" color="primary" className="download_button">
 Download Pdf
</Button>
          </p>
         
          {/* 01 */}
          <Collapse title="Introduction to AI/ML/Data Science">
          <div> 
         
         <p >Artificial Intelligence is a technique for building systems that mimic human behavior or decision-making whereas Machine Learning is a subset of Artificial Intelligence which utilizes statistical methods that enables the computer to act and make data driven decisions to carry out a certain task.  

Data Science is the process of extracting useful insights from data by using a variety of scientific methods, algorithms and machine learning fundamentals.  

 </p>
        </div>
        </Collapse>
   
   {/* 02 */}

        <Collapse title="Python Basics">
          <div> 
        
       <p>Python is a powerful general-purpose programming language. It is used in web development, data science, creating software prototypes, and so on. It is portable , easy-to-learn and free and open-source to anyone. </p>
        </div>
        </Collapse>

{/* 03 */}

<Collapse title="Supervised & Unsupervised ML">
          <div> 
       <p>Supervised learning is a machine learning method in which models are trained using labeled data. It learns from past data and applies the learning to present data to predict future events.  </p>
        <hr /><p>Unsupervised learning, on the other hand, is the method that trains machines to use data that is neither classified nor labeled. </p>
        </div>
        </Collapse>
{/* 04 */}
<Collapse title="Decision Tree Classification">
          <div>                   <p>Decision tree is the most powerful and popular tool for classification and prediction. A Decision tree is a flowchart like tree structure, where each internal node denotes a test on an attribute, each branch represents an outcome of the test, and each leaf node (terminal node) holds a class label. </p>
        </div>
        </Collapse>
{/* 05 */}
<Collapse title="Random Forest Classification">
          <div> 
          <p>A large number of relatively uncorrelated models (trees) operating as a committee will outperform any of the individual constituent models. 

</p>
          </div>
        </Collapse>
{/* 06 */}
<Collapse title="Linear Regression">
          <div> 
         <p>Linear regression analysis is used to predict the value of a variable based on the value of another variable. It is used for finding linear relationship between target and one or more predictors.  

</p>
        </div>
        </Collapse>
{/* 07 */}

<Collapse title="Stochastic Gradient Descent">
          <div> 
          
         <p> 

Stochastic Gradient descent is an iterative algorithm, that starts from a random point on a function and travels down its slope in steps until it reaches the lowest point of that function. 

 </p>
        </div>
        </Collapse>
{/* 08 */}

<Collapse title="Random Forest Regression">
          <div> 
        
        <p>Random Forest Regression is a supervised learning algorithm that uses ensemble learning method for regression. Ensemble learning method is a technique that combines predictions from multiple machine learning algorithms to make a more accurate prediction than a single model. 

</p>
        </div>
        </Collapse>
{/* 09 */}
<Collapse title="Regularization">
          <div>
       <p> 

This technique prevents the model from overfitting by adding extra information to it.  

 

 </p>
        </div>
        </Collapse>
        {/* 10 */}
        <Collapse title="Support Vector Machines (SVM)">
          <div> 
         <p>Support Vector Machine or SVM is one of the most popular Supervised Learning algorithms, which is used for Classification as well as Regression problems. The goal of the SVM algorithm is to create the best line or decision boundary that can segregate n-dimensional space into classes. </p>
        </div>
        </Collapse>
        {/* 11 */}
        <Collapse title="Support Vector Classification">
          <div>
      <p> 

SVM is used for text classification tasks such as category assignment, detecting spam and sentiment analysis. It is also commonly used for image recognition challenges, performing particularly well in aspect-based recognition and color-based classification. 

 </p>
        </div>
        </Collapse>
        {/* 12 */}
        <Collapse title="Support Vector Regression">
          <div> 
        
        <p>Support Vector Machine can also be used as a regression method, maintaining all the main features that characterize the algorithm (maximal margin). </p>
        </div>
        </Collapse>
        {/* 13 */}
        <Collapse title="Tuning of Hyper Parameters">
          <div> 
        <p>Hyperparameter tuning is choosing a set of optimal hyperparameters for
         a learning algorithm. A hyperparameter is a model argument whose value is set
          before the learning process begins. </p>
        </div>
        </Collapse>
        {/* 14 */}
        <Collapse title="Dimensionality Reduction Techniques PCA">
          <div> 
         <p> 

Principal Component Analysis(PCA) is one of the most popular linear dimension reduction.
 Dimensionality Reduction refers to reducing the number of input variables for a dataset. </p>
        </div>
        </Collapse>
        {/* 15 */}
        <Collapse title="Text Mining">
          <div> 
          <p> 

Text Mining is the process of transforming unstructured text into a structured format to identify meaningful patterns and new insights. By applying advanced analytical techniques,
 such as Naïve Bayes, Support Vector Machines (SVM), and other deep learning algorithms. </p>
        </div>
        </Collapse>
        {/* 16 */}
        <Collapse title="Naive Bayes Classifiers (NBC)">
          <div> 
         <p> 

Naive Bayes methods are a set of supervised learning algorithms based 
on applying Bayes’ theorem with the “naive” assumption of conditional independence 
between every pair of features given the value of the class variable.  </p>
        </div>
        </Collapse>
        </div>
     <div>
<contact />
    
     </div>
      </div>
    </div>
  )
}
