// модальное окно с картой
var link = document.querySelector('.contacts-map');
var popup = document.querySelector('.modal-map');
var close = document.querySelector('.close-map');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});

// модальное окно напишите нам и форма
var write = document.querySelector('.button-write-us');
var writePopup = document.querySelector('.modal-write-us');
var writeClose = document.querySelector('.close-write');
var form = writePopup.querySelector('.write-us-form');
var login = document.querySelector('.modal-login');
var email = writePopup.querySelector('.modal-email')

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

write.addEventListener('click', function (evt) {
  evt.preventDefault();
  writePopup.classList.add('modal-write-show');

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

writeClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  writePopup.classList.remove('modal-write-show');
  writePopup.classList.remove('modal-error');
});


form.addEventListener('submit', function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    writePopup.classList.add('modal-error');
} else {
  if (isStorageSupport) {
    localStorage.setItem('login', login.value);
  }
}
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

  if (writePopup.classList.contains('modal-write-show')) {
    writePopup.classList.remove('modal-write-show');
  }
}
});