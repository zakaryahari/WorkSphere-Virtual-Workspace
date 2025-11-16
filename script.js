const add_employee_form = document.querySelector('#add_employee_form');

if (add_employee_form) {
  let nom_regex = /^[A-Za-z]+(?:[\sA-Za-z]){2,}$/;
  let email_regex = /^[\w-]+[\w.-]+\@+[\w]+\.+[\w.]$/;
  let phone_regex = /^\+?\+212+\d{9,10}$/;
}
