import useFxApi from "./useFxApi";
import { renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-test-renderer";

const server = setupServer(
  rest.get("/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should return with default state", async () => {
  const { result } = renderHook(() => useFxApi(""));
  expect(result.current.loaded).toBe(false);
  expect(result.current.data).toBe(null);
});
