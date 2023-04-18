import httpClient from "../../shared/httpClient"; // Esto puede ser una instancia de axios, para este caso es irrelevante
import type { Counter } from "../domain/counterEntity";
import { create } from "../domain/counterModel";

const BASE_URL = "counter";

function getCounter(): Promise<Counter> {
  return httpClient.get<number>(BASE_URL).then((res: any) => create(res.data));
}

function updateCounter(counter: Counter): Promise<Counter> {
  return httpClient
    .put<number>(BASE_URL, { count: counter.value })
    .then((res: any) => create(res.data));
}

export { getCounter, updateCounter };
