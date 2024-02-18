import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import './globals.css'

const Page = () => {
  return (
    <div className = 'container'>
      <div className = "header">Create your free account below:<div />
      <br />
        <div className = "text">Enter your full name:</div>
        <div className = "underline"></div>

        </div>
          <div className = "inputs">
          <div className = "input">
            <input type = "text" />
        </div>

        <div className = "text">Enter your age:</div>
        <div className = "underline"></div>

        </div>
          <div className = "inputs">
          <div className = "input">
            <input type = "number" />
        </div>

        <div className = "text">What year are you?</div>
        <div className = "underline"></div>

        <div class = "dropdown">
            <button class = "dropbtn">Select</button>
            <div class = "dropdown-content">
                <a href = "#">Year 1</a>
                <a href = "#">Year 2</a>
                <a href = "#">Year 3</a>
                <a href = "#">Year 4</a>
                <a href = "#">Year 5+</a>
            </div>
        </div>

        <div className = "text">What is your major?</div>
        <div className = "underline"></div>

        <div class = "dropdown">
            <button class = "dropbtn">Select</button>
            <div class = "dropdown-content">
                <a href = "#">Computer Science</a>
                <a href = "#">Computer Engineering</a>
                <a href = "#">Computer Science and Engineering</a>
            </div>
        </div>
        
        <div className = "text">What classes are you looking for study buddies in?</div>
        <div className = "underline"></div>

        <div class = "dropdown">
            <button class = "dropbtn">Select</button>
            <div class = "dropdown-content">
                <a href = "#">CS31</a>
                <a href = "#">CS32</a>
                <a href = "#">CS33</a>
                <a href = "#">CS35L</a>
            </div>
        </div>
        <div className = "text">What times do you prefer to meet?</div>
        <div className = "underline"></div>

        <input type = "checkbox" id = "time1" name = "time1" value = "time1value"/>
        <label for = "time1">8:00 am - 9:00 am</label><br></br>
        <input type = "checkbox" id = "time2" name = "time2" value = "time2value"/>
        <label for = "time2">9:00 am - 10:00 am</label><br></br>
        <input type = "checkbox" id = "time3" name = "time3" value = "time3value"/>
        <label for = "time3">10:00 am - 11:00 am</label><br></br>
        <input type = "checkbox" id = "time4" name = "time4" value = "time4value"/>
        <label for = "time4">11:00 am - 12:00 pm</label><br></br>
        <input type = "checkbox" id = "time5" name = "time5" value = "time5value"/>
        <label for = "time5">12:00 pm - 1:00 pm</label><br></br>
        <input type = "checkbox" id = "time6" name = "time6" value = "time6value"/>
        <label for = "time6">1:00 pm - 2:00 pm</label><br></br>
        <input type = "checkbox" id = "time7" name = "time7" value = "time7value"/>
        <label for = "time7">2:00 pm - 3:00 pm</label><br></br>
        <input type = "checkbox" id = "time8" name = "time8" value = "time8value"/>
        <label for = "time8">3:00 pm - 4:00 pm</label><br></br>
        <input type = "checkbox" id = "time9" name = "time9" value = "time9value"/>
        <label for = "time9">4:00 pm - 5:00 pm</label><br></br>
        <input type = "checkbox" id = "time10" name = "time10" value = "time10value"/>
        <label for = "time10">5:00 pm - 6:00 pm</label><br></br>
        <input type = "checkbox" id = "time11" name = "time11" value = "time11value"/>
        <label for = "time11">6:00 pm - 7:00 pm</label><br></br>
        <input type = "checkbox" id = "time12" name = "time12" value = "time12value"/>
        <label for = "time12">7:00 pm - 8:00 pm</label><br></br>
        <input type = "checkbox" id = "time13" name = "time13" value = "time13value"/>
        <label for = "time13">8:00 pm - 9:00 pm</label><br></br>
        <input type = "checkbox" id = "time14" name = "time14" value = "time14value"/>
        <label for = "time9">9:00 pm - 10:00 pm</label><br></br>
        <input type = "checkbox" id = "time15" name = "time15" value = "time15value"/>
        <label for = "time10">10:00 pm - 11:00 pm</label><br></br>

        <br/>
        <button className = "submit">Submit</button>
        
      </div>
    </div>
  );
}
/*
function submit({onSubmit}) {
  return (
    <button className = "submit" onClick = {onSubmit}></button>
  );
}

function handleSubmit() {
  return
}
*/
export default Page;