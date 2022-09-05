import './style.css';

function addStatisticsPage() {
  const statisticsPage = document.createElement('div');
  statisticsPage.classList.add('statistics-page');
  statisticsPage.innerText = `The Statistics Page:
  Development in progress`;

  document.body.appendChild(statisticsPage);
}

export default addStatisticsPage;
