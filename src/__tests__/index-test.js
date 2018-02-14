import index from '../index'
import reactComponentFlowTypeNames from '../rules/react-component-flow-type-names'

describe('eslint-plugin-react-compat', () => {
  it('should define expected configs', () => {
    expect(index.configs).toEqual({
      recommended: {
        rules: {
          'opinionated/react-component-flow-type-names': 2,
        },
      },
    })
  })

  it('should define expected rules', () => {
    expect(index.rules).toEqual({
      'react-component-flow-type-names': reactComponentFlowTypeNames,
    })
  })
})
