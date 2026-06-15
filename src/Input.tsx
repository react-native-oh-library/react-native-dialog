import * as React from "react";
import { LegacyRef, ReactNode } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  PlatformColor,
  TextInputProps,
  TextStyle,
  ViewStyle,
  StyleProp,
} from "react-native";
import useTheme, { StyleBuilder,selectPlatform } from "./useTheme";

const harmony = (Platform.OS as string) === "harmony";

export interface DialogInputProps extends TextInputProps {
  label?: ReactNode;
  wrapperStyle?: StyleProp<ViewStyle>;
  textInputRef?: LegacyRef<TextInput>;
  unstableLabelStyle?: StyleProp<TextStyle>;
}

const DialogInput: React.FC<DialogInputProps> = (props) => {
  const {
    label,
    style,
    wrapperStyle,
    textInputRef,
    multiline,
    numberOfLines,
    unstableLabelStyle,
    ...nodeProps
  } = props;
  const lines = (multiline && numberOfLines) || 1;
  const height =
    18 +
  selectPlatform({ ios: 14, android: 22, harmony: 22, default: 0 }) * lines;
  const { styles, isDark } = useTheme(buildStyles);
  return (
    <View style={[styles.textInputWrapper, wrapperStyle]}>
      {label && <Text style={[styles.label, unstableLabelStyle]}>{label}</Text>}
      <TextInput
        ref={textInputRef}
        placeholderTextColor={
          Platform.OS === "ios"
            ? PlatformColor("placeholderText")
            : harmony
            ? PlatformColor("ohos_id_color_text_hint_contrary")
            : PlatformColor(
                `@android:color/${
                  isDark ? "hint_foreground_dark" : "hint_foreground_light"
                }`
              )
        }
        underlineColorAndroid={
          harmony
            ? PlatformColor("ohos_id_color_text_hint_contrary")
            : PlatformColor(
                `@android:color/${
                  isDark ? "hint_foreground_dark" : "hint_foreground_light"
                }`
              )
        }
        style={[styles.textInput, style, { height }]}
        multiline={multiline}
        numberOfLines={numberOfLines}
        {...nodeProps}
      />
    </View>
  );
};

DialogInput.displayName = "DialogInput";

const buildStyles: StyleBuilder = (isDark) =>
  StyleSheet.create({
    textInputWrapper: selectPlatform({
      ios: {
        backgroundColor: PlatformColor("systemGray5"),
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        borderColor: PlatformColor("separator"),
        marginHorizontal: 20,
        marginBottom: 20,
        paddingHorizontal: 8,
      },
      android: {
        marginHorizontal: 10,
        marginBottom: 20,
      },
      harmony: {
        backgroundColor: PlatformColor("ohos_id_color_background"),
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        borderColor: PlatformColor("ohos_id_color_list_separator"),
        marginHorizontal: 20,
        marginBottom: 20,
        paddingHorizontal: 8,
      },
      default: {},
    }),
    label: selectPlatform({
      ios: {
        color: PlatformColor("label"),
      },
      android: {
        color: PlatformColor(
          `@android:color/${
            isDark ? "primary_text_dark" : "primary_text_light"
          }`
        ),
        fontSize: 14,
      },
      harmony: {
        color: PlatformColor("ohos_id_color_text_primary") ,
      },
      default: {},
    }),
    textInput: selectPlatform({
      ios: {
        color: PlatformColor("label"),
      },
      android: {
        color: PlatformColor(
          `@android:color/${
            isDark ? "primary_text_dark" : "primary_text_light"
          }`
        ),
        marginLeft: -4,
        paddingLeft: 4,
      },
      harmony: {
        color: PlatformColor("ohos_id_color_text_primary"),
        textAlign: "center",
      },
      default: {},
    }),
  });

export default DialogInput;
