import './style.css';

function addWordListPage() {
  const wordListPage = document.createElement('div');
  wordListPage.classList.add('word-list-page');
  wordListPage.innerText = `The Word list Page:
  Development in progress`;
  //
  // Page code here
  //
  document.body.appendChild(wordListPage);
}

export default addWordListPage;
