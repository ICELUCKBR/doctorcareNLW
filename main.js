window.addEventListener("scroll", onScroll)
onScroll()
function onScroll() {
    showNowOnScroll()
    showBackToTopButtonScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    
    const targetLine = scrollY + innerHeight / 2;
    //Verificar se a sessao passsou da linha imaginaria
    //Quais dados irei usar
    const sectionTop = home.offsetTop
    const sectionHeight = home.offsetHeight
    //Se o top sessao chegou na linha-alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    const sectionEndAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndAt <= targetLine

    //Limites da sessão
    const sectionBoundaries = sectionTopReachOrPassedTargetLine &&
        !sectionEndPassedTargetLine
    
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}
function showNowOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}

function showBackToTopButtonScroll() {
    if (scrollY > 500) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
}
function openMenu() {
    document.body.classList.add("menu-expanded");
}

function closeMenu() {
    document.body.classList.remove("menu-expanded");
}

ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
}).reveal(`
            #home ,
            #home img,
            #home .stats,
            #services,
            #services header,
            #services .card,
            #about,
            #about header,
            #about .content`);
