// MCGStarCraft プレイヤーマニュアル JavaScript

// ==========================================
// モバイルナビゲーション
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // ハンバーガーメニューのトグル
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // アニメーション効果
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = navMenu.classList.contains('active') 
                ? 'rotate(-45deg) translate(-5px, 6px)' 
                : 'none';
            spans[1].style.opacity = navMenu.classList.contains('active') 
                ? '0' 
                : '1';
            spans[2].style.transform = navMenu.classList.contains('active') 
                ? 'rotate(45deg) translate(-5px, -6px)' 
                : 'none';
        });
    }
    
    // メニューリンククリックで閉じる
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            
            // ハンバーガーメニューのリセット
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
});

// ==========================================
// スムーススクロール
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // ナビゲーションバーの高さ分調整
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// スクロールアニメーション
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素の設定
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.card, .resource-item, .machine-card, .planet-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
});

// ==========================================
// アクティブセクションのハイライト
// ==========================================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.backgroundColor = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.backgroundColor = 'rgba(255,255,255,0.2)';
        }
    });
});

// ==========================================
// コピー機能（コマンド用）
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        // コピーボタンの作成
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'コピー';
        button.style.cssText = `
            position: absolute;
            top: 5px;
            right: 5px;
            padding: 5px 10px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8rem;
            opacity: 0;
            transition: opacity 0.3s;
        `;
        
        // 親要素を相対配置に
        block.parentElement.style.position = 'relative';
        block.parentElement.appendChild(button);
        
        // ホバー時にボタンを表示
        block.parentElement.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });
        
        block.parentElement.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
        });
        
        // クリック時にコピー
        button.addEventListener('click', async () => {
            const text = block.textContent;
            
            try {
                await navigator.clipboard.writeText(text);
                button.textContent = 'コピー済み！';
                button.style.background = '#5cb85c';
                
                setTimeout(() => {
                    button.textContent = 'コピー';
                    button.style.background = '#667eea';
                }, 2000);
            } catch (err) {
                console.error('コピーに失敗しました:', err);
            }
        });
    });
});

// ==========================================
// 検索機能（将来の拡張用）
// ==========================================
function searchContent(query) {
    const sections = document.querySelectorAll('.section');
    const results = [];
    
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            results.push(section);
        }
    });
    
    return results;
}

// ==========================================
// ツールチップ（将来の拡張用）
// ==========================================
function createTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: #333;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 0.8rem;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
    `;
    
    document.body.appendChild(tooltip);
    
    element.addEventListener('mouseenter', (e) => {
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.top - 30) + 'px';
        tooltip.style.opacity = '1';
    });
    
    element.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
}

// ==========================================
// パフォーマンス最適化
// ==========================================
// 画像の遅延読み込み
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ==========================================
// デバッグ情報（開発用）
// ==========================================
console.log('MCGStarCraft Player Manual loaded successfully');
console.log('Version: 1.0.0');
console.log('Last updated: 2025-08-02');