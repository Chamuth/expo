import registerRootComponent from 'expo/src/launch/registerRootComponent';

import App from '../../App';
import { CarplayModule } from '../../Carplay';

registerRootComponent(App, CarplayModule);
