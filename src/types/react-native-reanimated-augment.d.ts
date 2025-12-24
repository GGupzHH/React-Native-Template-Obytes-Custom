// Module augmentation to add Animated.EasingFunction alias to reanimated's internal type
import type { EasingFunction as _EasingFunction } from 'react-native-reanimated/lib/typescript/commonTypes';

declare module 'react-native-reanimated' {
  namespace Animated {
    export type EasingFunction = _EasingFunction;
  }
}
