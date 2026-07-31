> Template Version: v0.4.2

<p align="center">
  <h1 align="center"> <code>react-native-dialog</code> </h1>
</p>
<p align="center">
    <a href="https://github.com/mmazzarolo/react-native-dialog">
        <img src="https://img.shields.io/badge/platforms-android%20|%20ios%20|%20harmony%20-lightgrey.svg" alt="Supported platforms" />
    </a>
    <a href="https://github.com/mmazzarolo/react-native-dialog/blob/master/LICENSE.md">
        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
    </a>
</p>

This project is based on [react-native-dialog](https://github.com/mmazzarolo/react-native-dialog).

the repository of this third-party supports direct installation from npm. The new package name is `@react-native-ohos/react-native-dialog`. The version relationship is as follows:

| Library Name    | Library Version    | Release Info     | Supported RN Versions    | Autolink     | Compile API Version     | Community Baseline Version    | npm Address                |
| ------------ | ------------ | ------------------------------ | ------------- | ------------- |------------------------ | ------------- | ------------- |
| @react-native-ohos/react-native-dialog | ~ 9.3.1 (In Development)    | [Github Releases](https://github.com/react-native-oh-library/react-native-dialog/releases) |  0.72.*/ 0.77.*/ 0.82.*/0.84.* | No | API12+ | 9.3.0 | [Npm Address](https://www.npmjs.com/package/@react-native-ohos/react-native-dialog) |

# Introduction

react-native-dialog is a lightweight dialog component library for React Native, used to quickly create dialog UIs such as alerts, confirmation dialogs, input dialogs, and notification prompts.

## Installation and Usage

Navigate to the project directory and run the following command:

<!-- tabs:start -->

#### **npm**

```bash
npm install @react-native-ohos/react-native-dialog
```

#### **yarn**

```bash
yarn add @react-native-ohos/react-native-dialog
```

<!-- tabs:end -->

The following code demonstrates the basic usage of this library:

```js
import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Dialog from "react-native-dialog";

export default function App() {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Show dialog" onPress={showDialog} />
      <Dialog.Container visible={visible}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Delete" onPress={handleDelete} />
      </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

## Constraints and Limitations

### Compatibility

To use this library, you need to use the correct React-Native and RNOH versions. Additionally, you need to use the matching DevEco Studio and device ROM.

Verified on the following versions:

1. RNOH: 0.72.38; SDK: HarmonyOS-5.0.0(API12); DevEco Studio 6.0.0.868; ROM: 5.0.0.107;
2. RNOH: 0.77.18; SDK: HarmonyOS 6.0.0 Release SDK; IDE: DevEco Studio 6.0.0.868; ROM: 6.0.0.112;
3. RNOH: 0.82.1; SDK: HarmonyOS 6.0.1 Release SDK; IDE: DevEco Studio 6.0.1 Release; ROM: 6.0.0.120 SP7;
4. RNOH: 0.84.1; SDK: HarmonyOS 6.0.1 Release SDK; IDE: DevEco Studio 6.0.1 Release; ROM:6.0.0.120 SP7;

## API

>[!TIP] The "Platform" column indicates the platforms supported by the original third-party library.

>[!TIP] In the "HarmonyOS Support" column, "Yes" means the HarmonyOS platform supports this property; "No" means it is not supported; "partially" means partial support. The usage is consistent across platforms, with effects matching those of iOS or Android.

### Dialog.Container props

| Name | Description | Type | Required | Platform | HarmonyOS Support |
| ---- | ----------- | ---- | -------- | -------- |-------------------|
| visible | Whether to show the dialog | boolean | Yes | iOS/Android | Yes |
| children | Dialog child content | ReactNode | Yes | iOS/Android | Yes |
| blurComponentIOS | Custom blur background component for iOS | ReactNode | No | iOS | No |
| contentStyle | Custom style for the dialog content area | StyleProp\<ViewStyle\> | No | iOS/Android | Yes |
| headerStyle | Custom style for the dialog header (title + description area) | StyleProp\<ViewStyle\> | No | iOS/Android | Yes |
| footerStyle | Custom style for the dialog footer (button area) | StyleProp\<ViewStyle\> | No | iOS/Android | Yes |
| buttonSeparatorStyle | Custom style for the button separator | StyleProp\<ViewStyle\> | No | iOS/Android | Yes |
| blurStyle | Custom style for the iOS default blur background | StyleProp\<ViewStyle\> | No | iOS | No |
| verticalButtons | Whether to arrange buttons vertically | boolean | No | iOS/Android | Yes |
| onBackdropPress | Callback when the backdrop is pressed | () => void | No | iOS/Android | Yes |
| onRequestClose | Callback when the hardware back button on Android or the menu button on Apple TV is pressed | () => void | No | Android/iOS | Yes |
| keyboardVerticalOffset | Keyboard vertical offset for iOS | number | No | iOS | No |
| useNativeDriver | Whether to use native animation driver | boolean | No | iOS/Android | Yes |

### Dialog.Title props

| Name | Description | Type | Required | Platform | HarmonyOS Support |
| ---- | ----------- | ---- | -------- | -------- | ------------------ |
| children | Title text | string | Yes | iOS/Android | Yes |

### Dialog.Description props

| Name | Description | Type | Required | Platform | HarmonyOS Support |
| ---- | ----------- | ---- | -------- | -------- | ------------------ |
| children | Description text | string | Yes | iOS/Android | Yes |

### Dialog.Button props

| Name | Description | Type | Required | Platform | HarmonyOS Support |
| ---- | ----------- | ---- | -------- | -------- | ------------------ |
| label | Button label text | ReactNode | Yes | iOS/Android | Yes |
| color | Label color, iOS default `#007ff9`, Android default `#169689` | ColorValue | No | iOS/Android | Yes |
| bold | Whether to display the label in bold | boolean | No | iOS/Android | Yes |
| disabled | Whether to disable the button | boolean | No | iOS/Android | Yes |
| onPress | Button press callback | () => void | Yes | iOS/Android | Yes |

### Dialog.Input props

| Name | Description | Type | Required | Platform | HarmonyOS Support |
| ---- | ----------- | ---- | -------- | -------- | ------------------ |
| label | Floating label text for the input | ReactNode | No | iOS/Android | Yes |
| wrapperStyle | Custom style for the input wrapper container | StyleProp\<ViewStyle\> | No | iOS/Android | Yes |
| textInputRef | Ref to the input | LegacyRef\<TextInput\> | No | iOS/Android | Yes |
| unstableLabelStyle | Custom style for the label (may be removed in a future version) | StyleProp\<TextStyle\> | No | iOS/Android | Yes |

### Dialog.CodeInput props

| Name | Description | Type                   | Required | Platform | HarmonyOS Support |
| ---- | ----------- |------------------------| -------- | -------- | ------------------ |
| style | Custom style for the overall container | StyleProp\<ViewStyle\> | No | iOS/Android | Yes |
| wrapperStyle | Custom style for the outer wrapper container | StyleProp\<ViewStyle\> | No | iOS/Android | Yes |
| digitContainerStyle | Custom style for individual digit containers | StyleProp\<ViewStyle\> | No | iOS/Android | Yes |
| digitContainerFocusedStyle | Custom style for digit containers when focused | StyleProp\<ViewStyle\> | No | iOS/Android | Yes |
| digitStyle | Custom style for digit text | StyleProp\<TextStyle\> | No | iOS/Android | Yes |
| codeLength | Total number of code digits | number                 | No | iOS/Android | Yes |
| onCodeChange | Callback when the code input changes | (code: string) => void | No | iOS/Android | Yes |

### Dialog.Switch props

| Name | Description | Type | Required | Platform | HarmonyOS Support |
| ---- | ----------- | ---- | -------- | -------- | ------------------ |
| label | Description text beside the switch | ReactNode | No | iOS/Android | Yes |
| unstableLabelStyle | Custom style for the label (may be removed in a future version) | StyleProp\<TextStyle\> | No | iOS/Android | Yes |

## Known Issues

## Others

## Directory Structure

```
├── src                       # RN code
│   └── index.ts              # Entry File
│   └── Button.tsx            # Dialog.Button 
│   └── CodeInput.tsx         # Dialog.CodeInput 
│   └── Container.tsx         # Dialog.Container 
│   └── Description.tsx       # Dialog.Description 
│   └── Input.tsx             # Dialog.Input 
│   └── Modal.tsx             # Motal dialog
│   └── Switch.tsx            # Dialog.Switch 
│   └── Title.tsx             # Dialog.Title 
│   └── useTheme.ts           # Theme hook
├── README_en.md           # English
├── README.md   # Chinese
```

## How to Contribute

If you find any problem when using the project, submit
an [Issue](https://github.com/react-native-oh-library/react-native-dialog/issues). Pull Requests ([PR](https://github.com/react-native-oh-library/react-native-dialog/pulls)) are also very welcome.

## License

This project is based on [The MIT License (MIT)](https://github.com/mmazzarolo/react-native-dialog/blob/master/LICENSE.md). Feel free to enjoy and participate in open source.
