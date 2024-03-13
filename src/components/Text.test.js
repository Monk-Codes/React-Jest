import { render, screen } from "@testing-library/react";
import Text from "./Text";
import userEvent from "@testing-library/user-event";

describe("Init Text", () => {
 ///1///
 test("renders this is text as a text", () => {
  //arrange
  render(<Text />);
  //assert
  const element = screen.getByText("This is text");
  expect(element).toBeInTheDocument();
 });
 ///2///
 test("renders Before if the button was not clicked", () => {
  //arrange
  render(<Text />);
  //assert
  const p = screen.getByText("Before");
  expect(p).toBeInTheDocument();
 });
 ///3///
 test("renders After if the button was clicked", () => {
  //arrange
  render(<Text />);
  //act
  const btnEl = screen.getByRole("button");
  userEvent.click(btnEl);
  //assert
  const pa = screen.getByText("After");
  expect(pa).toBeInTheDocument();
 });
 ///4///
 test("does not render Before if the button was clicked", () => {
  //arrange
  render(<Text />);
  //act
  const btnEl = screen.getByRole("button");
  userEvent.click(btnEl);
  //assert
  const pa = screen.queryByText("Before");
  expect(pa).toBeNull();
 });
});
