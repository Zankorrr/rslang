import './style.css';

function addStatisticsPage() {
  const statisticsPage = document.createElement('div');
  statisticsPage.classList.add('statistics-page');
  document.body.appendChild(statisticsPage);
}

export default addStatisticsPage;
