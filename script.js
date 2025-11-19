let list_employee = [
  {
    id: 1001,
    nom: 'Hassan Tawni',
    role: 'Manager',
    email: 'hassan.tawni@example.com',
    tel: '0612345678',
    photo: 'https://randomuser.me/api/portraits/men/44.jpg',
    isactive: null,
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
    isactive: null,
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
    isactive: null,
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
    isactive: null,
    experiences: [],
  },
  {
    id: 1005,
    nom: 'Khadim Omar',
    role: 'Autre',
    email: 'omar.khadim@service.ma',
    tel: '0651627384',
    photo: 'https://randomuser.me/api/portraits/men/9.jpg',
    isactive: null,
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
    isactive: null,
    experiences: [],
  },
];
const ZONE_RULES = [
  {
    id: 'zone-conference',
    name: 'Salle de Conférence',
    nombre_max: 8,
    allowedRoles: ['Manager', 'Autre', 'Réceptionniste', 'Technicien IT', 'Agent de sécurité', 'Nettoyage'],
  },
  {
    id: 'zone-reception',
    name: 'Réception',
    nombre_max: 7,
    allowedRoles: ['Réceptionniste', 'Manager'],
  },
  {
    id: 'zone-serveurs',
    name: 'Salle des Serveurs',
    nombre_max: 3,
    allowedRoles: ['Technicien IT', 'Manager'],
  },
  {
    id: 'zone-securite',
    name: 'Salle de Sécurité',
    nombre_max: 3,
    allowedRoles: ['Agent de sécurité', 'Manager'],
  },
  {
    id: 'zone-personnel',
    name: 'Salle du Personnel',
    nombre_max: 2,
    allowedRoles: ['Manager', 'Autre', 'Réceptionniste', 'Technicien IT', 'Agent de sécurité', 'Nettoyage'],
  },
  {
    id: 'zone-archives',
    name: "Salle d'Archives",
    nombre_max: 4,
    allowedRoles: ['Manager', 'Autre', 'Réceptionniste', 'Technicien IT', 'Agent de sécurité'],
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
    isvalid = true;
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

let nom_regex = /^[A-Za-z]+(?:[\sA-Za-z]){2,}$/;
let email_regex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
let phone_regex = /^(?:\+212|0|6)+\d{8,9}$/;

const nom_msg_error = 'Please enter a valid name.';
const email_msg_error = 'Please enter a valid Email.';
const phone_msg_error = 'Please enter a valid phone number (10 digits).';
const Role_msg_error = 'Please Correct the error of the input form';

const nom_spanId = 'employee_nom_msg_error';
const email_spanId = 'employee_email_msg_error';
const phone_spanId = 'employee_tel_msg_error';
const Role_spanId = 'employee_role_msg_error';

if (add_employee_form) {
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
      if (element_input.value.trim() !== '') {
        previewImg.src = element_input.value;
      } else {
        previewImg.src = 'images/profile/profile-default.jpg';
      }
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
                    <input type="text" id="exp_role_input" class="form_input outline-none w-full" name="Exp_Role[]"/>
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
  Display_Employee_list_SideBar();
  const save_btn = document.getElementById('employee_save_input');
  if (save_btn) {
    save_btn.addEventListener('click', () => {
      Valide_input_submit();
    });
  }
});

function Valide_Radio_Option(inputElement, span_id, msg_error) {
  let isvalid = true;
  const employee_role_msg_error = document.getElementById(span_id);
  if (inputElement.value === 'Default_option') {
    employee_role_msg_error.textContent = msg_error;
    isvalid = false;
  }
  if (inputElement.value === '') {
    employee_role_msg_error.textContent = '';
    isvalid = false;
  }
  return isvalid;
}

function Valide_experience() {
  const Company_array = document.querySelectorAll('input[name="Exp_Entreprise[]"]');
  console.log(Company_array);
}

function Valide_input_submit() {
  let isvalid = false;
  const employee_nom_input = document.getElementById('employee_nom_input');
  const employee_role_input = document.getElementById('employee_role_input');
  const employee_photo_input = document.getElementById('employee_photo_input');
  const employee_email_input = document.getElementById('employee_email_input');
  const employee_tel_input = document.getElementById('employee_tel_input');

  const nom = Valide_input_regex(employee_nom_input, nom_regex, nom_spanId, nom_msg_error);

  const email = Valide_input_regex(employee_email_input, email_regex, email_spanId, email_msg_error);

  const tel = Valide_input_regex(employee_tel_input, phone_regex, phone_spanId, phone_msg_error);

  console.log(employee_role_input.value);

  if (employee_photo_input.value === '') {
    const previewImg = document.getElementById('employee_photo_profile_img');
    previewImg.src = 'images/profile/profile-default.jpg';
  }

  isvalid = Valide_Radio_Option(employee_role_input, Role_spanId, Role_msg_error);

  if (!nom || !email || !tel || !isvalid) {
    alert('Please Fix the errors in the form');
    return;
  }
  Add_employee_data();
  Display_Employee_list_SideBar();
  add_employee_form.reset();
  Add_new_employee_form_container.classList.add('hidden');

  // const inner_exp_container = document.getElementById('inner-exp-container');
  // if (inner_exp_container) {
  //   Valide_experience();
  // }
}

function NextID() {
  // console.log(list_employee.length);
  let Nid = list_employee[list_employee.length - 1].id;
  ++Nid;
  console.log(Nid);
  return Nid;
}

function Add_employee_data() {
  const employee_nom_input = document.getElementById('employee_nom_input').value;
  const employee_role_input = document.getElementById('employee_role_input').value;
  const employee_photo_input = document.getElementById('employee_photo_input').value;
  const employee_email_input = document.getElementById('employee_email_input').value;
  const employee_tel_input = document.getElementById('employee_tel_input').value;

  let Id_employee = NextID();

  const employee_object = {id: Id_employee, nom: employee_nom_input, role: employee_role_input, email: employee_email_input, tel: employee_tel_input, photo: employee_photo_input, isactive: null, experiences: {}};
  list_employee.push(employee_object);
  console.log(list_employee[list_employee.length - 1]);
}

function Display_Employee_list_SideBar() {
  const All_Employee_List = document.getElementById('Display_Employee_list');
  All_Employee_List.innerHTML = '';
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
}

const map_content = document.querySelector('.map-content');

if (map_content) {
  map_content.addEventListener('click', (e) => {
    const selected_element = e.target;
    if (selected_element.classList.contains('zone_btn')) {
      // console.log(selected_element.closest('.zone'));
      Filter_Employee_By_Role(selected_element.closest('.zone').id);
    }
  });
}

function Filter_Employee_By_Role(Role) {
  let Filtred_employee_by_role = [];
  ZONE_RULES.forEach((zone) => {
    if (zone.id === Role) {
      zone.allowedRoles.forEach((allowed) => {
        list_employee.forEach((employee) => {
          if (employee.role === allowed) {
            Filtred_employee_by_role.push(employee);
          }
          console.log(allowed);
        });
        // Filtred_employee_by_role;
      });
    }
  });

  console.log('-----------');
  console.log(Filtred_employee_by_role);

  Display_Employee_By_Role(Filtred_employee_by_role);
}
