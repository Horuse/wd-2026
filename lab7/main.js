// 2
var a = 2;
var x = 1 + (a *= 2);

console.log(x)
// a стає 4, x = 1 + 4 = 5

// "0" це непорожній рядок, тому він truthy → alert виконається
// if ("0") { alert('Привіт'); }

var name = "Василь";
var admin = name;
console.log(admin);

// task 3
let counties = [];

async function loadCounties() {
  const res = await fetch('https://api.census.gov/data/2020/acs/acs5/profile?get=NAME&for=county:*');
  const data = await res.json();

  counties = data.map(row => ({
    name: row[0],
    state: row[1],
    county: row[2]
  }));
}

function findCounty(countyName) {
  const found = counties.find(c => c.name.toLowerCase() === countyName.toLowerCase());
  if (!found) return null;
  return found.state + found.county;
}

document.getElementById('county-btn').addEventListener('click', () => {
  const val = document.getElementById('county-input').value.trim();
  const out = document.getElementById('county-result');

  if (!val) {
    out.textContent = 'Введіть назву!';
    return;
  }

  const code = findCounty(val);
  if (code) {
    out.textContent = `Код: ${code}`;
  } else {
    out.textContent = 'Не знайдено';
  }
});

loadCounties();


// task 4
document.getElementById('user-form').addEventListener('submit', e => {
  e.preventDefault();

  const first = document.getElementById('first_name').value.trim();
  const last = document.getElementById('last_name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('form-result');

  if (!first || !last || !email) {
    msg.textContent = 'Заповніть всі поля!';
    msg.style.color = 'red';
    return;
  }

  msg.textContent = '';
  alert(`Ім'я: ${first}\nПрізвище: ${last}\nEmail: ${email}`);
});


// task 5
const box = document.getElementById('elid');
let pos = box.offsetLeft;

document.getElementById('btn-left').addEventListener('click', () => {
  pos = Math.max(0, pos - 100);
  box.style.left = pos + 'px';
  box.style.transform = 'none';
});

document.getElementById('btn-right').addEventListener('click', () => {
  const max = document.getElementById('animation-area').offsetWidth - box.offsetWidth;
  pos = Math.min(max, pos + 100);
  box.style.left = pos + 'px';
  box.style.transform = 'none';
});