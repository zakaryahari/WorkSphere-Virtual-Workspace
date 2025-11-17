const add_employee_form = document.querySelector('#add_employee_form');

function Valide_input_regex(inputElement, regex, span_id, msg_error) {
  let isvalid = true;
  const employee_nom_msg_error = document.getElementById(span_id);
  if (regex.test(inputElement.value)) {
    employee_nom_msg_error.textContent = '';
  }
  if (!regex.test(inputElement.value) && inputElement.value !== '') {
    employee_nom_msg_error.textContent = msg_error;
    isvalid = false;
  }
  if (inputElement.value === '') {
    employee_nom_msg_error.textContent = '';
    isvalid = false;
  }
  return isvalid;
}

if (add_employee_form) {
  const nom_msg_error = 'Please enter a valid name.';
  const email_msg_error = 'Please enter a valid Email.';
  const phone_msg_error = 'Please enter a valid phone number (10 digits).';

  const nom_spanId = 'employee_nom_msg_error';
  const email_spanId = 'employee_email_msg_error';
  const phone_spanId = 'employee_tel_msg_error';

  let nom_regex = /^[A-Za-z]+(?:[\sA-Za-z]){2,}$/;
  let email_regex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
  let phone_regex = /^(?:\+212|0|6)+\d{8,9}$/;

  add_employee_form.addEventListener('input', (e) => {
    const element_input = e.target;
    if (element_input.id === 'employee_nom_input') {
      Valide_input_regex(element_input, nom_regex, nom_spanId, nom_msg_error);
    }
    if (element_input.id === 'employee_email_input') {
      Valide_input_regex(element_input, email_regex, email_spanId, email_msg_error);
    }
    if (element_input.id === 'employee_tel_input') {
      Valide_input_regex(element_input, phone_regex, phone_spanId, phone_msg_error);
    }

    if (element_input.id === 'employee_photo_input') {
      const previewImg = document.getElementById('employee_photo_profile_img');
      const file = element_input.files[0];

      previewImg.src = URL.createObjectURL(file);
    }
    // console.log(element_input.id);
    // if (element_input.id === 'employee_close_input') {
    //   // add_employee_form.reset();
    //   Add_new_employee_form_container.classList.add('hidden');
    // }
  });
}

const Add_new_employee_form_container = document.querySelector('#Add-new-employee-form-container');

Add_new_employee_form_container.addEventListener('click', (e) => {
  if (e.target.id === 'Add-new-employee-form-container') {
    const element_div = e.target;
    if (!element_div.classList.contains('hidden')) {
      element_div.classList.add('hidden');
    }
  }
});

const add_employee_btn = document.querySelector('.Add-new-employee');

if (add_employee_btn) {
  add_employee_btn.addEventListener('click', () => {
    Add_new_employee_form_container.classList.toggle('hidden');
    // const etage_floor = document.querySelector('.etage-floor');
    // const sideBar = document.querySelector('.side-bar');
    // sideBar.style.filter = 'blur(2px)';
    // etage_floor.style.filter = 'blur(2px)';
  });
}

const close_btn = document.getElementById('employee_close_input');

if (close_btn) {
  close_btn.addEventListener('click', () => {
    add_employee_form.reset();
    Add_new_employee_form_container.classList.add('hidden');
  });
}

function Add_employee_experience() {
  const experiences_container = document.getElementById('experiences_container');
  const element_child = `                
                <div class="col-span-1">
                  <label for="exp_title_input" class="block">Titre du poste:</label>
                  <input type="text" id="exp_title_input" class="form_input outline-none w-full" />
                </div>
                <div class="col-span-1">
                  <label for="exp_title_input" class="block">Titre du poste:</label>
                  <input type="text" id="exp_title_input" class="form_input outline-none w-full" />
                </div>
                <div class="col-span-1">
                  <label for="exp_date_input" class="block">Date de début:</label>
                  <input type="date" id="exp_date_input" class="form_input outline-none w-full" />
                </div>
                <div class="col-span-1">
                  <label for="exp_date_input" class="block">Date de début:</label>
                  <input type="date" id="exp_date_input" class="form_input outline-none w-full" />
                </div>`;
}

const employee_experience_button = document.getElementById('employee_experience_button');

if (employee_experience_button) {
  employee_experience_button.addEventListener('click', () => {});
  // experiences_container.innerHTML = '';
}
