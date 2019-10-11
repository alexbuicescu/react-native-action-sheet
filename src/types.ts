import * as React from 'react';
import { TextProps, TextStyle, TouchableNativeFeedbackProps, ViewStyle } from 'react-native';

// for iOS
export interface ActionSheetIOSOptions {
  options: string[];
  optionsProps?: OptionProps[];
  title?: string;
  message?: string;
  tintColor?: string;
  cancelButtonIndex?: number;
  destructiveButtonIndex?: number;
}

// for Android or Web
export interface ActionSheetOptions extends ActionSheetIOSOptions {
  icons?: React.ReactNode[];
  tintIcons?: boolean;
  textStyle?: TextStyle;
  titleTextStyle?: TextStyle;
  messageTextStyle?: TextStyle;
  showSeparators?: boolean;
  separatorStyle?: ViewStyle;
}

export interface OptionProps {
  text?: TextProps;
  touchable?: TouchableNativeFeedbackProps;
}
