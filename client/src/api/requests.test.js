import { Requests } from "./requests";

test('getMovies to be defined', () => {
    expect(Requests).toHaveProperty("getMovies");
});