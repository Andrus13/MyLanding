function scrollNav(e) {
    const targ = document.getElementById(e.target.dataset.value);
    targ.scrollIntoView({block: 'center', behavior: 'smooth'}, true);
}

export default scrollNav;