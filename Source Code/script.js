const bubbleCount = 35;

for (let i = 0; i < bubbleCount; i++) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  const size = Math.random() * 80 + 20; // 20px to 100px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.bottom = `-${Math.random() * 100}px`;
  bubble.style.animationDuration = `${10 + Math.random() * 20}s`;
  bubble.style.animationDelay = `${Math.random() * 10}s`;

  document.body.appendChild(bubble);
}
