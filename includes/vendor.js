// Carregar jQuery

// Carregar SweetAlert
const scriptSweetAlert = document.createElement("script");
scriptSweetAlert.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
scriptSweetAlert.defer = true;
document.head.appendChild(scriptSweetAlert);

// Carregar Bootstrap JS
const scriptBootstrap = document.createElement("script");
scriptBootstrap.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
scriptBootstrap.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM";
scriptBootstrap.crossOrigin = "anonymous";
scriptBootstrap.defer = true;
document.head.appendChild(scriptBootstrap);

const scriptAos = document.createElement("script");
scriptAos.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
scriptAos.crossOrigin = "anonymous";
scriptAos.defer = true;
document.head.appendChild(scriptAos);

// GSAP Core
const scriptGSAP = document.createElement("script");
scriptGSAP.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js";
scriptGSAP.crossOrigin = "anonymous";
scriptGSAP.defer = true;
document.head.appendChild(scriptGSAP);

// ScrollTrigger
const scriptScrollTrigger = document.createElement("script");
scriptScrollTrigger.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js";
scriptScrollTrigger.crossOrigin = "anonymous";
scriptScrollTrigger.defer = true;
document.head.appendChild(scriptScrollTrigger);

const select2Trigger = document.createElement("script");
select2Trigger.src = "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";
select2Trigger.crossOrigin = "anonymous";
select2Trigger.defer = true;
document.head.appendChild(select2Trigger);
