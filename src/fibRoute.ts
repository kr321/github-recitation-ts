// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
import { Request, Response } from 'express';

interface FibonacciRequestParams {
  num: string;
}

export default (req: Request<FibonacciRequestParams>, res: Response): void => {
  const { num } = req.params;

  // Parse the num parameter to an integer
  const fibN = fibonacci(parseInt(num));
  let result: string;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  } else {
    result = `fibonacci(${num}) is ${fibN}`;
  }

  res.send(result);
};
