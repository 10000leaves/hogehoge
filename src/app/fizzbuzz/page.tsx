"use client";

// useStateを使用する宣言
import { useState } from "react";

export default function FizzBuzz() {
  /**
   * 親コンポーネントで使用する
   * countの初期値とcountを更新する関数を宣言
   * 初期値は1
   */
  const [count, setCount] = useState<number>(1);

  /**
   * 子コンポーネントで使用する
   * 子コンポーネントで発火し、親コンポーネントのcountを更新する
   */
  function countUp(num: number): void {
    setCount(count + num);
  }

  /**
   * countUpと同様
   */
  function countReset(): void {
    setCount(1);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-4">Reactチュートリアル：FizzBuzz</h1>
      <div className="mb-4">
        {count}は：
        {/* FizzBuzzでcountの内容を判定し、FizzBuzzを表示する */}
        <CountFizzBuzz num={count} />
      </div>
      <div className="space-x-2">
        {/* countを子コンポーネント側で更新するためにpropsで関数を渡す */}
        <UpButton num={1} onClick={() => countUp(1)} />
        <UpButton num={3} onClick={() => countUp(3)} />
      </div>
      <div className="mt-4">
        <ResetButton onClick={countReset} />
      </div>
    </div>
  );
}

type CountFizzBuzzProps = {
  num: number;
};

function CountFizzBuzz({ num }: CountFizzBuzzProps) {
  // 空の変数を作成
  let text = "";
  if (num % 3 === 0) {
    // 3の倍数の場合、Fizzを追加
    text += "Fizz";
  }
  if (num % 5 === 0) {
    // 5の倍数の場合、Buzzを追加
    text += "Buzz";
  }
  // textを返す
  return <span className="text-lg font-semibold">{text || num}</span>;
}

type UpButtonProps = {
  num: number;
  onClick: () => void;
};

// カウントアップのボタン
function UpButton({ num, onClick }: UpButtonProps) {
  // ボタンがクリックされると、onClickで渡された親の関数を実行する
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      +{num}
    </button>
  );
}

type ResetButtonProps = {
  onClick: () => void;
};

// リセットのボタン
function ResetButton({ onClick }: ResetButtonProps) {
  // ボタンがクリックされると、onClickで渡された親の関数を実行する
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
    >
      reset
    </button>
  );
}
