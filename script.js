/* eslint-disable no-param-reassign */
const keyboardKeys = {
  Backquote: { ru: ['ё', 'Ё'], en: ['`', '~'] },
  Digit1: { ru: ['1', '!'], en: ['1', '!'] },
  Digit2: { ru: ['2', '"'], en: ['2', '@'] },
  Digit3: { ru: ['3', '№'], en: ['3', '#'] },
  Digit4: { ru: ['4', ';'], en: ['4', '$'] },
  Digit5: { ru: ['5', '%'], en: ['5', '%'] },
  Digit6: { ru: ['6', ':'], en: ['6', '^'] },
  Digit7: { ru: ['7', '?'], en: ['7', '&'] },
  Digit8: { ru: ['8', '*'], en: ['8', '*'] },
  Digit9: { ru: ['9', '('], en: ['9', '('] },
  Digit0: { ru: ['0', ')'], en: ['0', ')'] },
  Minus: { ru: ['-', '_'], en: ['-', '_'] },
  Equal: { ru: ['=', '+'], en: ['=', '+'] },
  Backspace: { ru: ['Backspace', 'Backspace'], en: ['Backspace', 'Backspace'] },
  Tab: { ru: ['tab', 'tab'], en: ['tab', 'tab'] },
  KeyQ: { ru: ['й', 'Й'], en: ['q', 'Q'] },
  KeyW: { ru: ['ц', 'Ц'], en: ['w', 'W'] },
  KeyE: { ru: ['у', 'У'], en: ['e', 'E'] },
  KeyT: { ru: ['е', 'Е'], en: ['t', 'T'] },
  KeyY: { ru: ['н', 'Н'], en: ['y', 'Y'] },
  KeyU: { ru: ['г', 'Г'], en: ['u', 'U'] },
  KeyI: { ru: ['ш', 'Ш'], en: ['i', 'I'] },
  KeyO: { ru: ['щ', 'Щ'], en: ['o', 'O'] },
  KeyP: { ru: ['з', 'З'], en: ['p', 'P'] },
  BracketLeft: { ru: ['х', 'Х'], en: ['[', '{'] },
  BracketRight: { ru: ['ъ', 'Ъ'], en: [']', '}'] },
  Backslash: { ru: ['\\', '/'], en: ['\\', '|'] },
  Delete: { ru: ['Del', 'Del'], en: ['Del', 'Del'] },
  CapsLock: { ru: ['CapsLock', 'CapsLock'], en: ['CapsLock', 'CapsLock'] },
  KeyA: { ru: ['ф', 'Ф'], en: ['a', 'A'] },
  KeyS: { ru: ['ы', 'Ы'], en: ['s', 'S'] },
  KeyD: { ru: ['в', 'В'], en: ['d', 'D'] },
  KeyF: { ru: ['а', 'А'], en: ['f', 'F'] },
  KeyG: { ru: ['п', 'П'], en: ['g', 'G'] },
  KeyH: { ru: ['р', 'Р'], en: ['h', 'H'] },
  KeyJ: { ru: ['о', 'О'], en: ['j', 'J'] },
  KeyK: { ru: ['л', 'Л'], en: ['k', 'K'] },
  KeyL: { ru: ['д', 'Д'], en: ['l', 'L'] },
  Semicolon: { ru: ['ж', 'Ж'], en: [';', ':'] },
  Quote: { ru: ['э', 'Э'], en: ["''", '"'] },
  Enter: { ru: ['Enter', 'Enter'], en: ['Enter', 'Enter'] },
  ShiftLeft: { ru: ['Shift', 'Shift'], en: ['Shift', 'Shift'] },
  KeyZ: { ru: ['я', 'Я'], en: ['z', 'Z'] },
  KeyX: { ru: ['ч', 'Ч'], en: ['x', 'X'] },
  KeyC: { ru: ['с', 'С'], en: ['c', 'C'] },
  KeyV: { ru: ['м', 'М'], en: ['v', 'V'] },
  KeyB: { ru: ['и', 'И'], en: ['b', 'B'] },
  KeyN: { ru: ['т', 'Т'], en: ['n', 'N'] },
  KeyM: { ru: ['ь', 'Ь'], en: ['m', 'M'] },
  Comma: { ru: ['ю', 'Ю'], en: [',', '<'] },
  Period: { ru: ['ю', 'Ю'], en: ['.', '>'] },
  Slash: { ru: ['.', ','], en: ['/', '?'] },
  ArrowUp: { ru: ['▲', '▲'], en: ['▲', '▲'] },
  ShiftRight: { ru: ['Shift', 'Shift'], en: ['Shift', 'Shift'] },
  ControlLeft: { ru: ['Ctrl', 'Ctrl'], en: ['Ctrl', 'Ctrl'] },
  MetaLeft: { ru: ['Win', 'Win'], en: ['Win', 'Win'] },
  AltLeft: { ru: ['Alt', 'Alt'], en: ['Alt', 'Alt'] },
  Space: { ru: [' ', ' '], en: [' ', ' '] },
  AltRight: { ru: ['Alt', 'Alt'], en: ['Alt', 'Alt'] },
  ArrowLeft: { ru: ['◄', '◄'], en: ['◄', '◄'] },
  ArrowDown: { ru: ['▼', '▼'], en: ['▼', '▼'] },
  ArrowRight: { ru: ['►', '►'], en: ['►', '►'] },
  ControlRight: { ru: ['Ctrl', 'Ctrl'], en: ['Ctrl', 'Ctrl'] },
};

