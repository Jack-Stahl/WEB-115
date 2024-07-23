// Retrieve input elements for Sunday
var sundayBreakfast = document.getElementById("sunday-breakfast");
var sundaySnack1 = document.getElementById("sunday-snack1");
var sundayLunch = document.getElementById("sunday-lunch");
var sundaySnack2 = document.getElementById("sunday-snack2");
var sundayDinner = document.getElementById("sunday-dinner");

// Retrieve input elements for Monday
var mondayBreakfast = document.getElementById("monday-breakfast");
var mondaySnack1 = document.getElementById("monday-snack1");
var mondayLunch = document.getElementById("monday-lunch");
var mondaySnack2 = document.getElementById("monday-snack2");
var mondayDinner = document.getElementById("monday-dinner");

// Retrieve input elements for Tuesday
var tuesdayBreakfast = document.getElementById("tuesday-breakfast");
var tuesdaySnack1 = document.getElementById("tuesday-snack1");
var tuesdayLunch = document.getElementById("tuesday-lunch");
var tuesdaySnack2 = document.getElementById("tuesday-snack2");
var tuesdayDinner = document.getElementById("tuesday-dinner");

// Retrieve input elements for Wednesday
var wednesdayBreakfast = document.getElementById("wednesday-breakfast");
var wednesdaySnack1 = document.getElementById("wednesday-snack1");
var wednesdayLunch = document.getElementById("wednesday-lunch");
var wednesdaySnack2 = document.getElementById("wednesday-snack2");
var wednesdayDinner = document.getElementById("wednesday-dinner");

// Retrieve input elements for Thursday
var thursdayBreakfast = document.getElementById("thursday-breakfast");
var thursdaySnack1 = document.getElementById("thursday-snack1");
var thursdayLunch = document.getElementById("thursday-lunch");
var thursdaySnack2 = document.getElementById("thursday-snack2");
var thursdayDinner = document.getElementById("thursday-dinner");

// Retrieve input elements for Friday
var fridayBreakfast = document.getElementById("friday-breakfast");
var fridaySnack1 = document.getElementById("friday-snack1");
var fridayLunch = document.getElementById("friday-lunch");
var fridaySnack2 = document.getElementById("friday-snack2");
var fridayDinner = document.getElementById("friday-dinner");

// Retrieve input elements for Saturday
var saturdayBreakfast = document.getElementById("saturday-breakfast");
var saturdaySnack1 = document.getElementById("saturday-snack1");
var saturdayLunch = document.getElementById("saturday-lunch");
var saturdaySnack2 = document.getElementById("saturday-snack2");
var saturdayDinner = document.getElementById("saturday-dinner");

// Retrieve Buttons and form
var clearButton = document.getElementById("ClearButton");
var formButton = document.getElementById("FormButton");
const form = document.getElementById("myForm");
var userName = document.getElementById("Name");
var weeklyGoal = document.getElementById("weeklyGoal");


// Button Event Listeners

clearButton.addEventListener("click", function() {
    var textInputs = document.querySelectorAll("input[type='text'], textarea");
    
    textInputs.forEach(function(input) {
        input.value = "";
    });
});

