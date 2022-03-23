import useFxApi from "./useFxApi";
import mockAxios from "./axios";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

describe("fetchUsers", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
      const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Andrew" },
      ];
      mockAxios.get.mockResolvedValueOnce(users);

      // when
      const { loading, data, serverError } = renderHook(() =>
        useFxApi(BASE_URL)
      );

      //   await act(async () => );

      expect(loading).toBe(false);

      // then
      //expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
    });
  });
});
