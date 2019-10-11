import * as React from 'react';
import { ActionSheetOptions } from './types';
export interface Context {
    showActionSheetWithOptions: (options: ActionSheetOptions, callback: (i: number) => void) => void;
}
export declare function useActionSheet(): Context;
declare const Provider: React.ProviderExoticComponent<React.ProviderProps<Context>>, Consumer: React.ExoticComponent<React.ConsumerProps<Context>>;
export { Provider, Consumer };
