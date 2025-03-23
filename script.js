function getScreenSize(){
    return window.innerHeight < 768 ? 0.3 : 0.8;
}

function handleNavMenu(){
    const bars = document.getElementById('bars');
    const cross = document.getElementById('cross');
    const navMenuContainer = document.getElementById('nav-menu-container');

    bars.classList.toggle('hidden');
    cross.classList.toggle('hidden');
    navMenuContainer.classList.toggle('hidden');
}

function setUpIntersectionObserver(element, isLTR, speed){
    const intersectionObserver = new IntersectionObserver(entries => {
        const isIntersecting = entries[0].isIntersecting;

        if(isIntersecting){
            document.addEventListener('scroll',scrollHandler);
        }
        else{
            document.removeEventListener('scroll',scrollHandler);
        }
    });

    intersectionObserver.observe(element);
    
    function scrollHandler(){
        const shift  = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totalShift;

        if(isLTR){
            element.style.transform = `translateX(${shift}px)`;
        }
        else{
            element.style.transform = `translateX(${-shift}px)`;
        }

        
    }
}

setUpIntersectionObserver(document.getElementById('line1'), true, 0.15);
setUpIntersectionObserver(document.getElementById('line2'), false, 0.15);
setUpIntersectionObserver(document.getElementById('line3'), true, 0.15);
setUpIntersectionObserver(document.getElementById('line4'), false, getScreenSize());

function handleCTA(element){
    const container = element.parentElement;

    const up = element.querySelector('.up');
    const down = element.querySelector('.down');
    const ctaBody = container.querySelector('.cta-body');

    up.classList.toggle('hidden');
    down.classList.toggle('hidden');
    ctaBody.classList.toggle('hidden');
}