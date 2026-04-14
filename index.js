// Ждем загрузки DOM, чтобы скрипт видел элементы
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ЛОГИКА КАЛЬКУЛЯТОРА ---
    const weightInput = document.getElementById('weight');
    const priceInput = document.getElementById('price');
    const totalOutput = document.getElementById('total');

    const calculateDelivery = () => {
        const weight = parseFloat(weightInput.value) || 0;
        const price = parseFloat(priceInput.value) || 0;

        // Тарифы: 10 евро за кг + 5% страховка от стоимости товара
        const baseRate = weight * 10;
        const insurance = price * 0.05;
        const total = baseRate + insurance;

        // Обновляем текст с анимацией числа
        totalOutput.textContent = `${total.toFixed(2)} €`;
    };

    if (weightInput && priceInput) {
        weightInput.addEventListener('input', calculateDelivery);
        priceInput.addEventListener('input', calculateDelivery);
    }

    // --- 2. ПЛАВНЫЙ СКРОЛЛ К СЕКЦИЯМ ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 3. ИМИТАЦИЯ ОТПРАВКИ ФОРМЫ (Личный кабинет / Заявка) ---
    const mainBtn = document.querySelector('.btn-main');
    mainBtn.addEventListener('click', () => {
        const userAction = confirm("Перейти к регистрации в личном кабинете?");
        if (userAction) {
            console.log("Пользователь направлен на форму регистрации");
            // Тут может быть window.location.href = '/register';
        }
    });

});

