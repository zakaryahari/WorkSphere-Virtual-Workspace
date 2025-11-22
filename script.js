let list_employee = [
  {
    id: 1001,
    nom: 'Aziz Adel',
    role: 'Manager',
    email: 'Aziz.adel@gmail.com',
    tel: '0612345678',
    photo: 'https://media.licdn.com/dms/image/v2/D4E03AQGKxD9UqneVwQ/profile-displayphoto-shrink_200_200/B4EZZIq4WgG0AY-/0/1744975923550?e=1765411200&v=beta&t=zLTQhOIX6n-NzODzxNiKq6qD_xKycubaLiKMB9z-NjM',
    isactive: null,
    experiences: [
      {
        exp_id: 1,
        company: 'Intic Solutions',
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
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFsTAM_4QnuI1kIcugaJHVj3Yo6_UJKKGYjA&s',
    isactive: null,
    experiences: [
      {
        exp_id: 2,
        company: 'WeSurfSkateMorocco',
        role_exp: 'Assistante administrative',
        date_start: '2022-08-01',
        date_end: '2023-07-31',
      },
    ],
  },
  {
    id: 1003,
    nom: 'Zakarya hari',
    role: 'Technicien IT',
    email: 'zakariahari42@gmail.com',
    tel: '0665544332',
    photo: 'https://intranet.youcode.ma/storage/users/profile/thumbnail/1684-1760996356.png',
    isactive: null,
    experiences: [
      {
        exp_id: 3,
        company: 'YouCode',
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
    email: 'ahmed.somali@gmail.com',
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
    employeesId: [],
  },
  {
    id: 'zone-reception',
    name: 'Réception',
    nombre_max: 7,
    allowedRoles: ['Réceptionniste', 'Manager', 'Nettoyage'],
    employeesId: [],
  },
  {
    id: 'zone-serveurs',
    name: 'Salle des Serveurs',
    nombre_max: 3,
    allowedRoles: ['Technicien IT', 'Manager'],
    employeesId: [],
  },
  {
    id: 'zone-securite',
    name: 'Salle de Sécurité',
    nombre_max: 3,
    allowedRoles: ['Agent de sécurité', 'Manager', 'Nettoyage'],
    employeesId: [],
  },
  {
    id: 'zone-personnel',
    name: 'Salle du Personnel',
    nombre_max: 2,
    allowedRoles: ['Manager', 'Autre', 'Réceptionniste', 'Technicien IT', 'Agent de sécurité', 'Nettoyage'],
    employeesId: [],
  },
  {
    id: 'zone-archives',
    name: "Salle d'Archives",
    nombre_max: 4,
    allowedRoles: ['Manager', 'Autre', 'Réceptionniste', 'Technicien IT', 'Agent de sécurité'],
    employeesId: [],
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
  const div_msg_error = document.getElementById(span_id);
  if (regex.test(inputElement.value)) {
    div_msg_error.textContent = '';
    isvalid = true;
  }
  if (!regex.test(inputElement.value) && inputElement.value !== '') {
    div_msg_error.textContent = msg_error;
    isvalid = false;
  }
  if (inputElement.value === '') {
    div_msg_error.textContent = '';
    isvalid = false;
  }
  return isvalid;
}

function Valide_experience_regex(inputElement, regex, span, msg_error) {
  let isvalid = true;
  // const employee_nom_msg_error = document.getElementById(span_id);
  if (regex.test(inputElement.value)) {
    span.textContent = '';
    isvalid = true;
  }
  if (!regex.test(inputElement.value) && inputElement.value !== '') {
    span.textContent = msg_error;
    isvalid = false;
  }
  if (inputElement.value === '') {
    span.textContent = '';
    isvalid = false;
  }
  return isvalid;
}

let nom_regex = /^[A-Za-z]+(?:[\sA-Za-z]){2,}$/;
let email_regex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
let phone_regex = /^(?:\+212|0|6)+\d{8,9}$/;
let company_regex = /^[A-Za-z\s]{2,}$/;
let role_regex = /^[A-Za-z\s\/-]{2,}$/;

const nom_msg_error = 'Please enter a valid name.';
const email_msg_error = 'Please enter a valid Email.';
const phone_msg_error = 'Please enter a valid phone number (10 digits).';
const Role_msg_error = 'Please Correct the error of the input form';

const nom_spanId = 'employee_nom_msg_error';
const email_spanId = 'employee_email_msg_error';
const phone_spanId = 'employee_tel_msg_error';
const Role_spanId = 'employee_role_msg_error';

//exp regex:

const exp_company_msg_error = 'Please enter a valid company.';
const exp_role_msg_error = 'Please enter a valid role.';

// const exp_company_spanId = 'employee_nom_msg_error';
// const exp_role_spanId = 'employee_email_msg_error';

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
    if (element_input.closest('.exp_start_date_input')) {
      console.log('yeah the date it worked .');
      const parent_div = e.target.closest('.inner-exp-container');
      const end_date = parent_div.querySelector('.exp_end_date_input');
      const start_date = parent_div.querySelector('.exp_start_date_input');
      end_date.removeAttribute('disabled');
      // Check_date(start_date.value, end_date.value);
      let stringmindate = Check_date(start_date.value);
      end_date.setAttribute('min', stringmindate);
      let today = new Date();
      today = today.toISOString().slice(0, 10);
      end_date.setAttribute('max', today);
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
                  <div class="employee_experience_inputs col-span-1">
                    <label class="block">Entreprise:</label>
                    <input type="text" class="exp_company_input form_input outline-none w-full" name="Exp_Entreprise[${count_employee_experience}]"/>
                    <span class="span_error_msg text-red-900"></span>
                  </div>
                  <div class="employee_experience_inputs col-span-1">
                    <label  class="block">Rôle:</label>
                    <input type="text" class="exp_role_input form_input outline-none w-full" name="Exp_Role[${count_employee_experience}]"/>
                    <span id="exp_role_msg_error" class="text-red-900"></span>
                  </div>
                  <div class="employee_experience_inputs col-span-1">
                    <label class="block">Date de début:</label>
                    <input type="date" class="exp_start_date_input form_input outline-none w-full" name="Exp_Start_date[${count_employee_experience}]"/>
                    <span id="exp_datestart_msg_error" class="text-red-900"></span>
                  </div>
                  <div class="employee_experience_inputs col-span-1">
                    <label class="block">Date fin:</label>
                    <input type="date" class="exp_end_date_input form_input outline-none w-full" name="Exp_End_date[${count_employee_experience}]" disabled/>
                    <span id="exp_datend_msg_error" class="text-red-900"></span>
                  </div>
                </div>
                `;
  experiences_container.insertAdjacentHTML('beforeend', element_child);
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
  experiences_container.addEventListener('input', (e) => {
    const element_val = e.target;

    if (element_val.classList.contains('exp_company_input')) {
      const parent_exp_div = element_val.closest('.employee_experience_inputs');
      const child_span = parent_exp_div.querySelector('span');
      console.log(child_span);
      Valide_experience_regex(element_val, company_regex, child_span, exp_company_msg_error);
    }
    if (element_val.classList.contains('exp_role_input')) {
      const parent_exp_div = element_val.closest('.employee_experience_inputs');
      const child_span = parent_exp_div.querySelector('span');
      console.log(child_span);
      Valide_experience_regex(element_val, role_regex, child_span, exp_role_msg_error);
    }
  });
}

function Add_new_employee_experience() {
  let new_experience = [];

  const companyInputs = document.querySelectorAll('.exp_company_input');
  const roleInputs = document.querySelectorAll('.exp_role_input');
  const startDateInputs = document.querySelectorAll('.exp_start_date_input');
  const endDateInputs = document.querySelectorAll('.exp_end_date_input');

  for (let i = 0; i < companyInputs.length; i++) {
    // console.log(companyInputs[i].value.trim());
    let company = companyInputs[i].value.trim();
    let role = roleInputs[i].value.trim();

    if (company || role) {
      let tempexperience = {
        id: `EXP0${i}`,
        company: company,
        role: role,
        startdate: startDateInputs[i].value,
        enddate: endDateInputs[i].value,
      };
      new_experience.push(tempexperience);
    }
  }

  return new_experience;
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

  Add_new_employee_experience();
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
  const experience_data = Add_new_employee_experience();
  let Id_employee = NextID();

  const employee_object = {id: Id_employee, nom: employee_nom_input, role: employee_role_input, email: employee_email_input, tel: employee_tel_input, photo: employee_photo_input, isactive: null, experiences: experience_data};
  list_employee.push(employee_object);
  console.log(list_employee[list_employee.length - 1]);
}

function Display_Employee_list_SideBar() {
  const All_Employee_List = document.getElementById('Display_Employee_list');
  All_Employee_List.innerHTML = '';
  list_employee.forEach((employee) => {
    if (employee.isactive == null) {
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
    }
  });
}

let Clicked_btn_zone_id;

const map_content = document.querySelector('.map-content');

if (map_content) {
  map_content.addEventListener('click', (e) => {
    const selected_element = e.target;
    if (selected_element.classList.contains('zone_btn')) {
      // console.log(selected_element.closest('.zone'));
      Clicked_btn_zone_id = selected_element.closest('.zone').id;
      Filter_Employee_By_Role(selected_element.closest('.zone').id);
    }
    if (selected_element.classList.contains('zone-remove-btn')) {
      // console.log(selected_element.getAttribute('data-employee-id'));
      let Selected_employee_id = selected_element.getAttribute('data-employee-id');
      let Selected_Zone_id = selected_element.getAttribute('data-zone-id');

      console.log(typeof Selected_employee_id);

      ZONE_RULES.forEach((zone) => {
        if (zone.id === Selected_Zone_id) {
          console.log('yeah it in the if block');
          const indexToRemove = zone.employeesId.indexOf(Selected_employee_id);
          zone.employeesId.splice(indexToRemove, 1);
          selected_element.closest('.employee_cercle').remove();
        }
      });
      console.log(ZONE_RULES);
      list_employee.forEach((employee) => {
        if (employee.id == parseInt(Selected_employee_id)) {
          employee.isactive = null;
          Display_Employee_list_SideBar();
        }
      });
      console.log(list_employee);
      // console.log(Selected_Zone_id);
    }
    // if (selected_element.classList.contains('.employee_cercle')) {
    // }
  });
}

function Filter_Employee_By_Role(Role) {
  let Filtred_employee_by_role = [];
  ZONE_RULES.forEach((zone) => {
    if (zone.id === Role) {
      zone.allowedRoles.forEach((allowed) => {
        list_employee.forEach((employee) => {
          if (employee.role === allowed && employee.isactive == null) {
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

function Display_Employee_By_Role(Filtred_array) {
  let size = Filtred_array.length;
  if (size > 0) {
    const Display_Employee_by_role_container = document.querySelector('.Display_Employee_by_role_container');
    const parent_div = Display_Employee_by_role_container.closest('#Display_Employee_by_zonerole');
    parent_div.classList.remove('hidden');
    Display_Employee_by_role_container.innerHTML = '';
    Filtred_array.forEach((element) => {
      Display_Employee_by_role_container.innerHTML += `
            <div class="lg:col-span-1 list-employee mx-3" id="${element.id}">
              <div class="bg-white shadow-lg border border-gray-100 p-4 my-3 rounded-xl grid grid-cols-[auto_1fr_auto] gap-x-5 items-center transition duration-300 hover:shadow-xl">
                <div class="profile-img">
                  <img src=${element.photo} alt="profile-default" class="w-20 h-20 object-cover rounded-full ring-2 ring-blue-500/50" />
                </div>

                <div class="profile-info truncate">
                  <h1 class="text-xl font-semibold text-gray-800 truncate">${element.nom}</h1>
                  <p class="text-sm text-blue-600 font-medium truncate">${element.role}</p>
                </div>
              </div>
            </div>
    `;
      console.log(element);
    });
  } else {
    const Display_Employee_by_role_container = document.querySelector('.Display_Employee_by_role_container');
    const parent_div = Display_Employee_by_role_container.closest('#Display_Employee_by_zonerole');
    parent_div.classList.remove('hidden');
    Display_Employee_by_role_container.innerHTML = '';
    Display_Employee_by_role_container.innerHTML += `
      <div class="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <div class="bg-gray-100 p-4 rounded-full mb-4">
              <img src="images/bg/empty-folder.png" alt="Empty State" class="w-12 h-12 opacity-50" />
            </div>
            <h3 class="text-lg font-medium text-gray-900">Aucun employé disponible</h3>
          </div>
    `;
  }
}

const Display_Employee_by_zonerole = document.querySelector('#Display_Employee_by_zonerole');

Display_Employee_by_zonerole.addEventListener('click', (e) => {
  let element_target = e.target;
  if (element_target.id === 'Display_Employee_by_zonerole') {
    const element_div = e.target;
    if (!element_div.classList.contains('hidden')) {
      element_div.classList.add('hidden');
      Display_Employee_by_zonerole();
      // Display_Employee_list_SideBar();
    }
  }

  if (element_target.closest('.list-employee')) {
    // element_target = element_target.closest('.list-employee').id;
    let id_list = element_target.closest('.list-employee').id;

    console.log(element_target.closest('.list-employee').id);
    console.log(Clicked_btn_zone_id);

    Add_employee_to_zone(id_list, Clicked_btn_zone_id);
    Display_Employee_by_zonerole.classList.add('hidden');
    console.log(ZONE_RULES);
  }
  // Display_Employee_by_zonerole();
});

// if (Display_Employee_by_sidebar_container) {
//   Display_Employee_by_sidebar_container.addEventListener('click',(e)=>{

//   });
// }

const Display_Employee_by_sidebar = document.querySelector('#Display_Employee_by_sidebar');

Display_Employee_by_sidebar.addEventListener('click', (e) => {
  let element_target = e.target;
  if (element_target.id === 'Display_Employee_by_sidebar') {
    const element_div = e.target;
    if (!element_div.classList.contains('hidden')) {
      element_div.classList.add('hidden');
    }
  }
});
const Display_Employee_list = document.getElementById('Display_Employee_list');

if (Display_Employee_list) {
  Display_Employee_list.addEventListener('click', (e) => {
    if (e.target.closest('.list-employee')) {
      // console.log(e.target.closest('.list-employee').id);
      const Display_Employee_by_sidebar = document.getElementById('Display_Employee_by_sidebar');
      Display_Employee_by_sidebar.classList.remove('hidden');
      Display_Employee_cv(e.target.closest('.list-employee').id);
    }
  });
}

function Display_Employee_cv(ID) {
  const Display_Employee_by_sidebar_container = document.querySelector('.Display_Employee_by_sidebar_container');
  list_employee.forEach((employee) => {
    if (employee.id == ID) {
      let all_experineces;
      employee.experiences.forEach((exp) => {});
      Display_Employee_by_sidebar_container.innerHTML = '';
      Display_Employee_by_sidebar_container.innerHTML += `          
          <div class="lg:col-span-2 justify-items-center pb-2">
            <img src=${employee.photo} alt="Profile Preview" class="w-[250px] h-[250px] rounded-full border-2 border-dashed border-gray-400 object-cover" id="employee_photo_profile_img" />
          </div>
          <div class="lg:col-span-1 p-8 bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h2 class="text-2xl font-extrabold text-white tracking-wider">Name : <span class="text-blue-400">${employee.nom}</span></h2>
          </div>
          <div class="lg:col-span-1 p-8 bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h2 class="text-2xl font-extrabold text-white tracking-wider">Role : <span class="text-blue-400">${employee.role}</span></h2>
          </div>
          <div class="lg:col-span-1 p-8 bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h2 class="text-2xl font-extrabold text-white tracking-wider">Email : <span class="text-blue-400">${employee.email}</span></h2>
          </div>
          <div class="lg:col-span-1 p-8 bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h2 class="text-2xl font-extrabold text-white tracking-wider">Télephone : <span class="text-blue-400">${employee.tel}</span></h2>
          </div>`;
    }
  });
}

function Add_employee_to_zone(ID, Zono_id) {
  ZONE_RULES.forEach((zone) => {
    if (zone.id === Zono_id) {
      zone.employeesId.push(ID);
    }
  });
  list_employee.forEach((employee) => {
    if (employee.id == ID) {
      employee.isactive = true;
      Display_Employee_list_SideBar();
    }
  });

  const Zone_container = document.getElementById(Zono_id);

  let child_zone = Zone_container.querySelector('.zone_employee_minilist_display');

  child_zone.innerHTML += '';

  list_employee.forEach((employee) => {
    if (employee.id == ID) {
      child_zone.innerHTML += `
                  <div class="employee_cercle grid lg:grid-rows-1">
                    <div class="flex items-center lg:row-span-1 p-1 bg-gray-700 rounded-lg gap-1">
                      <div class="w-12 h-12 flex-shrink-0 ">
                        <img src=${employee.photo} alt="${employee.nom}" class="rounded-full object-cover w-full h-full ring-1 ring-blue-400/70 mr-2" />
                      </div>
                      <button class="zone-remove-btn flex-shrink-0 text-red-400 hover:text-red-400 font-bold text-lg leading-none transition duration-150" data-employee-id="${employee.id}" data-zone-id="${Zono_id}" type="button">X</button>
                    </div>
                  </div>`;
    }
  });

  console.log();
}

function Check_date(StartDate) {
  const dateObject = new Date(`${StartDate}T00:00:00`);

  dateObject.setDate(dateObject.getDate() + 2);

  return dateObject.toISOString().slice(0, 10);
}
