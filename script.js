const add_employee_form = document.querySelector('#add_employee_form');

function Valide_input_regex(inputElement, regex, span_id, msg_error) {
  const employee_nom_msg_error = document.getElementById(span_id);
  if (regex.test(inputElement.value)) {
    employee_nom_msg_error.textContent = '';
  }
  if (!regex.test(inputElement.value) && inputElement.value !== '') {
    employee_nom_msg_error.textContent = msg_error;
  }
  if (inputElement.value === '') {
    employee_nom_msg_error.textContent = '';
  }
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
  });
}
