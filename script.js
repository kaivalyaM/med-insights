const phoneNumber = "919324316541";

const message =
  "Hi, I want help with research / data analysis. My requirement is:";

const whatsappLink =
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

document.getElementById("whatsappHero").href = whatsappLink;
document.getElementById("whatsappContact").href = whatsappLink;
document.getElementById("whatsappFloating").href = whatsappLink;
