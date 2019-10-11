import * as React from 'react';
import { Context } from './context';
import hoistNonReactStatic from 'hoist-non-react-statics';
export default function connectActionSheet<OwnProps = any>(WrappedComponent: React.ComponentType<OwnProps & Context>): ((props: OwnProps) => JSX.Element) & hoistNonReactStatic.NonReactStatics<React.ComponentType<OwnProps & Context>, {}>;
