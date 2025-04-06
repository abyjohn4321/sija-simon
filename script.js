// Age Timer
function updateAge() {
    const birth = new Date('1998-03-30');
    const now = new Date();
    
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    
    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = now.getHours();
}

// Floating Hearts
function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.opacity = Math.random() * 0.5;
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.transform = `rotate(45deg) scale(${Math.random() * 0.5 + 0.5})`;
        document.body.appendChild(heart);
    }
}

// Initialize
window.onload = function() {
    updateAge();
    createHearts();
    setInterval(updateAge, 3600000); // Update every hour
};