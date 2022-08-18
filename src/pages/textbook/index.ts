import './style.css';

function addTextbookPage() {
  const textbookPage = document.createElement('div');
  textbookPage.classList.add('textbook-page');
  textbookPage.innerText = `The Textbook Page:
  Development in progress`;
  //
  // Page code here
  //
  document.body.appendChild(textbookPage);
}

export default addTextbookPage;
