import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas con <GifGridItem />", () => {
  const title = "Un Titulo";
  const url = "https://localhost";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debera mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el title", () => {
    const parrafo = wrapper.find("p");
    expect(parrafo.text().trim()).toBe(title);
  });

  test("Debe tener una imagen, igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe tener animate__fadeIn", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBeTruthy();
  });
});
