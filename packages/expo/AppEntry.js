import registerRootComponent from 'expo/build/launch/registerRootComponent';

import App from '../../App';
import { CarplayModule } from '../../Carplay';

registerRootComponent(App, CarplayModule);
