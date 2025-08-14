/**
  voteId - уникальный идентификатор голосовалки. 

  Он должен в атрибуте data-modal="{{voteId}} на элементе js-vote
  И в попапе для результата голосования vote-modal в поле id="{{voteId}}"
  
  */

const showModal = (id) => {
  const modalWrap = document.querySelector(".js-vote-modal-wrap");
  const modalElement = modalWrap.querySelector(`#${id}`);

  const btn = modalElement.querySelector(".vote-modal__btn");

  const timer1 = setTimeout(() => {
    modalElement.classList.add("active");
  }, 30);

  const timer2 = setTimeout(() => {
    modalElement.classList.remove("active");
  }, 3000);

  btn.addEventListener(
    "click",
    () => {
      //Отчищает таймеры, скрывает модалку. Тут можно добавить любую необходимую логику при нажатии на кнопку.
      clearTimeout(timer1);
      clearTimeout(timer2);

      modalElement.classList.remove("active");
    },
    { once: true }
  );
};

const closeModal = (modalElement) => {
  modalElement.classList.remove("active");
};
