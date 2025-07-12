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
