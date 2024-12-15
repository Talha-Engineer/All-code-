
    function to_do() {
        
        let screen = document.getElementById("screen").value;
        insertData(screen);

    }

    // to_do list
    function insertData(screen){
        let table = document.getElementById("dataTable");
        let row= table.insertRow(-1);
        row.innerHTML =`
        <td>${screen}</td>
        `;
    }

    // temperature converter
    function fahrenHight(){
        let fahrenHight = document.getElementById("fahrenHight").value;
        let total = (fahrenHight - 32) * 5/9 ; 
        document.getElementById("fahrenHight-screen").value = total;
    }

    function celciusScale(){
        let celciusScale  = document.getElementById("celciusScale").value;
    
        let total =  (9/5)* celciusScale +32;
        document.getElementById("celciusScale-screen").value = total;
    }

    // dropdown menu
    function dropdown() {
        let dropdown = document.getElementById("myDropdown");
        let selectedOption = dropdown.options[dropdown.selectedIndex].text;
    
        if (selectedOption) {
            alert(selectedOption + " is selected");
        } else {
            alert("Sorry! No option is selected.");
        }
    }
    
// Timer
    let timer;
    let startTime;
    let elapsedTime = 0;

    function startTimer() {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
    }

    function updateTimer() {
        const time = Date.now() - startTime;
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        document.getElementById('timer').innerText = 
            `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    function pad(num) {
        return num.toString().padStart(2, '0');
    }

    document.getElementById('startButton').addEventListener('click', startTimer);
    document.getElementById('stopButton').addEventListener('click', stopTimer);



    function checkPalindrome() {
      let inputText = document.getElementById('inputText').value;
      let cleanedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      let reversedText = cleanedText.split('').reverse().join('');
      let result = (cleanedText === reversedText) ? "Yes, it's a palindrome!" : "No, it's not a palindrome.";
      document.getElementById('result').innerText = result;
     }

     function generateRandomNumber() {
         const randomNumber = Math.floor(Math.random() * 100) + 1;
         document.getElementById('number').innerText = randomNumber;
         }

         function appendValue(value) {
            document.getElementById('display').value += value;
        }
    
        function clearDisplay() {
            document.getElementById('display').value = '';
        }
    
        function calculate() {
            try {
                let result = eval(document.getElementById('display').value);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }