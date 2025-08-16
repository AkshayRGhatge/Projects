const getIconClass= document.querySelectorAll('.icon')


//loop through all the icon items 
getIconClass.forEach((item)=>{
    item.addEventListener('click', function(){
      
       //get the parent class
       const getAccordionPlaceholder=item.closest('.accordion-placeholder');
      
        //now from parent class look for the accordion body
        const getAccordionBody =getAccordionPlaceholder.querySelector('.accordion-body');

        // Before doing any further action check if any open accordion is open. if open then close it 
         document.querySelectorAll('.accordion-body').forEach((accordionItems)=>{
               if (accordionItems != getAccordionPlaceholder)
               {
                    accordionItems.classList.remove('active');
               }
        })

        // Reset other icons 
        getIconClass.forEach((icon)=>{
            if(icon != getIconClass)
            {
                icon.innerHTML= '&#43;';
            }
        })

        // Toggle active class for show/hide the placeholder
        getAccordionBody.classList.toggle('active');

    
        //Update the inner html for the icon 
        item.innerHTML= getAccordionBody.classList.contains('active') ? "&#8722" : "&#43;";
       
    })

})