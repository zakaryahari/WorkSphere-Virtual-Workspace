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
    if (element_input.id === 'exp_first_date_input') {
      const parent_div = e.target.closest('.inner-exp-container');
      const end_date = parent_div.querySelector('#exp_end_date_input');
      end_date.removeAttribute('disabled');
      end_date.setAttribute('min', element_input.value);
    }
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

let count_employee_experience = 0;

function Add_employee_experience() {
  const experiences_container = document.getElementById('experiences_container');
  count_employee_experience += 1;
  const containerId = `exp_cont_${count_employee_experience}`;
  const element_child = `                
                <div class="inner-exp-container col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 bg-gray-400/50 p-3 my-2 rounded-lg" id="${containerId}">
                  <div class="grid col-span-2">
                    <button type="button" class="delete_exp_employee text-red-500 hover:text-red-700 font-bold text-xl leading-none p-1 text-end" id="${count_employee_experience}" data-target-id="${containerId}">&times;</button>
                  </div>
                  <div class="col-span-1">
                    <label for="exp_company_input" class="block">Entreprise:</label>
                    <input type="text" id="exp_company_input" class="form_input outline-none w-full" />
                  </div>
                  <div class="col-span-1">
                    <label for="exp_role_input" class="block">Rôle:</label>
                    <input type="text" id="exp_role_input" class="form_input outline-none w-full" />
                  </div>
                  <div class="col-span-1">
                    <label for="exp_first_date_input" class="block">Date de début:</label>
                    <input type="date" id="exp_first_date_input" class="form_input outline-none w-full"/>
                  </div>
                  <div class="col-span-1">
                    <label for="exp_end_date_input" class="block">Date fin:</label>
                    <input type="date" id="exp_end_date_input" class="form_input outline-none w-full" disabled/>
                  </div>
                </div>
                `;
  experiences_container.innerHTML += element_child;
}

const employee_experience_button = document.getElementById('employee_experience_button');

if (employee_experience_button) {
  employee_experience_button.addEventListener('click', () => {
    Add_employee_experience();
  });
}

const experiences_container = document.getElementById('experiences_container');

if (experiences_container) {
  experiences_container.addEventListener('click', (e) => {
    const element_val = e.target;
    // console.log(element_val.id);
    if (element_val.classList.contains('delete_exp_employee')) {
      // const inner_exp_container = document.querySelector(`.inner-exp-container#exp_cont_${element_val.id}`);
      let targetid = element_val.dataset.targetId;
      delete_employee_experience(targetid);
    }
  });
}

function delete_employee_experience(ID) {
  const inner_exp_container = document.getElementById(ID);
  inner_exp_container.remove();
}

function Checkdata(startdate, enddate) {}
