// Dropdown toggle logic
const userToggle = document.getElementById('userDropdownToggle');
const userMenu = document.getElementById('userDropdownMenu');
document.addEventListener('click', function (e) {
    if (userToggle && userMenu) {
        if (userToggle.contains(e.target)) {
            e.preventDefault();
            if (userMenu.classList.contains('dropdown-anim-show')) {
                userMenu.classList.remove('dropdown-anim-show');
                setTimeout(() => {
                    userMenu.style.display = 'none';
                }, 300);
            } else {
                userMenu.style.display = 'block';
                setTimeout(() => {
                    userMenu.classList.add('dropdown-anim-show');
                }, 10);
            }
        } else if (!userMenu.contains(e.target)) {
            if (userMenu.classList.contains('dropdown-anim-show')) {
                userMenu.classList.remove('dropdown-anim-show');
                setTimeout(() => {
                    userMenu.style.display = 'none';
                }, 300);
            } else {
                userMenu.style.display = 'none';
            }
        }
    }
});

// Search bar expand/collapse (expand to the left)
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('navbarSearchBar');
let searchOpen = false;
if (searchToggle && searchBar) {
    // Set initial styles for left expansion
    searchBar.style.right = '180px';
    searchBar.style.left = 'auto';
    searchBar.style.textAlign = 'left';
    searchBar.style.direction = 'ltr';

    searchToggle.addEventListener('click', function (e) {
        e.preventDefault();
        searchOpen = !searchOpen;
        if (searchOpen) {
            searchBar.style.display = 'block';
            setTimeout(() => {
                searchBar.style.width = '1020px';
                searchBar.style.padding = '6px 12px';
                searchBar.focus();
            }, 10);
        } else {
            searchBar.style.width = '0';
            searchBar.style.padding = '0';
            setTimeout(() => {
                searchBar.style.display = 'none';
            }, 300);
        }
    });
    // Hide search bar if click outside
    document.addEventListener('click', function (e) {
        if (searchOpen && !searchBar.contains(e.target) && !searchToggle.contains(e.target)) {
            searchBar.style.width = '0';
            searchBar.style.padding = '0';
            searchOpen = false;
            setTimeout(() => {
                searchBar.style.display = 'none';
            }, 300);
        }
    });
}

// Subnavbar logic

    // Mega menu dropdown logic for All Products and categories (hover only)
    function showMegaMenu(id) {
        document.getElementById(id).style.display = 'flex';
        // Show default products for All Products
        if(id === 'allProductsMega') {
            selectSubcat('cookware', 'products-list-all');
        }
    }
    function hideMegaMenu(id) {
        document.getElementById(id).style.display = 'none';
    }
    // Subcategory selection logic (hover)
    function selectSubcat(subcat, listId) {
        const products = {
            cookware: ["Non-Stick Frying Pan", "Stainless Steel Pot", "Wok"],
            tools: ["Chef's Knife", "Spatula", "Mixing Bowl"],
            tableware: ["Dinner Plate", "Wine Glass", "Serving Spoon"]
        };
        const list = document.getElementById(listId);
        list.innerHTML = '';
        products[subcat].forEach(prod => {
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = prod;
            list.appendChild(a);
        });
    }

    // Notification Modal Logic
    const bell = document.getElementById('notificationToggle');
    const modal = document.getElementById('notificationModal');
    bell.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('show');
    });
    // Hide modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
            const bell = document.getElementById('notificationToggle');
            const modal = document.getElementById('notificationModal');
            let modalVisible = false;
            bell.addEventListener('click', function(e) {
                e.preventDefault();
                modalVisible = !modalVisible;
                if (modalVisible) {
                    modal.classList.add('show');
                } else {
                    modal.classList.remove('show');
                }
            });
            // Hide modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('show');
                    modalVisible = false;
                }
            });
        });