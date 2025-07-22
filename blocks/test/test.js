export default function decorate(block) {
  const lines = [...block.children].map((child) => child.textContent.trim());
  const data = {};

  lines.forEach((line) => {
    const [key, ...rest] = line.split('\n');
    if (key && rest.length > 0) {
      data[key.trim().toLowerCase()] = rest.join('').trim();
    }
  });

  block.innerHTML = '';

  const container = document.createElement('div');
  container.classList.add('test-box');

  if (data.heading) {
    const h2 = document.createElement('h2');
    h2.textContent = data.heading;
    container.appendChild(h2);
  }

  if (data.message) {
    const p = document.createElement('p');
    p.textContent = data.message;
    container.appendChild(p);
  }

  if (data['button text'] && data['button link']) {
    const btn = document.createElement('a');
    btn.textContent = data['button text'];
    btn.href = data['button link'];
    btn.classList.add('test-button');
    container.appendChild(btn);
  }

  block.appendChild(container);
}
