
document.addEventListener('DOMContentLoaded', () => {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.style.position = 'fixed';
    sparkleContainer.style.top = 0;
    sparkleContainer.style.left = 0;
    sparkleContainer.style.width = '100%';
    sparkleContainer.style.height = '100%';
    sparkleContainer.style.pointerEvents = 'none';
    document.body.appendChild(sparkleContainer);

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = '18px';
        sparkle.style.color = '#FFD700';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.opacity = Math.random();
        sparkle.style.animation = 'fadeOut 2s ease forwards';

        sparkleContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }

    setInterval(createSparkle, 400);
});
