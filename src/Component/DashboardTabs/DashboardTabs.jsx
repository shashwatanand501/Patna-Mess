import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Text } from '@rneui/themed'; // Import Text from the same library you're using for consistency

// Import Screens
import User from '../../Screen/User/User';
import MySelectedMenu from '../../Screen/MySelectedMenu/MySelectedMenu';
import DashBoard from '../../Screen/DashBoard/DashBoard';
import Cart from '../../Screen/Cart/Cart';

const Tab = createBottomTabNavigator();

const DashboardTabs = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
                const iconNames = {
                    Dashboard: 'home',
                    MySelectedMenu: 'heart',
                    Cart: 'cart',
                    User: 'person',
                };
                const iconName = iconNames[route.name] || 'help-circle';

                return (
                    <Icon
                        name={iconName}
                        type="ionicon" // Specify the icon set here
                        size={focused ? size + 2 : size} // Slightly enlarge the icon if focused
                        color={color}
                    />
                );
            },
            tabBarActiveTintColor: 'rgba(103, 80, 164, 1)', // Active color
            tabBarInactiveTintColor: 'black', // Inactive color
            tabBarStyle: {
                backgroundColor: 'white',
                borderColor: 'rgba(103, 80, 164, 1)',
                borderTopWidth: 0,
                elevation: 5,
                height: 70, // Adjust height as needed
                borderRadius: 30,
                position: 'absolute',
                left: 20,
                right: 20,
                bottom: 15,
                padding: 5,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                padding: 2,
                margin: 2,
                fontWeight: 'bold',
            },
            tabBarItemStyle: {
                margin: 5, // Adjust the margin between the icons
            },
        })}
    >
        <Tab.Screen
            name="Dashboard"
            component={DashBoard}
            options={{
                tabBarLabel: ({ focused }) =>
                    focused ? <Text>Home</Text> : null, // Wrap label in Text component
            }}
        />
        <Tab.Screen
            name="MySelectedMenu"
            component={MySelectedMenu}
            options={{
                tabBarLabel: ({ focused }) =>
                    focused ? <Text>Favorites</Text> : null, // Wrap label in Text component
            }}
        />
        <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
                tabBarLabel: ({ focused }) =>
                    focused ? <Text>Search</Text> : null, // Wrap label in Text component
            }}
        />
        <Tab.Screen
            name="User"
            component={User}
            options={{
                tabBarLabel: ({ focused }) =>
                    focused ? <Text>Profile</Text> : null, // Wrap label in Text component
            }}
        />
    </Tab.Navigator>
);

export default DashboardTabs;
