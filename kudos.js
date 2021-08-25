javascript: 
(function () { 
    var btns = Array.from(document.getElementsByTagName('button')); 
    btns.forEach(function (btn) { 
        if (btn.getAttribute('data-testid') == 'kudos_button') { 
            if (btn.getAttribute('title') != 'View all kudos') { 
                btn.click(); 
            } 
        } 
    }); 
})()