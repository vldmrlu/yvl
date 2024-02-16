document.addEventListener('DOMContentLoaded', function() {
    AOS.init(
        {
        once: true,
        }
    );

    let btnHero = document.getElementById('btn-hero');

    btnHero.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('about').scrollIntoView({behavior: 'smooth'});
    });
});