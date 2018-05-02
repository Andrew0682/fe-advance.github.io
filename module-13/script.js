const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

submitBtn.addEventListener("click", validate);

function validate(evt) {
  evt.preventDefault();

  const res = {
    'firstName': '',
    'lastName': '',
    'tel': ''
  }

  res.firstName = {
    'name': 'First name',
    'value': firstname.value,
    'validate': (/^[A-zА-яёЁ]+(\s[A-zА-яёЁ]+){0,2}$/.test(firstname.value))
  }

  res.lastName = {
    'name': 'Last name',
    'value': lastname.value,
    'validate': (/^[A-zА-яёЁ]+((\s*-\s*|\s+)[A-zА-яёЁ]+)?$/.test(lastname.value))
  }

  res.tel = {
    'name': 'Tel number',
    'value': '',
    'validate': (/^\+\d[\s-]*(\d[\s-]*){10}\d$/.test(tel.value))
  }

  if (res.tel.validate) {
    const d = tel.value.replace(/[^0-9]/g, '').split('');
    res.tel.value = `tel +${d[0]}${d[1]}${d[2]} ${d[3]}${d[4]} ${d[5]}${d[6]} ${d[7]}${d[8]} ${d[9]}${d[10]}${d[11]}`;
  } else {
    res.tel.value = tel.value;
  }
  showResults(res);
}

function showResults(results) {
  let html = '';
  Object.values(results).map(el => {
    html += el.validate ? `<li class="success">SUCCESS: ${el.name} passed validation</li>` : `<li class="error">ERROR: ${el.name} failed validation</li>`;
  });
  resultsList.innerHTML = html;
  console.log(results);
}
