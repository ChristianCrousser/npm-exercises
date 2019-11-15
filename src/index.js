"use strict";
import $ from 'jquery'

import {item as eggs, thing} from './practice.js' // added an alias to item
import {helloMessage} from './say-hello.js'

const $ = require('jquery');
const item = require('./practice');
$(document).ready(function() {


const sayHello = () => {
    console.log("hello");
}

sayHello();

});
