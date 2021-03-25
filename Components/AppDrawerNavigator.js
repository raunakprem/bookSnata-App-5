import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import SettingScreen from '../Screens/SettingScreen';
import {AppTabNavigator} from './AppTabNavigator'
import CostomSideBarMenu from './costomSideBarMenu';
import CustomSideBarMenu from './costomSideBarMenu'
import MyDonationScreen from '../Screens/MyDonationScreens'
import { Settings } from 'react-native';
export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
        navigationOptions:{
            drawerIcon:<Icon 
            name="home"
             type="fontawsome5"
            />
        }
    },
    MyDonations:{
        screen:MyDonationScreen
        navigationOptions:{
            drawerIcon:<Icon
            name="gift"
            type="font-awsome"
            
            />,
            drawerLabel:"My Donations"
        
        }
    },
    Setting:{
        screen:SettingScreen
        navigationOptions:{
            drawerIcon:<Icon
            name="Settings"
            type="font-Awsome"
            />

        }
    }
},
{
    comtentComponent:CustomSideBarMenu
}
,
{initialRouteName:'Home'}
)
