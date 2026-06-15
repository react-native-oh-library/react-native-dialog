import * as React from "react";
import { StyleSheet, Text, PlatformColor, TextProps } from "react-native";
import useTheme, { StyleBuilder, selectPlatform } from "./useTheme";

export type DialogDescriptionProps = TextProps;

const DialogDescription: React.FC<DialogDescriptionProps> = (props) => {
  const { style, children, ...nodeProps } = props;
  const { styles } = useTheme(buildStyles);

  return (
    <Text style={[styles.text, style]} {...nodeProps}>
      {children}
    </Text>
  );
};

DialogDescription.displayName = "DialogDescription";

const buildStyles: StyleBuilder = (isDark) =>
  StyleSheet.create({
    text: selectPlatform({
      ios: {
        textAlign: "center",
        color: PlatformColor("label"),
        fontSize: 13,
        marginTop: 4,
      },
      android: {
        color: PlatformColor(
          `@android:color/${
            isDark ? "secondary_text_dark" : "secondary_text_light"
          }`
        ),
        fontSize: 16,
        marginTop: 10,
      },
      harmony: {
        textAlign: "center",
        color: PlatformColor("ohos_id_color_text_primary"),
        fontSize: 13,
        marginTop: 4,
      },
      web: {
        color: "#33383D",
        fontSize: 16,
        marginTop: 10,
      },
      default: {},
    }),
  });

export default DialogDescription;
