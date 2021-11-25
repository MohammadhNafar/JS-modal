


let mode;


function runMessage()
{
    if
    (mode == "Alert")
    {
        alert(alertTxt.value);
    }
    else if
    (mode == "confirm")
    {
         confirm(confirmTxt.value);
    }
    else if 
    (mode == "Prompt")
    {
        prompt(promptTxt.value)
    }
};

//box confirm
const confirm1 = document.getElementById("confirm");
const boxConfirm = document.getElementById("boxConfirm");
const closeConfirm = document.getElementById('closeConfirm');

confirm1.addEventListener('click',()=>{
    boxConfirm.classList.add('show');
    mode = "confirm";
    Prompt.disabled = true;
    Alert.disabled = true;
})


closeConfirm.addEventListener('click',()=>{
    boxConfirm.classList.remove('show');
    alert(null);
    Prompt.disabled = false;
    Alert.disabled = false;
})


//box prompt
const Prompt = document.getElementById("prompt");
const boxPrompt = document.getElementById("boxPrompt");
const closePrompt = document.getElementById('closePrompt');



Prompt.addEventListener('click',()=>{
    boxPrompt.classList.add('show');
    mode = "Prompt"
    confirm1.disabled = true;
    Alert.disabled = true;
})


closePrompt.addEventListener('click',()=>{
    boxPrompt.classList.remove('show');
    alert(null);
    confirm1.disabled = false;
    Alert.disabled = false;
})

const Alert = document.getElementById("alert");
const boxAlert = document.getElementById("boxAlert");
const closeAlert = document.getElementById('closeAlert');


Alert.addEventListener('click',()=>{
    boxAlert.classList.add('show');
    mode = "Alert";
    Prompt.disabled = true;
    confirm1.disabled = true;  
})


closeAlert.addEventListener('click',()=>{
    boxAlert.classList.remove('show');
    alert(null);
    Prompt.disabled = false;
    confirm1.disabled = false;
})


document.addEventListener('keydown',function(event){

    if(event.key == "Escape")
    {
        alert(null)
        boxPrompt.classList.remove('show');
        boxAlert.classList.remove('show');
        boxConfirm.classList.remove('show');

    }
});

let body = document.querySelector('body')
document.addEventListener('click',function(event)
{
    if(event.target === body)
    {
        boxConfirm.classList.remove('show');
        boxPrompt.classList.remove('show');
        boxAlert.classList.remove('show');
        Prompt.disabled = false;
         Alert.disabled = false;
    confirm1.disabled = false;
    
    }
    
})
