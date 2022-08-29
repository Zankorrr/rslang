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
import { addSignUp, addSignIn } from './pages/authorization/index';

addHeader();
addAudioCallGame();
addSprintGame();
addStatisticsPage();
addTextbookPage();
addWordListPage();
addDescription();
addSignUp();
addSignIn();
addAboutTeam();
addFooter();
updateNavigation();
