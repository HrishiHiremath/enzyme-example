import React from 'react'
import { expect } from 'chai'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import HelloWorld from '../components/HelloWorld'

configure({ adapter: new Adapter() })

describe('<HelloWorld /> basic tests', () => {

    let wrapper

    beforeEach(() => {

        wrapper = mount(<HelloWorld />)
    }) 

    it('renders correctly', () => {
        
        expect(wrapper.find('HelloWorld').length).to.equal(1)
    })

    it('has only one <H1> element', () => {

        expect(wrapper.find('h1').length).to.equal(1)
    })

    it('has only one <p> element', () => {

        expect(wrapper.find('p').length).to.equal(1)
    })
});

describe('<HelloWorld /> content tests', () => {

    let wrapper

    beforeEach(() => {

        wrapper = mount(<HelloWorld />)
    })

    it('<h1> tag text is correct', () => {

        expect(wrapper.find('h1').text()).to.equal('Hello World')
        
    })
});