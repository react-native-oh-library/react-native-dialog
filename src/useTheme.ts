import { useMemo } from "react";
import {
  ColorSchemeName,
  Platform,
  StyleSheet,
  useColorScheme,
} from "react-native";

export type StyleBuilder = (isDark: boolean) => StyleSheet.NamedStyles<any>;

export const selectPlatform = <T extends Record<string, any>>(spec: T): any =>
  (Platform.OS as string) === "harmony" && "harmony" in spec
    ? spec.harmony
    : Platform.select(spec as any);

export interface UseTheme {
  theme: ColorSchemeName;
  isDark: boolean;
  styles: StyleSheet.NamedStyles<any>;
}

const useTheme = (buildStyles: StyleBuilder): UseTheme => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const styles = useMemo(() => {
    return buildStyles(isDark);
  }, [buildStyles, isDark]);

  return { theme: colorScheme, isDark, styles };
};

export default useTheme;
