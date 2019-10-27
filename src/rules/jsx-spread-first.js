/**
 * @flow
 */

import {isJSXAttribute, isJSXSpreadAttribute} from '@babel/types'

// eslint-disable-next-line flowtype/no-weak-types
export function rule(context: any): any {
  return {
    // eslint-disable-next-line flowtype/no-weak-types
    JSXOpeningElement(node: any) {
      let encounteredNonSpreadAttr = false

      for (let i = 0; i < node.attributes.length; i++) {
        const attribute = node.attributes[i]

        if (isJSXAttribute(attribute)) {
          encounteredNonSpreadAttr = true
        } else if (
          encounteredNonSpreadAttr &&
          isJSXSpreadAttribute(attribute)
        ) {
          context.report({
            message:
              'JSX spread attribute should go before non-spread attributes.',
            node: attribute,
          })
        }
      }
    },
  }
}
