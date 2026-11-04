(() => {
  const track = document.querySelector('[data-stack-track]');
  const dots = document.querySelector('[data-stack-dots]');
  if (!track || !dots) return;
  const cards = [...track.children];
  let index = 0;
  const dotButtons = cards.map((_, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', `查看技术栈卡片 ${i + 1}`);
    button.addEventListener('click', () => show(i));
    dots.append(button);
    return button;
  });
  function show(next) {
    index = (next + cards.length) % cards.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dotButtons.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }
  document.querySelector('[data-stack-prev]')?.addEventListener('click', () => show(index - 1));
  document.querySelector('[data-stack-next]')?.addEventListener('click', () => show(index + 1));
  show(0);
})();
