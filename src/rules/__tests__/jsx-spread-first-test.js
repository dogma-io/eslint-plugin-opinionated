import {rule} from '../jsx-spread-first'
import {RuleTester} from 'eslint'

const parser = require.resolve('babel-eslint')
const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
}
const ruleTester = new RuleTester()

ruleTester.run('jsx-spread-first', rule, {
  invalid: [
    {
      code: `
import * as React from 'react'
const Foo = spread => <div className="test" {...spread} />
export default Foo
      `,
      errors: [
        {
          column: 45,
          endColumn: 56,
          endLine: 3,
          line: 3,
          message:
            'JSX spread attribute should go before non-spread attributes.',
          severity: 1,
          source: '{...spread}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
const Foo = spread => <div className="test" {...spread} />
export default Foo
      `,
      errors: [
        {
          column: 45,
          endColumn: 56,
          endLine: 3,
          line: 3,
          message:
            'JSX spread attribute should go before non-spread attributes.',
          severity: 1,
          source: '{...spread}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
const Foo = spread => (
  <div
    {...spread1}
    className="test"
    {...spread2}
    {...spread3}
  />
)
export default Foo
      `,
      errors: [
        {
          column: 5,
          endColumn: 17,
          endLine: 7,
          line: 7,
          message:
            'JSX spread attribute should go before non-spread attributes.',
          severity: 1,
          source: '{...spread2}',
        },
        {
          column: 5,
          endColumn: 17,
          endLine: 8,
          line: 8,
          message:
            'JSX spread attribute should go before non-spread attributes.',
          severity: 1,
          source: '{...spread3}',
        },
      ],
      parser,
      parserOptions,
    },
  ],
  valid: [
    {
      code: `
import * as React from 'react'
const Foo = spread => <div {...spread} className="test" />
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
const Foo = spread => <div {...spread} className="test">Bar</div>
export default Foo
      `,
      parser,
      parserOptions,
    },
  ],
})
