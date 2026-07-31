> 模板版本：v0.4.2

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

本项目基于 [react-native-dialog](https://github.com/mmazzarolo/react-native-dialog) 开发。

该第三方库支持直接从 npm 下载，新的包名为：`@react-native-ohos/react-native-dialog`，版本所属关系如下：

| 三方库名称    | 三方库版本    | 发布信息     | 支持RN版本    | Autolink     | 编译API版本     | 社区基线版本    | npm地址                |
| ------------ | ------------ | ------------------------------ | ------------- | ------------- |------------------------ | ------------- | ------------- |
| @react-native-ohos/react-native-dialog | ~ 9.3.1（开发中）    | [Github Releases](https://github.com/react-native-oh-library/react-native-dialog/releases) |  0.72.*/ 0.77.*/ 0.82.*/0.84.* | 否 | API12+ | 9.3.0 | [Npm Address](https://www.npmjs.com/package/@react-native-ohos/react-native-dialog) |


## 简介

react-native-dialog 是一个用于 React Native 的轻量级弹窗组件库，用来快速创建 Alert、确认框、输入框、提示框 等对话框 UI

## 安装与使用

进入到工程目录并输入以下命令：

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

下面的代码展示了这个库的基本使用场景：

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
    // 用户点击了"删除"按钮，可以在此处执行自定义逻辑
    // ...你的逻辑
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="显示对话框" onPress={showDialog} />
      <Dialog.Container visible={visible}>
        <Dialog.Title>删除账户</Dialog.Title>
        <Dialog.Description>
          确定要删除此账户吗？此操作不可撤销。
        </Dialog.Description>
        <Dialog.Button label="取消" onPress={handleCancel} />
        <Dialog.Button label="删除" onPress={handleDelete} />
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

## 约束与限制

### 兼容性

要使用此库，需要使用正确的 React-Native 和 RNOH 版本。另外，还需要使用配套的 DevEco Studio 和 手机 ROM。

在以下版本验证通过：

1. RNOH: 0.72.38; SDK: HarmonyOS-5.0.0(API12); DevEco Studio 6.0.0.868; ROM: 5.0.0.107;
2. RNOH: 0.77.18; SDK: HarmonyOS 6.0.0 Release SDK; IDE: DevEco Studio 6.0.0.868; ROM: 6.0.0.112;
3. RNOH: 0.82.1; SDK: HarmonyOS 6.0.1 Release SDK; IDE: DevEco Studio 6.0.1 Release; ROM: 6.0.0.120 SP7;
4. RNOH: 0.84.1; SDK: HarmonyOS 6.0.1 Release SDK; IDE: DevEco Studio 6.0.1 Release; ROM:6.0.0.120 SP7;

## API

>[!TIP] "Platform"列表示该属性在原三方库上支持的平台。

>[!TIP] "HarmonyOS Support"列为 Yes 表示 HarmonyOS 平台支持该属性；No 则表示不支持；partially 表示部分支持。使用方法跨平台一致，效果对标 iOS 或 Android 的效果。

### Dialog.Container props

| Name | Description | Type | Required | Platform | HarmonyOS Support |
| ---- | ----------- | ---- | -------- | -------- | ------------------ |
| visible | 是否显示对话框 | boolean | 是 | iOS/Android | Yes |
| children | 对话框子内容 | ReactNode | 是 | iOS/Android | Yes |
| blurComponentIOS | iOS 平台的自定义模糊背景组件 | ReactNode | 否 | iOS | No |
| contentStyle | 对话框内容区域的自定义样式 | StyleProp\<ViewStyle\> | 否 | iOS/Android | Yes |
| headerStyle | 对话框头部（标题+描述区域）的自定义样式 | StyleProp\<ViewStyle\> | 否 | iOS/Android | Yes |
| footerStyle | 对话框底部（按钮区域）的自定义样式 | StyleProp\<ViewStyle\> | 否 | iOS/Android | Yes |
| buttonSeparatorStyle | 按钮分隔线的自定义样式 | StyleProp\<ViewStyle\> | 否 | iOS/Android | Yes |
| blurStyle | iOS 默认模糊背景的自定义样式 | StyleProp\<ViewStyle\> | 否 | iOS | No |
| verticalButtons | 是否垂直排列按钮 | boolean | 否 | iOS/Android | Yes |
| onBackdropPress | 点击背景遮罩的回调 | () => void | 否 | iOS/Android | Yes |
| onRequestClose | Android 硬件返回键或 Apple TV 菜单键按下时的回调 | () => void | 否 | Android/iOS | Yes |
| keyboardVerticalOffset | iOS 键盘避让偏移量 | number | 否 | iOS | No |
| useNativeDriver | 是否使用原生动画驱动 | boolean | 否 | iOS/Android | Yes |

### Dialog.Title props

| Name | Description | Type | Required | Platform | HarmonyOS Support |
| ---- | ----------- | ---- | -------- | -------- | ------------------ |
| children | 标题文本 | string | 是 | iOS/Android | Yes |

### Dialog.Description props

| Name | Description | Type | Required | Platform | HarmonyOS Support |
| ---- | ----------- | ---- | -------- | -------- | ------------------ |
| children | 描述文本 | string | 是 | iOS/Android | Yes |

### Dialog.Button props

| Name | Description | Type | Required | Platform | HarmonyOS Support |
| ---- | ----------- | ---- | -------- | -------- | ------------------ |
| label | 按钮标签文本 | ReactNode | 是 | iOS/Android | Yes |
| color | 标签颜色，iOS 默认 `#007ff9`，Android 默认 `#169689` | ColorValue | 否 | iOS/Android | Yes |
| bold | 是否以粗体显示标签 | boolean | 否 | iOS/Android | Yes |
| disabled | 是否禁用按钮 | boolean | 否 | iOS/Android | Yes |
| onPress | 按钮点击回调 | () => void | 是 | iOS/Android | Yes |

### Dialog.Input props

| Name | Description | Type | Required | Platform | HarmonyOS Support |
| ---- | ----------- | ---- | -------- | -------- | ------------------ |
| label | 输入框的浮动标签文本 | ReactNode | 否 | iOS/Android | Yes |
| wrapperStyle | 输入框外层容器的自定义样式 | StyleProp\<ViewStyle\> | 否 | iOS/Android | Yes |
| textInputRef | 输入框的 ref 引用 | LegacyRef\<TextInput\> | 否 | iOS/Android | Yes |
| unstableLabelStyle | 标签的自定义样式（可能在未来版本中移除） | StyleProp\<TextStyle\> | 否 | iOS/Android | Yes |

### Dialog.CodeInput props

| Name | Description | Type | Required | Platform | HarmonyOS Support |
| ---- | ----------- | ---- | -------- | -------- | ------------------ |
| style | 整体容器的自定义样式 | StyleProp\<ViewStyle\> | 否 | iOS/Android | Yes |
| wrapperStyle | 外层容器的自定义样式 | StyleProp\<ViewStyle\> | 否 | iOS/Android | Yes |
| digitContainerStyle | 单个数字容器的自定义样式 | StyleProp\<ViewStyle\> | 否 | iOS/Android | Yes |
| digitContainerFocusedStyle | 聚焦时数字容器的自定义样式 | StyleProp\<ViewStyle\> | 否 | iOS/Android | Yes |
| digitStyle | 数字文本的自定义样式 | StyleProp\<TextStyle\> | 否 | iOS/Android | Yes |
| codeLength | 验证码总位数 | number | 否 | iOS/Android | Yes |
| onCodeChange | 验证码输入变化时的回调 | (code: string) => void | 否 | iOS/Android | Yes |

### Dialog.Switch props

| Name | Description | Type | Required | Platform | HarmonyOS Support |
| ---- | ----------- | ---- | -------- | -------- | ------------------ |
| label | 开关旁边的描述文本 | ReactNode | 否 | iOS/Android | Yes |
| unstableLabelStyle | 标签的自定义样式（可能在未来版本中移除） | StyleProp\<TextStyle\> | 否 | iOS/Android | Yes |

## 遗留问题

## 其他

## 目录结构

```

├── src                       # RN 代码
│   └── index.ts              # 入口文件
│   └── Button.tsx            # Dialog.Button 组件
│   └── CodeInput.tsx         # Dialog.CodeInput 组件
│   └── Container.tsx         # Dialog.Container 组件
│   └── Description.tsx       # Dialog.Description 组件
│   └── Input.tsx             # Dialog.Input 组件
│   └── Modal.tsx             # 弹窗模态层组件
│   └── Switch.tsx            # Dialog.Switch 组件
│   └── Title.tsx             # Dialog.Title 组件
│   └── useTheme.ts           # 主题 hook
├── README_en.md           # 英文文档
├── README.md   # 中文文档
```

## 贡献代码

使用过程中发现任何问题都可以提交 [Issue](https://github.com/react-native-oh-library/react-native-dialog/issues)，当然，也非常欢迎提交 [PR](https://github.com/react-native-oh-library/react-native-dialog/pulls)。

## 开源协议

本项目基于 [The MIT License (MIT)](https://github.com/mmazzarolo/react-native-dialog/blob/master/LICENSE.md) ，请自由地享受和参与开源。
