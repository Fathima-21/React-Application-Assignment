import React,{useState} from 'react'
export const Register =(props) =>{
    const [firstname,setFname]=useState('');
    const [lastname,setLname]=useState('');

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(firstname)
      console.log(lastname)
    }

    

    return(
        <>
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <label for="firstname">First Name</label>
            <input value={firstname} onChange={(e)=> setFname(e.target.value)}type="text" placeholder="enter your first name" id="firstname" name="firstname"/>
            <br/>
            <label for="lastname">Lastname</label>
            <input value={lastname} onChange={(e) => setLname(e.target.value)}type="text" placeholder="enter your last name" id="lastname" name="lastname"/>
            <br/>
            <label>About Yourself</label>
            <textarea name="textarea" rows="10" cols="50"/>
            <br/>
            <label>Image</label>
            <input type="file"/>
            <br/>
            <label>Age : </label>
            <select name="Age" value="Age">
            <option value="11-20">11-20</option>
            <option value="21-30">21-30</option>
            <option value="31-40">31-40</option>
             </select>
             <br/>
             <label>Gender: </label>
             <input type="radio" name="gender" id="male">
                <span id="male">Male</span>
             </input>
             <input type="radio" name="gender" id="female">
                <span id="female">Female</span>
             </input>
             <br/>
             <label>Skills :</label>
             <input type="checkbox" name="react" id="react">
                <span id="react">React</span>
             </input>
             <input type="checkbox" name="java" id="java">
                <span id="java">Java</span>
             </input>
             <input type="checkbox" name="nodejs" id="nodejs">
               <span id="nodejs">NodeJs</span>
                 </input>
                 <input type="checkbox" name=".net" id=".net">
                  <span id=".net">.Net</span>
                 </input>
                 <br/>
                 <button>Register</button>

        </form>
        <button onClick={() =>props.onFormSwitch('login')}>Already have an account?Login here</button>
        </div>
        </>
    )
}