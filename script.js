(function(){
    const list = document.querySelector('.nav-links');
    const menu = document.querySelector('.menu-ico');

    menu.addEventListener('click', () => {
        list.classList.toggle('active');
        menu.classList.toggle('active');
    });

    list.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if(list.classList.contains('active')) {
                list.classList.remove('active');
                menu.classList.remove('active');
            }});

})
document.addEventListener('DOMContentLoaded', function () {

    console.log('Aulalink cargado!');
});})();