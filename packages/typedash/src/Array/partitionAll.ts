import { constant, pipe } from '../function/_external.js'
import * as O from '../Option/_external.js'
import * as A from './_external.js'

/**
 * @description
 * Like `partition` but will match multiple predicates on a
 * single pass through an array.
 *
 * @example
 * const [foos, bars] = partitionAll
 *   ([startsWith('f'), startsWith('b')])
 *   (['foo', 'bar', 'baz', 'qux'])
 *   -> [['foo'], ['bar', 'baz']]
 */
export const partitionAll =
  <T>(preds: Array<(x: T) => boolean>) =>
  (datas: Array<T>): Array<Array<T>> =>
    pipe(
      datas,
      A.reduce<T, Array<Array<T>>>(
        A.replicate(A.size(preds), []),
        (acc, data) =>
          pipe(
            preds,
            A.reduceWithIndex(acc, (idx, acc_, pred) =>
              pred(data)
                ? pipe(
                    // @ts-ignore `A.append` outputs a NEA.NonEmptyArray
                    acc_,
                    A.modifyAt(idx, A.append(data)),
                    O.getOrElse(constant(acc_)),
                  )
                : acc_,
            ),
          ),
      ),
    )
