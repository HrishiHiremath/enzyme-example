import React from 'react'
import { mount } from 'enzyme'

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HelloWorld from '../components/HelloWorld'
import { wrap } from 'module';

configure({ adapter: new Adapter() });

describe('component <HelloWorld/> has correct tags', () => {

    let wrapper

    beforeEach(() => {

        wrapper = mount(<HelloWorld/>)
    })

    it('has only one <h1> element', () => {

        expect(wrapper.find('h1').length).toBe(1)
    })

    it('has only one <p> element', () => {

        expect(wrapper.find('p').length).toBe(1)
    })
})

describe('component <HelloWorld/> tag details are correct', () => {

    let wrapper

    beforeEach(() => {

        wrapper = mount(<HelloWorld name='Priya'/>)
    })

    it('<h1> tag content details are correct', () => {

        expect(wrapper.find('h1').text()).toBe('Hello World')
    })

    it('<p> tag content details are correct', () => {

        expect(wrapper.find('p').text()).toBe('Welcome to my world')
    })

    it('the container <div> has classicBold class', () => {

        const div = wrapper.find('div')

        expect(div.props().className).toBe('classicBold')
    })

    it('span shows the correct name', () => {

        expect(wrapper.find('span').text()).toBe('Priya')
    })
})

