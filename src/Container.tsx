import * as React from "react";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  PlatformColor,
  ViewStyle,
  StyleProp,
} from "react-native";
import Modal from "./Modal";
import useTheme, { StyleBuilder, selectPlatform } from "./useTheme";
import DialogTitle, { DialogTitleProps } from "./Title";
import DialogDescription, { DialogDescriptionProps } from "./Description";
import DialogButton, { DialogButtonProps } from "./Button";

type TitleElement = ReactElement<DialogTitleProps, typeof DialogTitle>;
type DescriptionElement = ReactElement<
  DialogDescriptionProps,
  typeof DialogDescription
>;
type ButtonElement = ReactElement<DialogButtonProps, typeof DialogButton>;

const iOS = Platform.OS === "ios";
const harmony = (Platform.OS as string) === "harmony";

export type DialogContainerProps = PropsWithChildren<{
  blurComponentIOS?: ReactNode;
  buttonSeparatorStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  footerStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  blurStyle?: StyleProp<ViewStyle>;
  visible?: boolean;
  verticalButtons?: boolean;
  onBackdropPress?: () => void;
  onRequestClose?: () => void;
  keyboardVerticalOffset?: number;
  useNativeDriver?: boolean;
}>;

const DialogContainer: React.FC<DialogContainerProps> = (props) => {
  const {
    blurComponentIOS,
    buttonSeparatorStyle,
    children,
    contentStyle,
    footerStyle,
    headerStyle,
    blurStyle,
    visible = false,
    verticalButtons = false,
    keyboardVerticalOffset = 40,
    ...nodeProps
  } = props;
  const titleChildrens: TitleElement[] = [];
  const descriptionChildrens: DescriptionElement[] = [];
  const buttonChildrens: (ButtonElement | JSX.Element)[] = [];
  const otherChildrens: ReactNode[] = [];
  const { styles } = useTheme(buildStyles);
  React.Children.forEach(children, (child) => {
    if (typeof child === "object" && child !== null && "type" in child) {
      // @ts-expect-error: "Property 'displayName' does not exist on type 'string"
      const displayName = child.type?.displayName || child.type?.name;
      switch (displayName) {
        case DialogTitle.displayName:
          titleChildrens.push(child as TitleElement);
          return;
        case DialogDescription.displayName:
          descriptionChildrens.push(child as DescriptionElement);
          return;
        case DialogButton.displayName:
          if ((iOS || harmony) && buttonChildrens.length > 0) {
            buttonChildrens.push(
              <View
                style={[
                  verticalButtons
                    ? styles.buttonSeparatorVertical
                    : styles.buttonSeparatorHorizontal,
                  buttonSeparatorStyle,
                ]}
              />
            );
          }
          buttonChildrens.push(child as ButtonElement);
          return;
      }
    }
    otherChildrens.push(child);
  });
  return (
    <Modal
      renderToHardwareTextureAndroid={true}
      transparent={true}
      visible={visible}
      {...nodeProps}
    >
      <KeyboardAvoidingView
        behavior={iOS ? "padding" : undefined}
        keyboardVerticalOffset={iOS ? keyboardVerticalOffset : undefined}
        style={styles.centeredView}
      >
        <View style={[styles.content, contentStyle]}>
          {iOS && blurComponentIOS}
          {iOS && !blurComponentIOS && (
            <View style={[styles.blur, blurStyle]} />
          )}
          <View style={[styles.header, headerStyle]}>
            {titleChildrens}
            {descriptionChildrens}
          </View>
          {otherChildrens}
          {Boolean(buttonChildrens.length) && (
            <>
              {(iOS || harmony) && <View style={[styles.buttonSeparatorVertical, buttonSeparatorStyle]} />}
              <View
                style={[
                  styles.footer,
                  verticalButtons ? styles.footerVertical : null,
                  footerStyle,
                ]}
              >
                {buttonChildrens.map((x, i) =>
                  React.cloneElement(x, {
                    key: `dialog-button-${i}`,
                  })
                )}
              </View>
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const buildStyles: StyleBuilder = (isDark) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    blur: {
      position: "absolute",
      backgroundColor: iOS
        ? PlatformColor("systemGray6")
        : PlatformColor("ohos_id_color_background"),
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    content: selectPlatform({
      ios: {
        width: 270,
        backgroundColor: PlatformColor("systemGray6"),
        flexDirection: "column",
        borderRadius: 13,
        overflow: "hidden",
      },
      android: {
        backgroundColor: PlatformColor("?attr/colorBackgroundFloating"),
        flexDirection: "column",
        borderRadius: 3,
        padding: 16,
        margin: 16,
        overflow: "hidden",
        elevation: 4,
        minWidth: 300,
      },
      harmony: {
        width: 300,
        minWidth: 270,
        backgroundColor: PlatformColor("ohos_id_color_background"),
        flexDirection: "column",
        borderRadius: 13,
        overflow: "hidden",
      },
      web: {
        flexDirection: "column",
        borderRadius: 3,
        padding: 16,
        margin: 16,
        backgroundColor: "white",
        overflow: "hidden",
        elevation: 4,
        minWidth: 300,
      },
      default: {},
    }),
    header: selectPlatform({
      ios: {
        margin: 18,
      },
      android: {
        margin: 12,
      },
      harmony: {
        margin: 18,
      },
      web: {
        margin: 12,
      },
      default: {},
    }),
    footer: {
      flexDirection: "row",
      ...selectPlatform({
        ios: {
          justifyContent: "space-between",
        },
        android: {
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: 4,
        },
        harmony: {
          justifyContent: "space-between",
        },
        web: {
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: 4,
        },
        default: {},
      }),
    },
    footerVertical: {
      flexDirection: "column",
    },
    buttonSeparatorHorizontal: {
      height: "100%",
      backgroundColor: harmony
        ? PlatformColor("ohos_id_color_list_separator")
        : PlatformColor("separator"),
      width: StyleSheet.hairlineWidth,
    },
    buttonSeparatorVertical: {
      width: "100%",
      backgroundColor: harmony
        ? PlatformColor("ohos_id_color_list_separator")
        : PlatformColor("separator"),
      height: StyleSheet.hairlineWidth,
    },
  });

export default DialogContainer;
