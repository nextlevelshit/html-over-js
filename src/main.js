// JavaScript functions from original HTML
const frameworks = ['React', 'Vue.js', 'Angular', 'Svelte', 'Solid', 'Alpine.js', 'Lit', 'Preact', 'Qwik', 'SvelteKit', 'Next.js', 'Nuxt.js'];

function filterFrameworks(value) {
  const results = document.getElementById('js-results');
  if (!value) {
    results.style.display = 'none';
    return;
  }
  const filtered = frameworks.filter(fw => fw.toLowerCase().includes(value.toLowerCase()));
  results.innerHTML = filtered.map(fw => `<div style="padding:8px; cursor:pointer;" onclick="selectFramework('${fw}')">${fw}</div>`).join('');
  results.style.display = filtered.length ? 'block' : 'none';
}

function selectFramework(fw) {
  document.getElementById('js-search').value = fw;
  document.getElementById('js-results').style.display = 'none';
}

function startNativeProgress() {
  const progress = document.getElementById('nativeProgress');
  const text = document.getElementById('nativeProgressText');
  let value = 0;
  const interval = setInterval(() => {
    value += Math.random() * 15;
    if (value >= 100) {
      value = 100;
      clearInterval(interval);
    }
    progress.value = value;
    text.textContent = Math.round(value) + '%';
  }, 200);
}

function toggleContent(id) {
  document.getElementById(id).classList.toggle("active");
}

function openJSModal() {
  document.getElementById('jsModal').style.display = 'flex';
}

function closeJSModal() {
  document.getElementById('jsModal').style.display = 'none';
}

function validateJSForm(event) {
  event.preventDefault();
  alert('Custom validation would run here');
  return false;
}

function startJSProgress() {
  const bar = document.getElementById('jsProgress');
  const text = document.getElementById('jsProgressText');
  let width = 0;
  const interval = setInterval(() => {
    width += Math.random() * 15;
    if (width >= 100) {
      width = 100;
      clearInterval(interval);
    }
    bar.style.width = width + '%';
    text.textContent = Math.round(width) + '%';
  }, 200);
}

function openDatePicker() {
  const picker = document.getElementById('datePicker');
  picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
}