function getKeyboard() {
  const wrapperKeyboard = document.createElement('div');
  wrapperKeyboard.className = 'wrapper-keyboard';
  document.body.append(wrapperKeyboard);
  const btn = Object.values(keyboardKeys);
  Object.values(btn).forEach((element) => {
    // eslint-disable-next-line no-shadow
    const btn = document.createElement('div');
    btn.className = 'btn';
    wrapperKeyboard.append(btn);
    const enBtn = document.createElement('div');
    enBtn.className = 'enDiv';
    btn.append(enBtn);
    const enBtnUnShift = document.createElement('span');
    enBtnUnShift.className = 'unshift';
    enBtnUnShift.innerHTML = `${element.en[0]}`;
    enBtn.append(enBtnUnShift);
    const enBtnShift = document.createElement('span');
    enBtnShift.className = 'shift';
    enBtnShift.innerHTML = `${element.en[1]}`;
    enBtn.append(enBtnShift);
    // create RU-BTN
    const ruBtn = document.createElement('div');
    ruBtn.className = 'ruDiv';
    btn.append(ruBtn);
    const ruBtnUnShift = document.createElement('span');
    ruBtnUnShift.className = 'unshift';
    ruBtnUnShift.innerHTML = `${element.ru[0]}`;
    ruBtn.append(ruBtnUnShift);
    const ruBtnShift = document.createElement('span');
    ruBtnShift.className = 'shift';
    ruBtnShift.innerHTML = `${element.ru[1]}`;
    ruBtn.append(ruBtnShift);
  });
}

function getPage() {
  const textarea = '<textarea rows="10" cols="84" autofocus></textarea>';
  document.body.insertAdjacentHTML('afterbegin', textarea);
  const header = '<h1>Virtual Keyboard</h1>';
  document.body.insertAdjacentHTML('afterbegin', header);
  getKeyboard();
  const operatingSystem = '<p>Клавиатура создана в операционной системе Windows</p>';
  document.body.insertAdjacentHTML('beforeend', operatingSystem);
  const languageChange = '<p>Для переключения языка комбинация: левые ctrl + alt</p>';
  document.body.insertAdjacentHTML('beforeend', languageChange);
}
getPage();

const btns = document.querySelectorAll('.btn');
function getIdForBtn() {
  for (let i = 0; i < Object.keys(keyboardKeys).length; i++) {
    btns[i].id = Object.keys(keyboardKeys)[i];
  }
}
getIdForBtn();

function getEffectPressKeyboard() {
  document.addEventListener('keydown', (event) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const btn of btns) {
      if (btn.id === event.code) {
        btn.classList.add('btn-active');
      }
    }
  });
}
getEffectPressKeyboard();

function deleteEffectPressKeyboard() {
  document.addEventListener('keyup', (event) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const btn of btns) {
      if (btn.id === event.code) {
        btn.classList.remove('btn-active');
      }
    }
  });
}
deleteEffectPressKeyboard();

const btnUnshift = document.querySelectorAll('.unshift');
const btnShift = document.querySelectorAll('.shift');
// eslint-disable-next-line no-unused-vars
const btnCapslock = document.querySelector('#CapsLock');

function getPressShift() {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      btnUnshift.forEach((element) => {
        element.style.display = 'none';
      });
      btnShift.forEach((element) => {
        element.style.display = 'flex';
      });
    }
  });
}
getPressShift();

function deletePressShift() {
  document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      btnUnshift.forEach((element) => {
        element.style.display = 'flex';
      });
      btnShift.forEach((element) => {
        element.style.display = 'none';
      });
    }
  });
}
deletePressShift();

function getPressCapslock() {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
      btnShift.forEach((element) => {
        element.classList.toggle('btnCaplock');
      });
      btnShift.forEach((element) => {
        if (element.classList.contains('btnCaplock')) {
          // eslint-disable-next-line no-shadow
          btnUnshift.forEach((element) => {
            element.style.display = 'none';
          });
        } else {
          // eslint-disable-next-line no-shadow
          btnUnshift.forEach((element) => {
            element.style.display = 'flex';
          });
        }
      });
    }
  });
}
getPressCapslock();
/* --not working

const textareaField = document.getElementsByTagName('textarea');
function changeTextareaValue() {
  document.addEventListener('keydown', (event) => {
    //console.log(textareaField.value)
    //console.log (event)
    btns.forEach(element => {
      if (element.id === event.code) {
        //console.log(element.childNodes)
        for (let item of element.childNodes) {
          //console.log(item.childNodes)
          if (item.classList.contains('ruDiv')) {
           textareaField.innerHTMLg = item.childNodes[0];
          }
        }
      }
    });
  })
}
changeTextareaValue()
*/
