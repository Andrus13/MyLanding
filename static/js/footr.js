function footerYear() {
    const footer = document.querySelector('.year');
    
    footer.innerHTML = new Date().getFullYear();
}

export default footerYear;