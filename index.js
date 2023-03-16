function contact(event) {
    event.preventDefault();
    alert("Thanks for your Email, we will contact you shortly")
    emailjs
        .sendForm(
            'service_mdrbvep',
            'template_bt598ed',
            event.target,
            '6CAf36LrcVbDwY1FH'
    ).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "the email service is down at the moment, please email us directly at amini.ali5@gmail.com"
        );
    })
}

function reload(){
    location.reload();
}


function takeme(){
    const element = document.getElementById("help");
    element.scrollIntoView(true);
}


function scrollToContact() {
    var contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  