import './style.css';
import {
  addAboutTeam,
  addDescription,
  addFooter,
  addHeader,
  updateNavigation,
} from './pages/main/index';
import addAudioCallGame from './pages/audio_call/index';
import addSprintGame from './pages/sprint/index';
import addStatisticsPage from './pages/statistics/index';
import addTextbookPage from './pages/textbook/index';
import addWordListPage from './pages/word_list/index';

addHeader();
addAudioCallGame();
addSprintGame();
addStatisticsPage();
addTextbookPage();
addWordListPage();
addDescription();
addAboutTeam();
addFooter();
updateNavigation();
