import { shallow, ShallowWrapper } from "enzyme";
import { CategoryAdd } from "../../components/CategoryAdd";

describe("Pruebas en el componente <CategoryAdd/>", () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<CategoryAdd setCategories={setCategories} />);
  });

  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });
    const parrafo = wrapper.find("p").text().trim();
    expect(parrafo).toBe(value);
  });

  test("No debe postear la informacion OnSubmit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar al setCategories y limpiar la caja de texto", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "Hola Mundo" } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop("value")).toBe("");
  });
});
