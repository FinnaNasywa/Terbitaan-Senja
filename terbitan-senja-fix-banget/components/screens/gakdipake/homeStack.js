import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

//GAK DIPAKE
import List from '../List';
import Login from '../gakdipake/Login';
import Registrasi from '../gakdipake/Registrasi';

import Dasboard from '../Dasboard';
import Splash from '../Splash';
import Biografi from '../biografis';
import Materi from '../materi';
import Senja from '../senja';

//QUIZ
import Quiz from '../quiz/quiz';
import Score from '../quiz/Score';

//PUISI HOME
import CYA from '../puisihome/cintayangagung';

//BIOGRAFI
import Chairil from '../biografi/CA';
import Sapardi from '../biografi/SDD';
import Thukul from '../biografi/WJ';
import Willibrordus from '../biografi/WSR';
import Sitor from '../biografi/SS';

//MATERI 
import PuisiB from '../materi/jenisbaru';
import Jenis from '../materi/jenislama';
import Struktur from '../materi/strukturbatin';
import StrukturB from '../materi/strukturfisik';
import Membaca from '../materi/carabaca';
import Pengertian from '../materi/pengertian';
import Membuat from '../materi/carabuat';
import Ciri from '../materi/cirilama';
import CiriB from '../materi/ciribaru';





const screens = {

  Splash:{
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },   
  Dasboard: {
    screen: Dasboard,
    navigationOptions: {
      header: null
    }
  },
  
  Biografi: {
    screen: Biografi,
    navigationOptions: {
      header: null
    }
  },
   Materi: {
    screen: Materi,
    navigationOptions: {
      header: null
    }
  },
  // Login:{
  //   screen: Login
  // },
  // List:{
  //   screen: List,
  //   navigationOptions: {
  //     // header: null
  //   }
  // },
  // Registrasi:{
  //   screen: Registrasi,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
   CYA: {
    screen: CYA,
    navigationOptions: {
      header: null
    }
  }, 
   Chairil: {
    screen: Chairil,
    navigationOptions: {
      header: null
    }
  }, 
    Sapardi: {
    screen: Sapardi,
    navigationOptions: {
      header: null
    }
  }, 
  Thukul: {
    screen: Thukul,
    navigationOptions: {
      header: null
    }
  }, 
  Willibrordus: {
    screen: Willibrordus,
    navigationOptions: {
      header: null
    }
  }, 
  Sitor: {
    screen: Sitor,
    navigationOptions: {
      header: null
    }
  }, 
   Pengertian: {
    screen: Pengertian,
    navigationOptions: {
      header: null
    }
  },
   Jenis: {
    screen: Jenis,
    navigationOptions: {
      header: null
    }
  },  
  PuisiB: {
    screen: PuisiB,
    navigationOptions: {
      header: null
    }
  },  
  Ciri: {
    screen: Ciri,
    navigationOptions: {
      header: null
    }
  },  
  CiriB: {
    screen: CiriB,
    navigationOptions: {
      header: null
    }
  },
  Struktur: {
    screen: Struktur,
    navigationOptions: {
      header: null
    }
  },
  StrukturB: {
    screen: StrukturB,
    navigationOptions: {
      header: null
    }
  },
  Membuat: {
    screen: Membuat,
    navigationOptions: {
      header: null
    }
  },
  Membaca: {
    screen: Membaca,
    navigationOptions: {
      header: null
    }
  },
  Senja: {
    screen: Senja,
    navigationOptions: {
      header: null
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      header: null
    }
  },
    Score: {
    screen: Score,
    navigationOptions: {
      header: null
    }
  },
  
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);