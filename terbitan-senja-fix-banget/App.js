import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dasboard from './components/screens/Dasboard';
import Splash from './components/screens/Splash';
import Biografi from './components/screens/biografis';
import Materi from './components/screens/materi';
import Senja from './components/screens/senja';

//QUIZ
import Quiz from './components/screens/quiz/quiz';
import Score from './components/screens/quiz/Score';
import Finalquiz from './components/screens/quiz/Finalquiz';
import Finalscore from './components/screens/quiz/Finalscore';

//PUISI HOME
import CYA from './components/screens/puisihome/cintayangagung';
import SPK from './components/screens/puisihome/senjadipelabuhankecil';
import GURU from './components/screens/puisihome/guruku';
import CSI from './components/screens/puisihome/cintaseorangibu';
import ST from './components/screens/puisihome/sahabattersayang';

//PUISI SENJA
import Tangis from './components/screens/puisisenja/tangis';
import Hujan from './components/screens/puisisenja/hujan';
import Derai from './components/screens/puisisenja/derai';
import Gugur from './components/screens/puisisenja/gugur';
import Duka from './components/screens/puisisenja/duka';
import Doa from './components/screens/puisisenja/doa';
import Indonesia from './components/screens/puisisenja/indo';
import Merapi from './components/screens/puisisenja/merapi';

//BIOGRAFI
import Chairil from './components/screens/biografi/CA';
import Sapardi from './components/screens/biografi/SDD';
import Thukul from './components/screens/biografi/WJ';
import Willibrordus from './components/screens/biografi/WSR';
import Sitor from './components/screens/biografi/SS';

//MATERI 
import Pengertian from './components/screens/materi/pengertian';
import PuisiB from './components/screens/materi/jenisbaru';
import Jenis from './components/screens/materi/jenislama';
import Struktur from './components/screens/materi/strukturbatin';
import StrukturB from './components/screens/materi/strukturfisik';
import Membaca from './components/screens/materi/carabaca';
import Membuat from './components/screens/materi/carabuat';
import Ciri from './components/screens/materi/cirilama';
import CiriB from './components/screens/materi/ciribaru';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen name="Splash" component={Splash}/>        
        <Stack.Screen name="Dasboard" component={Dasboard}/>    
        <Stack.Screen name="Materi" component={Materi}/>    
        <Stack.Screen name="Biografi" component={Biografi}/>    
        <Stack.Screen name="Senja" component={Senja}/>   

        <Stack.Screen name="CYA" component={CYA}/>
        <Stack.Screen name="SPK" component={SPK}/>
        <Stack.Screen name="GURU" component={GURU}/>
        <Stack.Screen name="CSI" component={CSI}/>
        <Stack.Screen name="ST" component={ST}/>

        <Stack.Screen name="Tangis" component={Tangis}/>
        <Stack.Screen name="Hujan" component={Hujan}/>
        <Stack.Screen name="Derai" component={Derai}/>
        <Stack.Screen name="Gugur" component={Gugur}/>
        <Stack.Screen name="Duka" component={Duka}/>
        <Stack.Screen name="Doa" component={Doa}/>
        <Stack.Screen name="Indonesia" component={Indonesia}/>
        <Stack.Screen name="Merapi" component={Merapi}/>

        <Stack.Screen name="Chairil" component={Chairil}/> 
        <Stack.Screen name="Sapardi" component={Sapardi}/> 
        <Stack.Screen name="Thukul" component={Thukul}/> 
        <Stack.Screen name="Willibrordus" component={Willibrordus}/> 
        <Stack.Screen name="Sitor" component={Sitor}/>

        <Stack.Screen name="Pengertian" component={Pengertian}/> 
        <Stack.Screen name="PuisiB" component={PuisiB}/> 
        <Stack.Screen name="Jenis" component={Jenis}/> 
        <Stack.Screen name="Struktur" component={Struktur}/> 
        <Stack.Screen name="StrukturB" component={StrukturB}/> 
        <Stack.Screen name="Membaca" component={Membaca}/> 
        <Stack.Screen name="Membuat" component={Membuat}/> 
        <Stack.Screen name="Ciri" component={Ciri}/> 
        <Stack.Screen name="CiriB" component={CiriB}/> 

        <Stack.Screen name="Quiz" component={Quiz}/>    
        <Stack.Screen name="Score" component={Score} />
        <Stack.Screen name="Finalquiz" component={Finalquiz}/>    
        <Stack.Screen name="Finalscore" component={Finalscore} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}