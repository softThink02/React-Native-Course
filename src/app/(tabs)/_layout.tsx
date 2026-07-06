import { ImageBackgroundHandler } from "@/components/tabsBgHandler";
import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 4,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <ImageBackgroundHandler
              focused={focused}
              icon={<Feather name="home" size={20} color={focused ? "#151312" : '#fff'} />}
              title="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <ImageBackgroundHandler
              focused={focused}
              icon={<Feather name="search" size={20} color={focused ? "#151312" : '#fff'}  />}
              title="Search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <ImageBackgroundHandler
              focused={focused}
              icon={<Feather name="user" size={20} color={focused ? "#151312" : '#fff'}  />}
              title="Profile"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <ImageBackgroundHandler
              focused={focused}
              icon={<Feather name="bookmark" size={20} color={focused ? "#151312" : '#fff'}  />}
              title="Saved"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
