module.exports = {
  configs: {
    recommended: {
      rules: {
        'opinionated/react-component-flow-type-names': 2,
      },
    },
  },
  rules: {
    'react-component-flow-type-names': require('./rules/react-component-flow-type-names')
      .default,
  },
}
