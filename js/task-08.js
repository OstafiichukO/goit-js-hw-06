const form = document.querySelector('.login-form');
const email = document.querySelector('input[name=email]')
const pass = document.querySelector('input[name=password]')
const btn = document.querySelector('button[type=submit]')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const [email, password] = event.target.elements;
  if(document.querySelector('input[name=email]').value.length == 0 || document.querySelector('input[name=password]').value.length == 0) {
    alert("Заполните все поля формы!")
    return;
  }
  const result = `email : ${email.value}
  password : ${password.value}`
  console.log(result)

  // console.log("email :", email.value)
  // console.log("password :", password.value)
  // const formData = new FormData(event.currentTarget);
  // const formInfo = {}
  // formData.forEach((value, name) => {
  //   if (value == '') {
  //     alert("Заполните все поля формы!")
  //   } else {
  //     formInfo[name] = value
  //   }
  //   console.log(formInfo)
  // })
  form.reset();
});


// const response = {}
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const formData = new FormData(event.target)
//   formData.forEach((password, email) => {
//     console.log(`${email} : ${password}`)
//   })
// });

  // console.log('event', event.target.elements)

  // response.email = email.email;
  // response.password = pass.password;
  // console.log(response)
  // console.log(event.target)

// formEl.addEventListener('input', (event) => {
//   event.preventDefault();
//   console.log(event.target.value)
//   const text = document.querySelector('.text')

//   if (event.target.value === "max") {
//     alert(event.target.value);
//   }

//   text.innerHTML = event.target.value;
// });

// + Обработка отправки формы form.login-form должна быть по событию submit.
// + При отправке формы страница не должна перезагружаться.
// + Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// +- Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// + Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.