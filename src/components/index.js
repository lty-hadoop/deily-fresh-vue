import Button from './button/index.js'
import Cascade from './cascade/index.js'
import Input from './input/index.js'
import Navbar from './navbar/index.js'
import SlideBlock from './slider-block/index.js'
import Tabs from './tabs/index.js'
import Toast from './toast/index.js'

const components = [
	Button,
	Cascade,
	Input,
	Navbar,
	SlideBlock,
	Tabs,
	Toast
]

const install = function(Vue) {
	components.forEach(component => {
    	Vue.component(component.name, component);
	});
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export {
	Button,
	Cascade,
	Input,
	Navbar,
	SlideBlock,
	Tabs,
	Toast
}

export default { install }