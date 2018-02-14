import rule from '../react-component-flow-type-names'
import {RuleTester} from 'eslint'

const parser = 'babel-eslint'
const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
}
const ruleTester = new RuleTester()

ruleTester.run('react-component-flow-type-names', rule, {
  invalid: [
    {
      code: `
import * as React from 'react'
type Props = {}
type FooState = {}
class Foo extends React.Component<Props, FooState> {}
export default Foo
      `,
      errors: [
        {
          column: 35,
          endColumn: 40,
          endLine: 5,
          line: 5,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends React.Component<Props, FooState> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
type FooProps = {}
type State = {}
class Foo extends React.Component<FooProps, State> {}
export default Foo
      `,
      errors: [
        {
          column: 45,
          endColumn: 50,
          endLine: 5,
          line: 5,
          message: 'Expected FooState.',
          severity: 1,
          source: 'class Foo extends React.Component<FooProps, State> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
type Props = {}
type State = {}
class Foo extends React.Component<Props, State> {}
export default Foo
      `,
      errors: [
        {
          column: 35,
          endColumn: 40,
          endLine: 5,
          line: 5,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends React.Component<Props, State> {}',
        },
        {
          column: 42,
          endColumn: 47,
          endLine: 5,
          line: 5,
          message: 'Expected FooState.',
          severity: 1,
          source: 'class Foo extends React.Component<Props, State> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
type Props = {}
class Foo extends React.Component<Props> {}
export default Foo
      `,
      errors: [
        {
          column: 35,
          endColumn: 40,
          endLine: 4,
          line: 4,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends React.Component<Props> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
type Props = {}
type FooState = {}
class Foo extends React.Component<Props, FooState> {}
export default Foo
      `,
      errors: [
        {
          column: 35,
          endColumn: 40,
          endLine: 5,
          line: 5,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends React.Component<Props, FooState> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
type FooProps = {}
type State = {}
class Foo extends React.Component<FooProps, State> {}
export default Foo
      `,
      errors: [
        {
          column: 45,
          endColumn: 50,
          endLine: 5,
          line: 5,
          message: 'Expected FooState.',
          severity: 1,
          source: 'class Foo extends React.Component<FooProps, State> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
type Props = {}
type State = {}
class Foo extends React.Component<Props, State> {}
export default Foo
      `,
      errors: [
        {
          column: 35,
          endColumn: 40,
          endLine: 5,
          line: 5,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends React.Component<Props, State> {}',
        },
        {
          column: 42,
          endColumn: 47,
          endLine: 5,
          line: 5,
          message: 'Expected FooState.',
          severity: 1,
          source: 'class Foo extends React.Component<Props, State> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
type Props = {}
class Foo extends React.Component<Props> {}
export default Foo
      `,
      errors: [
        {
          column: 35,
          endColumn: 40,
          endLine: 4,
          line: 4,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends React.Component<Props> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
type Props = {}
type FooState = {}
class Foo extends Component<Props, FooState> {}
export default Foo
      `,
      errors: [
        {
          column: 29,
          endColumn: 34,
          endLine: 5,
          line: 5,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends Component<Props, FooState> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
type FooProps = {}
type State = {}
class Foo extends Component<FooProps, State> {}
export default Foo
      `,
      errors: [
        {
          column: 39,
          endColumn: 44,
          endLine: 5,
          line: 5,
          message: 'Expected FooState.',
          severity: 1,
          source: 'class Foo extends Component<FooProps, State> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
type Props = {}
type State = {}
class Foo extends Component<Props, State> {}
export default Foo
      `,
      errors: [
        {
          column: 29,
          endColumn: 34,
          endLine: 5,
          line: 5,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends Component<Props, State> {}',
        },
        {
          column: 36,
          endColumn: 41,
          endLine: 5,
          line: 5,
          message: 'Expected FooState.',
          severity: 1,
          source: 'class Foo extends Component<Props, State> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
type Props = {}
class Foo extends Component<Props> {}
export default Foo
      `,
      errors: [
        {
          column: 29,
          endColumn: 34,
          endLine: 4,
          line: 4,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends Component<Props> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
type Props = {}
type FooState = {}
class Foo extends React.PureComponent<Props, FooState> {}
export default Foo
      `,
      errors: [
        {
          column: 39,
          endColumn: 44,
          endLine: 5,
          line: 5,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends React.PureComponent<Props, FooState> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
type FooProps = {}
type State = {}
class Foo extends React.PureComponent<FooProps, State> {}
export default Foo
      `,
      errors: [
        {
          column: 49,
          endColumn: 54,
          endLine: 5,
          line: 5,
          message: 'Expected FooState.',
          severity: 1,
          source: 'class Foo extends React.PureComponent<FooProps, State> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
type Props = {}
type State = {}
class Foo extends React.PureComponent<Props, State> {}
export default Foo
      `,
      errors: [
        {
          column: 39,
          endColumn: 44,
          endLine: 5,
          line: 5,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends React.PureComponent<Props, State> {}',
        },
        {
          column: 46,
          endColumn: 51,
          endLine: 5,
          line: 5,
          message: 'Expected FooState.',
          severity: 1,
          source: 'class Foo extends React.PureComponent<Props, State> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
type Props = {}
class Foo extends React.PureComponent<Props> {}
export default Foo
      `,
      errors: [
        {
          column: 39,
          endColumn: 44,
          endLine: 4,
          line: 4,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends React.PureComponent<Props> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
type Props = {}
type FooState = {}
class Foo extends React.PureComponent<Props, FooState> {}
export default Foo
      `,
      errors: [
        {
          column: 39,
          endColumn: 44,
          endLine: 5,
          line: 5,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends React.PureComponent<Props, FooState> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
type FooProps = {}
type State = {}
class Foo extends React.PureComponent<FooProps, State> {}
export default Foo
      `,
      errors: [
        {
          column: 49,
          endColumn: 54,
          endLine: 5,
          line: 5,
          message: 'Expected FooState.',
          severity: 1,
          source: 'class Foo extends React.PureComponent<FooProps, State> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
type Props = {}
type State = {}
class Foo extends React.PureComponent<Props, State> {}
export default Foo
      `,
      errors: [
        {
          column: 39,
          endColumn: 44,
          endLine: 5,
          line: 5,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends React.PureComponent<Props, State> {}',
        },
        {
          column: 46,
          endColumn: 51,
          endLine: 5,
          line: 5,
          message: 'Expected FooState.',
          severity: 1,
          source: 'class Foo extends React.PureComponent<Props, State> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
type Props = {}
class Foo extends React.PureComponent<Props> {}
export default Foo
      `,
      errors: [
        {
          column: 39,
          endColumn: 44,
          endLine: 4,
          line: 4,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends React.PureComponent<Props> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
type Props = {}
type FooState = {}
class Foo extends PureComponent<Props, FooState> {}
export default Foo
      `,
      errors: [
        {
          column: 33,
          endColumn: 38,
          endLine: 5,
          line: 5,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends PureComponent<Props, FooState> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
type FooProps = {}
type State = {}
class Foo extends PureComponent<FooProps, State> {}
export default Foo
      `,
      errors: [
        {
          column: 43,
          endColumn: 48,
          endLine: 5,
          line: 5,
          message: 'Expected FooState.',
          severity: 1,
          source: 'class Foo extends PureComponent<FooProps, State> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
type Props = {}
type State = {}
class Foo extends PureComponent<Props, State> {}
export default Foo
      `,
      errors: [
        {
          column: 33,
          endColumn: 38,
          endLine: 5,
          line: 5,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends PureComponent<Props, State> {}',
        },
        {
          column: 40,
          endColumn: 45,
          endLine: 5,
          line: 5,
          message: 'Expected FooState.',
          severity: 1,
          source: 'class Foo extends PureComponent<Props, State> {}',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
type Props = {}
class Foo extends PureComponent<Props> {}
export default Foo
      `,
      errors: [
        {
          column: 33,
          endColumn: 38,
          endLine: 4,
          line: 4,
          message: 'Expected FooProps.',
          severity: 1,
          source: 'class Foo extends PureComponent<Props> {}',
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
type FooProps = {}
type FooState = {}
class Foo extends React.Component<FooProps, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
type FooProps = {}
class Foo extends React.Component<FooProps> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
class Foo extends React.Component<> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
class Foo extends React.Component {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
type FooProps = {}
type FooState = {}
class Foo extends React.Component<FooProps, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
type FooProps = {}
class Foo extends React.Component<FooProps> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
class Foo extends React.Component<> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
class Foo extends React.Component {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
type FooProps = {}
type FooState = {}
class Foo extends Component<FooProps, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
type FooProps = {}
class Foo extends Component<FooProps> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
class Foo extends Component<> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
class Foo extends Component {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
type FooProps = {}
type FooState = {}
class Foo extends React.PureComponent<FooProps, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
type FooProps = {}
class Foo extends React.PureComponent<FooProps> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
class Foo extends React.PureComponent<> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
class Foo extends React.PureComponent {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
type FooProps = {}
type FooState = {}
class Foo extends React.PureComponent<FooProps, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
type FooProps = {}
class Foo extends React.PureComponent<FooProps> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
class Foo extends React.PureComponent<> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
class Foo extends React.PureComponent {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
type FooProps = {}
type FooState = {}
class Foo extends PureComponent<FooProps, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
type FooProps = {}
class Foo extends PureComponent<FooProps> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
class Foo extends PureComponent<> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
class Foo extends PureComponent {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'not-react'
const FooProps = {}
const FooState = {}
class Foo extends React.Component<FooProps, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'not-react'
const FooProps = {}
const State = {}
class Foo extends React.Component<FooProps, State> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'not-react'
const Props = {}
const FooState = {}
class Foo extends React.Component<Props, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'not-react'
const FooProps = {}
const FooState = {}
class Foo extends React.Component<FooProps, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'not-react'
const FooProps = {}
const State = {}
class Foo extends React.Component<FooProps, State> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'not-react'
const Props = {}
const FooState = {}
class Foo extends React.Component<Props, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'not-react'
const FooProps = {}
const FooState = {}
class Foo extends Component<FooProps, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'not-react'
const FooProps = {}
const State = {}
class Foo extends Component<FooProps, State> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'not-react'
const Props = {}
const FooState = {}
class Foo extends Component<Props, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'not-react'
const FooProps = {}
const FooState = {}
class Foo extends PureComponent<FooProps, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'not-react'
const FooProps = {}
const State = {}
class Foo extends PureComponent<FooProps, State> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'not-react'
const Props = {}
const FooState = {}
class Foo extends PureComponent<Props, FooState> {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
class Foo {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
class Foo {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
class Foo {}
export default Foo
      `,
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
class Foo {}
export default Foo
      `,
      parser,
      parserOptions,
    },
  ],
})
