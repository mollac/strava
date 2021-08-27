javascript:(
  function(){
    var btns=Array.from(document.getElementsByTagName('button'));
    btns.forEach(function (btn){
      if(btn.getAttribute('data-testid')=='kudos_button'){
        ch=btn.children[0].getAttribute('data-testid');
        if(ch=='unfilled_kudos'){
          btn.click();}
          else{
            console.log('Already clicked!');
          }
        }
      }
    );
  }
)()