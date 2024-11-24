document.addEventListener("DOMContentLoaded", () => {
    const emailUser = "imoralescs";
    const emailDomain = "gmail.com";
    const emailElement = document.getElementById("email-link");
    const emailAddress = `${emailUser}@${emailDomain}`;
    emailElement.innerHTML = `<a href="mailto:${emailAddress}">Contact</a>`;
});