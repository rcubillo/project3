import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import "@babel/polyfill";

hydrate(<App/>, document.getElementById('root'))
