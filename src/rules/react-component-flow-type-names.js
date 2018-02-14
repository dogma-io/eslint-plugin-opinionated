/**
 * @flow
 */

import {
  isIdentifier,
  isImportDefaultSpecifier,
  isImportNamespaceSpecifier,
  isImportSpecifier,
  isMemberExpression,
} from '@babel/types'

const REACT_COMPONENT_EXPORT_NAME = 'Component'
const REACT_MODULE_NAME = 'react'
const REACT_PURE_COMPONENT_EXPORT_NAME = 'PureComponent'

export default (context: *): * => {
  let componentImportedAs: ?string
  let pureComponentImportedAs: ?string
  let reactImportedAs: ?string

  return {
    ClassDeclaration(node: *) {
      const {id, superClass, superTypeParameters} = node

      let isComponent = false

      if (superClass) {
        if (isIdentifier(superClass)) {
          if (
            (componentImportedAs && superClass.name === componentImportedAs) ||
            (pureComponentImportedAs &&
              superClass.name === pureComponentImportedAs)
          ) {
            isComponent = true
          }
        } else if (
          isMemberExpression(superClass) &&
          reactImportedAs &&
          superClass.object.name === reactImportedAs &&
          [
            REACT_COMPONENT_EXPORT_NAME,
            REACT_PURE_COMPONENT_EXPORT_NAME,
          ].includes(superClass.property.name)
        ) {
          isComponent = true
        }

        if (isComponent && superTypeParameters) {
          const {params} = superTypeParameters

          if (params.length >= 1) {
            const expectedName = `${id.name}Props`
            const param = params[0]

            if (param.id && param.id.name !== expectedName) {
              context.report({
                message: `Expected ${expectedName}.`,
                node: params[0],
              })
            }
          }

          if (params.length >= 2) {
            const expectedName = `${id.name}State`
            const param = params[1]

            if (param.id && param.id.name !== expectedName) {
              context.report({
                message: `Expected ${expectedName}.`,
                node: params[1],
              })
            }
          }
        }
      }
    },
    ImportDeclaration(node: *) {
      const {source, specifiers} = node

      if (source.value === REACT_MODULE_NAME && Array.isArray(specifiers)) {
        for (let i = 0; i < specifiers.length; i++) {
          const specifier = specifiers[i]

          if (
            isImportDefaultSpecifier(specifier) ||
            isImportNamespaceSpecifier(specifier)
          ) {
            reactImportedAs = specifier.local.name
          } else if (isImportSpecifier(specifier)) {
            switch (specifier.imported.name) {
              case REACT_COMPONENT_EXPORT_NAME:
                componentImportedAs = specifier.local.name
                break

              case REACT_PURE_COMPONENT_EXPORT_NAME:
                pureComponentImportedAs = specifier.local.name
                break
            }
          }
        }
      }
    },
  }
}
