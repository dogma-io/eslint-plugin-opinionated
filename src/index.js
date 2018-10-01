/**
 * @flow
 */

import {rule as jsxSpreadFirst} from './rules/jsx-spread-first'
import {rule as reactComponentFlowTypeNames} from './rules/react-component-flow-type-names'

module.exports = {
  configs: {
    recommended: {
      rules: {
        'opinionated/jsx-spread-first': 2,
        'opinionated/react-component-flow-type-names': 2,
      },
    },
  },
  rules: {
    'jsx-spread-first': jsxSpreadFirst,
    'react-component-flow-type-names': reactComponentFlowTypeNames,
  },
}
