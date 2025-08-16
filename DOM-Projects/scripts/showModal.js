let getButtonId=document.getElementById('openModal');
let getModalId=document.getElementById('modal-container');
let getCloseButtonID=document.getElementById('close-btn');

//CLick on Button show modal
getButtonId.addEventListener('click', function()
{
    getModalId.style.display="block";
})

//Click on close button hide modal
getCloseButtonID.addEventListener('click',function(){
    getModalId.style.display="none";
})

//click on window if modal is visible hide the modal
window.addEventListener('click', function(e){
    if(e.target === getModalId)
    {
        getModalId.style.display="none";
    }
})