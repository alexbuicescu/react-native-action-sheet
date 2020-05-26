import * as React from 'react';
import { TextProps, TextStyle, TouchableNativeFeedbackProps, ViewStyle } from 'react-native';

export interface ActionSheetProps {
  showActionSheetWithOptions: (options: ActionSheetOptions, callback: (i: number) => void) => void;
}

// for iOS
export interface ActionSheetIOSOptions {
  options: string[];
  optionsProps?: OptionProps[];
  title?: string;
  message?: string;
  tintColor?: string;
  cancelButtonIndex?: number;
  destructiveButtonIndex?: number;
  anchor?: number;
}

// for Android or Web
export interface ActionSheetOptions extends ActionSheetIOSOptions {
  icons?: React.ReactNode[];
  tintIcons?: boolean;
  textStyle?: TextStyle;
  titleTextStyle?: TextStyle;
  messageTextStyle?: TextStyle;
  autoFocus?: boolean;
  showSeparators?: boolean;
  containerStyle?: ViewStyle;
  separatorStyle?: ViewStyle;
  useModal?: boolean;
  destructiveColor?: string;
}

export interface OptionProps {
  text?: TextProps;
  touchable?: TouchableNativeFeedbackProps;
}
