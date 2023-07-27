// loader
window.addEventListener('load', function() {
  var loader = document.getElementById("loader");
  setTimeout(function() {
    loader.style.opacity = "0";
    setTimeout(function() {
      loader.style.display = "none";
    }, 1000);
  }, 1000);
});



// QUALIFICATION
$(document).ready(function(){ 
  $('#not').on('click', function(){
    $('.teamwan').hide();
    $('.teamto').show();
    $('#not').css({"color": "blue"});
    $('#active').css({"color": "var(--dark)"});
  })
  $('#active').on('click', function(){
    $('.teamto').hide();
    $('.teamwan').show();
    $('#not').css({"color": "var(--dark)"});
    $('#active').css({"color": "blue"});
  })
});


// EMAIL
function sendMail(){
  var params = {
    email: document.getElementById("email").value 
  };
  const serviceID = "service_18cuam6";
  const templateID = "template_21enp2v";
  
  emailjs.send(serviceID, templateID, params).then(
    res =>{
      document.getElementById("email").value = "";
      console.log(res);
      alert("Your Email sent Successfully")
    }
    )
    .catch((err) => console.log(err));
  }



  // TOGGLE SWITCH DARK-MODE
  const switchMode = document.getElementById("switch-mode");
  
  switchMode.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });