var test = require('tape')
var hyperx = require('../')
var hx = hyperx(createElement, {comments: false})
var hxc = hyperx(createElement)

function createElement(tag, props, children) {
  if (tag === '!--') {
    return `<!--${props.comment}-->`
  }
  return `<${tag}>${children ? children.join('') : ''}</${tag}>`
}

test('1 comment', function (t) {
  t.throws(() =>  hxc`<!-- test -->`, Error('unjsx: comments are invalid'))
  t.end()
})
