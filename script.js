const sundayInput = document.querySelector('#Sunday')
const mondayInput = document.querySelector('#Monday')
const tuesdayInput = document.querySelector('#Tuesday')
const wednesdayInput = document.querySelector('#Wednesday')
const thursdayInput = document.querySelector('#Thursday')
const fridayInput = document.querySelector('#Friday')
const saturdayInput = document.querySelector('#Saturday')
const submitButton = document.querySelector('#submit')

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const sunday = parseInt(sundayInput.value,10);
    const monday = parseInt(mondayInput.value,10);
    const tuesday = parseInt(tuesdayInput.value,10);
    const wednesday = parseInt(wednesdayInput.value,10);
    const thursday = parseInt(thursdayInput.value,10);
    const friday = parseInt(fridayInput.value,10);
    const saturday = parseInt(saturdayInput.value,10);
  
      localStorage.setItem('sunday', sunday);
      localStorage.setItem('monday', monday);
      localStorage.setItem('tuesday', tuesday);
      localStorage.setItem('wednesday', wednesday);
      localStorage.setItem('thursday', thursday);
      localStorage.setItem('friday', friday);
      localStorage.setItem('saturday', saturday);
    
//TODO coding for total hours / 7 for average hours per week

const totalHours = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]

console.log (totalHours)

    // TODO: Calculate and display the average salary
  
    const addedHours = sunday + monday + tuesday + wednesday + thursday + friday + saturday

    console.log (addedHours)

  
  const averageHours = addedHours / 7;
  
  console.log(`Your average number of hours slept per night is ${averageHours.toFixed(2)}`);
  
  if (averageHours > 7) {
    alert(`Your average number of hours slept per night is ${averageHours.toFixed(2)}. This week you slept a healthy amount. Good Job! `)
    } else {
      alert(`Your average number of hours slept per night is ${averageHours.toFixed(2)}. You should try to sleep more to avoid to avoid health issues.`)
    }
  }
)


