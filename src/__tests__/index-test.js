import index from '../index'
import {rule as jsxSpreadFirst} from '../rules/jsx-spread-first'
import {rule as reactComponentFlowTypeNames} from '../rules/react-component-flow-type-names'

describe('eslint-plugin-opinionated', () => {
  it('should define expected configs', () => {
    expect(index.configs).toEqual({
      recommended: {
        rules: {
          'opinionated/jsx-spread-first': 2,
          'opinionated/react-component-flow-type-names': 2,
        },
      },
    })
  })

  it('should define expected rules', () => {
    expect(index.rules).toEqual({
      'jsx-spread-first': jsxSpreadFirst,
      'react-component-flow-type-names': reactComponentFlowTypeNames,
    })
  })
})
