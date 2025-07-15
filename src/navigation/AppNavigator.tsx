import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, TAB_NAMES, SCREEN_NAMES } from '../constants';
import { TabParamList, RootStackParamList } from '../types';

// Screens
import NewsFeedScreen from '../screens/NewsFeedScreen';
import EventsScreen from '../screens/EventsScreen';
import MapScreen from '../screens/MapScreen';
import WeatherScreen from '../screens/WeatherScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case TAB_NAMES.FEED:
              iconName = focused ? 'newspaper' : 'newspaper-outline';
              break;
            case TAB_NAMES.MAP:
              iconName = focused ? 'map' : 'map-outline';
              break;
            case TAB_NAMES.EVENTS:
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case TAB_NAMES.WEATHER:
              iconName = focused ? 'cloud' : 'cloud-outline';
              break;
            case TAB_NAMES.PROFILE:
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textTertiary,
        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        headerStyle: {
          backgroundColor: COLORS.surface,
          borderBottomColor: COLORS.border,
          borderBottomWidth: 1,
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        headerTitleStyle: {
          color: COLORS.textPrimary,
          fontSize: 18,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen
        name={TAB_NAMES.FEED}
        component={NewsFeedScreen}
        options={{
          title: 'Local News',
          tabBarLabel: 'News',
        }}
      />
      <Tab.Screen
        name={TAB_NAMES.MAP}
        component={MapScreen}
        options={{
          title: 'Local Map',
          tabBarLabel: 'Map',
        }}
      />
      <Tab.Screen
        name={TAB_NAMES.EVENTS}
        component={EventsScreen}
        options={{
          title: 'Local Events',
          tabBarLabel: 'Events',
        }}
      />
      <Tab.Screen
        name={TAB_NAMES.WEATHER}
        component={WeatherScreen}
        options={{
          title: 'Weather',
          tabBarLabel: 'Weather',
        }}
      />
      <Tab.Screen
        name={TAB_NAMES.PROFILE}
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={SCREEN_NAMES.MAIN}
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
