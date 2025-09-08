// اسکریپت برای جستجو و فیلترها
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    // فیلتر بر اساس دکمه‌ها
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // حذف کلاس active از همه دکمه‌ها
            filterBtns.forEach(b => b.classList.remove('active'));
            // اضافه کردن کلاس active به دکمه کلیک شده
            this.classList.add('active');
            
            // منطق فیلتر کردن محصولات
            const filter = this.textContent.toLowerCase();
            
            productCards.forEach(card => {
                if (filter === 'همه') {
                    card.style.display = 'block';
                } else {
                    const category = card.querySelector('.product-category').textContent.toLowerCase();
                    if (category.includes(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // جستجوی محصولات
    searchBtn.addEventListener('click', function() {
        const searchText = searchInput.value.toLowerCase();
        
        productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            const description = card.querySelector('.product-description').textContent.toLowerCase();
            
            if (title.includes(searchText) || description.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // دکمه‌های افزودن به سبد خرید
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.parentElement.querySelector('.product-title').textContent;
            alert(`${productName} به سبد خرید اضافه شد`);
        });
    });

    // انتخاب عناصر منو همبرگر
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('.menu');

    // افزودن رویداد کلیک به دکمه همبرگر
    hamburgerBtn.addEventListener('click', () => {
        // تغییر حالت دکمه و منو
        hamburgerBtn.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // بستن منو با کلیک خارج از آن
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            hamburgerBtn.classList.remove('active');
            menu.classList.remove('active');
        }
    });
});