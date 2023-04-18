import { ObjectId } from "mongoose";
import { UserCreateDto } from "../dtos/user.create.dto";
import { User, userInterface } from "../models/user.model";
import { UserType } from "../types/user.type";
import { mockFunction } from "../utils/helpers/mocks";
import { create, findOne, get, remove } from "./user.repo";

jest.mock("../models/user.model");

const id = "test-id";

const user: UserType = {
  age: 1,
  email: "test@test.com",
  name: "test testington",
  _id: "12345678" as unknown as ObjectId
};

describe("User Repository", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  describe("findOne record function", () => {
    it("should return a single User model when the id is correct", async () => {
      const mockUser = mockFunction(User.findById).mockResolvedValue(user);

      const result = await findOne(id);

      expect(mockUser).toHaveBeenNthCalledWith(1, id);
      expect(result).toBe(user);
    });

    it("should catch the error that comes up when no User is found and return null", async () => {
      const mockUser = mockFunction(User.findById).mockRejectedValue("L");

      const result = await findOne(id);

      expect(mockUser).toHaveBeenNthCalledWith(1, id);
      expect(result).toBe(null);
    });
  });

  describe("get records function", () => {
    it("should return all User models when there are ones present in mongoDb", async () => {
      const mockUser = mockFunction(User.find).mockResolvedValue([user]);

      const result = await get();

      expect(mockUser).toHaveBeenCalledTimes(1);
      expect(result).toStrictEqual([user]);
    });

    it("should catch the error that comes up when no user records are found and return null", async () => {
      const mockUser = mockFunction(User.find).mockRejectedValue("L");

      const result = await get();

      expect(mockUser).toHaveBeenCalledTimes(1);
      expect(result).toStrictEqual(null);
    });
  });

  describe("create records function", () => {

    const dto:UserCreateDto = {
        name: "test",
        email: "test@test.com",
        age: 22
    }

    const mockResult:userInterface = {
        name: "test",
        email: "test@test.com",
        age: 22
    }
    it("should return a new User model when a new one has been created", async () => {
      const mockUser = mockFunction(User.create).mockResolvedValue(dto as never);

      const result = await create(dto);

      expect(mockUser).toHaveBeenNthCalledWith(1, dto);
      expect(result).toStrictEqual(dto);
    });

    it("should catch the error that comes up when no user records are found and return null", async () => {
      const mockUser = mockFunction(User.create).mockRejectedValue("L");

      const result = await create(dto);

      expect(mockUser).toHaveBeenNthCalledWith(1, dto);
      expect(result).toStrictEqual(null);
    });
  });

  describe("update records function", () => {

    const dto:UserCreateDto = {
        name: "test",
        email: "test@test.com",
        age: 22
    }

    const mockResult:userInterface = {
        name: "test",
        email: "test@test.com",
        age: 22
    }
    it("should return a new User model when a new one has been created", async () => {
      const mockUser = mockFunction(User.create).mockResolvedValue(dto as never);

      const result = await create(dto);

      expect(mockUser).toHaveBeenNthCalledWith(1, dto);
      expect(result).toStrictEqual(dto);
    });

    it("should catch the error that comes up when no user records are found and return null", async () => {
      const mockUser = mockFunction(User.create).mockRejectedValue("L");

      const result = await create(dto);

      expect(mockUser).toHaveBeenNthCalledWith(1, dto);
      expect(result).toStrictEqual(null);
    });
  });

  describe("remove records function", () => {

    it("should return a true boolean when a new one has been removed", async () => {
      const mockUser = mockFunction(User.findByIdAndDelete).mockImplementation(jest.fn());

      const result = await remove(id);

      expect(mockUser).toHaveBeenNthCalledWith(1, id);
      expect(result).toStrictEqual(true);
    });

    it("should catch the error that comes up when no user records are found and return null", async () => {
      const mockUser = mockFunction(User.findByIdAndDelete).mockRejectedValue("L");

      const result = await remove(id);

      expect(mockUser).toHaveBeenNthCalledWith(1, id);
      expect(result).toStrictEqual(false);
    });
  });
});
