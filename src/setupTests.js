import "@testing-library/jest-dom/extend-expect";
import Enzyme, { shallow, render, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;