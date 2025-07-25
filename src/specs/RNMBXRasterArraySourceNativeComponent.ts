import type { HostComponent, ViewProps } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

import { UnsafeMixed } from './codegenUtils';

export interface NativeProps extends ViewProps {
  id: UnsafeMixed<string>;
  existing: UnsafeMixed<boolean>;
  url: UnsafeMixed<string>;
  tileUrlTemplates: UnsafeMixed<Array<string>>;
  minZoomLevel: UnsafeMixed<Double>;
  maxZoomLevel: UnsafeMixed<Double>;
  tileSize: UnsafeMixed<Double>;
  attribution: UnsafeMixed<string>;
}

export default codegenNativeComponent<NativeProps>(
  'RNMBXRasterArraySource',
) as HostComponent<NativeProps>;
