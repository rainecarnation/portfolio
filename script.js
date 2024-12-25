document
    .querySelectorAll('.header__container a') // Отримуємо всі посилання і проходимося по них циклом
    .forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Запобігаємо стандартній поведінці

            const targetId = this.getAttribute('href'); // Отримуємо у кожного посилання атрибут href
            const targetElement = document.querySelector(targetId); // Знаходимо елемент за id

            if (targetElement) {
                // Якщо елемент існує
                const elementTop = targetElement.offsetTop; // Відстань від верхньої частини документа до елемента

                // Встановлюємо відстань до верхньої межі елемента, враховуючи висоту навігації
                window.scrollTo({
                    top: elementTop - 240,
                    behavior: 'smooth', // Плавна прокрутка
                });
            }
        });
    });
