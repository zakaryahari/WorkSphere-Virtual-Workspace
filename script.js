const add_employee_form = document.querySelector('#add_employee_form');

if (add_employee_form) {
  let nom_regex = /^[A-Za-z]+(?:[\sA-Za-z]){2,}$/;
  let email_regex = /^[\w-]+[\w.-]+\@+[\w]+\.+[\w.]$/;
  let phone_regex = /^\+?\+212+\d{9,10}$/;

  add_employee_form.addEventListener('input', (e) => {
    const element_input = e.target;
    if (element_input.id === 'employee_nom_input') {
      if (nom_regex.test(element_input.value)) {
        employee_nom_msg_error.textContent = '';
      }
      if (!nom_regex.test(element_input.value) && element_input.value !== '') {
        const employee_nom_msg_error = document.getElementById('employee_nom_msg_error');
        employee_nom_msg_error.textContent = 'Invalide nom input';
      }
      if (element_input.value === '') {
        employee_nom_msg_error.textContent = '';
      }
    }
  });
}
