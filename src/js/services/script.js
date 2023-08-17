const triggers = document.querySelectorAll('.information__trigger');
const answers = document.querySelectorAll('.information__answer');

triggers.forEach( (item, index) => {
    item.addEventListener('click', () => {
        item.classList.toggle('information__trigger_active');
        answers[index].classList.toggle('information__answer_active');
    });
});
