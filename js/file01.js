"use strict";

const showToast = () => {
    const toast = document.getElementById("toast-interactive");
    if (toast) {
        toast.classList.add("md:block");
    }
};

(() => {
    alert("Bienvenido/a");
    console.log("Bienvenido/a");
})();