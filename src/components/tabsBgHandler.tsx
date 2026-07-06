import { ImageBackground, Text, View } from "react-native";

export const ImageBackgroundHandler = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: React.ReactNode;
  title: string;
}) => {
  if (focused) {
    return (
      <ImageBackground
        source={require("@/assets/images/purpleImage.png")}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        {icon}
        <Text className="font-semibold text-base text-secondary ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  } else {
    return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
        {icon}
      </View>
    );
  }
};
