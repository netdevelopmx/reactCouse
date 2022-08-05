import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

module.exports = {
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
    }
  };