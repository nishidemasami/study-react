import { createAsyncThunk } from "@reduxjs/toolkit";
import { setProgress } from "../state/count";

/**
 * 遅延判定メソッド
 * @param percent 確率
 * @param second 秒数
 * @remarks
 * second秒後にpercent%の確率でtrueを返し、
 * でなければfalseを返す
 */
const judgment = (percent: number, second: number) =>
  new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(Math.random() < percent / 100);
    }, second * 1000);
  });

type fetchCounterArgType = {
  /** 増える確率 */
  percent: number;
  /** 秒数 */
  second: number;
  /** 値 */
  value: number;
};

type fetchCounterReturnType = {
  /** 増減値 */
  count: number;
};

/**
 * 遅延増減メソッド
 * @remarks
 * 渡された秒数後に渡された確率で渡された値を返し、
 * でなければ例外を返す
 */
const fetchCounter = createAsyncThunk<
  fetchCounterReturnType,
  fetchCounterArgType
>(
  "lastcount/fetch",
  async (arg, thunk): Promise<fetchCounterReturnType> => {
    thunk.dispatch(setProgress(true));

    const res = await judgment(arg.percent, arg.second);

    thunk.dispatch(setProgress(false));

    if (res) {
      return { count: arg.value };
    }

    throw new Error("fetch count error");
  }
);

export default fetchCounter;
