const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {};
    const formElements = event.target.elements;

    for (let element of formElements) {
      if (element.tagName === 'INPUT') {
        const trimmedValue = element.value.trim();
        if (!trimmedValue) {
          alert('All form fields must be filled in');
          return;
        }
        formData[element.name] = trimmedValue;
      }
    }

    console.log(formData);
    loginForm.reset();
  });


// loginForm.addEventListener("submit" event => {
//   event.preventDefault();
// })








// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }





// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'.Не 
// додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я
// інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях.Для доступу до елементів форми 
// використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.





