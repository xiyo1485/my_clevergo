document.addEventListener('DOMContentLoaded', () => {
    // 移动端菜单切换
    const toggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav-links');

    if (toggle) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // 自动高亮当前导航菜单
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        // 简单的路径匹配逻辑
        if (link.getAttribute('href') === currentPath || 
           (currentPath.includes('/blog/') && link.getAttribute('href').includes('/blog/'))) {
            link.classList.add('active');
        }
    });
});
