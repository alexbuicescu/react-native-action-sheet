import * as React from 'react';
import { TextProps, TextStyle, TouchableNativeFeedbackProps, ViewStyle } from 'react-native';
export interface ActionSheetIOSOptions {
    options: string[];
    optionsProps?: OptionProps[];
    title?: string;
    message?: string;
    tintColor?: string;
    cancelButtonIndex?: number;
    destructiveButtonIndex?: number;
}
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
