import React from 'react';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import { ButtonDesigner } from 'components/designer/Button.jsx';

chai.use(chaiEnzyme());

describe('Button Designer', () => {
  let wrapper;
  let metadata;

  const options = [
    { name: 'Yes', value: true },
    { name: 'No', value: false },
  ];

  beforeEach(() => {
    metadata = {
      concept: {
        name: 'Pulse',
        uuid: 'someUuid',
        datatype: 'boolean',
      },
      displayType: 'button',
      type: 'obsControl',
      id: 'someId',
      options,
      properties: {},
    };
    wrapper = shallow(<ButtonDesigner metadata={metadata} />);
  });

  it('should render designer button', () => {
    expect(wrapper).to.have.exactly(2).descendants('button');

    expect(wrapper.find('.option-list').at(0).text()).to.eql('Yes');
    expect(wrapper.find('.option-list').at(1).text()).to.eql('No');
  });

  it('should return json definition', () => {
    const instance = wrapper.instance();
    expect(instance.getJsonDefinition()).to.deep.eql(metadata);
  });
});