formButton.addEventListener("click", function() {
    // Check if the form is valid
    if (form.checkValidity()) {
        var myWindow = window.open("", "7 Day Mealplan", "");

        myWindow.document.open();
        myWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>7 Day Meal Plan</title>
                <style>
                    * {
                        box-sizing: border-box;
                    }
                    html, body {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                    }
                    #bannerimage {
                        width: 100%;
                        height: 311.5px;
                        background-image: url("Fitness Banner.png");
                        background-position: center;
                        background-size: contain;
                        background-color: black;
                        background-repeat: no-repeat;
                    }
                    body {
                        background-color: #22232b; 
                        color: #fff; 
                        font-family: Arial, sans-serif; 
                    }
                    .container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 50px;
                        padding: 20px;
                    }
                    .day {
                        text-align: center;
                        font-size: x-large;
                        width: 200px;
                    }
                    .meal, .snack {
                        margin: 5px 0;
                        padding: 10px;
                        font-size: medium;
                        color: #fff;
                        border: 1px solid #fff; 
                        border-radius: 5px; 
                        background-color: rgba(255, 255, 255, 0.1); 
                    }
                    h5 {
                        margin: 20px 0;
                    }
                    .button {
                        font-size: 18px;
                        padding: 15px 30px;
                        border: none;
                        background-color: #19142b;
                        color: white;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        cursor: pointer;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                        transition: transform 0.3s ease-in-out;
                    }
                    .button:hover {
                        transform: scale(1.1);
                        box-shadow: 0 8px 16px rgba(0,0,0,0.3);
                    }
                    .form-container {
                        text-align: center;
                        margin: 20px 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                </style>
            </head>
            <body>
                <h1>${Name.value}'s Seven Day Meal Plan</h1>
                <h2>Goal: ${weeklyGoal.value}</h2>
                <div class="container">
                    <div id="Sunday" class="day">
                        <h2>Sunday</h2>
                        <h5>Breakfast</h5>
                        <p>${sundayBreakfast.value}</p>
                        <h5>Snack</h5>
                        <p>${sundaySnack1.value}</p>
                        <h5>Lunch</h5>
                        <p>${sundayLunch.value}</p>
                        <h5>Snack</h5>
                        <p>${sundaySnack2.value}</p>
                        <h5>Dinner</h5>
                        <p>${sundayDinner.value}</p>
                    </div>
                    <div id="Monday" class="day">
                        <h2>Monday</h2>
                        <h5>Breakfast</h5>
                        <p>${mondayBreakfast.value}</p>
                        <h5>Snack</h5>
                        <p>${mondaySnack1.value}</p>
                        <h5>Lunch</h5>
                        <p>${mondayLunch.value}</p>
                        <h5>Snack</h5>
                        <p>${mondaySnack2.value}</p>
                        <h5>Dinner</h5>
                        <p>${mondayDinner.value}</p>
                    </div>
                    <div id="Tuesday" class="day">
                        <h2>Tuesday</h2>
                        <h5>Breakfast</h5>
                        <p>${tuesdayBreakfast.value}</p>
                        <h5>Snack</h5>
                        <p>${tuesdaySnack1.value}</p>
                        <h5>Lunch</h5>
                        <p>${tuesdayLunch.value}</p>
                        <h5>Snack</h5>
                        <p>${tuesdaySnack2.value}</p>
                        <h5>Dinner</h5>
                        <p>${tuesdayDinner.value}</p>
                    </div>
                    <div id="Wednesday" class="day">
                        <h2>Wednesday</h2>
                        <h5>Breakfast</h5>
                        <p>${wednesdayBreakfast.value}</p>
                        <h5>Snack</h5>
                        <p>${wednesdaySnack1.value}</p>
                        <h5>Lunch</h5>
                        <p>${wednesdayLunch.value}</p>
                        <h5>Snack</h5>
                        <p>${wednesdaySnack2.value}</p>
                        <h5>Dinner</h5>
                        <p>${wednesdayDinner.value}</p>
                    </div>
                    <div id="Thursday" class="day">
                        <h2>Thursday</h2>
                        <h5>Breakfast</h5>
                        <p>${thursdayBreakfast.value}</p>
                        <h5>Snack</h5>
                        <p>${thursdaySnack1.value}</p>
                        <h5>Lunch</h5>
                        <p>${thursdayLunch.value}</p>
                        <h5>Snack</h5>
                        <p>${thursdaySnack2.value}</p>
                        <h5>Dinner</h5>
                        <p>${thursdayDinner.value}</p>
                    </div>
                    <div id="Friday" class="day">
                        <h2>Friday</h2>
                        <h5>Breakfast</h5>
                        <p>${fridayBreakfast.value}</p>
                        <h5>Snack</h5>
                        <p>${fridaySnack1.value}</p>
                        <h5>Lunch</h5>
                        <p>${fridayLunch.value}</p>
                        <h5>Snack</h5>
                        <p>${fridaySnack2.value}</p>
                        <h5>Dinner</h5>
                        <p>${fridayDinner.value}</p>
                    </div>
                    <div id="Saturday" class="day">
                        <h2>Saturday</h2>
                        <h5>Breakfast</h5>
                        <p>${saturdayBreakfast.value}</p>
                        <h5>Snack</h5>
                        <p>${saturdaySnack1.value}</p>
                        <h5>Lunch</h5>
                        <p>${saturdayLunch.value}</p>
                        <h5>Snack</h5>
                        <p>${saturdaySnack2.value}</p>
                        <h5>Dinner</h5>
                        <p>${saturdayDinner.value}</p>
                    </div>
                </div>
                <div class="form-container">
                    <input type="button" id="printButton" value="Print" class="button">
                </div>
                <script>
                    document.addEventListener('DOMContentLoaded', function() {
                        var printButton = document.getElementById("printButton");
                        printButton.addEventListener("click", function() {
                            window.print();
                        });
                    });
                </script>
            </body>
            </html>
        `);
        myWindow.document.close(); // Close the document stream
    } else {
        form.reportValidity();
    }
});
