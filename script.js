let list_employee = [
  {
    id: 1001,
    nom: 'Hassan Tawni',
    role: 'Manager',
    email: 'hassan.tawni@example.com',
    tel: '0612345678',
    photo: 'https://randomuser.me/api/portraits/men/44.jpg',
    experiences: [
      {
        exp_id: 1,
        company: 'Aziz Adel',
        role_exp: 'Chef de projet',
        date_start: '2020-01-15',
        date_end: '2024-05-30',
      },
    ],
  },
  {
    id: 1002,
    nom: 'Abdo Gouglou',
    role: 'Réceptionniste',
    email: 'abdo.gouglou@hotel.fr',
    tel: '0798765432',
    photo: 'https://randomuser.me/api/portraits/men/8.jpg',
    experiences: [
      {
        exp_id: 2,
        company: 'Grand Hotel Paris',
        role_exp: 'Assistante administrative',
        date_start: '2022-08-01',
        date_end: '2023-07-31',
      },
    ],
  },
  {
    id: 1003,
    nom: 'Samir Tawrdi',
    role: 'Technicien IT',
    email: 'samir.tawrdi@techcorp.com',
    tel: '0665544332',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    experiences: [
      {
        exp_id: 3,
        company: 'Digital Connect',
        role_exp: 'Support technique',
        date_start: '2023-03-10',
        date_end: '2025-11-18',
      },
    ],
  },
  {
    id: 1004,
    nom: 'Ahmed Somali',
    role: 'Agent de sécurité',
    email: 'ahmed.somali@securite.org',
    tel: '0620304050',
    photo: 'https://randomuser.me/api/portraits/men/50.jpg',
    experiences: [],
  },
  {
    id: 1005,
    nom: 'Khadim Omar',
    role: 'Autre',
    email: 'omar.khadim@service.ma',
    tel: '0651627384',
    photo: 'https://randomuser.me/api/portraits/men/9.jpg',
    experiences: [
      {
        exp_id: 4,
        company: 'City Maintenance',
        role_exp: 'Plombier certifié',
        date_start: '2018-05-01',
        date_end: '2020-12-31',
      },
      {
        exp_id: 5,
        company: 'Global Services',
        role_exp: "Chef d'équipe",
        date_start: '2021-01-01',
        date_end: '2023-01-31',
      },
    ],
  },
  {
    id: 1006,
    nom: 'Dubois Caroline',
    role: 'Nettoyage',
    email: 'caro.dubois@clean.fr',
    tel: '0711223344',
    photo: 'https://randomuser.me/api/portraits/women/66.jpg',
    experiences: [],
  },
];

let zone_conference_array = [];
let zone_reception_array = [];
let zone_serveurs_array = [];
let zone_securite_array = [];
let zone_personnel_array = [];
let zone_archives_array = [];

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

document.addEventListener('DOMContentLoaded', () => {
  const All_Employee_List = document.getElementById('Display_Employee_list');
  list_employee.forEach((employee) => {
    All_Employee_List.innerHTML += `
        <div class="list-employee" id=${employee.id}>
          <div class="bg-white shadow-lg border border-gray-100 p-4 my-6 rounded-xl grid grid-cols-[auto_1fr_auto] gap-x-5 items-center transition duration-300 hover:shadow-xl">
            <div class="profile-img">
              <img src=${employee.photo} alt="profile-default" class="w-20 h-20 object-cover rounded-full ring-2 ring-blue-500/50" />
            </div>

            <div class="profile-info truncate">
              <h1 class="text-xl font-semibold text-gray-800 truncate">${employee.nom}</h1>
              <p class="text-sm text-blue-600 font-medium truncate">${employee.role}</p>
            </div>
            <div class="content-center">
              <button class="bg-blue-500 hover:bg-blue-600 text-white text-base font-medium py-2 px-4 rounded-full shadow-md transition duration-200">
                <span class="underline-offset-4 decoration-2">Éditer</span>
              </button>
            </div>
          </div>
        </div>
    `;
  });
});
function Checkdata(startdate, enddate) {}
