import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { department, semester, sub3rdSem, sub5thSem, sub7thSem, cse4thSemSub } from '../array';

const SelectionPage = () => {

  const [dept, setDept] = useState('');
  const [sem, setSem] = useState('');
  const [sub, setSub] = useState('');

  console.log(dept);
  return (
    <div >
        <div className='header'>
           <h3>Tulsiramji Gaikwad-Patil College of Engineering and Technology</h3>
        </div>

        <h3 className='heading'>COs and POs Mapping</h3>

        <div className='select'>
          <div className='box'>
          <h3 className='select-head'>Select the Department</h3>
            <select 
               className='select-box'
               onChange={e => setDept(e.target.value)}>
                {department.map(dept => (
                  <option key={dept} value={dept}>{dept}</option> 
                ))}
            </select>
          </div>
          <div className='box'>
          <h3 className='select-head'>Select the Academic Semester</h3>
            <select 
               className='select-box'
               onChange={e => setSem(e.target.value)}>
               {semester.map(sem => (
                  <option key={sem} value={sem}>{sem}</option>
               ))}
            </select>
          </div>
          <div className='box'>
          <h3 className='select-head'>Select the Subject</h3>
           {
              dept === 'Computer Science Engineering' && sem === '4th Semester' && 
              <select 
              className='select-box'
              onChange={e => setSub(e.target.value)}>
                {cse4thSemSub.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
            </select>
            }
            {
              dept === 'Information Technology' && sem === '3rd Semester' && 
              <select 
              className='select-box'
              onChange={e => setSub(e.target.value)}>
                {sub3rdSem.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
            </select>
            }
            {
              dept === 'Information Technology' && sem === '5th Semester' && 
              <select 
              className='select-box'
              onChange={e => setSub(e.target.value)}>
                {sub5thSem.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
            </select>
            }
            {
              dept === 'Information Technology' && sem === '7th Semester' && 
              <select 
              className='select-box'
              onChange={e => setSub(e.target.value)}>
                {sub7thSem.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
            </select>
            }
          </div>
        </div>
       
          <div className='btn-container'>
            <Link to="/table">
              <button className='btn-submit'>Submit</button>
            </Link>
          </div>
        
    </div>
  )
}

export default SelectionPage