import { render, screen } from "@testing-library/react";
import { Users } from "./users";
import { rest } from "msw";

// import { setupServer } from "msw/node";
import fetchMock from "jest-fetch-mock";
import { server } from "../mocks/server";

// const server = setupServer(
//   rest.get("/usersr", (req, res, ctx) => {
//     return res();
//   })
// );

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a list of 3 users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("renders error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});

//https://www.youtube.com/watch?v=niqiP_5MrRA&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=46
