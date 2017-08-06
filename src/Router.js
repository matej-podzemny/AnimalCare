import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import AnimalProfil from './components/AnimalProfil.js';
import AnimalList from './components/AnimalList';


const RouterComponent = () => {
  return (
    <Router
      sceneStyle={{ backgroundColor: '#252525' } }
      navigationBarStyle={{ backgroundColor: '#2E3E56', borderBottomWidth: 0 }}
      titleStyle={{ color : "#FFF" }}
    >
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Please Login' hideNavBar={true} />
      </Scene>

      <Scene key='main'>
        <Scene
          hideNavBar={true}
          onRight={() => Actions.employeeCreate()}
          rightTitle='Add'
          key='AnimalProfil'
          component={AnimalProfil}
          title='Animal Profil'
          initial
        />
        <Scene
          key='employeeCreate'
          component={EmployeeCreate}
          title='Employee Create'
        />
        <Scene
          key='employeeEdit'
          component={EmployeeEdit}
          title='Employee Edit'
        />
      </Scene>

    </Router>
  )
}

export default RouterComponent;
