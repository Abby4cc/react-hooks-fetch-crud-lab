import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "../components/App";


test("displays questions after 'View Questions' is clicked", async () => {
  render(<App />);


  fireEvent.click(screen.getByText(/View Questions/));

  const questionText = await screen.findByText(/lorem testum 1/);
  
  expect(questionText).toBeInTheDocument();
});

test("change correct answer", async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/View Questions/));

  const select = screen.getAllByRole("combobox")[0];
  fireEvent.change(select, { target: { value: "2" } });

  expect(select.value).toBe("2");
});
