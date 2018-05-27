/**
 * @flow
 */

import {rule as reactComponentFlowTypeNames} from './rules/react-component-flow-type-names'

export default {
  configs: {
    recommended: {
      rules: {
        'opinionated/react-component-flow-type-names': 2,
      },
    },
  },
  rules: {
    'react-component-flow-type-names': reactComponentFlowTypeNames,
  },
}
