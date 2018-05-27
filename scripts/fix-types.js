#! /usr/bin/env node

const {readFileSync, writeFileSync} = require('fs')
const {join} = require('path')

const INDEX_FLOW_PATH = join(__dirname, '..', 'lib', 'index.js.flow')

const CONTENTS = readFileSync(INDEX_FLOW_PATH, 'utf8')
  .replace(
    '{opinionated/react-component-flow-type-names:',
    '{"opinionated/react-component-flow-type-names":',
  )
  .replace(
    '{react-component-flow-type-names:',
    '{"react-component-flow-type-names":',
  )

writeFileSync(INDEX_FLOW_PATH, CONTENTS, 'utf8')
